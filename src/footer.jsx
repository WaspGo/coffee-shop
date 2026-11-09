import { NavItems } from "./components/Navitems";
import { BeansLogo } from "./components/BeansLogo";

function Footer() {
  return (
    <footer className="pt-[52px] pb-[20px]">
      <div className="flex justify-center">
        <NavItems text={"text-black"} color="black" />
      </div>
      <BeansLogo color="black" marginTop="30" />
    </footer>
  );
}

export default Footer;
