import React, { useState, useEffect } from 'react';
import CarCard from '../components/SpaceCard';

// Enhanced mock data for cars with more Mexican locations and diversity
const mockCars = [
  {
    id: 1,
    name: 'Toyota Camry',
    type: 'Sedán',
    seats: 5,
    price: 45,
    year: 2022,
    transmission: 'Automático',
    fuelType: 'Gasolina',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    description: 'Camry elegante y cómodo con excelente economía de combustible, ideal para viajes de negocios o placer.',
    features: ['Bluetooth', 'Cámara trasera', 'Asientos de cuero', 'CarPlay', 'Android Auto'],
    location: 'Ciudad de México'
  },
  {
    id: 2,
    name: 'Honda CR-V',
    type: 'SUV',
    seats: 5,
    price: 55,
    year: 2021,
    transmission: 'Automático',
    fuelType: 'Híbrido',
    image: 'https://images.unsplash.com/photo-1568844293986-ca047c5449f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    description: 'SUV espaciosa y eficiente con tecnología híbrida, perfecta para familias y aventuras al aire libre.',
    features: ['GPS', 'Techo solar', 'Sensores de estacionamiento', 'Bluetooth', 'Asientos calefactados'],
    location: 'Guadalajara'
  },
  {
    id: 3,
    name: 'Ford Mustang',
    type: 'Deportivo',
    seats: 4,
    price: 85,
    year: 2023,
    transmission: 'Manual',
    fuelType: 'Gasolina',
    image: 'https://images.unsplash.com/photo-1597007030739-6d2e619d6d94?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    description: 'Icónico muscle car americano con potente motor y diseño agresivo para una experiencia de conducción emocionante.',
    features: ['Modo deportivo', 'Sistema premium de audio', 'Asientos deportivos', 'Llantas de aleación', 'Control de lanzamiento'],
    location: 'Cancún'
  },
  {
    id: 4,
    name: 'Volkswagen Golf',
    type: 'Hatchback',
    seats: 5,
    price: 40,
    year: 2022,
    transmission: 'Automático',
    fuelType: 'Gasolina',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    description: 'Compacto alemán de alta calidad con manejo preciso y tecnología avanzada para la ciudad.',
    features: ['Pantalla táctil', 'Bluetooth', 'Sensores de estacionamiento', 'CarPlay', 'Android Auto'],
    location: 'Monterrey'
  },
  {
    id: 5,
    name: 'Tesla Model 3',
    type: 'Eléctrico',
    seats: 5,
    price: 90,
    year: 2023,
    transmission: 'Automático',
    fuelType: 'Eléctrico',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    description: 'Sedan eléctrico de vanguardia con aceleración instantánea, autonomía extendida y tecnología de conducción autónoma.',
    features: ['Autopilot', 'Pantalla táctil 15"', 'Actualización OTA', 'Carga rápida', 'Interior minimalista'],
    location: 'Ciudad de México'
  },
  {
    id: 6,
    name: 'Jeep Wrangler',
    type: 'Todo terreno',
    seats: 4,
    price: 75,
    year: 2021,
    transmission: 'Manual',
    fuelType: 'Diésel',
    image: 'https://images.unsplash.com/photo-1562911791-c7a97b729ec5?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    description: 'Vehículo icónico para aventuras off-road con capacidades todo terreno excepcionales y diseño inconfundible.',
    features: ['Tracción 4x4', 'Techo removible', 'Capacidad de vadeo', 'Bluetooth', 'Sistema de navegación'],
    location: 'Los Cabos'
  },
  {
    id: 7,
    name: 'Nissan Versa',
    type: 'Sedán',
    seats: 5,
    price: 35,
    year: 2023,
    transmission: 'Automático',
    fuelType: 'Gasolina',
    image: 'https://images.unsplash.com/photo-1609752632859-38487c7f5385?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    description: 'Sedán compacto con gran espacio interior, economía de combustible superior y tecnología moderna para el día a día.',
    features: ['Bluetooth', 'Cámara trasera', 'Pantalla táctil', 'Control crucero', 'Asistente de frenado'],
    location: 'Puebla'
  },
  {
    id: 8,
    name: 'Chevrolet Suburban',
    type: 'SUV Grande',
    seats: 8,
    price: 95,
    year: 2022,
    transmission: 'Automático',
    fuelType: 'Gasolina',
    image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    description: 'SUV de gran tamaño con capacidad para toda la familia, ideal para viajes largos con mucho equipaje.',
    features: ['3 filas de asientos', 'Pantallas para pasajeros', 'Refrigerador', 'Asientos de cuero', 'Cámara 360°'],
    location: 'Mérida'
  },
  {
    id: 9,
    name: 'BMW Serie 3',
    type: 'Sedán de lujo',
    seats: 5,
    price: 85,
    year: 2023,
    transmission: 'Automático',
    fuelType: 'Gasolina',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    description: 'Sedán deportivo alemán con rendimiento excepcional, lujo refinado y lo último en tecnología automotriz.',
    features: ['Asientos deportivos', 'Sistema premium de audio', 'Head-up display', 'Suspensión adaptativa', 'Asistentes de conducción'],
    location: 'Querétaro'
  },
  {
    id: 10,
    name: 'Mazda CX-5',
    type: 'SUV',
    seats: 5,
    price: 50,
    year: 2022,
    transmission: 'Automático',
    fuelType: 'Gasolina',
    image: 'https://images.unsplash.com/photo-1605270396307-d00ba5ddbbc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    description: 'SUV japonesa con diseño elegante, excelente maniobrabilidad y calidad interior superior para viajes familiares.',
    features: ['Apple CarPlay', 'Techo solar', 'Sonido Bose', 'Asientos de cuero', 'Cámara 360°'],
    location: 'Tijuana'
  },
  {
    id: 11,
    name: 'Volkswagen Jetta',
    type: 'Sedán',
    seats: 5,
    price: 45,
    year: 2021,
    transmission: 'Manual',
    fuelType: 'Gasolina',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    description: 'Sedán alemán con amplio espacio interior, motor eficiente y equilibrio perfecto entre comodidad y rendimiento.',
    features: ['Pantalla táctil', 'Android Auto', 'Asientos calefactados', 'Bluetooth', 'Sensores de estacionamiento'],
    location: 'Cuernavaca'
  },
  {
    id: 12,
    name: 'Toyota RAV4',
    type: 'SUV',
    seats: 5,
    price: 60,
    year: 2023,
    transmission: 'Automático',
    fuelType: 'Híbrido',
    image: 'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    description: 'SUV híbrida moderna con tracción integral, gran confiabilidad y eficiencia de combustible para cualquier terreno.',
    features: ['Tracción integral', 'Monitor de punto ciego', 'Sistema híbrido', 'JBL Audio', 'Asistente de descenso'],
    location: 'Oaxaca'
  },
  {
    id: 13,
    name: 'Kia Soul',
    type: 'Crossover',
    seats: 5,
    price: 40,
    year: 2022,
    transmission: 'Automático',
    fuelType: 'Gasolina',
    image: 'https://images.unsplash.com/photo-1549653276-cf82d6e86ba9?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    description: 'Crossover único con diseño distintivo, gran espacio interior y personalidad divertida para la ciudad.',
    features: ['Iluminación ambiental', 'Sonido premium', 'Techo panorámico', 'Cámara trasera', 'Bluetooth'],
    location: 'Acapulco'
  },
  {
    id: 14,
    name: 'Mercedes-Benz Clase C',
    type: 'Sedán de lujo',
    seats: 5,
    price: 95,
    year: 2023,
    transmission: 'Automático',
    fuelType: 'Gasolina',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    description: 'Sedán alemán de lujo con acabados premium, tecnología avanzada y rendimiento excepcional para el conductor exigente.',
    features: ['Asientos de cuero Nappa', 'MBUX', 'Sonido Burmester', 'Suspensión neumática', 'Head-up display'],
    location: 'San Miguel de Allende'
  },
  {
    id: 15,
    name: 'Renault Duster',
    type: 'SUV Compacta',
    seats: 5,
    price: 38,
    year: 2022,
    transmission: 'Manual',
    fuelType: 'Gasolina',
    image: 'https://images.unsplash.com/photo-1594144533403-db2d161fae7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    description: 'SUV accesible con buena altura al piso, capacidad para terrenos irregulares y bajo consumo de combustible.',
    features: ['Aire acondicionado', 'Bluetooth', 'Sensores de estacionamiento', 'Navegación', 'Cámara trasera'],
    location: 'Chihuahua'
  },
  {
    id: 16,
    name: 'Audi A4',
    type: 'Sedán de lujo',
    seats: 5,
    price: 80,
    year: 2023,
    transmission: 'Automático',
    fuelType: 'Gasolina',
    image: 'https://images.unsplash.com/photo-1606664922998-f180697dea17?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    description: 'Sedán alemán premium con tecnología de punta, refinamiento interior y conducción deportiva pero confortable.',
    features: ['Virtual Cockpit', 'Quattro AWD', 'Bang & Olufsen', 'Asientos deportivos', 'Drive Select'],
    location: 'Toluca'
  }
];

