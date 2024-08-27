google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

var data = new google.visualization.DataTable();
data.addColumn('number', 'Day');
data.addColumn('number', 'Sale');
data.addColumn('number', 'Revenue');
data.addColumn('number', 'Customers');

data.addRows([
  [1,  20.5, 25.8, 18.4],
  [2,  22.8, 26.5, 17.9],
  [3,  21.7, 24.9, 19.2],
  [4,  23.5, 27.2, 20.1],
  [5,  24.3, 26.0, 21.7],
  [6,  32.9, 30.5, 25.4],
  [7,  35.1, 35.1, 20.3],
  [8,  37.0, 30.0, 23.5],
  [9,  28.5, 32.2, 31.9],
  [10, 35.3, 37.8, 20.6],
  [11, 36.8, 35.3, 22.1],
  [12, 38.4, 32.5, 23.7],
  [13, 37.2, 31.0, 22.4],
  [14, 35.0, 43.2, 24.1]
]);



// var options = {
//   chart: {
//     title: 'Box Office Earnings in First Two Weeks of Opening',
//     subtitle: 'in millions of dollars (USD)'
//   },
//   width: 900,
//   height: 500
// };

var chart = new google.charts.Line(document.getElementById('chart'));

chart.draw(data, google.charts.Line.convertOptions());
}