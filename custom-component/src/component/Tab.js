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
  const [content, setContent] = useState(null);

  useEffect(() => {
    const tmp = [];
    data.forEach((item, index) => {
      const newItem = { ...item, id: index, active: false };
      tmp.push(newItem);
    });
    setTabItems(tmp);
  }, [data]);

  const handleTabClick = (id) => {
    setContent(tabItems[id].content);

    setTabItems(
      tabItems.map((item) =>
        item.id === id ? { ...item, active: true } : { ...item, active: false }
      )
    );
  };

  return (
    <div>
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
      <div>
        <h3 style={{ textAlign: "center" }}>{content}</h3>
      </div>
    </div>
  );
}

Tab.defaultProps = {
  data: [
    { title: "Tab1", content: "Tab menu One" },
    { title: "Tab2", content: "Tab menu Two" },
    { title: "Tab3", content: "Tab menu three" },
  ],
};

export default Tab;
