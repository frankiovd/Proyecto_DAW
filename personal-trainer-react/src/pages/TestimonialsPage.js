import React from 'react';

const TestimonialsPage = () => {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-4">Lo que dicen nuestros clientes</h1>
          <p className="text-white text-lg max-w-3xl mx-auto">Descubre cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos y transformar sus vidas.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-light p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-primary">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-gray-600 mb-6">"Desde que empecé a entrenar con FitLife, he notado una mejora significativa en mi condición física y bienestar general. Mi entrenador personal ha sido clave en mi transformación."</p>
              <div className="flex items-center">
                <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Cliente" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold text-secondary">Laura Martínez</h4>
                  <p className="text-gray-500 text-sm">Cliente desde 2021</p>
                </div>
              </div>
            </div>
            <div className="bg-light p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-primary">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-gray-600 mb-6">"El plan personalizado que me diseñaron se adaptó perfectamente a mis necesidades. He conseguido perder peso y ganar masa muscular de forma equilibrada. ¡Totalmente recomendable!"</p>
              <div className="flex items-center">
                <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Cliente" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold text-secondary">Carlos Rodríguez</h4>
                  <p className="text-gray-500 text-sm">Cliente desde 2022</p>
                </div>
              </div>
            </div>
            <div className="bg-light p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-primary">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
              <p className="text-gray-600 mb-6">"Lo que más valoro de FitLife es el seguimiento constante y la motivación que me brindan. Gracias a ellos he conseguido mantener la constancia en mi entrenamiento y ver resultados."</p>
              <div className="flex items-center">
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Cliente" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold text-secondary">Ana García</h4>
                  <p className="text-gray-500 text-sm">Cliente desde 2020</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="/testimonials" className="inline-flex items-center text-primary font-medium hover:underline">
              Ver más testimonios
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage;