const CarsPage: React.FC = () => {
  const [cars] = useState(mockCars);
  const [typeFilter, setTypeFilter] = useState('');
  const [transmissionFilter, setTransmissionFilter] = useState('');
  const [fuelTypeFilter, setFuelTypeFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [dateRange, setDateRange] = useState({
    startDate: '',
    endDate: ''
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [filteredCars, setFilteredCars] = useState(cars);

  // Apply filters automatically whenever any filter changes
  useEffect(() => {
    const result = cars.filter(car => {
      // Location filter
      if (locationFilter && !car.location.toLowerCase().includes(locationFilter.toLowerCase())) {
        return false;
      }
      
      // Type filter
      if (typeFilter && car.type !== typeFilter) {
        return false;
      }
      
      // Transmission filter
      if (transmissionFilter && car.transmission !== transmissionFilter) {
        return false;
      }
      
      // Fuel type filter
      if (fuelTypeFilter && car.fuelType !== fuelTypeFilter) {
        return false;
      }
      
      // Price filter
      if (priceFilter) {
        const [min, max] = priceFilter.split('-').map(Number);
        if (max) {
          if (car.price < min || car.price > max) return false;
        } else {
          // For "80+" option
          if (car.price < min) return false;
        }
      }
      
      return true;
    });
    
    setFilteredCars(result);
  }, [cars, locationFilter, typeFilter, transmissionFilter, fuelTypeFilter, priceFilter]);

  // Get unique locations for the dropdown
  const locations = Array.from(new Set(cars.map(car => car.location))).sort();

  // Format date range for display
  const formatDateRange = () => {
    if (!dateRange.startDate && !dateRange.endDate) return 'Seleccionar fechas';
    
    if (dateRange.startDate && dateRange.endDate) {
      const startFormatted = new Date(dateRange.startDate).toLocaleDateString('es-MX', {
        day: 'numeric',
        month: 'short'
      });
      
      const endFormatted = new Date(dateRange.endDate).toLocaleDateString('es-MX', {
        day: 'numeric',
        month: 'short'
      });
      
      return `${startFormatted} - ${endFormatted}`;
    }
    
    if (dateRange.startDate) {
      return new Date(dateRange.startDate).toLocaleDateString('es-MX', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    }
    
    return 'Seleccionar fechas';
  };

  // Handle date selection
  const handleDateSelection = (startDate: string, endDate: string = '') => {
    setDateRange({
      startDate,
      endDate: endDate || startDate
    });
    setShowDatePicker(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Enhanced search bar with blue accents */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8 border-t-4 border-blue-600">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Ubicación</label>
            <div className="relative">
              <input
                type="text"
                id="location"
                className="w-full p-3 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="¿Dónde quieres recoger el coche?"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <label htmlFor="dateRange" className="block text-sm font-medium text-gray-700 mb-1">Fecha de disponibilidad</label>
            <div 
              className="relative cursor-pointer w-full p-3 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all flex items-center"
              onClick={() => setShowDatePicker(!showDatePicker)}
            >
              <div className="flex-grow">
                {formatDateRange()}
              </div>
              <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              
              {/* Date Picker Dropdown - Airbnb style */}
              {showDatePicker && (
                <div className="absolute top-full left-0 mt-2 w-full md:w-auto md:min-w-[500px] bg-white border border-gray-200 rounded-md shadow-lg z-20 p-4">
                  <div className="flex justify-between mb-4">
                    <h3 className="text-lg font-medium">Selecciona el rango de fechas</h3>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowDatePicker(false);
                      }}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Fecha inicial</label>
                      <input
                        type="date"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={dateRange.startDate}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setDateRange({ ...dateRange, startDate: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Fecha final</label>
                      <input
                        type="date"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={dateRange.endDate}
                        min={dateRange.startDate || new Date().toISOString().split('T')[0]}
                        onChange={(e) => setDateRange({ ...dateRange, endDate: e.target.value })}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setDateRange({ startDate: '', endDate: '' });
                      }}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      Limpiar fechas
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (dateRange.startDate) {
                          handleDateSelection(dateRange.startDate, dateRange.endDate);
                        }
                      }}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Aplicar
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-end">
            <div className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300 text-center font-medium flex items-center justify-center cursor-pointer shadow-md">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Vehículos disponibles ({filteredCars.length})
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <select 
            className="px-3 py-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="">Todos los tipos</option>
            <option value="Sedán">Sedán</option>
            <option value="Sedán de lujo">Sedán de lujo</option>
            <option value="SUV">SUV</option>
            <option value="SUV Grande">SUV Grande</option>
            <option value="SUV Compacta">SUV Compacta</option>
            <option value="Deportivo">Deportivo</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Crossover">Crossover</option>
            <option value="Eléctrico">Eléctrico</option>
            <option value="Todo terreno">Todo terreno</option>
          </select>
          
          <select 
            className="px-3 py-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
            value={transmissionFilter}
            onChange={(e) => setTransmissionFilter(e.target.value)}
          >
            <option value="">Cualquier transmisión</option>
            <option value="Automático">Automático</option>
            <option value="Manual">Manual</option>
          </select>
          
          <select 
            className="px-3 py-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
            value={fuelTypeFilter}
            onChange={(e) => setFuelTypeFilter(e.target.value)}
          >
            <option value="">Cualquier combustible</option>
            <option value="Gasolina">Gasolina</option>
            <option value="Diésel">Diésel</option>
            <option value="Híbrido">Híbrido</option>
            <option value="Eléctrico">Eléctrico</option>
          </select>
          
          <select 
            className="px-3 py-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="">Cualquier precio</option>
            <option value="0-40">$0-$40 por día</option>
            <option value="41-60">$41-$60 por día</option>
            <option value="61-80">$61-$80 por día</option>
            <option value="80+">Más de $80 por día</option>
          </select>
          
          <select 
            className="px-3 py-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          >
            <option value="">Todas las ubicaciones</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
          
          {(typeFilter || transmissionFilter || fuelTypeFilter || priceFilter || locationFilter || dateRange.startDate) && (
            <button 
              onClick={() => {
                setTypeFilter('');
                setTransmissionFilter('');
                setFuelTypeFilter('');
                setPriceFilter('');
                setLocationFilter('');
                setDateRange({ startDate: '', endDate: '' });
              }}
              className="px-3 py-2 bg-red-100 text-red-700 border border-red-300 rounded-md hover:bg-red-200 transition-all text-sm flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Limpiar filtros
            </button>
          )}
        </div>
      </div>

      {filteredCars.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map(car => (
            <CarCard
              key={car.id}
              id={car.id}
              name={car.name}
              type={car.type}
              seats={car.seats}
              price={car.price}
              image={car.image}
              year={car.year}
              transmission={car.transmission}
              fuelType={car.fuelType}
              description={car.description}
              features={car.features}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="mt-2 text-lg font-medium text-gray-900">No se encontraron vehículos</h3>
          <p className="mt-1 text-gray-500">No hay vehículos disponibles con los filtros seleccionados.</p>
          <div className="mt-6">
            <button
              onClick={() => {
                setTypeFilter('');
                setTransmissionFilter('');
                setFuelTypeFilter('');
                setPriceFilter('');
                setLocationFilter('');
                setDateRange({ startDate: '', endDate: '' });
              }}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Limpiar filtros
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarsPage; 