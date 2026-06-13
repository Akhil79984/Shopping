import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Weather/Header.jsx'
import WeatherCard from './Weather/WeatherCard.jsx'
import Calculator from './CalculatorApp/Calculator.jsx'
import MainPage from './Shopping App/Pages/MainPage.jsx'
import FormExample from './FormExample.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormExample />
  </StrictMode>,
)
