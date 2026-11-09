import coffee from "./assets/bg-coffee.png";
import { BeansLogo } from "./components/BeansLogo";
import cupOfCoffee from "./assets/cupOfCoffee.png";
import { Card } from "./components/Card";
import coffeeData from "./data/coffeeData.js";

function ForYourPleasure() {
  return (
    <>
      <section
        className="w-full bg-cover bg-center bg-no-repeat px-4 py-32 sm:pt-[181px] sm:pb-[201px]"
        style={{ backgroundImage: `url(${coffee})` }}
      >
        <h1 className="text-center text-3xl font-bold text-white [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] sm:text-[40px]">
          For your pleasure
        </h1>
      </section>
      <section className="px-4 pt-10 pb-[30px] sm:pt-[70px]">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 md:flex-row md:justify-center md:gap-[84px]">
          <img
            className="w-full max-w-[355px] object-cover"
            src={cupOfCoffee}
            alt="Coffee cup"
          />
          <div className="w-full max-w-[346px]">
            <h2 className="text-center text-[24px]">About it</h2>
            <BeansLogo color="black" marginTop="20" />
            <p className="mt-[25px] text-center text-[14px]">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible. <br />
              <br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention so questions.
              <br /> As greatly removed calling pleased improve an. <br /> Last
              ask him cold <br />
              feel met spot shy want. Children me laughing we prospect answered
              followed. At it went is song that held help face.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-[60px] h-0 w-[240px] max-w-full border border-black"></div>
        <div className="mx-auto mt-[61px] grid w-full max-w-[1090px] grid-cols-[repeat(1,220px)] justify-center gap-x-6 gap-y-10 px-4 min-[520px]:grid-cols-[repeat(2,220px)] md:gap-x-10 min-[900px]:grid-cols-[repeat(3,220px)] xl:gap-x-[70px]">
          {coffeeData
            .filter((coffee) => coffee.collections?.includes("pleasure"))
            .map((coffee) => (
              <Card key={coffee.id} {...coffee} variation="ourcoffee" />
            ))}
        </div>
      </section>
    </>
  );
}

export default ForYourPleasure;
