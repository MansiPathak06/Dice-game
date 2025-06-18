import styled from "styled-components";

const RollDice = ({ rollDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
    img {
      width: 150px;
      height: auto;
      transition: transform 0.2s ease;
    }
  }

  p {
    font-size: 24px;
    margin-top: 12px;
  }

  @media (max-width: 768px) {
    .dice img {
      width: 120px;
    }

    p {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    .dice img {
      width: 100px;
    }

    p {
      font-size: 18px;
    }
  }
`;

