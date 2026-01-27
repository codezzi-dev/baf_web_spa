import React from 'react'
import { LucideIcon } from 'lucide-react'

interface Category<T extends string> {
  id: T
  label: string
  icon: LucideIcon
}

interface CategorySectionProps<T extends string> {
  categories: Category<T>[]
  activeCategory: T | ""
  setActiveCategory: (id: T | "") => void
}

const CategorySection = <T extends string>({ 
  categories, 
  activeCategory, 
  setActiveCategory 
}: CategorySectionProps<T>) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-8">
      {categories.map((category) => {
        const Icon = category.icon
        return (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id === activeCategory ? "" as T | "" : category.id)}
            className={`flex flex-col flex-1 items-center gap-2 p-4 rounded-xl transition-colors ${
              activeCategory === category.id
                ? "bg-tag-green/20 text-tag-green"
                : "bg-white border border-tag-green text-muted-foreground hover:text-tag-green"
            }`}
          >
            <Icon className="w-6 h-6" />
            <span className="text-sm font-medium">{category.label}</span>
          </button>
        )
      })}
    </div>
  )
}

export default CategorySection