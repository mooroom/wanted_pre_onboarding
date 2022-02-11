import React, { useRef, useState } from "react";
import styled from "styled-components";
import { MdOutlineClose } from "react-icons/md";

const TagsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 73px;
  padding: 12px 20px;
  border-radius: 7px;
  font-size: 18px;
  width: 500px;
  border: 1px solid var(--secondary);
  &:focus-within {
    border-color: var(--primary);
  }
`;

const TagItemsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const TagItemBlock = styled.li`
  background: var(--primary);
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 7px;
  margin: 3px;
`;

const TagItemText = styled.span`
  color: white;
  font-size: inherit;
  margin-right: 10px;
`;

const CloseButton = styled.button`
  background: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TagInput = styled.input`
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

const TagItem = ({ text, removeTag }) => {
  return (
    <TagItemBlock>
      <TagItemText>{text}</TagItemText>
      <CloseButton>
        <MdOutlineClose onClick={removeTag} />
      </CloseButton>
    </TagItemBlock>
  );
};

function Tag() {
  const [tags, setTags] = useState([]);
  const nextId = useRef(1);

  const createTag = (e) => {
    if (e.key === "Enter") {
      if (!e.target.value) return;

      const newTag = { id: nextId.current, name: e.target.value };
      setTags([...tags, newTag]);
      nextId.current += 1;
      e.target.value = "";
    }
  };

  const removeTag = (id) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

  return (
    <TagsBlock>
      <TagItemsContainer>
        {tags.map((tag) => (
          <TagItem
            key={tag.id}
            text={tag.name}
            removeTag={() => removeTag(tag.id)}
          />
        ))}
      </TagItemsContainer>
      <TagInput
        placeholder="Press Enter to add tag"
        onKeyUpCapture={createTag}
      />
    </TagsBlock>
  );
}

export default Tag;
