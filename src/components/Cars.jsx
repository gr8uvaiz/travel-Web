import React from 'react';
import { useNavigate } from 'react-router';

const cars = [
  { id: 1, name: "Swift Dzire", pricePerKm: 0.25, seatingCapacity: 5, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/45691/dzire-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80" },
  { id: 2, name: "Traveller", pricePerKm: 0.5, seatingCapacity: 12, image: "https://buscdn.cardekho.com/in/force/traveller-3050/force-traveller-3050.jpg?imwidth=480&impolicy=resize" },
  { id: 3, name: "Urbania", pricePerKm: 0.6, seatingCapacity: 13, image: "https://forceurbania.co.in/wp-content/uploads/2022/10/exterior-4-1.jpg" },
  { id: 4, name: "Innova Crysta", pricePerKm: 0.4, seatingCapacity: 7, image: "https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/140809/innova-crysta-exterior-front-view-2.jpeg?isig=0&q=80" },
  { id: 5, name: "Toyota Camry", pricePerKm: 0.7, seatingCapacity: 5, image: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/110233/camry-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80" },
  { id: 6, name: "Honda City", pricePerKm: 0.35, seatingCapacity: 5, image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/134287/city-exterior-right-front-three-quarter-77.jpeg?isig=0&q=80&q=80" },
];

const Cars = () => {
    const navigate = useNavigate()
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-2">Indian Tour and Travels Rentals</h1>
      <p className="text-xl text-center text-gray-600 mb-8">
        Unlock Your Journey: Premium Cars, Unbeatable Rates
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{car.name}</h2>
              <p className="text-gray-600 mb-1">
                Price per km: Rs.{car.pricePerKm.toFixed(2)}
              </p>
              <p className="text-gray-600 mb-4">
                Seating Capacity: {car.seatingCapacity} persons
              </p>
              <button onClick={() => navigate('/contact')} className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                Rent Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;