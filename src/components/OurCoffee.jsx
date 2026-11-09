import coffee from "../assets/bg-coffeeShop.png";

export function BgCoffee() {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat px-4 pt-36 pb-36 sm:pt-[181px] sm:pb-[201px]"
      style={{ backgroundImage: `url(${coffee})` }}
    >
      <h1 className="text-center text-3xl font-bold text-white [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] sm:text-[40px]">
        Our Coffee
      </h1>
    </section>
  );
}
