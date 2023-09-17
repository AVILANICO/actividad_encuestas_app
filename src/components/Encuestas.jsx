import React from 'react';

function Encuestas({ encuestas }) {
  return (
    <div className='encuestas'>
      <h2>Encuestas Disponibles</h2>
      <>
        {encuestas.map(encuesta => (
          <>
            <div>
              <ul key={encuesta.id} className='preguntas'>{encuesta.id} {encuesta.pregunta}</ul>
            </div>
            <div>
              {encuesta.opciones.map(opcion =>
                <div>
                  <input type="radio" name="quest" id={encuesta.id} />
                  <label htmlFor={encuesta.id}>{opcion}</label>
                </div>
              )}
            </div>
          </>
        ))}

      </>
    </div>
  );
}
export default Encuestas;