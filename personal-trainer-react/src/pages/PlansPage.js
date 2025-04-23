import React from 'react';

const PlansPage = () => {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-4">Planes de Entrenamiento</h1>
          <p className="text-white text-lg max-w-3xl mx-auto">Descubre nuestros planes personalizados diseñados para ayudarte a alcanzar tus objetivos específicos.</p>
        </div>
      </section>

      {/* Plans Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary font-heading mb-4">Entrenamiento Personalizado para Todos</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">En FitLife, entendemos que cada persona es única, con diferentes objetivos, niveles de condición física y preferencias. Por eso, ofrecemos una variedad de planes de entrenamiento que pueden adaptarse a tus necesidades específicas.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h3 className="text-2xl font-bold text-secondary font-heading mb-4">¿Cómo Funcionan Nuestros Planes?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-secondary">Evaluación Inicial</h4>
                    <p className="text-gray-600">Comenzamos con una evaluación completa para entender tu nivel actual, objetivos y cualquier limitación o consideración especial.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-secondary">Diseño del Plan</h4>
                    <p className="text-gray-600">Creamos un plan personalizado basado en tu evaluación, adaptado a tus objetivos específicos y preferencias.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-secondary">Entrenamiento y Seguimiento</h4>
                    <p className="text-gray-600">Trabajamos contigo en sesiones regulares, proporcionando orientación, corrección y motivación. Realizamos un seguimiento de tu progreso.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-secondary">Ajustes y Evolución</h4>
                    <p className="text-gray-600">Ajustamos tu plan según sea necesario basándonos en tu progreso y feedback, asegurando que sigas avanzando hacia tus objetivos.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg" alt="Entrenamiento Personalizado" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Plans Pricing */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary font-heading mb-4">Nuestros Planes de Entrenamiento</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Elige el plan que mejor se adapte a tus necesidades y objetivos.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan Básico */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-primary py-4">
                <h3 className="text-xl font-bold text-white text-center">Plan Básico</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-secondary">€49</span>
                  <span className="text-gray-600">/mes</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <i className="fas fa-check text-primary mr-2"></i>
                    <span>2 sesiones semanales</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-primary mr-2"></i>
                    <span>Evaluación inicial</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-primary mr-2"></i>
                    <span>Plan de entrenamiento básico</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-primary mr-2"></i>
                    <span>Seguimiento mensual</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <i className="fas fa-times mr-2"></i>
                    <span>Asesoramiento nutricional</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <i className="fas fa-times mr-2"></i>
                    <span>App de seguimiento</span>
                  </li>
                </ul>
                <a href="/register?plan=basic" className="block w-full py-3 bg-primary text-white text-center rounded-md hover:bg-opacity-90 transition duration-300">Seleccionar Plan</a>
              </div>
            </div>

            {/* Plan Premium */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform scale-105 z-10 border-2 border-secondary">
              <div className="bg-secondary py-4 relative">
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-1/2 rounded">POPULAR</div>
                <h3 className="text-xl font-bold text-white text-center">Plan Premium</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-secondary">€89</span>
                  <span className="text-gray-600">/mes</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <i className="fas fa-check text-primary mr-2"></i>
                    <span>3 sesiones semanales</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-primary mr-2"></i>
                    <span>Evaluación completa</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-primary mr-2"></i>
                    <span>Plan de entrenamiento avanzado</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-primary mr-2"></i>
                    <span>Seguimiento quincenal</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-primary mr-2"></i>
                    <span>Asesoramiento nutricional básico</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <i className="fas fa-times mr-2"></i>
                    <span>App de seguimiento</span>
                  </li>
                </ul>
                <a href="/register?plan=premium" className="block w-full py-3 bg-secondary text-white text-center rounded-md hover:bg-opacity-90 transition duration-300">Seleccionar Plan</a>
              </div>
            </div>

            {/* Plan Elite */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-primary py-4">
                <h3 className="text-xl font-bold text-white text-center">Plan Elite</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-secondary">€129</span>
                  <span className="text-gray-600">/mes</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <i className="fas fa-check text-primary mr-2"></i>
                    <span>5 sesiones semanales</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-primary mr-2"></i>
                    <span>Evaluación completa con análisis</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-primary mr-2"></i>
                    <span>Plan de entrenamiento personalizado</span>
                  </li>
                  <li className="flex items-center">
                    <i class="fas fa-check text-primary mr-2"></i>
                    <span>Seguimiento semanal</span>
                  </li>
                  <li className="flex items-center">
                    <i class="fas fa-check text-primary mr-2"></i>
                    <span>Plan nutricional completo</span>
                  </li>
                  <li className="flex items-center">
                    <i class="fas fa-check text-primary mr-2"></i>
                    <span>Acceso a app de seguimiento</span>
                  </li>
                </ul>
                <a href="/register?plan=elite" className="block w-full py-3 bg-primary text-white text-center rounded-md hover:bg-opacity-90 transition duration-300">Seleccionar Plan</a>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">¿Necesitas un plan más específico? Contáctanos para crear un plan totalmente personalizado.</p>
            <a href="/contact" className="inline-block px-6 py-3 bg-secondary text-white font-medium rounded-md hover:bg-opacity-90 transition duration-300">Contactar para Plan Personalizado</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlansPage;
