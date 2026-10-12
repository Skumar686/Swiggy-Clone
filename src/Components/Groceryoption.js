import {GrocerGridCard} from "../Utils/Grocery"
import Grocerycard from "./Grocerycard"

export default function GroceryOption(){

    return(
         <div className="mt-20 w-[80%] container mx-auto">
            <h1 className="font-bold text-2xl">Shop Groceries on Instamart</h1>
            <div className="w-full container mx-auto flex flex-nowrap overflow-x-auto mt-10 gap-15 scrollbar-none [&::-webkit-scrollbar]:hidden">
                    {
                        GrocerGridCard.map((foodData)=><Grocerycard key={foodData.id} foodData={foodData}></Grocerycard>)
                    }
            </div>
        </div>
    )
}