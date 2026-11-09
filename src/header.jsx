import { NavItems } from "./components/Navitems";

function Header() {
  return (
    <header className="absolute left-[149px] top-[52px] max-md:left-0 max-md:w-full max-md:translate-x-0 max-md:px-3">
      <NavItems text="text-white" color="white" />
    </header>
  );
}

export default Header;
