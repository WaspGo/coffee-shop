import { Link } from "react-router-dom";

export function Card(props) {
  const {
    img,
    alt,
    text,
    price,
    background,
    shadow,
    name,
    country,
    variation,
  } = props;

  let render = "";

  if (variation === "landing") {
    render = (
      <Link to="/ourcoffee" state={{ country, price }}>
        <div
          name={name}
          className={`box-border min-h-[240px] w-[220px] shrink-0 rounded-lg ${background} ${shadow} p-[20px]`}
        >
          <img
            src={img}
            alt={alt}
            className="h-[130px] w-full object-contain"
          />
          <p className="mt-[14px] text-[14px] font-normal text-center">
            {text}
          </p>
          <p className="mt-[10px] flex justify-end text-[14px] font-bold">
            {price}
          </p>
        </div>
      </Link>
    );
  } else if (variation === "ourcoffee") {
    render = (
      <Link to="/abouiit" state={{ country, price }}>
        <div
          name={name}
          className={`box-border min-h-[240px] w-[220px] shrink-0 rounded-lg ${background} ${shadow} p-[20px]`}
        >
          <img
            src={img}
            alt={alt}
            className="h-[130px] w-full object-contain"
          />
          <p className="mt-[14px] text-[14px] font-normal text-center">
            {text}
          </p>
          <p className="mt-[10px] flex justify-end text-[14px] font-bold">
            {country}
          </p>
          <p className="mt-[10px] flex justify-end text-[14px] font-bold">
            {price}
          </p>
        </div>
      </Link>
    );
  }
  return render;
}
