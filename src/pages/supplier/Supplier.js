import { Input, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./Supplier.css";
const Supplier = () => {
  return (
    <div style={{ margin: "0 20px 0 20px" }}>
      <div style={{ padding: "5% 20% 0 20%" }}>
        Supplier Name
        <Input placeholder="Basic usage" style={{ margin: "5px 0 0 0" }} />
      </div>
      <div style={{ padding: "2% 20% 0 20%" }}>
        Supplier Code
        <Input placeholder="Basic usage" style={{ margin: "5px 0 0 0" }} />
      </div>
      <div style={{ padding: "2% 20% 0 20%" }}>
        Supplier Address
        <Input placeholder="Basic usage" style={{ margin: "5px 0 0 0" }} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px 0 0 0",
        }}
      >
        <Button type="primary" icon={<PlusOutlined />} size="large">
          Add Supplier
        </Button>
      </div>
    </div>
  );
};

export default Supplier;
