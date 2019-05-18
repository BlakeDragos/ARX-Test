import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Container, Row, Col } from "reactstrap";
import { Card } from "../../components/Card/Card";
import { StatsCard } from "../../components/StatsCard/StatsCard";
import {
  dataPie,
  legendPie,
  legendSales,
  legendBar
} from "../../variables/Variables";

class Dashboard extends Component {

  state = {
    exercise: "",
    pass: [],
    output: 0,
    sessions: 0,
    percentIncrease: 0,
    recentDate: "",
    recentOutput: 0,
    SessionOutputArray: [],
    firstDate: ""
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
  componentDidMount() {
    this.reMount();
  }
  reMount() {
    let data = this.props.pass;
    if (data.length !== 0) {
      let outputHolder = 0;
      let empty = [];
      let DateSplit = [];
      let output = 0;
      let SessionOutputArray = [];
      let recentOutput = 0;
      let firstOutput = 0;
      let DeclinePress = [];
      let InclinePress = [];
      let HorizontalPress = [];
      let TricepsExtension = [];
      let BicepsCurl = [];
      let OverheadPress = [];
      let PullDown = [];
      let Row = [];
      let LegPressAlpha = [];
      let Alpha = [];
      for (let i = 0; i < data.length; i++) {
        switch (data[i].Exercise) {
          case "Decline Press":
            DeclinePress.push(data[i]);
            break;
          case "Incline Press":
            InclinePress.push(data[i]);
            break;
          case "Horizontal Press":
            HorizontalPress.push(data[i]);
            break;
          case "Triceps Extension":
            TricepsExtension.push(data[i]);
            break;
          case "BicepsCurl":
            BicepsCurl.push(data[i]);
            break;
          case "Overhead Press":
            OverheadPress.push(data[i]);
            break;
          case "Pull Down":
            PullDown.push(data[i]);
            break;
          case "Row":
            Row.push(data[i]);
            break;
          case "Leg Press-Alpha":
            LegPressAlpha.push(data[i]);
            break;
          default:
            Alpha.push(data[i]);
        }


        let compare1 = data[i].createdAt.split("T");
        let compare2;
        if (typeof data[i + 1] !== 'undefined') {
          compare2 = data[i + 1].createdAt.split("T");
          if (compare1[0] === compare2[0]) {
            empty.push(data[i]);
            outputHolder += parseInt(data[i].Output);
          } else {
            empty.push(data[i]);
            outputHolder += parseInt(data[i].Output);
            DateSplit.push(empty);
            empty = [];
            SessionOutputArray.push(outputHolder);
            outputHolder = 0;
          }
        } else {
          empty.push(data[i]);
          outputHolder += parseInt(data[i].Output);
          DateSplit.push(empty);
          SessionOutputArray.push(outputHolder);
        }
        output += parseInt(data[i].Output)
      }
      console.log(DateSplit);
      let recentSession = DateSplit[DateSplit.length - 1];
      let recentDate = recentSession[0].createdAt.split("T");
      let FirstDateSessions = DateSplit[0];
      let FirstDate = FirstDateSessions[0].createdAt.split("T");
      console.log(SessionOutputArray);
      recentOutput = SessionOutputArray[SessionOutputArray.length - 1];
      firstOutput = SessionOutputArray[0];

      let percent = Math.round(((recentOutput - firstOutput) / firstOutput) * 100)
      this.setState({
        exercise: data.exercise,
        output: output,
        sessions: DateSplit.length,
        percentIncrease: percent,
        recentOutput: recentOutput,
        recentDate: recentDate[0],
        SessionOutputArray: SessionOutputArray,
        firstDate: FirstDate
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
        let outputHolder = 0;
        let empty = [];
        let DateSplit = [];
        let output = 0;
        let SessionOutputArray = [];
        let recentOutput = 0;
        let firstOutput = 0;
        let DeclinePress = [];
        let InclinePress = [];
        let HorizontalPress = [];
        let TricepsExtension = [];
        let BicepsCurl = [];
        let OverheadPress = [];
        let PullDown = [];
        let Row = [];
        let LegPressAlpha = [];
        let Alpha = [];
        for (let i = 0; i < data.length; i++) {
          switch (data[i].Exercise) {
            case "Decline Press":
              DeclinePress.push(data[i]);
              break;
            case "Incline Press":
              InclinePress.push(data[i]);
              break;
            case "Horizontal Press":
              HorizontalPress.push(data[i]);
              break;
            case "Triceps Extension":
              TricepsExtension.push(data[i]);
              break;
            case "BicepsCurl":
              BicepsCurl.push(data[i]);
              break;
            case "Overhead Press":
              OverheadPress.push(data[i]);
              break;
            case "Pull Down":
              PullDown.push(data[i]);
              break;
            case "Row":
              Row.push(data[i]);
              break;
            case "Leg Press-Alpha":
              LegPressAlpha.push(data[i]);
              break;
            default:
              Alpha.push(data[i]);
          }


          let compare1 = data[i].createdAt.split("T");
          let compare2;
          if (typeof data[i + 1] !== 'undefined') {
            compare2 = data[i + 1].createdAt.split("T");
            if (compare1[0] === compare2[0]) {
              empty.push(data[i]);
              outputHolder += parseInt(data[i].Output);
            } else {
              empty.push(data[i]);
              outputHolder += parseInt(data[i].Output);
              DateSplit.push(empty);
              empty = [];
              SessionOutputArray.push(outputHolder);
              outputHolder = 0;
            }
          } else {
            empty.push(data[i]);
            outputHolder += parseInt(data[i].Output);
            DateSplit.push(empty);
            SessionOutputArray.push(outputHolder);
          }
          output += parseInt(data[i].Output)
        }
        console.log(DateSplit);
        let recentSession = DateSplit[DateSplit.length - 1];
        let recentDate = recentSession[0].createdAt.split("T");
        let FirstDateSessions = DateSplit[0];
        let FirstDate = FirstDateSessions[0].createdAt.split("T");
        console.log(SessionOutputArray);
        recentOutput = SessionOutputArray[SessionOutputArray.length - 1];
        firstOutput = SessionOutputArray[0];

        let percent = Math.round(((recentOutput - firstOutput) / firstOutput) * 100)
        this.setState({
          exercise: data.exercise,
          output: output,
          sessions: DateSplit.length,
          percentIncrease: percent,
          recentOutput: recentOutput,
          recentDate: recentDate[0],
          SessionOutputArray: SessionOutputArray,
          firstDate: FirstDate[0]
        })
      }
    }
  }

  render() {
    let chartValues = {
      labels: [],
      series: []
    };
    chartValues.series.push(this.state.SessionOutputArray);
    for (let i = 0; i < this.state.SessionOutputArray.length; i++) {
      chartValues.labels.push((i + 1) + "S");
    };
    let ChartOptions = {
      low: (Math.min(this.state.SessionOutputArray) - 500),
      high: (Math.max(this.state.SessionOutputArray) + 500),
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
    var responsiveOptionsChart = [
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
//////////////////////////////////////////////// chart ^
var dataBar = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  series: [
    [5, 10, 20, 20, 20, 15, 5, 20, 25, 30, 15, 5]
  ]
};
var responsiveBar = [
  [
    "screen and (max-width: 640px)",
    {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function(value) {
          return value[0];
        }
      }
    }
  ]
];
///////////////////////////////////////////////// bar ^
    return (
      <div className="content">
        <Container fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-gym text-dark" />}
                statsText="Total Volume Output Last Session (lbs)"
                statsValue={this.state.recentOutput}
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText={this.state.recentDate}
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
                statsIconText={this.state.recentDate}
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-primary" />}
                statsText="Percent Output increase"
                statsValue={this.state.percentIncrease + "%"}
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText={this.state.recentDate}
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Volume Output Over Sessions"
                category={this.state.recentDate}
                stats={this.state.SessionOutputArray.length + " Total Sessions Starting " + this.state.firstDate}
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={chartValues}
                      type="Line"
                      options={ChartOptions}
                      responsiveOptions={responsiveOptionsChart}
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
                stats={this.state.recentDate}
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
                title="Exercise Breakdown"
                category="All Time"
                stats={this.state.recentDate}
                content={
                  <div id="chartPreferences" className="ct-chart ct-perfect-fourth">
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
