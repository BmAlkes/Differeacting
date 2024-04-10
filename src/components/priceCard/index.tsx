interface serviceListProps {
  textOne: string;
  icon: boolean;
  include?: string;
}

const CardPrice = ({
  textBase,
  // price,
  serviceList,
  background,
}: {
  textBase: string;
  price: string;
  serviceList: serviceListProps[];
  background: string;
}) => {
  return (
    <div
      className={`border-black rounded-2xl border w-[350px] h-[930px] mx-auto lg:mt-20 mt-3 ${
        background === "white" ? "bg-white" : "bg-[#21ADD6]"
      } `}
    >
      <div className="p-6">
        <div className="flex justify-between mb-[11px]">
          <h2
            className={`text-2xl  font-bold ${
              background === "white" ? "text-[#111111]" : "text-white"
            }`}
          >
            {textBase}
          </h2>
        </div>
        <p
          className={`mt-0.5 text-lg ${
            background === "white" ? "text-[#454545]" : "text-white"
          } `}
        >
          אידיאלי עבור אנשים שזקוקים לגישה מהירה לתכונות בסיסיות.
        </p>
        {/* <p className="mt-8">
          <span
            className={`text-4xl font-bold tracking-tight ${
              background === "white" ? "text-[#111111]" : "text-white"
            }`}
          >
            ₪{price}
          </span>
          <span
            className={`text-base font-medium ${
              background === "white" ? "text-[#111111]" : "text-white"
            } `}
          >
            /לשנה
          </span>
        </p> */}
        {/* {background === "white" ? (
          <>
            <button className="bg-gradient-to-r w-full from-[#6FCFED] to-[#C96CBE] text-[#111111] font-semibold rounded-xl p-[1px]  mt-6">
              <span className="flex w-full bg-white text- rounded-xl py-[10px] px-[14px] ">
                אני רוצה להתחיל עכשיו
              </span>
            </button>
          </>
        ) : (
          <>
            <button className="border-white border-2 w-full  text-white font-semibold rounded-xl p-[1px]  mt-6">
              <span className="flex  w-full bg-[transparent]text- rounded-xl py-[10px] px-[14px] ">
                אני רוצה להתחיל עכשיו
              </span>
            </button>
          </>
        )} */}
      </div>
      <div className="px-6 pt-6 pb-8">
        {serviceList.map((service) => (
          <ul role="list" className="mt-6 space-y-4">
            <li className="flex  gap-[4px] ">
              {service.icon ? (
                <div className="flex justify-center items-center rounded-full bg-[#E3F2FB] h-8 w-8 ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4 flex-shrink-0 text-[#21ADD6]"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              ) : (
                <div className="flex justify-center items-center rounded-full bg-[#E7E7E7] h-8 w-8">
                  <svg
                    className="h-4 w-4 text-[#B0B0B0]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </div>
              )}
              <div className="text-justify flex-1">
                {<span className="font-bold p-1">{service.include}:</span>}
                {background === "white" ? (
                  <>
                    {service.icon ? (
                      <span className="text-base text-[#111111] p-0 m-0">
                        {service.textOne}
                      </span>
                    ) : (
                      <span className="text-base text-[#A0ABBB] p-0 m-0">
                        {service.textOne}
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    <span className="text-base text-[#f4f4f4]">
                      {service.textOne}
                    </span>
                  </>
                )}
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default CardPrice;
