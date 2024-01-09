import { IMG_CDN_URL } from "../constants";


    const ResturantCard=({ name,cloudinaryImageId,cuisines,lastMileTravelString  })=>{  // props 
        return(
            <div className="card">
                <img src={ IMG_CDN_URL +
                cloudinaryImageId} alt="Food - 1" />
                <h2>{name }</h2>
                <h3>{cuisines.join(", ")}</h3>
                <h4>{lastMileTravelString} ETA Minutes</h4>
            </div>
        )
    }
export default ResturantCard;