import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Guide from "./Guide";

const Page = styled.div`
  max-width: 32rem;
  margin: 0 auto;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.5rem;
`;

const LoadingDots = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: -3rem;

  span {
    animation: pulse 1.4s infinite;
    animation-timing-function: ease-in-out;
    height: 1rem;
    width: 1rem;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;

    &:nth-child(2) {
      animation-delay: 0.25s;
    }

    &:nth-child(3) {
      animation-delay: 0.5s;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.75;
    }
    50% {
      transform: scale(0.5);
      opacity: 0.25;
    }
    100% {
      transform: scale(1);
      opacity: 0.75;
    }
  }
`;

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const city = params.get("city");
    const flavor = params.get("flavor");

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
        document.title = result.metadata.city;
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <LoadingContainer>
        <LoadingDots>
          <span />
          <span />
          <span />
        </LoadingDots>
      </LoadingContainer>
    );
  }

  if (error) return <Page>Error: {error}</Page>;
  if (!data) return <Page>No data available</Page>;

  return (
    <Page>
      <Guide metadata={data.metadata} attractions={data.attractions} />
    </Page>
  );
};

export default App;
