export interface Category {
  id: string;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: string;
  rating: number;
  stock: number;
}

// Mock Data
export const CATEGORIES: Category[] = [
  { id: 'electronics', name: 'Electronics' },
  { id: 'fashion', name: 'Fashion' },
  { id: 'home', name: 'Home & Garden' },
  { id: 'sports', name: 'Sports' },
  { id: 'toys', name: 'Toys' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Pro Smartphone 1",
    price: 86022,
    description: "Experience premium quality with this carefully crafted product. Made with attention to detail and designed to exceed your expectations.",
    image: "/product-1.png",
    categoryId: "electronics",
    rating: 4.8,
    stock: 50
  },
  {
    id: 2,
    name: "Smart Sneakers 2",
    price: 13083,
    description: "Experience premium quality with this carefully crafted product. Made with attention to detail and designed to exceed your expectations.",
    image: "/product-6.png",
    categoryId: "fashion",
    rating: 4.5,
    stock: 120
  },
  {
    id: 3,
    name: "Modern Laptop 3",
    price: 36761,
    description: "Experience premium quality with this carefully crafted product. Made with attention to detail and designed to exceed your expectations.",
    image: "/product-1.png", // Reusing image
    categoryId: "electronics",
    rating: 4.9,
    stock: 15
  },
  {
    id: 4,
    name: "Leather Handbag 4",
    price: 27150,
    description: "Experience premium quality with this carefully crafted product. Made with attention to detail and designed to exceed your expectations.",
    image: "/product-4.png",
    categoryId: "fashion",
    rating: 4.7,
    stock: 40
  },
  {
    id: 5,
    name: "Wireless Headphones 5",
    price: 15309,
    description: "Experience premium quality with this carefully crafted product. Made with attention to detail and designed to exceed your expectations.",
    image: "/product-2.png",
    categoryId: "electronics",
    rating: 4.6,
    stock: 80
  },
  {
    id: 6,
    name: "Ceramic Vase 6",
    price: 28834,
    description: "Experience premium quality with this carefully crafted product. Made with attention to detail and designed to exceed your expectations.",
    image: "/product-7.png",
    categoryId: "home",
    rating: 4.4,
    stock: 60
  },
  {
    id: 7,
    name: "Yoga Mat 7",
    price: 4999,
    description: "Experience premium quality with this carefully crafted product. Made with attention to detail and designed to exceed your expectations.",
    image: "/category-sports.png",
    categoryId: "sports",
    rating: 4.8,
    stock: 100
  },
  {
    id: 8,
    name: "Wooden Blocks 8",
    price: 2999,
    description: "Experience premium quality with this carefully crafted product. Made with attention to detail and designed to exceed your expectations.",
    image: "/category-toys.png",
    categoryId: "toys",
    rating: 4.9,
    stock: 30
  }
];

export function getProducts({ page = 1, limit = 100, category, search }: { page?: number, limit?: number, category?: string, search?: string } = {}) {
  let filteredProducts = [...PRODUCTS];

  if (category) {
    filteredProducts = filteredProducts.filter(p => p.categoryId === category);
  }

  if (search) {
    const searchLower = search.toLowerCase();
    filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(searchLower) || p.description.toLowerCase().includes(searchLower));
  }

  const offset = (page - 1) * limit;
  const paginatedProducts = filteredProducts.slice(offset, offset + limit);

  return {
    products: paginatedProducts,
    pagination: {
      page,
      limit,
      total: filteredProducts.length,
      totalPages: Math.ceil(filteredProducts.length / limit)
    }
  };
}

export function getProduct(slug: string | number) {
  // Handle both ID (number) and slug (string like "product-name-1")
  let id: number;
  
  if (typeof slug === 'string') {
    const parts = slug.split('-');
    const lastPart = parts[parts.length - 1];
    id = parseInt(lastPart);
  } else {
    id = slug;
  }
    
  if (isNaN(id)) return undefined;

  return PRODUCTS.find(p => p.id === id);
}

export function getCategories() {
  return CATEGORIES;
}
