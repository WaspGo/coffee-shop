import { Component } from "react";

import { BeansLogo } from "./components/BeansLogo";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { BgCoffee } from "./components/OurCoffee";
import girl from "./assets/girl.jpg";
import aromisticoCoffee from "./assets/aromisticoCoffee.png";

class OurCoffee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffeeData: [
        {
          id: 1,
          name: "aromisticoCoffee",
          img: aromisticoCoffee,
          country: "Brazil",
          alt: "aromisticoCoffee brand icon",
          background: "bg-white",
          shadow: "shadow-[5px_5px_15px_0_rgba(0,0,0,0.25)]",
          text: "AROMISTICO Coffee 1 kg",
          price: "6.99$",
          variation: "ourcoffee",
        },
        {
          id: 2,
          name: "aromisticoCoffee",
          img: aromisticoCoffee,
          country: "Kenya",
          alt: "aromisticoCoffee brand icon",
          background: "bg-white",
          shadow: "shadow-[5px_5px_15px_0_rgba(0,0,0,0.25)]",
          text: "AROMISTICO Coffee 1 kg",
          price: "6.99$",
          variation: "ourcoffee",
        },
        {
          id: 3,
          name: "aromisticoCoffee",
          img: aromisticoCoffee,
          country: "Columbia",
          alt: "aromisticoCoffee brand icon",
          background: "bg-white",
          shadow: "shadow-[5px_5px_15px_0_rgba(0,0,0,0.25)]",
          text: "AROMISTICO Coffee 1 kg",
          price: "6.99$",
          variation: "ourcoffee",
        },
        {
          id: 4,
          name: "aromisticoCoffee",
          img: aromisticoCoffee,
          country: "Brazil",
          alt: "aromisticoCoffee brand icon",
          background: "bg-white",
          shadow: "shadow-[5px_5px_15px_0_rgba(0,0,0,0.25)]",
          text: "AROMISTICO Coffee 1 kg",
          price: "6.99$",
          variation: "ourcoffee",
        },
        {
          id: 5,
          name: "aromisticoCoffee",
          img: aromisticoCoffee,
          country: "Brazil",
          alt: "aromisticoCoffee brand icon",
          background: "bg-white",
          shadow: "shadow-[5px_5px_15px_0_rgba(0,0,0,0.25)]",
          text: "AROMISTICO Coffee 1 kg",
          price: "6.99$",
          variation: "ourcoffee",
        },
        {
          id: 6,
          name: "aromisticoCoffee",
          img: aromisticoCoffee,
          country: "Brazil",
          alt: "aromisticoCoffee brand icon",
          background: "bg-white",
          shadow: "shadow-[5px_5px_15px_0_rgba(0,0,0,0.25)]",
          text: "AROMISTICO Coffee 1 kg",
          price: "6.99$",
          variation: "ourcoffee",
        },
      ],
      query: "",
      country: "",
    };
  }

  setCountry = (country) => this.setState({ country });

  setQuery = (query) => this.setState({ query });

  render() {
    const { coffeeData, query, country } = this.state;
    const filteredCoffee = coffeeData.filter((item) => {
      const matchesCountry = !country || item.country === country;
      const matchesQuery = item.text
        .toLowerCase()
        .includes(query.toLowerCase());

      return matchesCountry && matchesQuery;
    });

    return (
      <>
        <BgCoffee />
        <section className="px-4 pb-[30px]">
          <div className="mx-auto mt-10 flex w-full max-w-5xl flex-col items-center gap-8 md:mt-[70px] md:flex-row md:justify-center md:gap-[80px]">
            <img
              className="w-full max-w-[355px] object-cover"
              src={girl}
              alt=""
            />
            <div className="w-full max-w-[346px]">
              <h2 className="text-center text-[24px]">About our beans</h2>
              <BeansLogo color="black" marginTop="20" />
              <p className="mt-[26px] text-center text-[14px]">
                Extremity sweetness difficult behaviour he of. On disposal of as
                landlord horrible. <br /> <br /> Afraid at highly months do
                things on at. Situation recommend objection do intention so
                questions.
                <br /> As greatly removed calling pleased improve an. Last ask
                him cold feel <br /> met spot shy want. Children me laughing we
                prospect answered followed. At it went is song that held help
                face.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-[60px] h-0 w-[240px] max-w-full border border-black"></div>
          <div className="mx-auto mt-10 flex w-full max-w-4xl flex-col items-center gap-6 md:mt-[60px] md:flex-row md:justify-center md:gap-[83px]">
            <div className="flex w-full max-w-[360px] flex-col items-center gap-2 text-center text-[14px] font-normal sm:flex-row sm:gap-[20px]">
              <p>Lookiing for</p>
              <input
                value={query}
                onChange={(event) => this.setQuery(event.target.value)}
                type="text"
                placeholder="start typing here..."
                className="w-full min-w-0 rounded-[4px] bg-white px-3 py-[6px] text-center text-[12px] font-normal text-black/50 shadow-[4px_4px_20px_0_rgba(0,0,0,0.25)]"
              />
            </div>
            <div className="flex flex-col items-center gap-3 text-center text-[14px] font-normal sm:flex-row sm:gap-[35px]">
              <p>Or filter</p>
              <div className="flex flex-wrap justify-center gap-[5px] text-center text-[12px] font-normal">
                <Button
                  name="Brazil"
                  onClick={() => this.setCountry("Brazil")}
                />
                <Button name="Kenya" onClick={() => this.setCountry("Kenya")} />
                <Button
                  name="Columbia"
                  onClick={() => this.setCountry("Columbia")}
                />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-[61px] grid w-full max-w-[1090px] grid-cols-[repeat(1,220px)] justify-center gap-x-6 gap-y-10 px-4 min-[520px]:grid-cols-[repeat(2,220px)] md:gap-x-10 min-[900px]:grid-cols-[repeat(3,220px)] xl:gap-x-[70px]">
            {filteredCoffee.map((coffee) => (
              <Card key={coffee.id} {...coffee} />
            ))}
          </div>
        </section>
      </>
    );
  }
}

export default OurCoffee;
