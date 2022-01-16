import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { InputNumber, Select, Button, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import "./MedicineTable.css";
const { Option } = Select;
const MedicineTable = ({ CalculateTotal, SaleMedicines, deleteFromSale }) => {
  const [medicines, setMedicines] = useState();
  const [mapTotal, setMapTotal] = useState([]);
  useEffect(() => {
    setMedicines(SaleMedicines);
  }, [SaleMedicines]);
  const deleteMedicineFromTable = (medicine) => {
    
    var newArray = mapTotal.filter(
      (c) => c.id != medicine.id && c.name != medicine.name
    );
    setMapTotal(newArray);
    setMedicines(
      medicines.filter((c) => c.name != medicine.name && c.id != medicine.id)
    );
    deleteFromSale(medicine);
  };
  useEffect(() => {
    CalculateTotal(mapTotal);
  }, [mapTotal]);
  const getAllTotal = (id, name, itemTotalPirce) => {
    const prevArray = mapTotal;
    const prevItem = mapTotal.filter((c) => c.id == id)[0];
    if (prevItem != undefined || prevItem != null) {
      prevItem.itemTotalPirce = itemTotalPirce;
      prevArray[prevArray.indexOf(prevItem)] = prevItem;
      setMapTotal(prevArray);
      CalculateTotal(prevArray);
    } else {
      var newItem = [];
      setMapTotal((prev) => {
        newItem = [
          ...prev,
          {
            id,
            name,
            itemTotalPirce,
          },
        ];
        return newItem;
      });
      CalculateTotal(newItem);
    }
  };
  return (
    <div className="table">
      <TableHeader />
      <div className="table-content">
        {medicines?.map((row) => {
          return (
            <TableRow
              medicine={row}
              key={row.id}
              deleteMedicineFromTable={deleteMedicineFromTable}
              getAllTotal={getAllTotal}
            />
          );
        })}
      </div>
    </div>
  );
};

const TableHeader = () => {
  return (
    <div className="table-header">
      <div className="header__item">
        <span id="name" className="filter__link">
          Name
        </span>
      </div>
      <div className="header__item">
        <span id="wins" className="filter__link filter__link--number">
          Unit
        </span>
      </div>
      <div className="header__item">
        <span id="draws" className="filter__link filter__link--number">
          Price
        </span>
      </div>
      <div className="header__item">
        <span id="losses" className="filter__link filter__link--number">
          Quantity
        </span>
      </div>
      <div className="header__item">
        <span id="total" className="filter__link filter__link--number">
          Discount
        </span>
      </div>
      <div className="header__item">
        <span id="total" className="filter__link filter__link--number">
          Item Total
        </span>
      </div>
      <div className="header__item">
        <span id="total" className="filter__link filter__link--number">
          Action
        </span>
      </div>
    </div>
  );
};

const TableRow = ({ medicine, deleteMedicineFromTable, getAllTotal }) => {
  const [unit, setUnit] = useState("Pack");
  const [price, setPrice] = useState(parseFloat(medicine?.packPrice));
  const [quantity, setQuantity] = useState(parseInt(medicine?.quantity));
  const [discount, setDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(price * quantity - discount);
  }, [price, quantity]);
  useEffect(() => {
    getAllTotal(medicine.id, medicine.name, totalPrice);
  }, [totalPrice]);

  const onUnitChange = (value) => {
    setUnit(value);
    if (value.toLowerCase() == medicine.unit.toLowerCase()) {
      setTotalPrice((price / medicine.packQuantity) * quantity - discount);
      setPrice(price / medicine.packQuantity);
      return;
    }
    setPrice(medicine.packPrice);
    setTotalPrice(medicine.packPrice * quantity - discount);
  };
  const onPriceChange = (value) => {
    setTotalPrice(price * quantity - discount);
  };
  const onQuantityChange = (value) => {
    setTotalPrice(price * quantity - discount);
  };
  const onDiscountChange = (value) => {
    setTotalPrice(price * quantity - discount);
  };

  return (
    <div className="table-row">
      <div className="table-data">{medicine?.name}</div>
      <div className="table-data">
        {" "}
        <Select value={unit} style={{ width: 80 }} onChange={onUnitChange}>
          <Option value="Pack">Pack</Option>
          <Option value={medicine?.unit}>{medicine?.unit}</Option>
        </Select>
      </div>
      <div className="table-data">
        <InputNumber
          min={0}
          value={price}
          onChange={(value) => setPrice(value)}
          onBlur={onPriceChange}
        />
      </div>
      <div className="table-data">
        <InputNumber
          min={1}
          value={quantity}
          onChange={(value) => setQuantity(value)}
          onBlur={onQuantityChange}
        />
      </div>
      <div className="table-data">
        <InputNumber
          min={0}
          value={discount}
          onChange={(value) => setDiscount(value)}
          onBlur={onDiscountChange}
        />
      </div>
      <div className="table-data">{totalPrice}</div>
      <div className="table-data">
        {" "}
        <Tooltip title="delete">
          <Button
            type="danger"
            shape="circle"
            icon={<DeleteOutlined />}
            onClick={() => {
              medicine.itemTotalPirce = totalPrice;
              deleteMedicineFromTable(medicine);
            }}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default MedicineTable;
