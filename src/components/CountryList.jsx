import React from "react";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import Message from "./Message";
const CountryList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;
  const uniqueCountriesWithEmoji = [];
  cities
    .slice()
    .map((city) =>
      uniqueCountriesWithEmoji.push({
        country: city.country,
        emoji: city.emoji,
      })
    );
  const uniqueObjects = uniqueCountriesWithEmoji.filter(
    (obj, index, self) =>
      index ===
      self.findIndex((t) => t.country === obj.country && t.emoji === obj.emoji)
  );
  if (uniqueObjects.lenght === 0)
    return <Message message={"You can start Add your own countries visited"} />;

  return (
    <ul className={styles.countryList}>
     {uniqueObjects.map((item) => <CountryItem country={item.country} emoji={item.emoji} key={item.country}/>) }
    </ul>
  );
};

export default CountryList;
