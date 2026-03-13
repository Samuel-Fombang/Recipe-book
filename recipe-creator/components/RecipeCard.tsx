import React from 'react'
import type { Recipe } from '../types/recipe'
import Link from 'next/link'

type Props = {
  recipe: Recipe
}

export default function RecipeCard({ recipe }: Props) {
  return (
    <article className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition p-0">
      <div className="h-40 bg-gray-100 flex items-center justify-center">
        {recipe.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={recipe.image} alt={recipe.title} className="object-cover w-full h-40" />
        ) : (
          <div className="text-gray-400">No image</div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{recipe.title}</h3>
        <p className="text-sm text-gray-600 mb-3">
          {recipe.description ?? 'No description provided.'}
        </p>

        <div className="flex items-center justify-between">
          <Link href={`/recipes/${recipe.id}`} className="text-sm text-indigo-600 hover:underline">
            View
          </Link>
          <span className="text-xs text-gray-500">{recipe.ingredients?.length ?? 0} ingredients</span>
        </div>
      </div>
    </article>
  )
}
