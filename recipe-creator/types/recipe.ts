export interface Recipe {
  id: string
  title: string
  description?: string
  ingredients?: string[]
  steps?: string[]
  image?: string
  createdAt?: string // ISO date string
}

export type RecipeSummary = Pick<Recipe, 'id' | 'title' | 'description' | 'image'>
