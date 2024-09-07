import Kashmir from '../assets/Images/Kashmir.jpg'
import MountAbu from '../assets/Images/MountAbu.jpg'
import Rajasthan from '../assets/Images/Rajasthan.jpg'
import Taj from '../assets/Images/Taj.jpg'
import KedarNath from '../assets/Images/KedarNath.jpg'
import Amritsar from '../assets/Images/Amritsar.jpg'
export default function TravelDestination() {
    const destinations = [
      {
        id: 1,
        name: "Kashmir",
        description: '"Heaven on Earth," Kashmir offers stunning landscapes, serene lakes, and snow-capped mountains, perfect for nature lovers and peace seekers.',
        image: Kashmir
      },
      {
        id: 2,
        name: "MountAbu",
        description: "The only hill station in Rajasthan, Mount Abu is known for its cool climate, scenic views, Nakki Lake, and the famous Dilwara Temples.",
        image: MountAbu
      },
      {
        id: 3,
        name: "Rajasthan",
        description: "A land of royal heritage, Rajasthan boasts majestic forts, vibrant culture, golden deserts, and rich traditions for an unforgettable experience.",
        image: Rajasthan
      },
      {
        id: 4,
        name: "Agra Taj",
        description: "A symbol of love, the Taj Mahal is a breathtaking white marble monument in Agra, attracting millions with its beauty and history.",
        image: Taj
      },
      {
        id: 5,
        name: "Kedarnath",
        description: "A sacred pilgrimage site in the Himalayas, Kedarnath is revered for its ancient temple dedicated to Lord Shiva, surrounded by majestic peaks.",
        image: KedarNath
      },
      {
        id: 6,
        name: "Amritsar",
        description: "Home to the Golden Temple, Amritsar offers spiritual tranquility, historical significance, and a deep cultural experience for every traveler.",
        image: Amritsar
      }
    ]
  
    return (
      <div className="min-h-screen bg-zinc-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            We Only Provide the Best Destinations For You
          </h1>
          <p className="text-xl text-center text-zinc-300 mb-12 max-w-3xl mx-auto">
            Embark on unforgettable journeys to the world's most captivating locations. Our carefully curated selection of destinations promises extraordinary experiences and lifelong memories.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div key={destination.id} className="bg-zinc-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <div className="relative h-64 sm:h-80">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-3">{destination.name}</h2>
                  <p className="text-zinc-300">{destination.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className='text-center mt-12 font-semibold text-xl '>Any Many More...</p>
      </div>
    )
  }