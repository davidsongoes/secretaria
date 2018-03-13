$(function () {
    //Cor do background aleatória RGB
    var randomColorGeneratorRgb = function () {
        var graphColors1 = [];
        var randomR = Math.floor((Math.random() * 130) + 100);
        var randomG = Math.floor((Math.random() * 130) + 100);
        var randomB = Math.floor((Math.random() * 130) + 100);

        var graphBackground1 = "rgb("
            + randomR + ", "
            + randomG + ", "
            + randomB + ")";
        return graphBackground1;
    };


    //Cor do background aleatória RGB por linha 1
    var internalData1 = [65, 59, 80, 81, 56];

    var graphColors1 = [];
    var graphOutlines1 = [];
    var hoverColor1 = [];

    var internalDataLength1 = internalData1.length;
    i = 0;
    while (i <= internalDataLength1) {
        var randomR = Math.floor((Math.random() * 130) + 100);
        var randomG = Math.floor((Math.random() * 130) + 100);
        var randomB = Math.floor((Math.random() * 130) + 100);

        var graphBackground1 = "rgb("
            + randomR + ", "
            + randomG + ", "
            + randomB + ")";"rgba(26,179,148,0.2)"
        graphColors1.push(graphBackground1);

        var graphOutline1 = "rgb("
            + (randomR - 80) + ", "
            + (randomG - 80) + ", "
            + (randomB - 80) + ")";
        graphOutlines1.push(graphOutline1);

        var hoverColors1 = "rgb("
            + (randomR + 25) + ", "
            + (randomG + 25) + ", "
            + (randomB + 25) + ")";
        hoverColor1.push(hoverColors1);

        i++;
    };

    //Cor do background aleatória RGB por linha 2
    var internalData2 = [65, 59, 80, 81, 56];

    var graphColors2 = [];
    var graphOutlines2 = [];
    var hoverColor2 = [];

    var internalDataLength2 = internalData2.length;
    i = 0;
    while (i <= internalDataLength2) {
        var randomR = Math.floor((Math.random() * 130) + 100);
        var randomG = Math.floor((Math.random() * 130) + 100);
        var randomB = Math.floor((Math.random() * 130) + 100);

        var graphBackground2 = "rgb("
            + randomR + ", "
            + randomG + ", "
            + randomB + ")";
        graphColors2.push(graphBackground2);

        var graphOutline2 = "rgb("
            + (randomR - 80) + ", "
            + (randomG - 80) + ", "
            + (randomB - 80) + ")";
        graphOutlines2.push(graphOutline2);

        var hoverColors2 = "rgb("
            + (randomR + 25) + ", "
            + (randomG + 25) + ", "
            + (randomB + 25) + ")";
        hoverColor2.push(hoverColors2);

        i++;
    };


    // Gráfico 1 - Barra
    var barData1 = {
        labels: ["Excelente", "Ótima", "Boa", "Ruím", "Péssima"],
        datasets: [
            {
                backgroundColor: graphColors1,
                borderColor: graphOutlines1,
                pointBackgroundColor: "rgba(26,179,148,1)",
                hoverBackgroundColor: hoverColor1,
                pointBorderColor: "#fff",
                data: [60, 20, 10, 5, 5]
            }
        ]
    };

    var barOptions1 = {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    steps: 10,
                    stepValue: 5,
                    max: 100
                }
            }],
            yAxes: [{
                stacked: true
            }]
        },
        legend: {
            display: false
        },
        responsive: true
    };


    var ctx1 = document.getElementById("chartDiscente1").getContext("2d");
    new Chart(ctx1, {type: 'horizontalBar', data: barData1, options: barOptions1});

    // Gráfico 2 - Barra
    var barData2 = {
        labels: ["Bastante Adequados", "Adequados", "Parcialamente Adequados", "Pouco Adequados", "Inadequados"],
        datasets: [
            {
                label: "CFOAV",
                backgroundColor: randomColorGeneratorRgb(),
                borderColor: graphOutlines1,
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [60, 35, 3, 1, 1]
            },
            {
                label: "CFOINT",
                backgroundColor: randomColorGeneratorRgb(),
                borderColor: graphOutlines1,
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [72, 25, 1, 1, 1]
            },
            {
                label: "CFOINF",
                backgroundColor: randomColorGeneratorRgb(),
                borderColor: graphOutlines1,
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [80, 19, 1, 0, 0]
            }
        ]
    };

    var barOptions2 = {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    steps: 10,
                    stepValue: 5,
                    max: 100
                }
            }]
        },
        responsive: true
    };


    var ctx2 = document.getElementById("chartDiscente2").getContext("2d");
    new Chart(ctx2, {type: 'horizontalBar', data: barData2, options: barOptions2});

//    Gráfico 3 - Doughnut
    var doughnutData = {
        labels: ["Excelente", "Ótima", "Boa", "Ruím", "Péssima"],
        datasets: [{
            data: [80,11,8,1,0],
            backgroundColor: [randomColorGeneratorRgb(),randomColorGeneratorRgb(),randomColorGeneratorRgb(),randomColorGeneratorRgb(), randomColorGeneratorRgb()]
        }]
    } ;


    var doughnutOptions = {
        responsive: true
    };


    var ctx3 = document.getElementById("chartDiscente3").getContext("2d");
    new Chart(ctx3, {type: 'doughnut', data: doughnutData, options:doughnutOptions});

//    Gráfico 4 - Polar

    var polarData = {
        datasets: [{
            data: [
                60,25,10,5
            ],
            backgroundColor: [randomColorGeneratorRgb(),randomColorGeneratorRgb(),randomColorGeneratorRgb(),randomColorGeneratorRgb()],
            label: [
                "My Radar chart"
            ]
        }],
        labels: [
            "Muito satisfatório","Satisfatório","Pouco satisfatório","Não satisfatório"
        ]
    };

    var polarOptions = {
        segmentStrokeWidth: 2,
        beginAtZero: true,
        steps: 10,
        stepValue: 5,
        max: 100

    };

    var ctx4 = document.getElementById("chartDiscente4").getContext("2d");
    new Chart(ctx4, {type: 'polarArea', data: polarData, options:polarOptions});

});