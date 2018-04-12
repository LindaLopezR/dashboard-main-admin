import { Template } from 'meteor/templating';

import './statisticsUsers.html';

Template.statisticsUsers.rendered = function(){
	let lineChartCanvas			= $('#newUsers').get(0).getContext("2d");
	let lineChart				= new Chart(lineChartCanvas);

	let lineChartData = {
		labels  : ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
		datasets: [
			{
				fillColor           : "rgba(0, 40, 65, 1)",
				strokeColor         : "rgba(0, 40, 65, 1)",
				pointColor          : "rgba(0, 40, 65, 1)",
				pointStrokeColor    : '#c1c7d1',
				pointHighlightFill  : '#fff',
				pointHighlightStroke: 'rgba(220,220,220,1)',
				data                : [15, 59, 80, 81, 56, 55, 40, 3, 65, 8, 32, 54]
			},
		]
	};

	let lineChartOptions = {
		showScale 				: true,
		scaleShowGridLines		: true,
		scaleGridLineColor		: 'rgba(0,0,0,.05)',
		scaleGridLineWidth		: 1,
		scaleShowHorizontalLines: true,
		scaleShowVerticalLines	: true,
		bezierCurve 			: true,
		bezierCurveTension		: 0.3,
		pointDot 				: true,
		pointDotRadius 			: 4,
		pointDotStrokeWidth		: 1,
		pointHitDetectionRadius	: 20,
		datasetStroke 			: true,
		datasetStrokeWidth		: 2,
		datasetFill				: false,
		legendTemplate			: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
		maintainAspectRatio		: true,
		responsive				: true
	};
	lineChart.Line(lineChartData, lineChartOptions);
};

Template.statisticsUsers.helpers({
	showUsersNew() {
		return true;
	},
});
