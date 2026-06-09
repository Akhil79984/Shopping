import { useState } from "react";

const SearchBox =({searchWeather})=>{
    const[city, setCity]= useState("");
    const handleSearch = ()=>{
        searchWeather(city);
    }
    
    return(
        <div className="search-box">
            <input type="text" value={city} placeholder="Enter city name" onChange={(e)=>setCity(e.target.value)}/>
            <button onClick={(handleSearch)}>Search</button>
        </div>
    )
}
export default SearchBox;