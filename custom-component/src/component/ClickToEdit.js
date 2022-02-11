import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  h3 {
    margin-top: 50px;
  }
`;

const StyledInputBlock = styled.div`
  display: flex;
  align-items: center;

  & + & {
    margin-top: 20px;
  }

  label {
    margin-right: 20px;
  }

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: flex;
    padding: 12px 20px;
    border-radius: 7px;
    font-size: 18px;
    width: 200px;
    outline: none;
    border: 1px solid var(--secondary);
    &:focus-within {
      border-color: var(--primary);
    }
  }
`;

const StyledInput = ({ id, label, type, onChange }) => {
  return (
    <StyledInputBlock>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type={type} onBlur={onChange} />
    </StyledInputBlock>
  );
};

function ClickToEdit({ formData }) {
  const [inputs, setInputs] = useState({
    name: "Unknown",
    age: 0,
  });

  const { name, age } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <StyledForm>
      {formData.map((input, idx) => (
        <StyledInput
          key={idx}
          id={input.id}
          name={input.id}
          label={input.label}
          type={input.type}
          onChange={onChange}
        />
      ))}
      <h3>
        이름: {name}, 나이: {age}
      </h3>
    </StyledForm>
  );
}

ClickToEdit.defaultProps = {
  formData: [
    { id: "name", label: "이름", type: "text" },
    { id: "age", label: "나이", type: "number" },
  ],
};

export default ClickToEdit;
