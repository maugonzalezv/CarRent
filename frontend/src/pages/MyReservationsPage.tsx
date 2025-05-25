import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Mock data for current reservations
const mockReservations = [
  {
    id: 1,
    carName: 'Toyota Camry',
    carType: 'Sedán',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    pickupDate: '2023-10-10',
    returnDate: '2023-10-15',
    pickupLocation: 'Ciudad de México - Aeropuerto',
    returnLocation: 'Ciudad de México - Aeropuerto',
    price: 45,
    totalDays: 5,
    totalPrice: 225,
    status: 'confirmada'
  },
  {
    id: 2,
    carName: 'Honda CR-V',
    carType: 'SUV',
    image: 'https://images.unsplash.com/photo-1568844293986-ca047c5449f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    pickupDate: '2023-11-22',
    returnDate: '2023-11-30',
    pickupLocation: 'Guadalajara - Centro',
    returnLocation: 'Guadalajara - Centro',
    price: 55,
    totalDays: 8,
    totalPrice: 440,
    status: 'pendiente'
  }
];

const MyReservationsPage: React.FC = () => {
  const [reservations] = useState(mockReservations);
  const [loading, setLoading] = useState(false);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-MX', options);
  };

  const handleCancelReservation = (id: number) => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert(`Reserva #${id} cancelada con éxito.`);
      // En una aplicación real, aquí se eliminaría la reserva del estado
    }, 1000);
  };

  if (reservations.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <svg className="mx-auto h-24 w-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
          </svg>
          <h2 className="mt-2 text-2xl font-bold text-gray-900">No tienes reservas activas</h2>
          <p className="mt-1 text-gray-500">Parece que aún no has realizado ninguna reserva con nosotros.</p>
          <div className="mt-6">
            <Link
              to="/cars"
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Explorar vehículos disponibles
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="border-b border-gray-200 pb-5 mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Mis Reservas</h1>
          <p className="mt-2 text-sm text-gray-500">
            Administra tus reservas activas y próximas.
          </p>
        </div>

        <div className="grid gap-6">
          {reservations.map((reservation) => (
            <div key={reservation.id} className="bg-white overflow-hidden shadow-md rounded-lg">
              <div className="md:flex">
                <div className="md:flex-shrink-0 w-full md:w-1/4">
                  <img className="h-48 w-full object-cover md:h-full" src={reservation.image} alt={reservation.carName} />
                </div>
                <div className="p-6 md:p-8 w-full md:w-3/4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <div className="flex items-center">
                        <h2 className="text-xl font-semibold text-gray-900">{reservation.carName}</h2>
                        <span className={`ml-3 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          reservation.status === 'confirmada' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {reservation.status === 'confirmada' ? 'Confirmada' : 'Pendiente'}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{reservation.carType}</p>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                      <p className="text-lg font-bold text-gray-900">${reservation.totalPrice}</p>
                      <p className="text-sm text-gray-500">${reservation.price} x {reservation.totalDays} días</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 border-t border-gray-200 pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Recogida</h3>
                        <p className="mt-1 text-sm text-gray-900">{formatDate(reservation.pickupDate)}</p>
                        <p className="mt-1 text-sm text-gray-900">{reservation.pickupLocation}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Devolución</h3>
                        <p className="mt-1 text-sm text-gray-900">{formatDate(reservation.returnDate)}</p>
                        <p className="mt-1 text-sm text-gray-900">{reservation.returnLocation}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex flex-col sm:flex-row sm:justify-end gap-3">
                    <button
                      onClick={() => handleCancelReservation(reservation.id)}
                      disabled={loading}
                      className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Procesando...
                        </>
                      ) : 'Cancelar reserva'}
                    </button>
                    <Link
                      to={`/booking/${reservation.id}`}
                      className="inline-flex justify-center items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Ver detalles
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-lg font-medium text-blue-900">¿Necesitas ayuda con tus reservas?</h2>
          <p className="mt-2 text-sm text-blue-700">
            Nuestro equipo de atención al cliente está disponible 24/7 para asistirte con cualquier duda o problema.
          </p>
          <div className="mt-4">
            <button className="inline-flex items-center px-4 py-2 border border-blue-700 text-sm font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50">
              Contactar soporte
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReservationsPage; 