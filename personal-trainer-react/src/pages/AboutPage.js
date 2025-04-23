import React from 'react';

const AboutPage = () => {
  return (
    <>
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-4">Sobre Nosotros</h1>
          <p className="text-white text-lg max-w-3xl mx-auto">Conoce más sobre FitLife, nuestra filosofía y nuestro equipo de entrenadores profesionales.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold text-secondary font-heading mb-6">Nuestra Historia</h2>
              <p className="text-gray-600 mb-4">FitLife nació en 2015 con una misión clara: transformar vidas a través del entrenamiento personalizado y un enfoque integral de la salud y el bienestar.</p>
              <p className="text-gray-600 mb-4">Fundada por un grupo de entrenadores apasionados y con amplia experiencia en el sector del fitness, nuestra empresa ha crecido hasta convertirse en un referente en el entrenamiento personal en España.</p>
              <p className="text-gray-600 mb-4">Lo que comenzó como un pequeño estudio con un puñado de clientes, se ha convertido en una comunidad vibrante de personas comprometidas con su salud y bienestar, guiadas por nuestro equipo de profesionales altamente cualificados.</p>
              <p className="text-gray-600">Nuestra filosofía se basa en la creencia de que cada persona es única, y por lo tanto, su plan de entrenamiento también debe serlo. Nos enorgullece ofrecer programas verdaderamente personalizados que se adaptan a las necesidades, objetivos y circunstancias individuales de cada cliente.</p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg" alt="Nuestra Historia" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pl-10">
              <h2 className="text-3xl font-bold text-secondary font-heading mb-6">Nuestra Misión</h2>
              <p className="text-gray-600 mb-4">En FitLife, nuestra misión es empoderar a las personas para que alcancen su máximo potencial físico y mental a través de un enfoque personalizado y basado en la evidencia científica.</p>
              <p className="text-gray-600 mb-4">Nos comprometemos a proporcionar un servicio de la más alta calidad, con entrenadores certificados y apasionados que se preocupan genuinamente por el progreso y bienestar de cada cliente.</p>
              <p className="text-gray-600 mb-4">Creemos en la educación continua, tanto para nuestro equipo como para nuestros clientes. Nos mantenemos al día con las últimas investigaciones y tendencias en el campo del fitness y la nutrición, y compartimos este conocimiento para ayudar a nuestros clientes a tomar decisiones informadas sobre su salud.</p>
              <p className="text-gray-600">Nuestra visión es crear un mundo donde el ejercicio y la vida saludable sean accesibles, disfrutables y sostenibles para todos, independientemente de su nivel de condición física o experiencia previa.</p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.pexels.com/photos/6456300/pexels-photo-6456300.jpeg" alt="Nuestra Misión" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary font-heading mb-4">Nuestros Valores</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Estos son los principios que guían nuestro trabajo y nuestras relaciones con los clientes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-light p-8 rounded-lg shadow-md text-center transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-heart text-2xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">Pasión</h3>
              <p className="text-gray-600">Amamos lo que hacemos y nos apasiona ayudar a nuestros clientes a alcanzar sus objetivos y transformar sus vidas.</p>
            </div>
            <div className="bg-light p-8 rounded-lg shadow-md text-center transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-users text-2xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">Comunidad</h3>
              <p className="text-gray-600">Creemos en el poder de la comunidad y el apoyo mutuo para lograr resultados duraderos y significativos.</p>
            </div>
            <div className="bg-light p-8 rounded-lg shadow-md text-center transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-graduation-cap text-2xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">Educación</h3>
              <p className="text-gray-600">Nos comprometemos con la formación continua y compartimos nuestro conocimiento para empoderar a nuestros clientes.</p>
            </div>
            <div className="bg-light p-8 rounded-lg shadow-md text-center transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-bullseye text-2xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">Resultados</h3>
              <p className="text-gray-600">Nos enfocamos en obtener resultados medibles y sostenibles, adaptando nuestros métodos a cada individuo.</p>
            </div>
            <div className="bg-light p-8 rounded-lg shadow-md text-center transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-balance-scale text-2xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">Equilibrio</h3>
              <p className="text-gray-600">Promovemos un enfoque equilibrado de la salud que integra el ejercicio, la nutrición y el bienestar mental.</p>
            </div>
            <div className="bg-light p-8 rounded-lg shadow-md text-center transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-shield-alt text-2xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">Integridad</h3>
              <p className="text-gray-600">Actuamos con honestidad, transparencia y ética en todas nuestras interacciones y decisiones.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary font-heading mb-4">Nuestro Equipo</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Conoce a nuestros entrenadores profesionales, apasionados y comprometidos con tu éxito.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <img src="https://images.pexels.com/photos/6456155/pexels-photo-6456155.jpeg" alt="Entrenador" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">Carlos Martínez</h3>
                <p className="text-primary font-medium mb-4">Director y Entrenador Principal</p>
                <p className="text-gray-600 mb-4">Especialista en entrenamiento de fuerza y acondicionamiento físico con más de 10 años de experiencia. Certificado por NSCA y ACSM.</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <img src="https://images.pexels.com/photos/6456209/pexels-photo-6456209.jpeg" alt="Entrenadora" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">Laura Sánchez</h3>
                <p className="text-primary font-medium mb-4">Entrenadora y Nutricionista</p>
                <p className="text-gray-600 mb-4">Especialista en nutrición deportiva y entrenamiento funcional. Graduada en Nutrición y certificada como entrenadora personal por ACE.</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <img src="https://images.pexels.com/photos/6456303/pexels-photo-6456303.jpeg" alt="Entrenador" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">Miguel Rodríguez</h3>
                <p className="text-primary font-medium mb-4">Entrenador de Rehabilitación</p>
                <p className="text-gray-600 mb-4">Especialista en rehabilitación y entrenamiento correctivo. Fisioterapeuta y certificado en Corrective Exercise por NASM.</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="contact.html" className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-opacity-90 transition duration-300">Contacta con Nuestro Equipo</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
