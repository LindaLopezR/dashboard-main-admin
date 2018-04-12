import { Template } from 'meteor/templating';

import './statisticsServer.html';

Template.statisticsServer.rendered = function(){
  let barChartCanvas = $("#barChart").get(0).getContext("2d");
  let barChart = new Chart(barChartCanvas);
  let barChartData = {
    labels: ["SF1", "SF2", "NY", "Brasil"],
    datasets: [
      {
        label               : "Clientes",
        fillColor           : "rgba(0, 40, 65, 1)",
        strokeColor         : "rgba(0, 40, 65, 1)",
        pointColor          : "rgba(0, 40, 65, 1)",
        pointStrokeColor    : "#c1c7d1",
        pointHighlightFill  : "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data                : [65, 59, 80, 81]
      }
    ]
  };

  let barChartOptions = {
    scaleBeginAtZero        : true,
    scaleShowGridLines      : true,
    scaleGridLineColor      : "rgba(0,0,0,.05)",
    scaleGridLineWidth      : 1,
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines  : true,
    barShowStroke           : true,
    barStrokeWidth          : 2,
    barValueSpacing         : 5,
    barDatasetSpacing       : 1,
    datasetFill             : false,
    legendTemplate          : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
    responsive              : true,
    maintainAspectRatio     : true
  };
  barChart.Bar(barChartData, barChartOptions);
};

Template.statisticsServer.helpers({
  showRunningStatistics() {
    return true;
  },
});
