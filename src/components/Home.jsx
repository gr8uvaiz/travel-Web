import Rajsthan from '../assets/Images/Rajasthan.jpg'
import Kashmir from '../assets/Images/Kashmir.jpg'
import MountAbu from '../assets/Images/MountAbu.jpg'
import TravelHome from '../assets/Images/TravelHome.jpg'

const destinations = [
  { name: 'Rajasthan', image: Rajsthan },
  { name: 'Kashmir', image: Kashmir },
  { name: 'Mount Abu', image: MountAbu },
]

const Home = () => {
  return (
    <div className="min-h-screen bg-zinc-100 flex flex-col items-center justify-center p-4 md:p-8">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-6xl font-bold text-navy-900 text-center mb-4">
          Discover the best places to enjoy your next vacation
        </h1>
        <p className="text-lg  text-gray-600 text-center mb-12">
          We always make our customers happy by providing many choices.
        </p>
        
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-8 right-0 w-24 h-24 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          
          <div className="relative bg-white rounded-lg shadow-lg p-8 mb-12">
            <img 
              src={TravelHome}
              alt="Traveler illustration"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <div className="flex justify-center space-x-4">
              {destinations.map((dest) => (
                <div key={dest.name} className="flex flex-col items-center bg-zinc-50 rounded-lg p-3 shadow-md">
                  <img src={dest.image} alt={dest.name} className="w-12 h-12 rounded-full mb-2" />
                  <span className="text-sm font-medium">{dest.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
            Explore Destinations
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home