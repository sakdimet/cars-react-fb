import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
// import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Common from "./common";
const BASE_URL = Common.API_URL;
export default class report extends Component {
  state = {
    zipcode: 33000,
    amphur_code: 0,
    amphur_name: "",
    province_code: 0,
    province_name: "",
    district: [],
  };
  getData = async () => {
    try {
      await axios
        .get(`${BASE_URL}/${this.state.zipcode}`)
        .then((response) => {
          let res = response.data;

          if (res.district === undefined) {
            this.setState({
              district: [],
            });
          }
          this.setState({
            amphur_name: res.amphur_name,
            province_name: res.province_name,
            district: res.district,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  filter = (e) => {
    this.setState({
      zipcode: e.target.value,
    });
    this.getData();
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div>
        <Row>
          <Col lg="9">
            <div align="left">
              <h3>
                รายชื่อสมาชิก 
              </h3>
            </div>
          </Col>
          <Col lg="3">
          </Col>
        </Row>

        <div style={{ paddingTop: "15px" }}>
          <Card>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>รหัสนักศึกษา</th>
                    <th>ชื่อ</th>
                    <th>นามสกุล</th>
                  </tr>
                </thead>
                <tbody>
                  
                    <tr>
                      <td align="center">65130835</td>
                      <td>ศักดิเมธ</td>
                      <td>ขจรฤทธิ์เดช</td>
                    </tr>
                    <tr>
                      <td align="center">65130413</td>
                      <td>จิตบุณย์</td>
                      <td>สัคคะนายก</td>
                    </tr>
                    <tr>
                      <td align="center">65130093</td>
                      <td>ภัทรพงษ์</td>
                      <td>มีนุชนาถ</td>
                    </tr>
                    <tr>
                      <td align="center">65130457</td>
                      <td>ฐปกร</td>
                      <td>ลิขิตนภาเวทย์</td>
                    </tr>
                 
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
