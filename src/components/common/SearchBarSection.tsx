import { Search } from 'lucide-react'
import React from 'react'
import { Input } from '../ui/input'

interface SearchBarSectionProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  placeholder?: string
}

const SearchBarSection = ({ searchQuery, setSearchQuery, placeholder }: SearchBarSectionProps) => {
  return (
    <div className="relative max-w-full">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <Input
        type="text"
        placeholder={placeholder || "Search..."}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-12 py-6 text-base border-border rounded-xl"
      />
    </div>
  )
}

export default SearchBarSection