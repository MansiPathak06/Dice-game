import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;

  img {
    width: 300px;
    max-width: 100%;
    height: auto;
  }

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    text-align: center;

    .content h1 {
      font-size: 60px;
      white-space: normal;
    }
  }

  @media (max-width: 480px) {
    .content h1 {
      font-size: 42px;
    }

    img {
      width: 220px;
    }
  }
`;
