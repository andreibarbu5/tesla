import Head from "next/head";
import { useState } from "react";
import Hero from "./Hero";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const openSidebar = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);

  const heroes = [
    {
      isNav: true,
      title: "Model S",
      img: "bg-[url(../assets/models.png)] sm:bg-[url(../assets/smodel.png)]  ",
    },
    {
      isNav: false,
      title: "Model X",
      img: "bg-[url(../assets/mobilex.png)] sm:bg-[url(../assets/modelxw.png)] ",
    },
    {
      isNav: false,
      title: "Model 3",
      img: "bg-[url(../assets/m3m.png)] sm:bg-[url(../assets/model3.png)] ",
    },
    {
      isNav: false,
      title: "Model Y",
      img: "bg-[url(../assets/modelx.png)] sm:bg-[url(../assets/tesla.png)]  ",
    },
    {
      isNav: false,
      title: "Solar and Powerwall",
      img: "bg-[url(../assets/solarm.png)] sm:bg-[url(../assets/solarw.png)] ",
    },
  ];

  return (
    <div className="  h-screen  t bg-cover   overflow-x-hidden ">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="pt-4">
        {heroes.map((hero) => (
          <Hero
            openSidebar={openSidebar}
            isOpen={isOpen}
            title={hero.title}
            img={hero.img}
            isNav={hero.isNav}
          />
        ))}
      </div>
    </div>
  );
}
