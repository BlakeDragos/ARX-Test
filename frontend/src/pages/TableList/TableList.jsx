import React, { Component } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import ChartistGraph from "react-chartist";

import Card from "../../components/Card/Card";

class TableList extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    let dataSales = {
      labels: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
      ],
      series: [
        [287, 385, 490, 492, 554, 586, 698, 695],
        [67, 152, 143, 240, 287, 335, 435, 437],
        [23, 113, 67, 108, 190, 239, 307, 308]
      ]
    };
    let optionsSales = {
      low: 0,
      high: 800,
      showArea: false,
      height: "245px",
      axisX: {
        showGrid: false
      },
      lineSmooth: true,
      showLine: true,
      showPoint: true,
      fullWidth: true,
      chartPadding: {
        right: 50
      }
    };
    let responsiveSales = [
      [
        "screen and (max-width: 640px)",
        {
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }
      ]
    ];
    var legendSales = {
      names: [],
      types: ["info", "danger", "warning"]
    };
    const thArray = ["ID", "Exercise", "Protocol", "Start to End Time", "Intensity", "Max", "Output"];
    let tdArray = [];
    for (let i = 0; i < this.props.pass.length; i++) {
      tdArray.push(this.props.pass[i]);
    }
    return (
      <div className="content">
        <Container fluid>
          <Row>
            <Col sm={12} md={6}>
              <Card
                title="Sessions"
                category="All of your sessions"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            <td>{prop.id}</td>
                            <td>{prop.Exercise}</td>
                            <td>{prop.Protocol}</td>
                            <td>{prop.StartToEndTime}</td>
                            <td>{prop.Intensity}</td>
                            <td>{prop.Max}</td>
                            <td>{prop.Output}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
            <Col sm={12} md={6}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Selected Sessions"
                category=""
                stats=""
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataSales}
                      type="Line"
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default TableList;
