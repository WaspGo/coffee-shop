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
      <section className="pt-[70px] pb-[30px]">
        <div className="flex justify-center gap-[55px] ">
          <img className="object-cover" src={aromisticoFull} alt="" />
          <div>
            <h2 className="text-center text-[24px]">About it</h2>
            <BeansLogo color="black" marginTop="20" />
            <div className="mt-[25px]">
              <span className="font-bold text-[14px]">Country: </span>
              {country}
            </div>
            <p className="mt-[16px] w-[418px] text-[14px]">
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
