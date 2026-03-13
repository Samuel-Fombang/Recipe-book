import type { RecipeSummary } from '../types/recipe'

/**
 * Fetch recipes from the server.
 * This is a client helper that calls an API route (to be implemented).
 * Replace or extend with real Neon-backed server endpoints.
 */
export async function fetchRecipes(query?: string): Promise<RecipeSummary[]> {
  const params = new URLSearchParams()
  if (query) params.set('q', query)

  const res = await fetch(`/api/recipes?${params.toString()}`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to fetch recipes')
  const data = (await res.json()) as RecipeSummary[]
  return data
}
