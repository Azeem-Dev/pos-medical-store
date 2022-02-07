import { useState, useEffect } from "react";
import { Typography, Input, Select, Divider } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
const DropDownWithCustomFields = ({
  handleChange,
  Options,
  AddNewType,
  selectedType,
}) => {
  const [newType, setNewType] = useState("");
  return (
    <Select
      placeholder="Medicine Type"
      style={{ width: "100%" }}
      value={selectedType}
      onChange={(val) => {
        handleChange(val);
      }}
      dropdownRender={(menu) => (
        <div>
          {menu}
          <Divider style={{ margin: "4px 0" }} />
          <div style={{ display: "flex", flexWrap: "nowrap", padding: 8 }}>
            <Input
              style={{ flex: "auto" }}
              value={newType}
              onChange={(e) => setNewType(e.target.value)}
            />
            <a
              style={{
                flex: "none",
                padding: "8px",
                display: "block",
                cursor: "pointer",
              }}
              onClick={() => AddNewType(newType)}
            >
              <PlusCircleFilled /> Add
            </a>
          </div>
        </div>
      )}
    >
      {Options.map((type) => (
        <Select.Option value={type.id} key={type.id}>
          {type.typeName}
        </Select.Option>
      ))}
    </Select>
  );
};

export default DropDownWithCustomFields;
