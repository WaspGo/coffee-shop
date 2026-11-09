import { Link } from "react-router-dom";
import { BobIcon } from "../assets/icons/BobIcon";
export function NavItems(props) {
  const { text, color } = props;
  return (
    <div
      className={`${text} relative flex gap-3 text-[12px] font-normal max-md:flex-wrap max-md:justify-center max-[319px]:gap-0 sm:gap-[40px]`}
    >
      <Link
        to="/"
        className="absolute bottom-[-8px] left-[-39px] max-md:relative max-md:bottom-auto max-md:left-auto max-md:shrink-0"
      >
        <BobIcon color={color} />
      </Link>
      <Link to="/">Coffee house</Link>
      <Link
        to="/ourcoffee"
        className="[text-shadow:0_4px_4px_rgba(0,0,0,0.25)]"
      >
        Our coffee
      </Link>
      <Link
        to="/foryourpleasure"
        className="[text-shadow:0_4px_4px_rgba(0,0,0,0.25)]"
      >
        For your pleasure
      </Link>
    </div>
  );
}
