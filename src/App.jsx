import { useState } from "react";

function App() {

//hooks : Funciones especificas de react todos comienzan con la palabra "use"

  const [inputState,setInputState] = useState  ({
    titulo: "",
    fecha: "",
    nota: "",
  }); //VALOR INICIAL DEL STATE

  const initialState = JSON.parse (localStorage.getItem("notas")) || [];

  const [notas, setNotas] = useState(initialState);

  

  const handleInputChange = (event) => { 
    //console.log(event.target);
      setInputState({

        ...inputState,
        [event.target.name]: event.target.value,
    
    });

  };

  const handleClickLimpiar = ( ) => {
    setInputState ({titulo: " ", fecha: " ", nota: " "});
  };


  const handleClickGuardar = () => {
    
    setNotas.push(inputState)
    localStorage.setItem("notas",JSON.stringify(notas));
    handleClickLimpiar();
  };

  const handleInputClean = () => { 
    setInputState({
        titulo: "",
        fecha: "",
        nota: "",
    });
   };
   
   const handleBorrarNota = (index) => {
     const nuevoArreglo = []

     notas.forEach((nota, i) => {
       if (index !== i){
         nuevoArreglo.push(nota);
     };
    
     });

     localStorage.setItem("notas",JSON.stringify(nuevoArreglo));
     setNotas = [...nuevoArreglo];

   };
    
  return (
    <div className="App container">
      <div className="row"> 
        <div className="col"> 
            <h3>Lista</h3>
            {
              notas.length === 0 &&
              "Al momento momento no tiene notas guardadas. Puedes crear unas en el formularios antiguo" 
            } 

            {
              notas.length !== 0 &&(
              <ol>
              {notas.map((item, index)=> {
                return(
                  <li>
                    { item.titulo }({item.fecha})
                    <i 
                    class="bi bi-x-circle-fill" 
                    onClick={() => handleBorrarNota(index)}
                    style={{
                    color: "red", 
                    frontsize: "0.75rem",
                    cursor:"pointer"}}></i>
                  </li>
                );
              })}
              </ol>
              )}
        </div>
        <div className="col">
      <h3>Notas</h3>
      <label className="mb-2" style={{ width:"100%" }}>
        Título 
          <input 
            id="titulo" 
            name="titulo" 
            type="text" 
            onChange={handleInputChange}
            value={inputState.titulo}
            style={{ width:"100%" }} 
            />
      </label>   
      <br />    
      <label className="mb-2" style={{ width:"100%" }}>
        Fecha
          <input 
            id="fecha" 
            name="fecha" 
            type="text" 
            onChange={handleInputChange}
            value={inputState.fecha} 
            style={{ width:"100%" }}
            />          
      </label>
      <br />
      <label className="mb-2" style={{ width:"100%" }}>
        Nota
          <input 
            id="nota" 
            name="nota" 
            type="text" 
            onChange={handleInputChange}
            value={inputState.nota} 
            style={{ width:"100%" }}
            />          
      </label>
      <hr />         
    <div className="mt-2 me-2 mt-2 row">
      <div className="col"> 
      <span className="row me-1">
        <button 
            type="button"
            className="btn btn-primary" 
            onClick={handleInputClean}
        >
            Limpiar
        </button> 
      </span>
      </div>
    <div className="col">
      <span className="row ms-1">   
        <button 
            type="button" 
            className="btn btn-primary" 
            onClick={handleClickGuardar}
        >
        Guardar
      </button>
      </span>
    </div>

    </div>      
    </div>
    </div>


    </div>
  );
}

export default App;