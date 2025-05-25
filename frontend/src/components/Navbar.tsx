import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/cars" className="text-white font-bold text-xl">CarRent</Link>
          </div>
          
          {/* Enlaces centrados */}
          <div className="flex-grow flex justify-center">
            <div className="flex space-x-8">
              <Link to="/cars" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md font-medium">Vehículos</Link>
              <Link to="/reservations" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md font-medium">Mis Reservas</Link>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="flex space-x-2">
              <button 
                onClick={handleLogin}
                className="bg-blue-700 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-800 transition-colors duration-300"
              >
                Iniciar Sesión
              </button>
              <button 
                onClick={handleRegister}
                className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                Registrarse
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 