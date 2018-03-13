$(function () {
    //Cor do background aleatória
    var randomColorGenerator = function () {
        return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
    };

    // barra 1
    var barData = {
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

    var barOptions = {
        responsive: true
    };


    var ctx1 = document.getElementById("barChart").getContext("2d");
    new Chart(ctx1, {type: 'bar', data: barData, options: barOptions});

    // line 1
    var lineData = {
        labels: ["Turma A", "Turma B", "Turma C", "Turma D", "Turma E", "Turma F"],
        datasets: [

            {
                label: "SIN",
                backgroundColor: 'rgba(26, 94, 179,0.5)',
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [28, 34, 40, 19, 30, 27, 35]
            },{
                label: "BET",
                backgroundColor: 'rgba(255, 218, 185, 0.5)',
                pointBorderColor: "#fff",
                data: [32, 25, 28, 40, 35, 27, 35]
            }, {
                label: "SEF",
                backgroundColor: 'rgba(184, 255, 217, 0.5)',
                pointBorderColor: "#fff",
                data: [36, 30, 32, 28, 34, 27, 32]
            }
        ]
    };

    var lineOptions = {
        responsive: true
    };


    var ctx = document.getElementById("lineChart").getContext("2d");
    new Chart(ctx, {type: 'line', data: lineData, options: lineOptions});

    // chart 1
    var doughnutData = {
        labels: ["ASP", "2T", "1T"],
        datasets: [{
            data: [80, 50, 75],
            backgroundColor: [randomColorGenerator(), randomColorGenerator(), randomColorGenerator()]
        }]
    };


    var doughnutOptions = {
        responsive: true

    };


    var ctx4 = document.getElementById("doughnutChart").getContext("2d");
    new Chart(ctx4, {type: 'doughnut', data: doughnutData, options: doughnutOptions});

});