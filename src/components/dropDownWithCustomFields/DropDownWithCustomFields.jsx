import { Typography, Input, Select, Divider } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
const DropDownWithCustomFields = ({ handleChange,Options }) => {
  return (
    <Select
      defaultValue="lucy"
      style={{ width: "100%" }}
      onChange={handleChange}
      dropdownRender={(menu) => (
        <div>
          {menu}
          <Divider style={{ margin: "4px 0" }} />
          <div style={{ display: "flex", flexWrap: "nowrap", padding: 8 }}>
            <Input
              style={{ flex: "auto" }}
              // value={name}
              // onChange={this.onNameChange}
            />
            <a
              style={{
                flex: "none",
                padding: "8px",
                display: "block",
                cursor: "pointer",
              }}
              // onClick={this.addItem}
            >
              <PlusCircleFilled /> Add
            </a>
          </div>
        </div>
      )}
    >
      {Options.map((type) => (
        <Select.Option value={type.id} key={type.id}>
          {type.Name}
        </Select.Option>
      ))}
    </Select>
  );
};

export default DropDownWithCustomFields;
