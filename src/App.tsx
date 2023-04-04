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
          <Space>
            <DatePicker />
            <Button type="primary">Primary Button</Button>
            <Box>Eine Box</Box>
            <GreenButton>Green Button</GreenButton>
            <TabsDemo />
            <AutoCompleteDemo />
          </Space>
        </div>
      </ConfigProvider>
    </AntApp>
  );
}

export default App;

const Box = styled.div`
  border: 4px solid greenyellow;
  padding: 8px;
`;

// const GreenButton = Button;
//
//   background-color: greenyellow;
//   font-size: 30px;
//   height: 60px;
//   text-align: right;
//   width: 200px;
// `;
const GreenButton = styled(Button)`
  background-color: greenyellow;
  font-size: 30px;
  height: 60px;
  text-align: right;
  width: 300px;
  display: block;
`;
