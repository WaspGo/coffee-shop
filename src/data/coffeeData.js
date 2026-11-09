import aromisticoCoffee from "../assets/aromisticoCoffee.png";
import prestoCoffee from "../assets/prestoCoffe.png";
import solimoCoffee from "../assets/solimoCoffee.png";

const coffeeData = [
  {
    id: "solimo-brazil",
    name: "solimoCoffee",
    img: solimoCoffee,
    country: "Brazil",
    alt: "Solimo Coffee Beans package, 2 kg",
    background: "bg-white/65",
    text: "Solimo Coffee Beans 2 kg",
    price: "10.73$",
    featured: true,
  },
  {
    id: "presto-brazil",
    name: "prestoCoffee",
    img: prestoCoffee,
    country: "Brazil",
    alt: "Presto Coffee Beans package, 1 kg",
    background: "bg-white/65",
    text: "Presto Coffee Beans 1 kg",
    price: "15.99$",
    featured: true,
  },
  {
    id: "aromistico-featured",
    name: "aromisticoCoffee",
    img: aromisticoCoffee,
    country: "Brazil",
    alt: "Aromistico Coffee package, 1 kg",
    background: "bg-white/65",
    text: "AROMISTICO Coffee 1 kg",
    price: "6.99$",
    featured: true,
  },
  ...["Brazil", "Kenya", "Columbia", "Brazil", "Brazil", "Brazil"].map(
    (country, index) => ({
      id: `aromistico-${country.toLowerCase()}-${index + 1}`,
      name: "aromisticoCoffee",
      img: aromisticoCoffee,
      country,
      alt: "Aromistico Coffee package, 1 kg",
      background: "bg-white",
      shadow: "shadow-[5px_5px_15px_0_rgba(0,0,0,0.25)]",
      text: "AROMISTICO Coffee 1 kg",
      price: "6.99$",
      collections: ["ourcoffee", "pleasure"],
    }),
  ),
];

export default coffeeData;
