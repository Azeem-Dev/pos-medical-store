import { Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import { DownOutlined, DollarOutlined } from "@ant-design/icons";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar" style={{ marginBottom: "20px" }}>
      <div className="container">
        <div className="navbar-header">
          <button className="navbar-toggler" data-toggle="open-navbar1">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <Link to="/">
            <h4>
              Afnan<span> Medical Store</span>
            </h4>
          </Link>
        </div>

        <div className="navbar-menu" id="open-navbar1">
          <ul className="navbar-nav">
            <li className="active">
              <Link to="/">Sale</Link>
            </li>
            <li>
              <Link to="/purchase">Purchase</Link>
            </li>
            <li>
              <Link to="/add-product">Add Product</Link>
            </li>
            <li>
              <Link to="/add-supplier">Add Supplier</Link>
            </li>
            <li>
              <Dropdown overlay={menu}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Statistics <DownOutlined />
                </a>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const menu = (
  <Menu>
    <Menu.Item
      icon={<DollarOutlined style={{ color: "#1890ff", fontSize: "16px" }} />}
      key="dailySales"
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Daily Sales
      </a>
    </Menu.Item>
    <Menu.Item
      icon={<DollarOutlined style={{ color: "#1890ff", fontSize: "16px" }} />}
      key="weeklySales"
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Weekly Sales
      </a>
    </Menu.Item>
    <Menu.Item
      icon={<DollarOutlined style={{ color: "#1890ff", fontSize: "16px" }} />}
      key="monthlySales"
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Monthly Sales
      </a>
    </Menu.Item>
    <Menu.Item
      icon={<DollarOutlined style={{ color: "#1890ff", fontSize: "16px" }} />}
      key="yearlySales"
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Yearly Sales
      </a>
    </Menu.Item>
    <Menu.Item danger key="test">
      a danger item
    </Menu.Item>
  </Menu>
);

export default Navbar;
