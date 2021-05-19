google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['年', '配当利回り(%)'],
      ['2011',  3.15],
      ['2012',  3.51],
      ['2013',  3.54],
      ['2014',  3.06],
      ['2015',  3.13],
      ['2016',  3.30],
      ['2017',  3.17],
      ['2018',  3.09],
      ['2019',  3.64],
    ]);

    var options = {
      title: 'VYMの配当利回り推移',
      legend: { position: 'bottom' },
      width: 1000,
      height: 700,
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
  }
