import styled from "styled-components";

import Item from "./Item";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 8rem 2rem 7rem 2rem;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  opacity: 0.5;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  user-select: none;
  -webkit-user-drag: none;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  line-height: 1.25;
  color: rgba(255, 255, 255, 1);
  text-shadow: 0px 0px 12px rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const Subtitle = styled.h2`
  font-size: 1rem;
  font-weight: regular;
  letter-spacing: 0.125rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  text-transform: uppercase;
  z-index: 2;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
`;

const Disclaimer = styled.div`
  padding: 1.5rem 1.5rem 2rem 1.5rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1rem;
  line-height: 1.25;
  margin: 0;
`;

export default function Guide({ metadata, attractions }) {
  return (
    <Container>
      <Header>
        <Title>{metadata.city}</Title>
        <Subtitle>{metadata.flavor.toUpperCase()}</Subtitle>
        <BackgroundImage src={metadata.headerImage} alt={metadata.city} />
      </Header>
      <Items>
        {attractions.map((item) => (
          <Item key={item.name} data={item} city={metadata.city} />
        ))}
      </Items>
      <Disclaimer>
        Generated on{" "}
        {new Date(metadata.createdAt).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric"
        })}{" "}
        using {metadata.model}. Images from Wikipedia.
      </Disclaimer>
    </Container>
  );
}
