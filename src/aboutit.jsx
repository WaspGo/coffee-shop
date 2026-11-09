import { useLocation } from "react-router-dom";
import { BgCoffee } from "./components/OurCoffee";
import { BeansLogo } from "./components/BeansLogo";
import aromisticoFull from "./assets/aromistico-full.jpg";
function AboutIt() {
  const { state } = useLocation();
  const { price, country } = state ?? {};

  return (
    <>
      <BgCoffee />
      <section className="px-4 pt-10 pb-[30px] sm:pt-[70px]">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 md:flex-row md:justify-center md:gap-[55px]">
          <img
            className=" max-w-[392px] object-cover"
            src={aromisticoFull}
            alt="Aromistico coffee"
          />
          <div className="w-full max-w-[418px]">
            <h2 className="text-center text-[24px]">About it</h2>
            <BeansLogo color="black" marginTop="20" />
            <div className="mt-[25px]">
              <span className="font-bold text-[14px]">Country: </span>
              {country}
            </div>
            <p className="mt-[16px] text-[14px]">
              <span className="font-bold">Description:</span> Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <div className="mt-[16px] text-[14px]">
              Price: <span className="font-bold text-[24px]">{price}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default AboutIt;
