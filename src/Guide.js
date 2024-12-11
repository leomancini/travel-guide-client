import styled from "styled-components";

import Item from "./Item";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  padding: 8rem 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  line-height: 1.25;
  color: rgba(255, 255, 255, 1);
  text-shadow: 0px 0px 48px rgba(255, 255, 255, 0.5);
`;

const Subtitle = styled.h2`
  font-size: 1rem;
  font-weight: regular;
  letter-spacing: 0.125rem;
  color: rgba(255, 255, 255, 0.25);
  margin: 0;
  text-transform: uppercase;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
`;

export default function Guide({ city, flavor, data }) {
  return (
    <Container>
      <Header>
        <Title>{city}</Title>
        <Subtitle>{flavor.toUpperCase()}</Subtitle>
      </Header>
      <Items>
        {data.map((item) => (
          <Item key={item.name} data={item} />
        ))}
      </Items>
    </Container>
  );
}
