export default function Grocerycard({foodData})
{
    return(
        <div className="flex-none w-40">
            <a href={foodData?.action?.link}>
                <img className="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId}></img>
            </a>
            {/* <h1 className="text-2xl ">{foodData?.action?.text}</h1> */}
            <h1 className="text-2xl font-medium wrap-break-words text-center">
                {foodData?.action?.text}
            </h1>
        </div>
    )
}