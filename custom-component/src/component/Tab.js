import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const TabBlock = styled.div`
  background: var(--secondary);
  width: 100%;
  max-width: 1000px;
  padding: 0 30px;
`;

const TabContainer = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const TabItem = styled.li`
  font-weight: bold;
  padding: 20px;
  min-width: 100px;
  flex: 1;
  color: var(--text-gray);

  ${({ active }) =>
    active
      ? css`
          background: var(--primary);
          color: white;
        `
      : css`
          color: var(--text-gray);
        `}
`;

function Tab({ data }) {
  const [tabItems, setTabItems] = useState(null);

  useEffect(() => {
    const tmp = [];
    data.forEach((item, index) => {
      const newItem = { ...item, id: index, active: false };
      tmp.push(newItem);
    });
    setTabItems(tmp);
  }, [data]);

  const handleTabClick = (id) => {
    setTabItems(
      tabItems.map((item) =>
        item.id === id ? { ...item, active: true } : { ...item, active: false }
      )
    );
  };

  return (
    <TabBlock>
      <TabContainer>
        {tabItems &&
          tabItems.map((item) => (
            <TabItem
              key={item.id}
              active={item.active}
              onClick={() => handleTabClick(item.id)}
            >
              {item.title}
            </TabItem>
          ))}
      </TabContainer>
    </TabBlock>
  );
}

Tab.defaultProps = {
  data: [{ title: "Tab1" }, { title: "Tab2" }, { title: "Tab3" }],
};

export default Tab;
