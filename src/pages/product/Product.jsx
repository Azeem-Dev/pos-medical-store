import { useEffect, useState } from "react";
import { Typography, Input, InputNumber } from "antd";
import Barcode from "react-barcode";
import "./Product.css";
import Division from "../../components/division/LeftRightDivider";
import DropDownWithCustomFields from "../../components/dropDownWithCustomFields/DropDownWithCustomFields";
import { getUtil, postUtil } from "../../utils/api/pharmacy-pos.api";
const { Title } = Typography;
const Product = () => {
  const [Types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    console.log(selectedType);
  }, [selectedType]);

  const handleChange = (value) => {
    setSelectedType(value);
  };

  const GetAllTypes = async () => {
    var res = await getUtil("ProductType/GetAllTypes");
    console.log(res.data);
    if (res?.data) {
      setTypes(res?.data);
    }
  };

  const AddNewType = (value) => {
    (async () => {
      var res = await postUtil("ProductType/AddProductType", {
        typeName: value,
      });
      await GetAllTypes();
    })();
  };
  useEffect(() => {
    console.log("re render");
    (async () => await GetAllTypes())();
  }, []);

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
                AddNewType={AddNewType}
                Options={Types}
                selectedType={selectedType}
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
