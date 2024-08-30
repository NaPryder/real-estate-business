import CountingCardItem from "@/components/CountingCardItem";
import React from "react";
import image from "@assets/home-section.webp";

const Home = () => {
  const countingItems = [
    {
      description: "Happy Customers",
      counting: "200+",
    },
    {
      description: "Properties For Clients",
      counting: "10k+",
    },
    {
      description: "Years of Experience",
      counting: "16+",
    },
  ];
  return (
    <>
      <section id="home-section-container">
        <div className="topic">
          <h1>Our Journey</h1>
          <p>
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary. Over the years, we've
            expanded our reach, forged valuable partnerships, and gained the
            trust of countless clients.
          </p>
          <div className="counting-container">
            {countingItems &&
              countingItems.map((item, i) => (
                <CountingCardItem
                  key={i}
                  description={item.description}
                  counting={item.counting}
                />
              ))}
          </div>
        </div>
        <div id="home-section-image">
          <img src={image} alt="home-section" />
        </div>
      </section>
    </>
  );
};

export default Home;
