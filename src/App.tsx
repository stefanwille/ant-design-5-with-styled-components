import "antd/dist/reset.css";
import { App as AntApp, Button, DatePicker, Space, version } from "antd";

function App() {
  return (
    <AntApp>
      <div className="App" style={{ margin: 24 }}>
        <h1>antd version: {version}</h1>
        <Space>
          <DatePicker />
          <Button type="primary">Primary Button</Button>
        </Space>
      </div>
    </AntApp>
  );
}

export default App;
