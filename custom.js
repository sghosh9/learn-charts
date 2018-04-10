FusionCharts.ready(function() {
  var revenueChart = new FusionCharts({
    "type": "column2d",
    "renderAt": "chartContainer",
    "width": "500",
    "height": "300",
    "dataFormat": "json",
    "dataSource": {
      "chart": {
        "caption": "Monthly revenue for last year",
        "subCaption": "Harry's SuperMart",
        "xAxisName": "Month",
        "yAxisName": "Revenues (In USD)",
        "numberPrefix": "$",
        "paletteColors": "#cecece",
        "bgColor": "#ffffff",
        "borderAlpha": "100",
        "canvasBorderAlpha": "0",
        "usePlotGradientColor": "0",
        "plotBorderAlpha": "10",
        "placevaluesInside": "0",
        "rotatevalues": "1",
        "valueFontColor": "#000",
        "showXAxisLine": "1",
        "showYAxisLine": "1",
        "xAxisLineColor": "#b48484",
        "yAxisLineColor": "#b48484",
        "divlineColor": "#59cece",
        "divLineDashed": "1",
        "showAlternateHGridColor": "0",
        "subcaptionFontBold": "0",
        "subcaptionFontSize": "14"
      },
      "data": [
        {
            "label": "Jan",
            "value": "420000"
        },
        {
            "label": "Feb",
            "value": "810000"
        },
        {
            "label": "Mar",
            "value": "720000"
        },
        {
            "label": "Apr",
            "value": "550000"
        },
        {
            "label": "May",
            "value": "910000"
        },
        {
            "label": "Jun",
            "value": "510000"
        },
        {
            "label": "Jul",
            "value": "680000"
        },
        {
            "label": "Aug",
            "value": "620000"
        },
        {
            "label": "Sep",
            "value": "610000"
        },
        {
            "label": "Oct",
            "value": "490000"
        },
        {
            "label": "Nov",
            "value": "900000"
        },
        {
            "label": "Dec",
            "value": "730000"
        }
      ]
    }
  });

  revenueChart.render();
})
