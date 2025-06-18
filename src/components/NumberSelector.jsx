import styled from "styled-components";


const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 10px;

  .flex {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
  }

  p {
    font-size: 24px;
    font-weight: 700;
    margin-top: 10px;
    text-align: center;
  }

  .error {
    color: red;
    font-size: 16px;
    margin-bottom: 8px;
  }

  @media (max-width: 768px) {
    align-items: center;

    .flex {
      gap: 16px;
    }

    p {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    .flex {
      gap: 12px;
    }

    p {
      font-size: 18px;
    }

    .error {
      font-size: 14px;
    }
  }
`;


const Box = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isSelected",
})`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  cursor: pointer;
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    height: 60px;
    width: 60px;
    font-size: 20px;
  }

  @media (max-width: 480px) {
    height: 50px;
    width: 50px;
    font-size: 18px;
  }
`;