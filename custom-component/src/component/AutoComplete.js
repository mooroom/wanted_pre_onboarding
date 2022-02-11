import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdOutlineClose } from "react-icons/md";

const SearchBlock = styled.div`
  position: relative;
  width: 500px;
`;

const SearchBarBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 73px;
  padding: 12px 20px;
  font-size: 18px;
  width: 100%;
  border: 1px solid var(--secondary);
  border-radius: ${({ typing }) => (typing ? "7px 7px 0px 0px" : "7px")};

  &:focus-within {
    box-shadow: ${({ typing }) =>
      typing ? "none" : "0px 10px 10px rgba(0, 0, 0, 0.2)"};
  }
`;

const SearchInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-style: none;
  font-size: 18px;
  flex: 1;
  margin: 3px;

  &:focus {
    outline: none !important;
  }
`;

const SearchListBlock = styled.div`
  position: absolute;
  top: 73px;
  left: 0;
  width: 100%;
  padding: 12px 0px;

  border: 1px solid var(--secondary);
  border-radius: 0px 0px 7px 7px;
  border-top: none;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
`;
const SearchListContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;
const SearchListItem = styled.li`
  padding: 10px 20px;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

function AutoComplete(props) {
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const onChangeInput = (e) => {
    const { value } = e.target;
    setText(value);

    const matches = users.filter((user) => {
      const regex = new RegExp(`${value}`, "gi");
      return user.match(regex);
    });

    setSuggestions(matches);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((fetchedData) => {
        let tmp = [];
        fetchedData.forEach((data) => tmp.push(data.username));
        setUsers(tmp);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <SearchBlock>
      <SearchBarBlock typing={text}>
        <SearchInput
          placeholder="Search..."
          value={text}
          onChange={onChangeInput}
        />
        <MdOutlineClose
          style={{ cursor: "pointer" }}
          onClick={() => setText("")}
        />
      </SearchBarBlock>
      {text && (
        <SearchListBlock>
          <SearchListContainer>
            {suggestions.length === 0 ? (
              <SearchListItem style={{ color: "gray" }}>
                No Suggestions
              </SearchListItem>
            ) : (
              suggestions.map((suggestion, idx) => (
                <SearchListItem key={idx} onClick={() => setText(suggestion)}>
                  {suggestion}
                </SearchListItem>
              ))
            )}
          </SearchListContainer>
        </SearchListBlock>
      )}
    </SearchBlock>
  );
}

export default AutoComplete;
