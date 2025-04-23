import React, { useState, useEffect } from 'react';

const WorkoutTrackerPage = () => {
  const [workoutDate, setWorkoutDate] = useState('');
  const [workoutType, setWorkoutType] = useState('');
  const [workoutNotes, setWorkoutNotes] = useState('');
  const [exercises, setExercises] = useState([]);
  const [workoutHistory, setWorkoutHistory] = useState([]);

  useEffect(() => {
    setWorkoutDate(new Date().toISOString().split('T')[0]);
    loadWorkoutHistory();
  }, []);

  const addExercise = () => {
    setExercises([...exercises, { name: '', category: '', sets: [{ weight: '', reps: '' }] }]);
  };

  const removeExercise = (index) => {
    const newExercises = exercises.filter((_, i) => i !== index);
    setExercises(newExercises);
  };

  const updateExercise = (index, field, value) => {
    const newExercises = [...exercises];
    newExercises[index][field] = value;
    setExercises(newExercises);
  };

  const addSet = (exerciseIndex) => {
    const newExercises = [...exercises];
    newExercises[exerciseIndex].sets.push({ weight: '', reps: '' });
    setExercises(newExercises);
  };

  const removeSet = (exerciseIndex, setIndex) => {
    const newExercises = [...exercises];
    newExercises[exerciseIndex].sets = newExercises[exerciseIndex].sets.filter((_, i) => i !== setIndex);
    setExercises(newExercises);
  };

  const updateSet = (exerciseIndex, setIndex, field, value) => {
    const newExercises = [...exercises];
    newExercises[exerciseIndex].sets[setIndex][field] = value;
    setExercises(newExercises);
  };

  const clearForm = () => {
    setWorkoutDate(new Date().toISOString().split('T')[0]);
    setWorkoutType('');
    setWorkoutNotes('');
    setExercises([]);
    addExercise();
  };

  const saveWorkout = () => {
    if (!workoutDate) {
      alert('Por favor, selecciona una fecha para el entrenamiento.');
      return;
    }
    if (!workoutType) {
      alert('Por favor, selecciona un tipo de entrenamiento.');
      return;
    }
    for (const exercise of exercises) {
      if (!exercise.name) {
        alert('Por favor, introduce un nombre para todos los ejercicios.');
        return;
      }
      for (const set of exercise.sets) {
        if (!set.weight || !set.reps) {
          alert('Por favor, completa el peso y las repeticiones para todas las series.');
          return;
        }
      }
    }

    const workout = {
      id: Date.now(),
      date: workoutDate,
      type: workoutType,
      notes: workoutNotes,
      exercises,
      createdAt: new Date().toISOString(),
    };

    const storedWorkouts = JSON.parse(localStorage.getItem('workouts') || '[]');
    storedWorkouts.push(workout);
    localStorage.setItem('workouts', JSON.stringify(storedWorkouts));
    alert('¡Entrenamiento guardado correctamente!');
    loadWorkoutHistory();
    clearForm();
  };

  const loadWorkoutHistory = () => {
    const storedWorkouts = JSON.parse(localStorage.getItem('workouts') || '[]');
    setWorkoutHistory(storedWorkouts.sort((a, b) => new Date(b.date) - new Date(a.date)));
  };

  const toggleWorkoutDetails = (id) => {
    const element = document.getElementById(`workout-details-${id}`);
    if (element) {
      element.classList.toggle('hidden');
    }
  };

  const deleteWorkout = (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este entrenamiento? Esta acción no se puede deshacer.')) {
      const storedWorkouts = JSON.parse(localStorage.getItem('workouts') || '[]');
      const newWorkouts = storedWorkouts.filter((w) => w.id !== id);
      localStorage.setItem('workouts', JSON.stringify(newWorkouts));
      loadWorkoutHistory();
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-4">Seguimiento de Entrenamientos</h1>
          <p className="text-white text-lg max-w-3xl mx-auto">Registra y haz seguimiento de tus entrenamientos para monitorizar tu progreso y mantener la motivación.</p>
        </div>
      </section>

      {/* Workout Tracker Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-light p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-secondary font-heading mb-6">Registra tu entrenamiento</h2>

              <div className="mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <label htmlFor="workout-date" className="block text-gray-700 font-medium mb-2">Fecha del entrenamiento</label>
                    <input
                      type="date"
                      id="workout-date"
                      value={workoutDate}
                      onChange={(e) => setWorkoutDate(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="workout-type" className="block text-gray-700 font-medium mb-2">Tipo de entrenamiento</label>
                    <select
                      id="workout-type"
                      value={workoutType}
                      onChange={(e) => setWorkoutType(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Selecciona un tipo</option>
                      <option value="Fuerza">Fuerza</option>
                      <option value="Cardio">Cardio</option>
                      <option value="HIIT">HIIT</option>
                      <option value="Flexibilidad">Flexibilidad</option>
                      <option value="Funcional">Funcional</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="workout-notes" className="block text-gray-700 font-medium mb-2">Notas (opcional)</label>
                  <textarea
                    id="workout-notes"
                    rows="2"
                    value={workoutNotes}
                    onChange={(e) => setWorkoutNotes(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Añade notas sobre tu entrenamiento..."
                  />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-secondary mb-4">Ejercicios</h3>

                {exercises.map((exercise, exerciseIndex) => (
                  <div key={exerciseIndex} className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
                      <div className="flex-grow mb-4 md:mb-0">
                        <label className="block text-gray-700 font-medium mb-2">Nombre del ejercicio</label>
                        <input
                          type="text"
                          className="exercise-name w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Ej: Press de banca"
                          value={exercise.name}
                          onChange={(e) => {
                            const newExercises = [...exercises];
                            newExercises[exerciseIndex].name = e.target.value;
                            setExercises(newExercises);
                          }}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Categoría</label>
                        <select
                          className="exercise-category px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          value={exercise.category}
                          onChange={(e) => {
                            const newExercises = [...exercises];
                            newExercises[exerciseIndex].category = e.target.value;
                            setExercises(newExercises);
                          }}
                        >
                          <option value="">Selecciona</option>
                          <option value="Pecho">Pecho</option>
                          <option value="Espalda">Espalda</option>
                          <option value="Piernas">Piernas</option>
                          <option value="Hombros">Hombros</option>
                          <option value="Brazos">Brazos</option>
                          <option value="Core">Core</option>
                          <option value="Cardio">Cardio</option>
                          <option value="Otro">Otro</option>
                        </select>
                      </div>
                    </div>

                    <div className="sets-container">
                      <div className="grid grid-cols-4 gap-2 mb-2 font-medium text-gray-700">
                        <div>Serie</div>
                        <div>Peso (kg)</div>
                        <div>Repeticiones</div>
                        <div></div>
                      </div>

                      <div className="sets-list">
                        {exercise.sets.map((set, setIndex) => (
                          <div key={setIndex} className="set-row grid grid-cols-4 gap-2 mb-2 items-center">
                            <div className="set-number">{setIndex + 1}</div>
                            <div>
                              <input
                                type="number"
                                className="set-weight w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="Peso"
                                value={set.weight}
                                onChange={(e) => {
                                  const newExercises = [...exercises];
                                  newExercises[exerciseIndex].sets[setIndex].weight = e.target.value;
                                  setExercises(newExercises);
                                }}
                              />
                            </div>
                            <div>
                              <input
                                type="number"
                                className="set-reps w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="Reps"
                                value={set.reps}
                                onChange={(e) => {
                                  const newExercises = [...exercises];
                                  newExercises[exerciseIndex].sets[setIndex].reps = e.target.value;
                                  setExercises(newExercises);
                                }}
                              />
                            </div>
                            <div>
                              <button
                                type="button"
                                className="remove-set px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
                                onClick={() => {
                                  const newExercises = [...exercises];
                                  newExercises[exerciseIndex].sets.splice(setIndex, 1);
                                  setExercises(newExercises);
                                }}
                              >
                                <i className="fas fa-times"></i>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      <button
                        type="button"
                        className="add-set mt-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                        onClick={() => {
                          const newExercises = [...exercises];
                          newExercises[exerciseIndex].sets.push({ weight: '', reps: '' });
                          setExercises(newExercises);
                        }}
                      >
                        <i className="fas fa-plus mr-1"></i> Añadir serie
                      </button>
                    </div>

                    <div className="flex justify-end mt-4">
                      <button
                        type="button"
                        className="remove-exercise px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
                        onClick={() => {
                          const newExercises = [...exercises];
                          newExercises.splice(exerciseIndex, 1);
                          setExercises(newExercises);
                        }}
                      >
                        <i className="fas fa-trash mr-1"></i> Eliminar ejercicio
                      </button>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-opacity-90 transition duration-300"
                  onClick={addExercise}
                >
                  <i className="fas fa-plus mr-2"></i> Añadir ejercicio
                </button>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  className="px-6 py-3 bg-gray-500 text-white font-medium rounded-md hover:bg-opacity-90 transition duration-300"
                  onClick={clearForm}
                >
                  <i className="fas fa-times mr-2"></i> Limpiar formulario
                </button>
                <button
                  type="button"
                  className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-opacity-90 transition duration-300"
                  onClick={saveWorkout}
                >
                  <i className="fas fa-save mr-2"></i> Guardar entrenamiento
                </button>
              </div>
            </div>

            {/* Workout History */}
            <div className="mt-12 bg-light p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-secondary font-heading mb-6">Historial de entrenamientos</h2>

              {workoutHistory.length === 0 ? (
                <div className="text-center py-8">
                  <i className="fas fa-dumbbell text-gray-300 text-5xl mb-4"></i>
                  <p className="text-gray-500">No hay entrenamientos registrados. ¡Comienza a registrar tus entrenamientos arriba!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {workoutHistory.map((workout) => (
                    <div key={workout.id} className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-secondary">
                            {new Date(workout.date).toLocaleDateString('es-ES', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </h3>
                          <p className="text-gray-600">{workout.type}</p>
                        </div>
                        <div className="flex space-x-2 mt-2 md:mt-0">
                          <button
                            className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                            onClick={() => {
                              const details = document.getElementById(`workout-details-${workout.id}`);
                              if (details) {
                                details.classList.toggle('hidden');
                              }
                            }}
                          >
                            <i className="fas fa-eye mr-1"></i> Ver
                          </button>
                          <button
                            className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
                            onClick={() => {
                              if (window.confirm('¿Estás seguro de que quieres eliminar este entrenamiento? Esta acción no se puede deshacer.')) {
                                const newHistory = workoutHistory.filter((w) => w.id !== workout.id);
                                setWorkoutHistory(newHistory);
                                localStorage.setItem('workouts', JSON.stringify(newHistory));
                              }
                            }}
                          >
                            <i className="fas fa-trash mr-1"></i> Eliminar
                          </button>
                        </div>
                      </div>
                      <div id={`workout-details-${workout.id}`} className="hidden">
                        {workout.notes && (
                          <div className="mb-4 p-3 bg-gray-50 rounded-md">
                            <p className="text-sm font-medium text-gray-700">Notas:</p>
                            <p className="text-gray-600">{workout.notes}</p>
                          </div>
                        )}
                        {workout.exercises.map((exercise, index) => (
                          <div key={index} className="border-t border-gray-100 pt-4">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-bold text-gray-700">{exercise.name}</h4>
                              {exercise.category && (
                                <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">{exercise.category}</span>
                              )}
                            </div>
                            <div className="overflow-x-auto">
                              <table className="min-w-full text-sm">
                                <thead>
                                  <tr className="bg-gray-50">
                                    <th className="py-2 px-3 text-left">Serie</th>
                                    <th className="py-2 px-3 text-left">Peso (kg)</th>
                                    <th className="py-2 px-3 text-left">Repeticiones</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {exercise.sets.map((set, setIndex) => (
                                    <tr key={setIndex}>
                                      <td className="py-2 px-3">{setIndex + 1}</td>
                                      <td className="py-2 px-3">{set.weight}</td>
                                      <td className="py-2 px-3">{set.reps}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-bold text-secondary mb-4">Beneficios del seguimiento de entrenamientos</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                  <span>Monitoriza tu progreso y visualiza tus mejoras a lo largo del tiempo</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                  <span>Mantén la motivación al ver cómo aumentas pesos o repeticiones</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                  <span>Identifica patrones y áreas de mejora en tu entrenamiento</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                  <span>Comparte tu progreso con tu entrenador para recibir feedback personalizado</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">Nota: Esta herramienta guarda los datos en el almacenamiento local de tu navegador. Para una experiencia completa con almacenamiento en la nube y más funcionalidades, regístrate en nuestra plataforma.</p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">¿Quieres llevar tu seguimiento al siguiente nivel?</p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="/plans" className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-opacity-90 transition duration-300">Ver Planes de Entrenamiento</a>
                <a href="/contact" className="px-6 py-3 bg-secondary text-white font-medium rounded-md hover:bg-opacity-90 transition duration-300">Contactar con un Entrenador</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkoutTrackerPage;
