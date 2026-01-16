import { db } from './db';

// Types
export interface Product {
    id: number;
    name: string;
    slug: string;
    description: string;
    price: number;
    stock: number;
    categoryId: string;
    image: string;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
}

export interface GetProductsParams {
    page?: number;
    limit?: number;
    category?: string;
    search?: string;
    minPrice?: number;
    maxPrice?: number;
}

export function getCategories(): Category[] {
    return db.prepare('SELECT * FROM categories').all() as Category[];
}

export function getProduct(slug: string): Product | undefined {
    return db.prepare('SELECT * FROM products WHERE slug = ?').get(slug) as Product | undefined;
}

export function getProducts(params: GetProductsParams = {}) {
    const {
        page = 1,
        limit = 12,
        category,
        search,
        minPrice,
        maxPrice
    } = params;
    const offset = (page - 1) * limit;

    let query = 'SELECT * FROM products WHERE 1=1';
    const queryParams: (string | number)[] = [];

    // Filters
    if (category) {
        query += ' AND categoryId = ?';
        queryParams.push(category);
    }
    if (search) {
        query += ' AND (name LIKE ? OR description LIKE ?)';
        queryParams.push(`%${search}%`, `%${search}%`);
    }
    if (minPrice !== undefined) {
        query += ' AND price >= ?';
        queryParams.push(minPrice);
    }
    if (maxPrice !== undefined) {
        query += ' AND price <= ?';
        queryParams.push(maxPrice);
    }

    // Count total matches for pagination
    const countQuery = query.replace('SELECT *', 'SELECT COUNT(*) as count');
    const totalResult = db.prepare(countQuery).get(...queryParams) as { count: number };
    const total = totalResult.count;

    // Fetch paginated results
    query += ' LIMIT ? OFFSET ?';
    queryParams.push(limit, offset);

    const products = db.prepare(query).all(...queryParams) as Product[];

    return {
        products,
        pagination: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit)
        }
    };
}
