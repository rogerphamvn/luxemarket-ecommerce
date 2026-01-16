const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const dbPath = path.join(process.cwd(), 'ecommerce.db');
// Delete existing db to start fresh
try {
    if (fs.existsSync(dbPath)) {
        fs.unlinkSync(dbPath);
        console.log('Deleted existing database.');
    }
} catch (err) {
    console.error('Error deleting database:', err);
}

const db = new Database(dbPath);
db.pragma('journal_mode = WAL');

console.log('Creating tables...');

db.exec(`
  CREATE TABLE IF NOT EXISTS categories (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL
  );

  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    price INTEGER NOT NULL, -- Stored in cents
    stock INTEGER DEFAULT 0,
    categoryId TEXT,
    image TEXT,
    FOREIGN KEY (categoryId) REFERENCES categories(id)
  );
`);

console.log('Seeding data...');

const categories = [
    { id: 'electronics', name: 'Electronics', slug: 'electronics' },
    { id: 'fashion', name: 'Fashion', slug: 'fashion' },
    { id: 'home', name: 'Home & Garden', slug: 'home-garden' },
    { id: 'sports', name: 'Sports', slug: 'sports' },
    { id: 'toys', name: 'Toys', slug: 'toys' },
];

const insertCategory = db.prepare('INSERT INTO categories (id, name, slug) VALUES (?, ?, ?)');
categories.forEach(cat => insertCategory.run(cat.id, cat.name, cat.slug));

const adjectives = ['Premium', 'Luxury', 'Essential', 'Pro', 'Max', 'Ultra', 'Smart', 'Eco-friendly', 'Modern', 'Vintage'];
const nouns = {
    electronics: ['Smartphone', 'Laptop', 'Headphones', 'Watch', 'Camera', 'Speaker', 'Monitor', 'Keyboard', 'Mouse', 'Tablet'],
    fashion: ['Shirt', 'Jeans', 'Jacket', 'Sneakers', 'Watch', 'Bag', 'Hat', 'Dress', 'Suit', 'Scarf'],
    home: ['Lamp', 'Chair', 'Table', 'Sofa', 'Rug', 'Vase', 'Planter', 'Clock', 'Mirror', 'Desk'],
    sports: ['Ball', 'Racket', 'Bat', 'Gloves', 'Helmet', 'Jersey', 'Shoes', 'Mat', 'Dumbbell', 'Bike'],
    toys: ['Robot', 'Doll', 'Car', 'Puzzle', 'Block Set', 'Drone', 'Action Figure', 'Board Game', 'Plush', 'Train']
};

const insertProduct = db.prepare(`
  INSERT INTO products (name, slug, description, price, stock, categoryId, image)
  VALUES (?, ?, ?, ?, ?, ?, ?)
`);

db.transaction(() => {
    for (let i = 1; i <= 500; i++) {
        const category = categories[Math.floor(Math.random() * categories.length)];
        const nounList = nouns[category.id];
        const noun = nounList[Math.floor(Math.random() * nounList.length)];
        const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const name = `${adjective} ${noun} ${i}`; // Append index to ensure uniqueness and scale
        const slug = name.toLowerCase().replace(/ /g, '-') + `-${i}`;
        const price = Math.floor(Math.random() * 100000) + 1000; // 10.00 to 1000.00
        const stock = Math.floor(Math.random() * 100);
        // Placeholder image
        const image = `https://placehold.co/600x400?text=${encodeURIComponent(name)}`;

        insertProduct.run(name, slug, `This is a great ${name}. Feature rich and high quality.`, price, stock, category.id, image);
    }
})();

console.log('Seeding completed successfully!');
db.close();
