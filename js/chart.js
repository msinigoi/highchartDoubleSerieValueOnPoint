$(function () {
    $("#container").highcharts({
      chart: {
          type: "line"
      },
      title: {
          text: "Cat's weight"
      },
      xAxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      yAxis: {
          title: {
              text: "Weight (Kg)"
          },
          plotBands: [{
            color: "#ffafaf",
            from: 3,
            to: 3.5
          },{
            color: "#fff9af",
            from: 3.5,
            to: 4
          },{
            color: "#ccffaf",
            from: 4,
            to: 5
          }]
      },
      plotOptions: {
          line: {
              dataLabels: {
                  enabled: true,
                  formatter: function() {
                    var chart = $("#container").highcharts();
                    var index = this.series.data.indexOf(this.point);
                    var deltaSerie = chart.series[1];
                    var delta = deltaSerie.options.data[index];

                    return  this.y +" ("+ applyDeltaSign(delta) + ")";
                  },
                  enableMouseTracking: false
                }
          }
      },
      series: [{
          name: "Weight",
          data: [3.5, 3.5, 3.6, 3.8, 3.8, 3.9, 3.8, 3.7, 3.9, 4.0, 4.1, 4.3]
      }, {
          name: "Difference from previous month",
          data: [0.0, 0.0, 0.1, 0.2, 0.0, 0.1, -0.1, -0.1, 0.2, 0.1, 0.1, 0.2],
          linkedTo: "previous",
          visible: false
      }]
  });
});
