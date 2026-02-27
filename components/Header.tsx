import Link from 'next/link'
import { Car, Search } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Car className="w-8 h-8 text-primary mr-2" />
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Car Rental Blog
            </Link>
            <span className="ml-2 px-2 py-1 bg-accent text-white text-sm rounded">
              Food & Drink
            </span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-primary transition-colors">
              Categories
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          
          <div className="mt-4 md:mt-0 flex items-center">
            <div className="relative">
              <input
                type="search"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
