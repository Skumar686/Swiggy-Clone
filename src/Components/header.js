import { Link } from "react-router-dom"

export default function Header(){
    return(
        <header className="bg-[#ff5200] font-sans">
            <div className="flex justify-between container mx-auto py-8">
                <img className="w-40 h-12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"></img>

                <div className=" text-white text-base font-bold flex gap-15 items-center">
                    <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                    <a target="_blank" href="https://partner.swiggy.com/food/login">Partner with us</a>
                    <a className="border border-white py-3 px-4 rounded-2xl">Get the App</a>
                    <a className="border border-black bg-black py-3 px-4 rounded-2xl">Sign in</a>
                </div>
            </div>

            <div className="pt-16 pb-8 relative">
                <img className="h-125 w-63 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                <img className="h-125 w-63 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
                <div className="max-w-[55%] text-5xl text-white font-semibold container mx-auto text-center">
                    Order Food and groceries. Discover best restaurants. Swiggy it!
                </div>
                <div className="max-w-[60%] container mx-auto flex gap-5 mt-10">
                    <input className="bg-white w-[40%] text-xl px-6 py-4 rounded-2xl" placeholder="Delhi, India"></input>
                    <input className="bg-white w-[55%] text-xl px-6 py-4 rounded-2xl" placeholder="Search for restaurant and items for more"></input>
                </div>
            </div>

            <div className="max-w-[80%] container mx-auto flex">
                <Link to="/restaurant">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png"></img>
                </Link>
                <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png"></img>
                </a>
                <a href="https://www.swiggy.com/dineout">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png"></img>
                </a>
            </div>
        </header>
    )
}