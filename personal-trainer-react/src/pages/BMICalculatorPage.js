import React, { useState } from 'react';

const BMICalculatorPage = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [showResult, setShowResult] = useState(false);

  const calculateBMI = () => {
    if (!height || !weight || height <= 0 || weight <= 0) {
      alert('Por favor, introduce valores válidos para altura y peso.');
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    const roundedBMI = Math.round(bmiValue * 10) / 10;

    setBmi(roundedBMI);

    let categoryValue, descriptionValue, categoryColor;

    if (bmiValue < 18.5) {
      categoryValue = 'Bajo peso';
      descriptionValue = 'Tu IMC indica que podrías tener un peso inferior al recomendado. Esto podría estar asociado con ciertos problemas de salud.';
      categoryColor = 'text-blue-600';
    } else if (bmiValue < 25) {
      categoryValue = 'Peso normal';
      descriptionValue = '¡Felicidades! Tu IMC indica que tienes un peso saludable para tu altura.';
      categoryColor = 'text-green-600';
    } else if (bmiValue < 30) {
      categoryValue = 'Sobrepeso';
      descriptionValue = 'Tu IMC indica que podrías tener sobrepeso. Considera adoptar hábitos más saludables de alimentación y ejercicio.';
      categoryColor = 'text-yellow-600';
    } else {
      categoryValue = 'Obesidad';
      descriptionValue = 'Tu IMC indica obesidad, lo que puede aumentar el riesgo de desarrollar problemas de salud. Te recomendamos consultar con un profesional.';
      categoryColor = 'text-red-600';
    }

    setCategory(categoryValue);
    setDescription(descriptionValue);
    setShowResult(true);
  };

  return (
    <>
      {/* Page Header */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-4">Calculadora de IMC</h1>
          <p className="text-white text-lg max-w-3xl mx-auto">Calcula tu Índice de Masa Corporal (IMC) y descubre si estás en tu peso ideal.</p>
        </div>
      </section>

      {/* BMI Calculator Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-light p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-secondary font-heading mb-6">Calcula tu IMC</h2>
              <p className="text-gray-600 mb-8">El Índice de Masa Corporal (IMC) es una medida que relaciona el peso y la altura para evaluar si una persona tiene un peso saludable. Es una herramienta útil para identificar posibles problemas de peso, aunque no tiene en cuenta la composición corporal (músculo vs grasa).</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="mb-6">
                    <label htmlFor="height" className="block text-gray-700 font-medium mb-2">Altura (cm)</label>
                    <input 
                      type="number" 
                      id="height" 
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                      placeholder="Ej: 170"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="weight" className="block text-gray-700 font-medium mb-2">Peso (kg)</label>
                    <input 
                      type="number" 
                      id="weight" 
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                      placeholder="Ej: 70"
                    />
                  </div>
                  <button 
                    onClick={calculateBMI}
                    className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-opacity-90 transition duration-300 w-full"
                  >
                    Calcular IMC
                  </button>
                </div>
                
                {showResult && (
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-secondary mb-4">Tu resultado:</h3>
                    <div className="mb-4">
                      <p className="text-gray-600">Tu IMC es:</p>
                      <p className="text-3xl font-bold text-primary">{bmi}</p>
                    </div>
                    <div className="mb-4">
                      <p className="text-gray-600">Categoría:</p>
                      <p className={`text-xl font-bold ${
                        category === 'Bajo peso' ? 'text-blue-600' : 
                        category === 'Peso normal' ? 'text-green-600' : 
                        category === 'Sobrepeso' ? 'text-yellow-600' : 
                        'text-red-600'
                      }`}>{category}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">{description}</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-bold text-secondary mb-4">Categorías de IMC</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="py-2 px-4 text-left">IMC</th>
                        <th className="py-2 px-4 text-left">Categoría</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-blue-100">
                        <td className="py-2 px-4">Menos de 18.5</td>
                        <td className="py-2 px-4">Bajo peso</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-2 px-4">18.5 - 24.9</td>
                        <td className="py-2 px-4">Peso normal</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-2 px-4">25.0 - 29.9</td>
                        <td className="py-2 px-4">Sobrepeso</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4">30.0 o más</td>
                        <td className="py-2 px-4">Obesidad</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-gray-600">Fuente: Organización Mundial de la Salud (OMS)</p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-secondary mb-4">¿Qué significa mi IMC?</h3>
                <p className="text-gray-600 mb-4">El IMC es una herramienta de evaluación inicial, pero no es un diagnóstico. Un IMC alto puede indicar un exceso de grasa corporal, mientras que un IMC bajo puede indicar un peso insuficiente.</p>
                <p className="text-gray-600 mb-4">Es importante tener en cuenta que el IMC no distingue entre masa muscular y grasa corporal. Por ejemplo, los atletas pueden tener un IMC alto debido a su mayor masa muscular, no porque tengan exceso de grasa.</p>
                <p className="text-gray-600">Para una evaluación más completa de tu composición corporal y estado de salud, te recomendamos consultar con un profesional de la salud o un entrenador personal.</p>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">¿Quieres mejorar tu composición corporal y alcanzar un peso saludable?</p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <a href="/plans" className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-opacity-90 transition duration-300">Ver Planes de Entrenamiento</a>
                  <a href="/contact" className="px-6 py-3 bg-secondary text-white font-medium rounded-md hover:bg-opacity-90 transition duration-300">Contactar con un Entrenador</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BMICalculatorPage;
