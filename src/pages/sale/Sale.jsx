import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Sale.css";
import { Typography, Select, InputNumber, Alert } from "antd";
import MedicineTable from "../../components/medicineTable/MedicineTable";
import { MedicineInfo } from "../../utils/constants/medicineInfo";
const { Option } = Select;

const { Title } = Typography;

const Sale = () => {
  const [Medicine, setMedicine] = useState(null);
  const [SaleMedicines, setSaleMedicines] = useState([]);
  const [selectedMedicineQuantity, setSelectedMedicineQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const CalculateTotal = (valueArray) => {
    var totalCalc = 0;
    valueArray?.map((item) => {
      totalCalc += item.itemTotalPirce;
    });
    setTotal(totalCalc);
  };

  const onMedicineSelected = (value) => {
    const res = value.split("-R");
    const medicine = res[0];
    const selectedMedicinePrice = res[1];
    const key = uuidv4();
    setMedicine({
      name: medicine,
      packPrice: selectedMedicinePrice,
    });
  };
  function QuantityChange(value) {
    if (Medicine == {} || Medicine == null || Medicine == undefined) {
      return;
    }
    const toAdd = MedicineInfo.filter(
      (c) => c.name == Medicine.name && c.packPrice == Medicine.packPrice
    )[0];
    toAdd.quantity = selectedMedicineQuantity;
    setSaleMedicines((prev) => [...prev, toAdd]);
  }

  const deleteFromSale = (medicine) => {
    setSaleMedicines(
      SaleMedicines.filter(
        (c) => c.name != medicine.name && c.id != medicine.id
      )
    );
  };

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
            onChange={onMedicineSelected}
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
            max={10000}
            value={selectedMedicineQuantity}
            onChange={(value) => setSelectedMedicineQuantity(value)}
            onBlur={QuantityChange}
            style={{ width: 80 }}
          />
        </div>
      </div>
      <div className="medicine-info-table" style={{ display: "flex" }}>
        <div className="medicine-info-table-left" style={{ width: "85%" }}>
          <MedicineTable
            CalculateTotal={(value) => CalculateTotal(value)}
            SaleMedicines={SaleMedicines}
            deleteFromSale={deleteFromSale}
          />
        </div>
        <div
          className="medicine-info-table-right"
          style={{
            width: "15%",
            position: "fixed",
            right: "0",
            marginTop: "50px",
            textAlign: "center",
          }}
        >
          <Title style={{ textDecoration: "underline" }}>Total</Title>
          <Title
            level={3}
            style={{ backgroundColor: "#f9f9f9", padding: "20px" }}
          >
            {total}
          </Title>
        </div>
      </div>
    </div>
  );
};

export default Sale;
