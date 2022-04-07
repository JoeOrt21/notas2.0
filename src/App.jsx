import { useState } from "react";

function App() {
  //TODO: Presentar el concepto STATE
//hooks

const [inputState, setInputState] = useState({
  titulo: "",
  fecha: "",
  nota: "",
});


  const handleInputChange = (event) => {
    setInputState({
      ...inputState,
      [event.target.name]: event.target.value,

    });
  };

  const handleResetClick = () =>{
    setInputState({titulo:"", fecha:"", nota:""});
  }

  


  return (
    <div className="App">
      <h3>Notas</h3>
      <label htmlFor="titulo">titulo</label>
      <input 
       id="titulo" 
       name="titulo" 
       type="text" 
       onChange={handleInputChange}
       value={inputState.titulo}/>


      <label htmlFor="fecha">fecha</label>
      <input 
       id="fecha" 
       name="fecha" 
       type="text" 
       onChange={handleInputChange}
       value={inputState.fecha}/>


      <label htmlFor="nota">nota</label>
      <input 
       id="nota" 
       name="nota" 
       type="text" 
       onChange={handleInputChange}
       value={inputState.nota}/>

      <button
      type="button"
      className="btn btn-primary"
      onClick={handleResetClick}
      style= {{marginLeft:"10px"}}
      >
        RESET
      </button>
    </div>
  );
}

export default App;
