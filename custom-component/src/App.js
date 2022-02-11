import { useState } from "react";
import "./App.css";
import Toggle from "./component/Toggle";
import Modal from "./component/Modal";
import Tab from "./component/Tab";
import Tag from "./component/Tag";
import AutoComplete from "./component/AutoComplete";
import ClickToEdit from "./component/ClickToEdit";

import styled from "styled-components";

const ComponentsList = [
  "toggle",
  "modal",
  "tab",
  "tag",
  "autoComplete",
  "clickToEdit",
];

const ComponentsNavBlock = styled.nav`
  position: fixed;
  top: 50px;
  left: 50px;

  li {
    cursor: pointer;
    padding: 10px;
    font-weight: bold;
    color: var(--text-gray);

    &:active {
      color: var(--primary);
    }
  }
`;

const ComponentsNav = ({ setComopnent }) => {
  return (
    <ComponentsNavBlock>
      <ul>
        {ComponentsList.map((component, idx) => (
          <li key={idx} onClick={() => setComopnent(component)}>
            {component}
          </li>
        ))}
      </ul>
    </ComponentsNavBlock>
  );
};

function App() {
  const [component, setComopnent] = useState("toggle");

  return (
    <div className="App">
      <ComponentsNav setComopnent={setComopnent} />
      {component === "toggle" && <Toggle />}
      {component === "modal" && <Modal />}
      {component === "tab" && <Tab />}
      {component === "tag" && <Tag />}
      {component === "autoComplete" && <AutoComplete />}
      {component === "clickToEdit" && <ClickToEdit />}
    </div>
  );
}

export default App;
