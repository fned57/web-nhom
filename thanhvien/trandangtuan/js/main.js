function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }
  google.load('visualization', '1.0', {'packages':['corechart']});
  google.setOnLoadCallback(drawChart);

  function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    // Create columns for the DataTable
    data.addColumn('string');
    data.addColumn('number', 'Devices');
    // Create Rows with data
    data.addRows([
      ['SamSung', 21],
      ['Apple', 14],
      ['Huawei', 9],
      ['LG', 4],
      ['Xiaomi', 5],
      ['ZTE', 5],
      ['Other', 42]
    ]);
    //Create option for chart
    var options = {
      title: 'Global smartphone share Q2 2015',
      'width': 800,
      'height': 600
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}