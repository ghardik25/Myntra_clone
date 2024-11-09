import React from "react";
import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);

  return (
    <main>
      <div className="banner-section">
        <img src="images/b8.webp" alt="Banner 1" className="banner-image" />
        <img src="images/b7.webp" alt="Banner 2" className="banner-image" />
      </div>
      <div className="items-container">
        {items.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
      <div className="banner-section">
        <img src="images/b6.webp" alt="Banner 4" className="banner-image" />
      </div>
    </main>
  );
};

export default Home;
