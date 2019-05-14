import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Container, Row, Col} from "reactstrap";
import { Card } from "../../components/Card/Card";
import { StatsCard } from "../../components/StatsCard/StatsCard";
import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  responsiveBar,
  legendBar
} from "../../variables/Variables";

class Dashboard extends Component {

    state = {
      exercise: "",
      pass: [],
      output: 0,
      sessions: 0,
      percentIncrease: 0,
    };

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
  componentDidMount(){
    this.reMount();
  }
  reMount() {
      let data = this.props.pass;
      if (data.length !== 0) {
        console.log(data);
        let output = 0;
        for (let i = 0; i < data.length; i++) {
          output += parseInt(data[i].Output)
        }

        let percent = Math.round(((data[data.length - 1].Output - data[0].Output) / data[0].Output) * 100)
        this.setState({
          exercise: data.exercise,
          output: output,
          sessions: data.length,
          percentIncrease: percent
        })
      }
  }


  componentDidUpdate(prevState) {
    this.seperateData(prevState);
  }
  seperateData(prevState) {
    if (this.state.exercise !== prevState.exercise) {
      let data = this.props.pass;
      if (data.length !== 0) {
        console.log(data);
        let output = 0;
        for (let i = 0; i < data.length; i++) {
          output += parseInt(data[i].Output)
        }

        let percent = Math.round(((data[data.length - 1].Output - data[0].Output) / data[0].Output) * 100)
        this.setState({
          exercise: data.exercise,
          output: output,
          sessions: data.length,
          percentIncrease: percent
        })
      }
    }
  }

  render() {
    return (
      <div className="content">
        <Container fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-gym text-dark" />}
                statsText="Total Weight Lifted (lbs)"
                statsValue={this.state.output}
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="All Time"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-gym text-dark" />}
                statsText="Total Weight Lifted (lbs)"
                statsValue={this.state.output}
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="All Time"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-menu text-success" />}
                statsText="Sessions Completed"
                statsValue={this.state.sessions}
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Last day"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-primary" />}
                statsText="Percent Output increase"
                statsValue={this.state.percentIncrease + "%"}
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="Just now"
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Session Comparison"
                category="This Week"
                stats="Updated"
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

          <Row>
            <Col md={8}>
              <Card
                id="chartActivity"
                title="Sessions this Year"
                category="by Per Month"
                stats="update"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar}
                      type="Bar"
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendBar)}</div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Output Each Session"
                category="This Week"
                stats="update"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
