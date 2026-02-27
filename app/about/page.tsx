import { Car, UtensilsCrossed, MapPin } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">About Car Rental Blog</h1>
      
      <div className="card mb-8">
        <div className="flex items-center mb-4">
          <Car className="w-8 h-8 text-primary mr-3" />
          <h2 className="text-2xl font-bold">Our Mission</h2>
        </div>
        <p className="text-gray-700 mb-4">
          We bridge the gap between car rentals and culinary travel. Our blog is dedicated to helping travelers
          discover amazing food and drink destinations accessible by rental cars.
        </p>
      </div>
      
      <div className="card mb-8">
        <div className="flex items-center mb-4">
          <UtensilsCrossed className="w-8 h-8 text-accent mr-3" />
          <h2 className="text-2xl font-bold">Food & Drink Focus</h2>
        </div>
        <p className="text-gray-700 mb-4">
          While we cover all aspects of car rentals, our unique angle is exploring how rental cars can enhance
          your culinary adventures. From road trips to wineries to finding hidden food gems off the beaten path.
        </p>
      </div>
      
      <div className="card">
        <div className="flex items-center mb-4">
          <MapPin className="w-8 h-8 text-secondary mr-3" />
          <h2 className="text-2xl font-bold">Travel Experiences</h2>
        </div>
        <p className="text-gray-700">
          We share real experiences, practical tips, and destination guides that combine the freedom of car rentals
          with the joy of discovering local food and drink cultures around the world.
        </p>
      </div>
    </div>
  )
}
