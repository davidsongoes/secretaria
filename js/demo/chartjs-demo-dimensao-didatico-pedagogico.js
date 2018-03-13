$(function () {
    //Cor do background aleatória
    var randomColorGenerator = function () {
        return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
    };

    // barra 1
    var barData1 = {
        labels: ["2013", "2014", "2015", "2016", "2017", "2018"],
        datasets: [
            {
                label: "CFOAV",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "CFOINT",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [64, 57, 48, 55, 35, 47, 60]
            },
            {
                label: "CFOINF",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    var barOptions1 = {
        responsive: true
    };


    var ctx1 = document.getElementById("chartDidatico1").getContext("2d");
    new Chart(ctx1, {type: 'bar', data: barData1, options: barOptions1});

    // barra 2
    var barData2 = {
        labels: ["2013", "2014", "2015", "2016", "2017", "2018"],
        datasets: [
            {
                label: "CFOAV",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "CFOINT",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [64, 57, 48, 55, 35, 47, 60]
            },
            {
                label: "CFOINF",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    var barOptions2 = {
        responsive: true
    };


    var ctx2 = document.getElementById("chartDidatico2").getContext("2d");
    new Chart(ctx2, {type: 'bar', data: barData2, options: barOptions2});

    // barra 3
    var barData3 = {
        labels: ["2013", "2014", "2015", "2016", "2017", "2018"],
        datasets: [
            {
                label: "CFOAV",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "CFOINT",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [64, 57, 48, 55, 35, 47, 60]
            },
            {
                label: "CFOINF",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    var barOptions3 = {
        responsive: true
    };


    var ctx3 = document.getElementById("chartDidatico3").getContext("2d");
    new Chart(ctx3, {type: 'bar', data: barData3, options: barOptions3});

    // barra 4
    var barData4 = {
        labels: ["2013", "2014", "2015", "2016", "2017", "2018"],
        datasets: [
            {
                label: "CFOAV",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "CFOINT",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [64, 57, 48, 55, 35, 47, 60]
            },
            {
                label: "CFOINF",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    var barOptions4 = {
        responsive: true
    };


    var ctx4 = document.getElementById("chartDidatico4").getContext("2d");
    new Chart(ctx4, {type: 'bar', data: barData4, options: barOptions4});

    // barra 4
    var barData4 = {
        labels: ["2013", "2014", "2015", "2016", "2017", "2018"],
        datasets: [
            {
                label: "CFOAV",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "CFOINT",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [64, 57, 48, 55, 35, 47, 60]
            },
            {
                label: "CFOINF",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    var barOptions4 = {
        responsive: true
    };


    var ctx4 = document.getElementById("chartDidatico5").getContext("2d");
    new Chart(ctx4, {type: 'bar', data: barData4, options: barOptions4});

    // barra 5
    var barData5 = {
        labels: ["2013", "2014", "2015", "2016", "2017", "2018"],
        datasets: [
            {
                label: "CFOAV",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "CFOINT",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [64, 57, 48, 55, 35, 47, 60]
            },
            {
                label: "CFOINF",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    var barOptions5 = {
        responsive: true
    };


    var ctx5 = document.getElementById("chartDidatico5").getContext("2d");
    new Chart(ctx5, {type: 'bar', data: barData5, options: barOptions5});

    // barra 6
    var barData6 = {
        labels: ["2013", "2014", "2015", "2016", "2017", "2018"],
        datasets: [
            {
                label: "CFOAV",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "CFOINT",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [64, 57, 48, 55, 35, 47, 60]
            },
            {
                label: "CFOINF",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    var barOptions6 = {
        responsive: true
    };


    var ctx6 = document.getElementById("chartDidatico6").getContext("2d");
    new Chart(ctx6, {type: 'bar', data: barData6, options: barOptions6});
});