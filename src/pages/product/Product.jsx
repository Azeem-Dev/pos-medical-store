import { Typography, Input, Select, Divider } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
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
        <div style={{ display: "flex", width: "100%" }}>
          <Division
            LeftElement={() => <Input placeholder="Name"></Input>}
            RightElement={() => (
              <DropDownWithCustomFields
                handleChange={handleChange}
                Options={Types}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
