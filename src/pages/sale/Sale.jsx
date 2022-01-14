import "./Sale.css";
import { Typography, Select, InputNumber } from "antd";
import MedicineTable from "../../components/medicineTable/MedicineTable";

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onSearch(val) {
  console.log("search:", val);
}

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

const { Title } = Typography;

const Sale = () => {
  return (
    <div
      className="sale-container"
      style={{ marginLeft: "20px", marginRight: "20px" }}
    >
      <div className="sale-heading">
        <Title>SALE</Title>
      </div>
      <div
        className="sale-item-selector-filter"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <div
          className="search-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              marginBottom: "0",
              marginRight: "10px",
            }}
          >
            Name
          </p>
          <Select
            style={{ width: 400 }}
            showSearch
            placeholder="Medicine"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) => {
              return (
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              );
            }}
          >
            <Option value="jack">jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </div>
        <div
          className="search-quantity-selector-batch"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              marginBottom: "0",
              marginRight: "10px",
            }}
          >
            Batch:
          </p>
          <Select
            style={{ width: 400 }}
            showSearch
            placeholder="Medicine"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) => {
              return (
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              );
            }}
          >
            <Option value="jack">jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </div>
        <div
          className="search-quantity-selector"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              marginBottom: "0",
              marginRight: "10px",
            }}
          >
            Quantity
          </p>
          <InputNumber
            min={1}
            max={100}
            defaultValue={1}
            onChange={onChange}
            style={{ width: 80 }}
          />
        </div>
      </div>
      <div className="medicine-info-table" style={{ display: "flex" }}>
        <div className="medicine-info-table-left" style={{ width: "85%" }}>
          <MedicineTable />
        </div>
        <div
          className="medicine-info-table-right"
          style={{
            width: "15%",
            position: "fixed",
            right: "0",
            marginTop: "50px",
          }}
        >
          <Title>Total</Title>
        </div>
      </div>
    </div>
  );
};

export default Sale;
