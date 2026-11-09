import "./LandingPage.css";
import { Link } from "react-router-dom";

import { BeansLogo } from "./components/BeansLogo.jsx";
import { Card } from "./components/Card.jsx";

import desk from "./assets/bg-desk.png";
import paper from "./assets/bg-paper.png";
import aromisticoCoffee from "./assets/aromisticoCoffee.png";
import prestoCoffee from "./assets/prestoCoffe.png";
import solimoCoffee from "./assets/solimoCoffee.png";

function LandingPage() {
  return (
    <>
      <section
        className=" w-full pt-[181px] pb-[201px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${desk})` }}
      >
        <h1 className=" [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] font-bold text-white text-[40px] text-center">
          Everything You Love About Coffee
        </h1>
        <BeansLogo color="white" marginTop="20" />
        <h2 className="mt-[34px] font-bold text-white text-center text-[24px]">
          We makes every day full of energy and taste
        </h2>
        <h2 className="mt-[20px] font-bold text-white text-center text-[24px]">
          Want to try our beans?
        </h2>
        <Link to="/ourcoffee">
          <button className="p-[5px] mt-[18px] mx-auto border border-white rounded-[3px] w-[120px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-transparent text-white text-xs flex items-center justify-center text-[14px] font-bold text-white">
            More
          </button>
        </Link>
      </section>
      <section className="pb-[101px]">
        <h2 className="mt-[80px] font-normal text-black text-center text-[24px]">
          About Us
        </h2>
        <BeansLogo color="black" marginTop="20" />
        <p className="mx-auto mt-[40px] w-full max-w-[590px] px-4 text-center text-[14px] font-normal text-black">
          Extremity sweetness difficult behaviour he of. On disposal of as
          landlord horrible. Afraid at highly months do things on at. Situation
          recommend objection do intention so questions. As greatly removed
          calling pleased improve an. Last ask him cold feel met spot shy want.
          Children me laughing we prospect answered followed. At it went is song
          that held help face. <br /> <br />
          Now residence dashwoods she excellent you. Shade being under his bed
          her, Much read on as draw. Blessing for ignorant exercise any yourself
          unpacked. Pleasant horrible but confined day end marriage. Eagerness
          furniture set preserved far recommend. Did even but nor are most gave
          hope. Secure active living depend son repair day ladies now.
        </p>
      </section>
      <section
        className="pt-[80px] w-full bg-cover bg-center bg-no-repeat pb-[110px]"
        style={{ backgroundImage: `url(${paper})` }}
      >
        <h2 className=" font-normal text-black text-center text-[24px]">
          Our best
        </h2>
        <div className="mx-auto mt-[39px] flex flex-wrap items-center justify-center gap-[30px] px-4">
          <Card
            name={"solimoCoffee"}
            img={solimoCoffee}
            country="Brazil"
            alt="solimoCoffee brand icon"
            background="bg-white/65"
            text="Solimo Coffee Beans 2 kg"
            price="10.73$"
            variation="landing"
          />
          <Card
            name={"prestoCoffee"}
            img={prestoCoffee}
            country="Brazil"
            alt="solimoCoffee brand icon"
            background="bg-white/65"
            text="Presto Coffee Beans 1 kg"
            price="15.99$"
            variation="landing"
          />
          <Card
            name={"aromisticoCoffee"}
            img={aromisticoCoffee}
            country="Brazil"
            alt="aromisticoCoffee brand icon"
            background="bg-white/65"
            text="AROMISTICO Coffee 1 kg"
            price="6.99$"
            variation="landing"
          />
        </div>
      </section>
    </>
  );
}

export default LandingPage;
