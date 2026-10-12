// import { useState } from "react"
// import RestInfo from "./RestInfo"

// export default function MenuCard({menuItems}){

//     const [isOpen, setIsOpen] = useState(true);

//     if("categories" in menuItems){
//         return(
//             <div className="w-full">
//             <p className="text-2xl font-bold">{menuItems.title}</p>
//             <div>
//                 {
//                     menuItems?.categories?.map((items)=> <MenuCard key={items?.title} menuItems={items}></MenuCard>)
//                 }
//             </div>
//             </div>
//         )
//     }

//     if(!isOpen){
//         return(
//         <div className="w-full">
//             <div className="flex justify-between w-full">
//             <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
//             <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'⌄'}</button>
//             </div>
//             <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
//         </div>
//         )
//     }

//     return (
//         <div className="w-full">
//             <div className="flex justify-between w-full">
//             <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
//             <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'˯'}</button>
//             </div>
//             <div>
//                 {
//                     menuItems?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id} restData = {items?.card?.info}></RestInfo>)
//                 }
//             </div>
//             <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
//         </div>
//     )
// }

import { useState } from "react";
import RestInfo from "./RestInfo";

export default function MenuCard({ menuItems, foodselected }) {
  const [isOpen, setIsOpen] = useState(true);

  // Category containing other categories
  if ("categories" in menuItems) {
    return (
      <div className="w-full">
        <p className="text-2xl font-bold">{menuItems.title}</p>

        <div>
          {menuItems?.categories?.map((items) => (
            <MenuCard
              key={items?.title}
              menuItems={items}
              foodselected={foodselected}
            />
          ))}
        </div>
      </div>
    );
  }

  // Filter food items
  const filteredItems = menuItems?.itemCards?.filter((item) => {
    const classifier = item?.card?.info?.itemAttribute?.vegClassifier;

    if (foodselected === "veg") {
      return classifier === "VEG";
    }

    if (foodselected === "nonveg") {
      return classifier === "NONVEG";
    }

    return true;
  });

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex justify-between w-full">
        <p className="text-3xl font-bold mb-4">{menuItems.title}</p>

        <button
          className="text-5xl font-bold mr-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "⌃" : "⌄"}
        </button>
      </div>

      {/* Food items */}
      {isOpen && (
        <div>
          {filteredItems?.map((items) => (
            <RestInfo
              key={items?.card?.info?.id}
              restData={items?.card?.info}
            />
          ))}
        </div>
      )}

      <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
    </div>
  );
}
