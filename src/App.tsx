import "antd/dist/reset.css";
import {
  App as AntApp,
  Button,
  ConfigProvider,
  DatePicker,
  Space,
  version,
} from "antd";
import styled from "styled-components";
import { TabsDemo } from "./TabsDemo";
import React from "react";
import { AutoCompleteDemo } from "./AutoCompleteDemo";

function App() {
  return (
    <AntApp>
      <ConfigProvider theme={{ hashed: false }}>
        <div className="App" style={{ margin: 24 }}>
          <h1>antd version: {version}</h1>
          <Space direction={"vertical"} size={32}>
            <StyledDiv>div styled with styled-components</StyledDiv>
            <Button>Unstyled Button</Button>
            <StyledButton>Styled Button</StyledButton>
            <TabsDemo />
            <AutoCompleteDemo />
          </Space>
        </div>
      </ConfigProvider>
    </AntApp>
  );
}

export default App;

const StyledDiv = styled.div`
  border: 4px solid greenyellow;
  padding: 8px;
`;

const StyledButton = styled(Button)`
  background-color: greenyellow;
  font-size: 30px;
  height: 60px;
  text-align: right;
  width: 600px;
  display: block;
`;
