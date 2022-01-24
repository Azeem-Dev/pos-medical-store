import { Typography, Input, Select, InputNumber } from "antd";
import Barcode from "react-barcode";
import { Types } from "../../utils/constants/types";
import "./Product.css";
import Division from "../../components/division/LeftRightDivider";
import DropDownWithCustomFields from "../../components/dropDownWithCustomFields/DropDownWithCustomFields";
const { Title } = Typography;
const { Option } = Select;
const Product = () => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <div style={{ margin: "0 20px 0 20px" }}>
      <div className="top-heading-add-product">
        <Title>PRODUCT DETAILS</Title>
        <div
          style={{
            width: "100%",
          }}
        >
          <Division
            LeftElement={() => <Input placeholder="Name"></Input>}
            RightElement={() => (
              <DropDownWithCustomFields
                handleChange={handleChange}
                Options={Types}
              />
            )}
          />
          <div style={{ margin: "20px 0 20px 0" }}>
            <Division
              LeftElement={() => (
                <InputNumber
                  placeholder="Pack Quantity"
                  min={1}
                  max={20000}
                  style={{ width: "100%" }}
                />
              )}
              RightElement={() => (
                <InputNumber
                  placeholder="Pack Cost Price"
                  min={1}
                  max={20000}
                  style={{ width: "100%" }}
                />
              )}
            />
          </div>
          <div style={{ margin: "20px 0 20px 0" }}>
            {" "}
            <Division
              LeftElement={() => (
                <InputNumber
                  placeholder="Pack Retail"
                  min={1}
                  max={2000000}
                  style={{ width: "100%" }}
                />
              )}
              RightElement={() => (
                <Input placeholder="Rack Number" style={{ width: "100%" }} />
              )}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Input placeholder="Manufactorer" style={{ width: "50%" }} />
            <Barcode value="Azeems Test Barcode" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
