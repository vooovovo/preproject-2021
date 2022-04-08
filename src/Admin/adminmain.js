import React from 'react';
import { Carousel, Layout, Space, List, Typography, Input, Alert, Modal, Button, Form, Row } from "antd";
import { EditOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { Footer } from "antd/lib/layout/layout";
import { useState } from 'react/cjs/react.production.min';
import TextArea from 'antd/lib/input/TextArea';
import './style.css';

const { Header, Content } = Layout;

//แก้modal
class LocalizedModal5 extends React.Component {
  state = { visible: false };
  constructor(props) {
    super(props);
    this.state = { contactData: null }
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  submitModal = (event) => {
    this.setState({
      visible: false,
    });
    console.log(this.state.contactData);
    alert (`Hello ${this.state.contactData}`);
    event.preventDefault();
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  getInputValue = (event)=>{
    this.setState({ contactData: event.target.value })
    console.log(event.target.value);
  };
  
  render() {
    return (
      <div>
        <Button type="primary" danger onClick={this.showModal} style={{marginLeft:'600%',marginTop:"680%"}}>
          แก้ไข
        </Button>
        <Modal
          title="แก้ไขรายละเอียดทุน"
          visible={this.state.visible}
          onOk={this.submitModal}
          onCancel={this.hideModal}
          okText="ตกลง"
          cancelText="ยกเลิก"
        >
          <Form onSubmitCapture={this.submitModal}>
              <TextArea rows='15' onChange={this.getInputValue} value={this.state.contactData} placeholder="เพิ่มข้อความที่นี่.." allowClear/>
          </Form>
        </Modal>
      </div>
    );
  }
}

class AddImage extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <p style={{ backgroundColor: "white", color: "black", fontSize: 18, fontWeight: "bold", borderRadius: 150, borderColor: "#FF7575", borderWidth:"3px" }}></p>
        
      </div>
    );
  }
}

function Adminmain() {
  
  return (
    <div className= "App">
      <Layout style={{ backgroundColor: "white" }}>
        <Header style={{ padding: 60 ,backgroundColor:"#581414"}}/>
          <Content align="left" style={{ margin: "50px", overflow: "initial" }}>
                <div>
                    <p class="pf1">ทุนประเภทที่ 1 </p>
                </div>
                <div>
                    <p class="rcorners1">รายละเอียดทุน</p>
                </div>

                {/* ปุ่มแก้ไข */}
                <div 
               style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginRight:"-50px",
                marginTop:"-500px"
              }}>
              <LocalizedModal5/>
              </div>
                {/* ปุ่มแก้ไข */}
              

              {/* ปุ่มสมัคร */}
              <Button type="primary" style={{marginLeft:"70%",marginTop:"2%"}} a href="https://reg.src.ku.ac.th/res/">
                สมัคร
              </Button>
               {/* ปุ่มสมัคร */}
              
               {/* ปุ่มกลับ */}
              <div 
               style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginRight:"-50px",
                marginTop:"-500px"
              }}>
              <Button style={{marginLeft:"55%",marginTop:"31.85%",backgroundColor:'#C4C4C4'}}a href="https://www.google.com">
                กลับ
              </Button>
              </div>
               {/* ปุ่มกลับ */}
             

              


             
              <br/>
              
          </Content>
          
           
          
      </Layout>
    </div>
  );
}

export default Adminmain;