import React, { useState, useEffect } from "react";
import "./style.css";

function SearchParams() {
  const [location, setLocation] = useState("Seatle, WA");
  const PRODUCT = ["Technology", "Personal Care", "Bevarage", "Desert"];
  const [product, setProduct] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = [];
  useEffect(() => {
    requestPet();
  }, []);

  async function requestPet() {
    const res = fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${product}&location=${location}&breed=${breed}`
    );
    const json = (await res).json;
    console.log(json);
  }

  return (
    <div className="search-param">
      <form>
        <label htmlFor="location">
          location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location.toLocaleUpperCase()}
            placeholder="Location"
          />
        </label>
        <label htmlFor="product">
          <select
            id="product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            onBlur={(e) => setProduct(e.target.value)}
          >
            <option />
            {PRODUCT.map((product) => (
              <option value={product} key={product}>
                {product}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
export default SearchParams;
