import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineClose } from "react-icons/md";

const DarkBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
`;
const StyledButton = styled.button`
  padding: 20px;
  color: white;
  background: var(--primary);
  border: none;
  border-radius: 100px;
`;

const ModalBlock = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  width: 40%;
  max-width: 1000px;
`;

const ModalHeader = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
`;

const Close = styled.div`
  &:after {
    display: inline-block;
    content: "\\d7";
    font-size: 18pt;
  }
`;

const ModalBody = styled.div`
  width: 100%;
  text-align: center;
  padding: 100px;
  color: var(--primary);
`;

function Modal({ content }) {
  const [modal, setModal] = useState(false);
  return (
    <>
      <DarkBackground visible={modal}>
        <ModalBlock>
          <ModalHeader>
            <MdOutlineClose onClick={() => setModal(false)} />
          </ModalHeader>
          <ModalBody>{content}</ModalBody>
        </ModalBlock>
      </DarkBackground>
      <StyledButton onClick={() => setModal(true)}>Open Modal</StyledButton>
    </>
  );
}

Modal.defaultProps = {
  content: "HELLO CODESTATES",
};

export default Modal;
