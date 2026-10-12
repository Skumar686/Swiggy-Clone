export default function RestInfo({ restData }) {

  return (
      <>
          <div className="flex w-full justify-between mb-2 pb-2">

              <div className="w-[70%]">

                  <p className="text-2xl text-gray-700 font-semibold mb-1">
                      {restData?.name}
                  </p>

                  <p className="text-xl">
                      ₹{(restData?.defaultPrice ?? restData?.price ?? 0) / 100}
                  </p>

                  <div>
                      <span className="text-green-700">
                          {restData?.ratings?.aggregatedRating?.rating}
                      </span>

                      <span>
                          {" ("}
                          {restData?.ratings?.aggregatedRating?.ratingCountV2}
                          {")"}
                      </span>
                  </div>

                  <p>
                      {restData?.description}
                  </p>

              </div>

              <div className="w-[20%] relative">

                  <img
                      className="w-full h-36 object-cover rounded-3xl"
                      src={
                          "https://media-assets.swiggy.com/swiggy/image/upload/" +
                          restData?.imageId
                      }
                      alt={restData?.name}
                  />

                  <button className="absolute bottom-1 left-1/2 -translate-x-1/2 rounded-xl text-2xl text-green-600 px-6 py-2 shadow-md border border-white bg-white">
                      ADD
                  </button>

              </div>

          </div>

          <hr className="mb-6 mt-2" />
      </>
  );
}