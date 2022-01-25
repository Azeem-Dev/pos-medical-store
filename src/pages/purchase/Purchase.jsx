import React from "react";
import { Typography, Select, InputNumber, Input, DatePicker } from "antd";
import { MedicineInfo } from "../../utils/constants/medicineInfo";
import PurchaseTable from "../../components/purchaseTable/PurchaseTable";

const { Option } = Select;

const { Title } = Typography;
const Purchase = () => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0 20px 0 20px",
      }}
    >
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="top-purchase"
      >
        <Title>PURCHASE</Title>
        <div
          className="top-middle"
          style={{ display: "flex", flexDirection: "column", width: 300 }}
        >
          <Select
            onChange={handleChange}
            showSearch
            style={{ width: "100%" }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            <Option value="1">Not Identified</Option>
            <Option value="2">Closed</Option>
            <Option value="3">Communicated</Option>
            <Option value="4">Identified</Option>
            <Option value="5">Resolved</Option>
            <Option value="6">Cancelled</Option>
          </Select>
          <Input placeholder="Invoice#" style={{ margin: "20px 0 0 0" }} />
        </div>
        <DatePicker
          onChange={onChange}
          style={{ height: "fit-content", width: 280 }}
        />
      </div>
      <div
        style={{
          display: "flex",
          margin: "20px 0 0 0",
          justifyContent: "flex-end",
        }}
        className="middle-purchase"
      >
        <Select
          style={{ width: 400, maxHeight: "30vh", overflowY: "auto" }}
          showSearch
          autoFocus
          placeholder="Medicine"
          optionFilterProp="children"
          //   onChange={onMedicineSelected}
          filterOption={(input, option) => {
            return (
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            );
          }}
        >
          {MedicineInfo?.map((medicine) => {
            return (
              <Option
                value={medicine.name + "-R" + medicine.packPrice}
                key={medicine.id}
              >
                {medicine.name + "-R" + medicine.packPrice}
              </Option>
            );
          })}
        </Select>
        <div style={{ marginLeft: "20px" }}>
          <label>Quantity</label>
          <InputNumber
            min={1}
            max={1000000}
            defaultValue={1}
            //   onChange={onChange}
            placeholder="Quantity"
          />
        </div>
      </div>
      <div style={{ width: "85%" }} className="purchase-table">
        <PurchaseTable />
      </div>
    </div>
  );
};

export default Purchase;
