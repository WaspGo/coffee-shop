import coffee from "./assets/bg-coffee.png";
import { BeansLogo } from "./components/BeansLogo";
import cupOfCoffee from "./assets/cupOfCoffee.png";
import { Card } from "./components/Card";
import aromisticoCoffee from "./assets/aromisticoCoffee.png";

function ForYourPleasure() {
  return (
    <>
      <section
        className=" w-full pt-[181px] pb-[201px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${coffee})` }}
      >
        <h1 className="[text-shadow:0_4px_4px_rgba(0,0,0,0.25)] font-bold text-white text-[40px] text-center">
          For your pleasure
        </h1>
      </section>
      <section className="pt-[70px] pb-[30px]">
        <div className="flex justify-center gap-[84px] ">
          <img className="object-cover" src={cupOfCoffee} alt="" />
          <div>
            <h2 className="text-center text-[24px]">About it</h2>
            <BeansLogo color="black" marginTop="20" />
            <p className="mt-[25px] w-[346px] text-center text-[14px]">
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
        <div className="mt-[60px] mx-auto w-[240px] h-[0px] border border-black"></div>
        <div className="mt-[61px] mx-[320px] grid grid-cols-[repeat(3,_220px)] gap-[70px] justify-center items-center">
          <Card
            name={"aromisticoCoffee"}
            img={aromisticoCoffee}
            country="Brazil"
            alt="aromisticoCoffee brand icon"
            background="bg-white"
            shadow="shadow-[5px_5px_15px_0_rgba(0,0,0,0.25)]"
            text="AROMISTICO Coffee 1 kg"
            price="6.99$"
            variation="ourcoffee"
          />

          <Card
            name={"aromisticoCoffee"}
            img={aromisticoCoffee}
            country="Kenya"
            alt="aromisticoCoffee brand icon"
            background="bg-white"
            shadow="shadow-[5px_5px_15px_0_rgba(0,0,0,0.25)]"
            text="AROMISTICO Coffee 1 kg"
            price="6.99$"
            variation="ourcoffee"
          />
          <Card
            name={"aromisticoCoffee"}
            img={aromisticoCoffee}
            country="Columbia"
            alt="aromisticoCoffee brand icon"
            background="bg-white"
            shadow="shadow-[5px_5px_15px_0_rgba(0,0,0,0.25)]"
            text="AROMISTICO Coffee 1 kg"
            price="6.99$"
            variation="ourcoffee"
          />
          <Card
            name={"aromisticoCoffee"}
            img={aromisticoCoffee}
            country="Brazil"
            alt="aromisticoCoffee brand icon"
            background="bg-white"
            shadow="shadow-[5px_5px_15px_0_rgba(0,0,0,0.25)]"
            text="AROMISTICO Coffee 1 kg"
            price="6.99$"
            variation="ourcoffee"
          />
          <Card
            name={"aromisticoCoffee"}
            img={aromisticoCoffee}
            country="Brazil"
            alt="aromisticoCoffee brand icon"
            background="bg-white"
            shadow="shadow-[5px_5px_15px_0_rgba(0,0,0,0.25)]"
            text="AROMISTICO Coffee 1 kg"
            price="6.99$"
            variation="ourcoffee"
          />
          <Card
            name={"aromisticoCoffee"}
            img={aromisticoCoffee}
            country="Brazil"
            alt="aromisticoCoffee brand icon"
            background="bg-white"
            shadow="shadow-[5px_5px_15px_0_rgba(0,0,0,0.25)]"
            text="AROMISTICO Coffee 1 kg"
            price="6.99$"
            variation="ourcoffee"
          />
        </div>
      </section>
    </>
  );
}

export default ForYourPleasure;
