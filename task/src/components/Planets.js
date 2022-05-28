import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Planet from "./Planetcontainer";
import AuthContext from "./Usercontext";

function Planets() {
  const [loading, setLoading] = useState(false);
  const [Planets, setPlanet] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    const loadPlanets = async () => {
      setLoading(true);
      const response = await axios.get("https://swapi.dev/api/planets/");
      const data = response.data.results;
      setPlanet(data);
      console.log(data.population);
      setLoading(false);
    };
    loadPlanets();
  }, []);

  const population = Planets.map((x) => x.population);
  console.log(population);
  const planWidth = population.map((str) => {
    return Number(str);
  });
  console.log(planWidth);
  // const width = planWidth.map(x => x/1000)
  // console.log(width);

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="my-7 text-2xl w-96 text-center text-white bg-purple-500 p-3 m-auto border-2 rounded-md shadow-md border-top lg:max-w-md">
        {" "}
        User is {`${auth ? "" : "not"} authenticated`}{" "}
      </div>
      <p className="text-4xl my-5 text-center text-white">Search planet</p>
      <input
        type="text"
        className="block w-2/6 align-center px-4 py-3 my-5 text-700 bg-white border rounded-md focus:border--400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        placeholder="search planet"
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        Planets.filter((value) => {
          if (searchTitle === "") {
            return value;
          } else if (
            value.name.toLowerCase().includes(searchTitle.toLowerCase())
          ) {
            return value;
          }
        }).map((item) => (
          <Planet
            key={item.name}
            name={item.name}
            population={item.population}
          />
        ))
      )}
    </div>
  );
}

export default Planets;
