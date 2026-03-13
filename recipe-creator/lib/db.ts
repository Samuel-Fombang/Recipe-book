/**
 * lib/db.ts
 * Placeholder database helper. Later, wire this to Neon (Postgres) and export
 * actual query helpers used by server routes (API or server components).
 *
 * Instructions:
 * - Install the Neon/Postgres client you prefer (e.g. pg or neon-js)
 * - Add environment variables to .env.local (NEON_DATABASE_URL)
 * - Replace the stubbed functions below with real queries.
 */

export type DBClient = unknown

export function getClient(): DBClient {
  // TODO: connect to Neon here. Example with `pg`:
  // const { Client } = require('pg')
  // const client = new Client({ connectionString: process.env.NEON_DATABASE_URL })
  // await client.connect()
  return null
}

export async function seedSampleRecipes(): Promise<void> {
  // TODO: implement seeding logic that inserts sample recipes into Neon.
  // This helper should be usable from a setup script or a Next.js server function.
  return
}

export async function getRecipesFromDb(query?: string) {
  // TODO: run a SELECT query against the recipes table, filter by query if provided.
  // Return an array of recipe objects matching the `types/recipe.ts` shape.
  return []
}
