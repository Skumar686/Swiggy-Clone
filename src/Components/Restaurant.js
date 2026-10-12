import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";

export default function Restaurant(){
   
    const [RestData, setRestData] = useState([])

    useEffect(()=>{
    
     async function fetchData() {
        
        const proxyServer = "https://cors-anywhere.herokuapp.com/"
        const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
        const response = await fetch(proxyServer+swiggyAPI);
        const data = await response.json();
        setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     }

     fetchData();
    },[])

    console.log(RestData);
   
    // Shimmer Effect 
    if(RestData.length==0)
        return <Shimmer></Shimmer>

    return (
        <div className="grid grid-cols-4 w-[80%] mx-auto mt-20 gap-6">
            
            {
                RestData.map((restInfo)=><RestCard key={restInfo?.info?.id} restInfo={restInfo}></RestCard>)
            }

        </div>
    )

}






// import { ResData } from "../Utils/Res..Data";
// import RestCard from "./RestCard";
// import Shimmer from "./Shimmer";

// export default function Restaurant() {
//     if(ResData.length==0){
//         return <Shimmer></Shimmer>
//     }

//     return (
//         <div className="w-[80%] mx-auto mt-10">

//             <h1 className="text-2xl font-bold mb-6">
//                 Restaurants
//             </h1>

//             <div className="grid grid-cols-4 gap-10">
//                 {
//                     ResData.map((resInfo) => (<RestCard key={resInfo.info.id} resInfo={resInfo}/>))
//                 }
//             </div>

//         </div>
//     );
// }
