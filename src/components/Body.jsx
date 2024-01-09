import { RestaurantList } from "../constants";
import ResturantCard from "../components/ResturantCard";
import { useState } from "react";


function filterData(searchInput,rest){
    return rest.filter((r)=>r.data.name.includes(searchInput))
}


  const Body =()=>{
    const [rest , setResturants] = useState(RestaurantList);
    const [searchInput, setSearchInput]=useState("");

       return(
        <>
            <div className="search-container">
                <input className="search-input" 
                type="text" 
                placeholder="Search"
                value={searchInput}
                onChange={(e)=>  {
                    setSearchInput(e.target.value);
                }}/>

                <button className="search-btn"
                onClick={()=>
                {
                  const data= filterData(searchInput,rest);
                  setResturants(data)
                }}
                >Search </button>
                
            </div>

               <div className="resturant-list">
                   {
                       rest.map((restaurant)  =>{
                           return <ResturantCard {...restaurant.data} key={restaurant.data.id} />
                       })
                   }
               </div>
        </>
       )
   }

export default Body;