
import React from "react";
import {
  Card,
  Table,
  CardBody,
  Row,
  Col,
} from "reactstrap";
import { map } from 'lodash';
import axios from 'axios';
class Dashboard extends React.Component {

  render() {
    axios.post('​https://ic3haoorgj.execute-api.ap-south-1.amazonaws.com/api/auth', {
      username: 'developer@uitest.com',
      password: 'react2020'
    }).then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
    const successResponse = {
      data: {
        activeUsers: 231,
        inactiveUsers: 454,
        userLogs: [
          {
            firstName: 'Mark',
            lastName: 'Otto',
            phoneNumber: '928-339-5901',
            Address: '1221 Clarksburg Park Road, JBPHH, Hawaii-96860'
          },
          {
            firstName: 'Job',
            lastName: 'Thornton',
            phoneNumber: '528-329-5924',
            Address: '3698'
          },
          {
            firstName: 'Florence',
            lastName: 'freebies',
            phoneNumber: '343-123-5457',
            Address: '3816 Melody Lane, Midlothian, Virginia-23113'
          }
        ]
      }
    };
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats" style={{ color: "green" }}>
                <CardBody>
                  <Row>
                    <Col md="9" xs="5">
                      <div className=" text-center">
                        Active Users
                      </div>
                    </Col>
                    <Col md="9" xs="5">
                      <h4 className=" text-center">231</h4>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats" style={{ color: "red" }}>
                <CardBody>
                  <Row>
                    <Col md="9" xs="5">
                      <div className=" text-center">
                        In Active Users
                  </div>
                    </Col>
                    <Col md="9" xs="5">
                      <h4 className=" text-center">545</h4>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

          </Row>
          <Row>
            <Col md="12">
              <Card>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Phone Number</th>
                      <th>Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {map(successResponse.data.userLogs, ((data, key) =>
                      <tr>
                        <td>{key}</td>
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.phoneNumber}</td>
                        <td>{data.Address}</td>
                      </tr>
                    )
                    )}

                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
