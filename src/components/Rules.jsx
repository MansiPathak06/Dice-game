import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game?</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          After clicking on dice if selected number is equal to dice number you
          will get same point as dice.{" "}
        </p>
        <p>If you get wrong guess then 2 point will be dedcuted. </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 24px;
  margin-top: 40px;
  border-radius: 10px;

  h2 {
    font-size: 24px;
    text-align: center;
  }

  .text {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    p {
      font-size: 18px;
      line-height: 1.5;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;

    h2 {
      font-size: 22px;
    }

    .text p {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    padding: 16px;

    h2 {
      font-size: 20px;
    }

    .text p {
      font-size: 15px;
    }
  }
`;
