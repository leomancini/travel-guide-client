import styled from "styled-components";

const Container = styled.div`
  border-radius: 1.5rem;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.2), 0px 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
`;

const BackgroundImage = styled.img`
  position: absolute;
  height: calc(100% + 10rem);
  width: calc(100% + 10rem);
  z-index: 2;
  top: -5rem;
  left: -5rem;
  right: -5rem;
  bottom: -5rem;
  filter: blur(100px);
`;

const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 1);
  top: ${({ hasImage }) => (hasImage ? "2rem" : "0")};
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
  z-index: 3;
  position: relative;
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 25%,
    rgba(0, 0, 0, 0)
  );
`;

const ImageHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  box-shadow: inset 0px 1px 16px rgba(255, 255, 255, 0.05),
    inset 0px 1px 2px rgba(255, 255, 255, 0.25),
    inset 0px 0px 2px rgba(255, 255, 255, 0.05);
  border-radius: 1.5rem;
  pointer-events: none;
  z-index: 4;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  z-index: 5;
  position: relative;
`;

const Title = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin: ${({ hasImage }) => (hasImage ? "-5rem 0 0" : "0")};
  color: white;
  text-shadow: 0px 0px 12px rgba(0, 0, 0, 0.5);
`;

const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.625rem;
  font-weight: 400;
  margin: 0;
  color: white;
  text-shadow: 0px 0px 12px rgba(0, 0, 0, 0.5);
  opacity: 0.5;
`;

export default function Item({ data }) {
  return (
    <Container hasImage={!!data.image}>
      <ImageHighlight />
      {data.image && <Image src={data.image} alt={data.name} />}
      <Details>
        <Title hasImage={!!data.image}>{data.name}</Title>
        <Description>{data.description}</Description>
      </Details>
      <BackgroundImage src={data.image} alt={data.name} />
      <Background hasImage={!!data.image} />
    </Container>
  );
}
