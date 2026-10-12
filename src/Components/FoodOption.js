import { imageGridCards } from "../Utils/FoodData";
import Foodcard from "./FoodCard"

export default function FoodOption(){

    return (
        <div className="w-full container mx-auto mt-20 overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden">
          <div className="grid grid-rows-2 grid-flow-col auto-cols-max gap-5">
            {
                imageGridCards.map((foodData)=><Foodcard key={foodData.id} foodData={foodData}></Foodcard>)
            }
          </div>
        </div>
    )
}