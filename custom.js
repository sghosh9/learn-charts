FusionCharts.ready(function() {
  var revenueChart = new FusionCharts({
    "type": "column3d",
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
        "animationDuration": "0.5",
        // "paletteColors": "#0075c2, #cecece",
        "labelDisplay": "rotate",
        "slantLabels": 1,
        "valueFontColor": "#ffffff",
        "baseFont": "Helvetica Neue,Arial",
        "captionFontSize": "14",
        "subcaptionFontSize": "14",
        "subcaptionFontBold": "0",
        "placeValuesInside": 1,
        "rotateValues": 1,
        "showShadow": "0",
        "divlineColor": "#999999",
        "divLineDashed": "1",
        "divlineThickness": "1",
        "divLineDashLen": "1",
        "canvasBgColor": "#ffffff"
      },
      "data": [
        {
            "label": "January",
            "value": "420000"
        },
        {
            "label": "February",
            "value": "810000"
        },
        {
            "label": "March",
            "value": "720000"
        },
        {
            "label": "April",
            "value": "550000"
        },
        {
            "label": "May",
            "value": "910000"
        },
        {
            "label": "June",
            "value": "510000"
        },
        {
            "label": "July",
            "value": "680000"
        },
        {
            "label": "August",
            "value": "620000"
        },
        {
            "label": "September",
            "value": "610000"
        },
        {
            "label": "Octber",
            "value": "490000"
        },
        {
            "label": "November",
            "value": "900000"
        },
        {
            "label": "December",
            "value": "730000"
        }
      ]
    }
  });

  revenueChart.render();
})
