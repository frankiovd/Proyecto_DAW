import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">FitLife</h3>
            <p className="text-gray-400 mb-4">Transformando vidas a través del entrenamiento personalizado y un estilo de vida saludable.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary transition duration-300">Inicio</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition duration-300">Nosotros</Link></li>
              <li><Link to="/plans" className="text-gray-400 hover:text-primary transition duration-300">Planes</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-primary transition duration-300">Testimonios</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition duration-300">Contacto</Link></li>
              <li><Link to="/bmi-calculator" className="text-gray-400 hover:text-primary transition duration-300">Calculadora IMC</Link></li>
              <li><Link to="/workout-tracker" className="text-gray-400 hover:text-primary transition duration-300">Seguimiento</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Servicios</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition duration-300">Entrenamiento Personal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition duration-300">Asesoramiento Nutricional</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition duration-300">Entrenamiento en Grupo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition duration-300">Programas Online</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition duration-300">Evaluación Física</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-primary mt-1 mr-3"></i>
                <span className="text-gray-400">Calle Principal 123, Madrid, España</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone text-primary mr-3"></i>
                <span className="text-gray-400">+34 912 345 678</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-primary mr-3"></i>
                <span className="text-gray-400">info@fitlife.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock text-primary mr-3"></i>
                <span className="text-gray-400">Lun-Vie: 7:00 - 21:00</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} FitLife - Entrenamiento Personal. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
