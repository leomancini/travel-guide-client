import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Guide from "./Guide";

const Page = styled.div`
  max-width: 32rem;
  margin: 0 auto;
`;

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState(null);
  const [flavor, setFlavor] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const city = params.get("city");
    const flavor = params.get("flavor");

    setCity(city);
    setFlavor(flavor);

    if (!city || !flavor) {
      setError("Missing city or flavor parameters");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/?city=${city}&flavor=${flavor}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Page>Loading...</Page>;
  if (error) return <Page>Error: {error}</Page>;
  if (!data) return <Page>No data available</Page>;

  return (
    <Page>
      <Guide city={city} flavor={flavor} data={data} />
    </Page>
  );
};

export default App;
