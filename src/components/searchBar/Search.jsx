import { useState } from "react"
import "./search.scss"

const types=["buy","rent"]
export default function Search() {
  const [query, setQuery] =useState({
    type:"buy",
    location:"",
    minPrice:0,
    maxPrice:0,
  });

  const switchType =(val)=>{
      setQuery(prev=>({...prev, type: val}))
  }
  return (
    <div className="search">
      <div className="type">
        {types.map((type) =>(
        <button key={type} onClick={()=>switchType(type)} 
        className={query.type=== type ? "active" : ""}>
          {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder=" city location"/>
        <input type="number" name="minPrice"  min={0} max={1000000}placeholder=" min price"/>
        <input type="number" name="maxPrice" min={0} max={1000000} placeholder=" max price"/>
        <button>
          <img src="/search.png" alt=""/>
        </button>
      </form>
    </div>
  )
}
