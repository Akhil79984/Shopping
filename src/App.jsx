import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SearchBox from './Weather/SearchBox'
import WeatherCard from './Weather/WeatherCard'
import Header from './Weather/Header'
import CommonData from  "./CommonData";

//import Count from './Count'


function App() {
  const [weather, setWeather] = useState("");
  const searchWeather = (city) => {
    const result = CommonData[city];
    console.log(result);
  
  if (result) {
    setWeather(result);
  }
  else {
    alert("city not found");
  }
}

  return (
    <div>
      <Header />
      <SearchBox searchWeather={searchWeather} />
      {weather && <WeatherCard weather={weather}/>}
    </div>
  )

 /* const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [Bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calBmi=(e)=>{
    event.preventDefault();

    if(weight===0|| height===0)
    {
      alert("please enter the vaild weight and height" );
    }
    else{
    let Bmi=(weight/(height*height)*703);
    setBmi(Bmi.toFixed(1))

    if(Bmi<25){
      setMessage("You are under weight");
    }
    else if(Bmi>=25 && Bmi<30){
        setMessage("You are under required weight");
    }
    else{
      setMessage("You are over weight");
    }
    }
    }

    let reload=()=>{
      window.location.reload();
    }
    

  
  return (
    <div className='App'>
      <div className='container'>
        <h2> BMI Calculator </h2>
        <form onSubmit={calBmi}>
          <div>
            <label>Weight(ibs)</label>
            <input type='text'placeholder='Enter weight value' value={weight} onChange={(e)=>setWeight(e.target.value)}/>
          </div>
          <div>
            <label>Height(ins)</label>
            <input type='text' placeholder='Enter height value'value={height} onChange={(e)=>setHeight(e.target.value)}/>
          </div>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
        </form>
      </div>
      <div className='center'>
        <center><h3> Your BMI is:{Bmi}</h3></center>
        <p>{message}</p>
      </div>

    </div>
  )*/

}

export default App
