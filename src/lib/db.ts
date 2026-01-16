import Database from 'better-sqlite3';
import path from 'path';

// Create a database connection
// In production, this might need to be adjusted, but for local/demo it's fine.
const dbPath = path.join(process.cwd(), 'ecommerce.db');

export const db = new Database(dbPath);

// Enable WAL mode for better performance
db.pragma('journal_mode = WAL');
