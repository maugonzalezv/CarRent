import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface CarCardProps {
  id: number;
  name: string;
  type: string;
  seats: number;
  price: number;
  image: string;
  year: number;
  transmission: string;
  fuelType: string;
  description?: string;
  features?: string[];
}

const CarCard: React.FC<CarCardProps> = ({ 
  id, 
  name, 
  type, 
  seats, 
  price, 
  image,
  year,
  transmission,
  fuelType,
  description = "Vehículo ideal para tus necesidades de viaje con todas las comodidades.",
  features = ["Bluetooth", "Aire acondicionado", "GPS"]
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${isHovered ? 'transform scale-105 shadow-xl z-10' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className={`w-full h-48 object-cover transition-all duration-500 ${isHovered ? 'transform scale-110' : ''}`} 
        />
        {isHovered && (
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex flex-col justify-center items-center text-white p-4 transition-opacity duration-300">
            <h3 className="text-xl font-bold mb-2">{name} ({year})</h3>
            <p className="text-sm text-center mb-2">{description}</p>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {features.map((feature, index) => (
                <span key={index} className="px-2 py-1 bg-blue-700 bg-opacity-70 rounded-full text-xs">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
          <span>{type} • {year}</span>
          <span>{transmission} • {fuelType}</span>
        </div>
        <div className="mt-2 flex items-center text-sm text-gray-600">
          <span>{seats} {seats === 1 ? 'asiento' : 'asientos'}</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-blue-600">${price}/día</span>
          <Link 
            to={`/booking/${id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
          >
            Reservar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard; 