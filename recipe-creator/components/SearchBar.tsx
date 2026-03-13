import React, { useState } from 'react'

type Props = {
  onSearch?: (q: string) => void
}

export default function SearchBar({ onSearch }: Props) {
  const [q, setQ] = useState('')

  function submit(e: React.FormEvent) {
    e.preventDefault()
    onSearch?.(q.trim())
  }

  return (
    <form onSubmit={submit} className="w-full max-w-xl mx-auto flex gap-2">
      <input
        className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring"
        placeholder="Search recipes by name or ingredient..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
        aria-label="Search recipes"
      />
      <button type="submit" className="bg-indigo-600 text-white px-4 rounded hover:bg-indigo-700">
        Search
      </button>
    </form>
  )
}
