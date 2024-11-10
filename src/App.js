import './App.css';
import {useRef,useState,useEffect} from "react";

function App() {
  const pesosRef=useRef();
  const resultadoRef=useRef();

  /* API */
  const[valorCambio,setValorCambio]=useState(null);
  useEffect(
    ()=>{
      const llamadaApiCambio = async()=>{
        try{
          const apiUrl = process.env.REACT_APP_API_URL;
          const respuesta = await fetch(apiUrl);
          const datos = await respuesta.json();
          console.log(datos);
          setValorCambio(datos.conversion_rates.USD);
        }catch(error){
          console.error("Error al acceder a la API:",error);
        }        
      };
      llamadaApiCambio();
    },[]  
  );

  /* Función anónima */
  const calcular=()=>{
    const pesosValor= parseFloat(pesosRef.current.value);
    const dolaresValor= parseFloat(pesosValor*valorCambio);
    /* Si quiero mostrar un float con una cantidad especifica de decimales utilizo:
        resultadoRef.current.innerHTML=dolares.toFixed(2)+" USD";
    */
    resultadoRef.current.innerHTML=dolaresValor+" USD";
  };
  return (
    <div>
      <h1>Conversor de Pesos Argentinos a Dolares</h1>
      <div className="centrar-elementos"> 
        <span className='texto'>$ARS</span><input type="text" ref={pesosRef} placeholder="Ingrese la cantidad de pesos"></input><br/>
      </div>
      <button className="centrar-elementos" onClick={calcular}>Convertir</button>
      <div className="centrar-elementos resultado" ref={resultadoRef}></div>
    </div>
  );
}

export default App;
