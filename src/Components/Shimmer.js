export default function Shimmer() {

  return (
      <div className="grid grid-cols-4 w-[80%] mx-auto mt-20 gap-6">

          {
              Array(12).fill("").map((_, index) => (
                  <div
                      key={index}
                      className="w-full mb-2"
                  >
                      {/* Image shimmer */}
                      <div className="w-full aspect-4/3 rounded-xl bg-gray-300"></div>

                      <div className="w-[95%] mx-auto mt-3">

                          {/* Restaurant name */}
                          <div className="w-full h-6 bg-gray-300 rounded"></div>

                          {/* Rating */}
                          <div className="w-full h-6 bg-gray-300 mt-2 rounded"></div>

                          {/* Cuisines */}
                          <div className="w-full h-6 bg-gray-300 mt-2 rounded"></div>

                      </div>
                  </div>
              ))
          }

      </div>
  );
}