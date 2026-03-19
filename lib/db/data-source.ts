import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Lead } from '@/lib/entity/Lead'

const databasePath = process.env.DATABASE_URL || './database.sqlite'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: databasePath,
  synchronize: process.env.NODE_ENV !== 'production', // Auto-create tables in dev
  logging: false,
  entities: [Lead],
  migrations: [],
  subscribers: [],
})

// Initialize the database connection
export async function initializeDatabase() {
  if (!dataSource.isInitialized) {
    await dataSource.initialize()
    console.log('Database initialized')
  }
}

// Initialize on import if not in production
if (process.env.NODE_ENV !== 'production') {
  initializeDatabase().catch((error) => console.error('Database initialization error:', error))
}