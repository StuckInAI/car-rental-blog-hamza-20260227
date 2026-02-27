export function HomeHero() {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-8 md:p-12 mb-8">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Drive Your Culinary Adventure
        </h1>
        <p className="text-xl mb-6">
          Discover the best food and drink destinations accessible by rental car. 
          From vineyard tours to hidden food gems, we guide your tasty travels.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="search"
            placeholder="Search for food destinations..."
            className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button className="bg-accent hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Explore Articles
          </button>
        </div>
      </div>
    </div>
  )
}
