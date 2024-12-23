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
  user-select: none;
  -webkit-user-drag: none;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`;

const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  background-color: ${({ hasImage }) =>
    hasImage ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.2)"};
  top: ${({ hasImage }) => (hasImage ? "2rem" : "0")};
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center 25%;
  z-index: 3;
  position: relative;
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 0)
  );
  user-select: none;
  -webkit-user-drag: none;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
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
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
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

  &::selection {
    background: rgba(255, 255, 255, 1);
    color: black;
    text-shadow: none;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.625rem;
  font-weight: 400;
  margin: 0;
  color: white;
  text-shadow: 0px 0px 12px rgba(0, 0, 0, 0.5);
  opacity: 0.5;

  &::selection {
    background: rgba(255, 255, 255, 1);
    color: black;
    text-shadow: none;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  position: relative;
  z-index: 3;
  padding: 0.25rem 1.5rem 1.5rem 1.5rem;
`;

const Button = styled.a`
  flex: 1;
  background: none;
  border: none;
  text-decoration: none;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: bold;
  padding: 0.675rem 1rem 0.875rem 1rem;
  border-radius: 0.75rem;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25), 0px 0px 12px rgba(0, 0, 0, 0.5);
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  user-select: none;
  -webkit-user-drag: none;

  box-shadow: inset 0px 1px 16px rgba(255, 255, 255, 0.05),
    inset 0px 1px 8px rgba(255, 255, 255, 0.05),
    inset 0px 1px 0px rgba(255, 255, 255, 0.1),
    inset 0px 1px 2px rgba(255, 255, 255, 0.15),
    inset 0px -1px 0px rgba(0, 0, 0, 0.4), 0px 4px 12px rgba(0, 0, 0, 0.2),
    0px 4px 32px rgba(0, 0, 0, 0.05);

  background-image: radial-gradient(
    circle at 50% -50%,
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0)
  );
  background-size: 100% 200%;
  background-position: 50% 100%;
  transition: background-position 0.3s ease, transform 0.3s ease;

  &:hover {
    background-position: 50% 0%;
  }

  &:active {
    transform: scale(0.9);
  }
`;

export default function Item({ data, city }) {
  return (
    <Container hasImage={!!data.image}>
      <ImageHighlight />
      {data.image && <Image src={data.image} alt={data.name} />}
      <Details>
        <Title hasImage={!!data.image}>{data.name}</Title>
        <Description>{data.description}</Description>
      </Details>
      <Buttons>
        <Button
          href={`https://www.google.com/maps/?q=${encodeURIComponent(
            `${data.name}, ${city}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Map
        </Button>
        <Button
          href={`https://en.wikipedia.org/?curid=${data.wikipediaId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Info
        </Button>
      </Buttons>
      <BackgroundImage src={data.image} alt={data.name} />
      <Background hasImage={!!data.image} />
    </Container>
  );
}
