FusionCharts.ready(function() {
    var csatGauge = new FusionCharts({
        "type": "angulargauge",
        "renderAt": "chartContainer",
        "width": "400",
        "height": "250",
        "dataFormat": "jsonurl",
        // "dataSource": "data.json"
    });

    csatGauge.render();

    csatGauge.setChartDataUrl("data.json", "json");
})
