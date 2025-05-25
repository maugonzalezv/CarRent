import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Mock data for cars with the same structure as in CarsPage
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
    features: ['Bluetooth', 'Cámara trasera', 'Asientos de cuero', 'CarPlay', 'Android Auto']
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
    features: ['GPS', 'Techo solar', 'Sensores de estacionamiento', 'Bluetooth', 'Asientos calefactados']
  },
  // More cars...
];

// Insurance options
const insuranceOptions = [
  { id: 'basic', name: 'Básico', description: 'Cubre daños a terceros', price: 10 },
  { id: 'standard', name: 'Estándar', description: 'Cubre daños a terceros y al vehículo con deducible', price: 15 },
  { id: 'premium', name: 'Premium', description: 'Cobertura total sin deducible', price: 25 }
];

// Extra options
const extraOptions = [
  { id: 'gps', name: 'GPS', price: 5 },
  { id: 'childSeat', name: 'Silla para niños', price: 8 },
  { id: 'additionalDriver', name: 'Conductor adicional', price: 10 }
];

const CarBookingPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedCar, setSelectedCar] = useState<any>(null);
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [returnLocation, setReturnLocation] = useState('');
  const [selectedInsurance, setSelectedInsurance] = useState('');
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [totalDays, setTotalDays] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Find the selected car from our mock data
  useEffect(() => {
    const car = mockCars.find(car => car.id.toString() === id);
    if (car) {
      setSelectedCar(car);
    }
  }, [id]);

  // Calculate total days and price when dates change
  useEffect(() => {
    if (pickupDate && returnDate) {
      const start = new Date(pickupDate);
      const end = new Date(returnDate);
      
      // Calculate difference in days
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      setTotalDays(diffDays);
    } else {
      setTotalDays(0);
    }
  }, [pickupDate, returnDate]);

  // Calculate total price based on selected options
  useEffect(() => {
    if (!selectedCar || totalDays === 0) {
      setTotalPrice(0);
      return;
    }

    // Base price
    let price = selectedCar.price * totalDays;
    
    // Add insurance
    if (selectedInsurance) {
      const insurance = insuranceOptions.find(ins => ins.id === selectedInsurance);
      if (insurance) {
        price += insurance.price * totalDays;
      }
    }
    
    // Add extras
    selectedExtras.forEach(extraId => {
      const extra = extraOptions.find(opt => opt.id === extraId);
      if (extra) {
        price += extra.price * totalDays;
      }
    });

    setTotalPrice(price);
  }, [selectedCar, totalDays, selectedInsurance, selectedExtras]);

  const toggleExtra = (extraId: string) => {
    setSelectedExtras(prev => 
      prev.includes(extraId) 
        ? prev.filter(id => id !== extraId) 
        : [...prev, extraId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!pickupDate || !returnDate || !pickupLocation) {
      alert('Por favor completa los campos obligatorios: fecha de recogida, fecha de devolución y ubicación de recogida.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Here we would normally make an API call to create a booking
    console.log('Booking submitted:', { 
      carId: id, 
      pickupDate, 
      returnDate,
      pickupLocation,
      returnLocation: returnLocation || pickupLocation,
      insurance: selectedInsurance,
      extras: selectedExtras,
      notes,
      totalPrice
    });
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('¡Reserva realizada con éxito!');
      
      // Redirect to the reservations page
      navigate('/reservations');
    }, 1500);
  };

  if (!selectedCar) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p>Cargando detalles del vehículo...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-48 w-full object-cover md:w-96" src={selectedCar.image} alt={selectedCar.name} />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">{selectedCar.type}</div>
              <h2 className="mt-2 text-2xl font-bold text-gray-900">{selectedCar.name} ({selectedCar.year})</h2>
              <p className="mt-2 text-gray-600">{selectedCar.description}</p>
              <div className="mt-4 flex flex-wrap gap-6">
                <div>
                  <span className="text-lg font-bold text-blue-600">${selectedCar.price}/día</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="text-gray-600">{selectedCar.seats} asientos</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="text-gray-600">{selectedCar.transmission}</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="text-gray-600">{selectedCar.fuelType}</span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">Características</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedCar.features.map((feature: string, index: number) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 px-8 py-6">
            <h3 className="text-lg font-medium text-gray-900">Reservar este vehículo</h3>
            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700">
                  Lugar de recogida*
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="pickupLocation"
                    required
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    placeholder="Ciudad, aeropuerto, etc."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="returnLocation" className="block text-sm font-medium text-gray-700">
                  Lugar de devolución (si es diferente)
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="returnLocation"
                    value={returnLocation}
                    onChange={(e) => setReturnLocation(e.target.value)}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    placeholder="Ciudad, aeropuerto, etc."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700">
                  Fecha de recogida*
                </label>
                <div className="mt-1">
                  <input
                    type="date"
                    id="pickupDate"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700">
                  Fecha de devolución*
                </label>
                <div className="mt-1">
                  <input
                    type="date"
                    id="returnDate"
                    required
                    min={pickupDate || new Date().toISOString().split('T')[0]}
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Seguro
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {insuranceOptions.map(insurance => (
                    <div
                      key={insurance.id}
                      className={`relative border rounded-lg p-4 cursor-pointer ${
                        selectedInsurance === insurance.id ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                      }`}
                      onClick={() => setSelectedInsurance(insurance.id)}
                    >
                      <div className="flex justify-between">
                        <h4 className="text-sm font-medium text-gray-900">{insurance.name}</h4>
                        <span className="text-sm font-semibold text-blue-600">${insurance.price}/día</span>
                      </div>
                      <p className="mt-1 text-xs text-gray-500">{insurance.description}</p>
                      {selectedInsurance === insurance.id && (
                        <div className="absolute top-2 right-2 h-4 w-4 rounded-full bg-blue-500"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Extras
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {extraOptions.map(extra => (
                    <div
                      key={extra.id}
                      className={`relative border rounded-lg p-4 cursor-pointer ${
                        selectedExtras.includes(extra.id) ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                      }`}
                      onClick={() => toggleExtra(extra.id)}
                    >
                      <div className="flex justify-between">
                        <h4 className="text-sm font-medium text-gray-900">{extra.name}</h4>
                        <span className="text-sm font-semibold text-blue-600">${extra.price}/día</span>
                      </div>
                      {selectedExtras.includes(extra.id) && (
                        <div className="absolute top-2 right-2 h-4 w-4 rounded-full bg-blue-500"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                  Notas adicionales
                </label>
                <div className="mt-1">
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                    placeholder="Información adicional sobre tu reserva..."
                  ></textarea>
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex justify-between items-center">
                    <span className="text-base font-medium text-gray-900">Precio base</span>
                    <span className="text-base font-medium text-gray-900">${selectedCar.price} x {totalDays || 0} días = ${selectedCar.price * (totalDays || 0)}</span>
                  </div>
                  
                  {selectedInsurance && (
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-base font-medium text-gray-900">Seguro {insuranceOptions.find(ins => ins.id === selectedInsurance)?.name}</span>
                      <span className="text-base font-medium text-gray-900">
                        ${insuranceOptions.find(ins => ins.id === selectedInsurance)?.price} x {totalDays || 0} días = ${(insuranceOptions.find(ins => ins.id === selectedInsurance)?.price || 0) * (totalDays || 0)}
                      </span>
                    </div>
                  )}
                  
                  {selectedExtras.length > 0 && selectedExtras.map(extraId => {
                    const extra = extraOptions.find(opt => opt.id === extraId);
                    return (
                      <div key={extraId} className="flex justify-between items-center mt-2">
                        <span className="text-base font-medium text-gray-900">{extra?.name}</span>
                        <span className="text-base font-medium text-gray-900">
                          ${extra?.price} x {totalDays || 0} días = ${(extra?.price || 0) * (totalDays || 0)}
                        </span>
                      </div>
                    );
                  })}
                  
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-lg font-bold text-blue-600">${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${
                    isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Procesando...
                    </>
                  ) : (
                    'Confirmar Reserva'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarBookingPage; 