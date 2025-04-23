import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Por favor, introduce tu correo electrónico.';
    if (!password) newErrors.password = 'Por favor, introduce tu contraseña.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    // Here you would send the login data to the backend API
    setSuccess(true);
  };

  return (
    <>
      {/* Page Header */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-4">Iniciar Sesión</h1>
          <p className="text-white text-lg max-w-3xl mx-auto">Accede a tu cuenta para gestionar tus entrenamientos y planes.</p>
        </div>
      </section>

      {/* Login Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-md">
          {success && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded">
              Has iniciado sesión correctamente.
            </div>
          )}
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Contraseña</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-opacity-90 transition duration-300"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
