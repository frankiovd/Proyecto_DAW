import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-primary font-heading">FitLife</Link>
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-primary' : 'text-secondary hover:text-primary'} font-medium transition duration-300`}
            >
              Inicio
            </Link>
            <Link 
              to="/about" 
              className={`${isActive('/about') ? 'text-primary' : 'text-secondary hover:text-primary'} font-medium transition duration-300`}
            >
              Nosotros
            </Link>
            <Link 
              to="/plans" 
              className={`${isActive('/plans') ? 'text-primary' : 'text-secondary hover:text-primary'} font-medium transition duration-300`}
            >
              Planes
            </Link>
            <Link 
              to="/testimonials" 
              className={`${isActive('/testimonials') ? 'text-primary' : 'text-secondary hover:text-primary'} font-medium transition duration-300`}
            >
              Testimonios
            </Link>
            <Link 
              to="/contact" 
              className={`${isActive('/contact') ? 'text-primary' : 'text-secondary hover:text-primary'} font-medium transition duration-300`}
            >
              Contacto
            </Link>
            <Link 
              to="/bmi-calculator" 
              className={`${isActive('/bmi-calculator') ? 'text-primary' : 'text-secondary hover:text-primary'} font-medium transition duration-300`}
            >
              Calculadora IMC
            </Link>
            <Link 
              to="/workout-tracker" 
              className={`${isActive('/workout-tracker') ? 'text-primary' : 'text-secondary hover:text-primary'} font-medium transition duration-300`}
            >
              Seguimiento
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link 
              to="/login" 
              className="px-4 py-2 text-secondary font-medium hover:text-primary transition duration-300"
            >
              Iniciar Sesión
            </Link>
            <Link 
              to="/register" 
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition duration-300"
            >
              Registrarse
            </Link>
          </div>
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-secondary focus:outline-none"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden ${mobileMenuOpen ? '' : 'hidden'} pb-4`}>
          <Link 
            to="/" 
            className={`block py-2 ${isActive('/') ? 'text-primary' : 'text-secondary hover:text-primary'} font-medium`}
          >
            Inicio
          </Link>
          <Link 
            to="/about" 
            className={`block py-2 ${isActive('/about') ? 'text-primary' : 'text-secondary hover:text-primary'} font-medium`}
          >
            Nosotros
          </Link>
          <Link 
            to="/plans" 
            className={`block py-2 ${isActive('/plans') ? 'text-primary' : 'text-secondary hover:text-primary'} font-medium`}
          >
            Planes
          </Link>
          <Link 
            to="/testimonials" 
            className={`block py-2 ${isActive('/testimonials') ? 'text-primary' : 'text-secondary hover:text-primary'} font-medium`}
          >
            Testimonios
          </Link>
          <Link 
            to="/contact" 
            className={`block py-2 ${isActive('/contact') ? 'text-primary' : 'text-secondary hover:text-primary'} font-medium`}
          >
            Contacto
          </Link>
          <Link 
            to="/bmi-calculator" 
            className={`block py-2 ${isActive('/bmi-calculator') ? 'text-primary' : 'text-secondary hover:text-primary'} font-medium`}
          >
            Calculadora IMC
          </Link>
          <Link 
            to="/workout-tracker" 
            className={`block py-2 ${isActive('/workout-tracker') ? 'text-primary' : 'text-secondary hover:text-primary'} font-medium`}
          >
            Seguimiento
          </Link>
          <div className="flex space-x-4 mt-4">
            <Link 
              to="/login" 
              className="px-4 py-2 text-secondary font-medium hover:text-primary transition duration-300"
            >
              Iniciar Sesión
            </Link>
            <Link 
              to="/register" 
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition duration-300"
            >
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
