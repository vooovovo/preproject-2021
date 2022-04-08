import React, { useState } from "react";
import { Carousel, Layout, Space, List, Typography, Input, Alert, Modal, Button } from "antd";
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

const { Title } = Typography;

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#C4C4C4",
};

const listData = [
  {
    href: "https://ant.design",
    title: `ประกาศที่ 1`,
    description:<Title level={5} type="secondary">[วันที่]</Title>
  },
  {
    href: "https://ant.design",
    title: `ประกาศที่ 2`,
    description:<Title level={5} type="secondary">[วันที่]</Title>
  },
  {
    href: "https://ant.design",
    title: `ประกาศที่ 3`,
    description:<Title level={5} type="secondary">[วันที่]</Title>
  },
  {
    href: "https://ant.design",
    title: `ประกาศที่ 4`,
    description:<Title level={5} type="secondary">[วันที่]</Title>
  },
];

const { Header, Content } = Layout;

function Generalmain() {
  
  const [editableStr] = useState("โทร. 038354580-4 ต่อ งานบริการการศึกษา 666531-7 งานทะเบียนฯ 666423-6 งานกิจการนิสิต 666600 email:oasknl@src.ku.ac.th");
  
  return (
    <div className= "App">
      <Layout style={{ backgroundColor: "white" }}>
        <Header style={{ padding: 60 }}/>
          <Content align="left" style={{ margin: "50px", overflow: "initial" }}>
              <Carousel>
                <div>
                  <h3 style={contentStyle}></h3>
                </div>
              </Carousel>
              <Space>
                <Alert message= "ประกาศ" style={{ fontSize:30, backgroundColor: "#C4C4C4", borderColor: "#C4C4C4", textAlign: "center", color: "red"}}/>
              </Space>
              <List
                itemLayout= "vertical"
                size= "large"
                dataSource={listData}
                footer={
                  <div>
                    <Title align="center" type="secondary" level={5} >มีปัญหาติดต่อ</Title>
                    <Title align="center" type="secondary" level={5} >{editableStr}</Title>
                  </div>
                }
                renderItem={item => (
                  <List.Item
                    key={item.title}
                  >
                    <List.Item.Meta
                      title={<a href={item.href}>{item.title}</a>}
                      description={item.description}
                    />
                  </List.Item>
                )}
              />,
          </Content>
      </Layout>
    </div>
  );
}

export default Generalmain;