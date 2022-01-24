import { Tooltip, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
const PurchaseTable = () => {
  return (
    <div className="table">
      <TableHeader />
      <div className="table-content">
        <TableRow />
      </div>
    </div>
  );
};

const TableHeader = () => (
  <div className="table-header">
    <div className="header__item">
      <span id="name" className="filter__link" href="#">
        Name
      </span>
    </div>
    <div className="header__item">
      <span id="wins" className="filter__link filter__link--number" href="#">
        Batch
      </span>
    </div>
    <div className="header__item">
      <span id="draws" className="filter__link filter__link--number" href="#">
        Qty
      </span>
    </div>
    <div className="header__item">
      <span id="losses" className="filter__link filter__link--number" href="#">
        Expiry
      </span>
    </div>
    <div className="header__item">
      <span id="losses" className="filter__link filter__link--number" href="#">
        Retail Price
      </span>
    </div>
    <div className="header__item">
      <span id="losses" className="filter__link filter__link--number" href="#">
        Trade Price
      </span>
    </div>
    <div className="header__item">
      <span id="losses" className="filter__link filter__link--number" href="#">
        Percentage
      </span>
    </div>
    <div className="header__item">
      <span id="total" className="filter__link filter__link--number" href="#">
        Item Total
      </span>
    </div>
    <div className="header__item">
      <span id="total" className="filter__link filter__link--number" href="#">
        Action
      </span>
    </div>
  </div>
);
const TableRow = () => {
  return (
    <div className="table-row">
      <div className="table-data">Methycobal</div>
      <div className="table-data">2B</div>
      <div className="table-data">1</div>
      <div className="table-data">12/10/2022</div>
      <div className="table-data">111150</div>
      <div className="table-data">111100</div>
      <div className="table-data">15</div>
      <div className="table-data">111100</div>
      <div className="table-data">
        {" "}
        <Tooltip title="delete">
          <Button
            type="danger"
            shape="circle"
            icon={<DeleteOutlined />}
            onClick={() => {}}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default PurchaseTable;
