import React from 'react';
import { Layout, Space, Button } from "antd";
import "antd/dist/antd.css";

const { Header, Content } = Layout;

function Adminmenu() {
  return (
    <div className="App">
      <Layout style={{ backgroundColor: 'white'}}>
        <Header style={{ padding: 60 }}/>
          <Content align="center" style={{ margin: '150px', overflow: 'initial'}}>
            <Space align="center" direction="horizontal">
              <Button style={{ backgroundColor: "#C4C4C4", width: 420, height: 190, color: "black", fontSize: 24, fontWeight: "bold", borderRadius: 60 }}>ลงคะแนน</Button>
              <br/>
            </Space>
            <Space align="center" direction="vertical">
              <Button style={{ backgroundColor: "#C4C4C4", width: 420, height: 190, color: "black", fontSize: 24, fontWeight: "bold", borderRadius: 60 }}>ตรวจสอบรายชื่อ/ประวัติทุน</Button>
              <br/>
            </Space>
            <Space align="center" direction="horizontal">
              <Button style={{ backgroundColor: "#C4C4C4", width: 420, height: 190, color: "black", fontSize: 24, fontWeight: "bold", borderRadius: 60 }}>รายละเอียดทุน</Button>
              <Button style={{ backgroundColor: "#C4C4C4", width: 420, height: 190, color: "black", fontSize: 24, fontWeight: "bold", borderRadius: 60 }}>เเจ้งเตือน</Button>
              <br/>
            </Space>
          </Content>
      </Layout>
    </div>
  );
}

export default Adminmenu;