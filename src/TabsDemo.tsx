import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import styled from "styled-components";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: `Tab 1`,
    children: `Tabs styled with styled-components`,
  },
  {
    key: "2",
    label: `Tab 2`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: "3",
    label: `Tab 3`,
    children: `Content of Tab Pane 3`,
  },
];

export const TabsDemo: React.FC = () => (
  <StyledTabs defaultActiveKey="1" items={items} onChange={onChange} />
);

const StyledTabs = styled(Tabs)`
  .ant-tabs-tab {
    color: greenyellow;
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: magenta;
  }
`;
