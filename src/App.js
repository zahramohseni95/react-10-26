import { Layout, Menu } from "antd";
import { Navigate, Route, Routes, useNavigate } from "react-router";
import "./App.css";
import Submenu1 from "./page/Submenu1";
import Submenu2 from "./page/Submenu2";
import Submenu3 from "./page/Submenu3";

const { Sider, Header, Content, Footer } = Layout;
const items = [
  {
    key: "sub1",
    label: "sub 1",
  },
  {
    key: "sub2",
    label: "sub 2",
  },
  {
    key: "sub3",
    label: "sub 3",
  },
];
function App() {
  const Navigate=useNavigate();
  function handleClickItem(e) {
    const { key } = e;
    console.log(key)
    switch (key) {
      case "sub1":
        Navigate("/Submenu1") 
        break;
      case "sub2":
        Navigate("/Submenu2") 
        break;
      case "sub3":
        Navigate("/Submenu3") 
        break;

      default:
        break;
    }
  }
  return (
    <Layout>
      <Sider>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
          onClick={handleClickItem}
        />
      </Sider>
      <Layout>
        <Header>Website Header</Header>
        <Content>
          <Routes>
            <Route path="/Submenu1" element={<Submenu1 />} />
            <Route path="/Submenu2" element={<Submenu2 />} />
            <Route path="/Submenu3" element={<Submenu3 />} />
          </Routes>
        </Content>
        <Footer>©2023 All rights reserved</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
