$(function () {
    //Cor básica
    var colorFunction = function (flag) {
        var color = '';
        if (flag == 'navy-high') {
            color = 'rgba(26,179,148,0.8)';
        }
        if (flag == 'navy-mid') {
            color = 'rgba(26,179,148,0.6)';
        }if (flag == 'navy-low') {
            color = 'rgba(26,179,148,0.4)';
        }if (flag == 'yellow-high') {
            color = 'rgba(248,172,89,0.8)';
        }if (flag == 'yellow-mid') {
            color = 'rgba(248,172,89,0.6)';
        }if (flag == 'yellow-low') {
            color = 'rgba(248,172,89,0.4)';
        }if (flag == 'lazur-high') {
            color = 'rgba(35,198,200,0.8)';
        }if (flag == 'lazur-mid') {
            color = 'rgba(35,198,200,0.6)';
        }if (flag == 'lazur-low') {
            color = 'rgba(35,198,200,0.4)';
        }if (flag == 'red-high') {
            color = 'rgba(237,85,101,0.8)';
        }if (flag == 'red-mid') {
            color = 'rgba(237,85,101,0.6)';
        }if (flag == 'red-low') {
            color = 'rgba(237,85,101,0.4)';
        }if (flag == 'gray-high') {
            color = 'rgba(103, 106, 108,0.8)';
        }if (flag == 'gray-mid') {
            color = 'rgba(103, 106, 108,0.6)';
        }if (flag == 'gray-low') {
            color = 'rgba(103, 106, 108,0.4)';
        }
        return color;
    };
    // Cor do background aleatória RGB
    var randomColorGeneratorRgb = function (flag) {
        var randomR = Math.floor((Math.random() * 120) + 100);
        var randomG = Math.floor((Math.random() * 125) + 100);
        var randomB = Math.floor((Math.random() * 130) + 100);

        if (flag == 'back') {
            var graphBackground4 = "rgba("
                + randomR + ", "
                + randomG + ", "
                + randomB + ", 0.4)";
        }
        if (flag == 'borda') {
            var graphBackground4 = "rgba("
                + randomR + ", "
                + randomG + ", "
                + randomB + ", 1)";
        }
        if (flag == 'ponto') {
            var graphBackground4 = "rgba("
                + randomR + ", "
                + randomG + ", "
                + randomB + ", 1)";
        }
        if (flag == 'back-forte') {
            var graphBackground4 = "rgba("
                + randomR + ", "
                + randomG + ", "
                + randomB + ", 0.8)";
        }
        return graphBackground4;
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

        var graphBackground1 = "rgba("
            + randomR + ", "
            + randomG + ", "
            + randomB + ", 0.7)";
        graphColors1.push(graphBackground1);

        var graphOutline1 = "rgba("
            + (randomR - 80) + ", "
            + (randomG - 80) + ", "
            + (randomB - 80) + ", 0.8)";
        graphOutlines1.push(graphOutline1);

        var hoverColors1 = "rgba("
            + (randomR + 25) + ", "
            + (randomG + 25) + ", "
            + (randomB + 25) + ", 1)";
        hoverColor1.push(hoverColors1);

        i++;
    }

    //Cor do background aleatória RGB por linha 2
    var internalData2 = [65, 59, 80, 81, 56];

    var graphColors2 = [];
    var graphOutlines2 = [];
    var hoverColor2 = [];

    var internalDataLength2 = internalData2.length;
    i = 0;
    while (i <= internalDataLength2) {
        var randomR1 = Math.floor((Math.random() * 130) + 100);
        var randomG1 = Math.floor((Math.random() * 130) + 100);
        var randomB1 = Math.floor((Math.random() * 130) + 100);

        var graphBackground2 = "rgba("
            + randomR1 + ", "
            + randomG1 + ", "
            + randomB1 + ", 0.6)";
        graphColors2.push(graphBackground2);

        var graphOutline2 = "rgba("
            + (randomR1 - 80) + ", "
            + (randomG1 - 80) + ", "
            + (randomB1 - 80) + ", 0.7)";
        graphOutlines2.push(graphOutline2);

        var hoverColors2 = "rgba("
            + (randomR1 + 25) + ", "
            + (randomG1 + 25) + ", "
            + (randomB1 + 25) + ", 1)";
        hoverColor2.push(hoverColors2);

        i++;
    }


    // Gráfico 1 - Barra
    var barData1 = {
        labels: ["Excelente", "Ótima", "Boa", "Ruím", "Péssima"],
        datasets: [
            {
                backgroundColor: [colorFunction('navy-mid'),colorFunction('yellow-mid'),colorFunction('red-mid'),colorFunction('lazur-mid'),colorFunction('gray-mid')],
                pointBackgroundColor: "rgba(26,179,148,1)",
                hoverBackgroundColor: 'rgba(103, 106, 108, 0.7)',
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


    var ctx1 = document.getElementById("chartInfra1").getContext("2d");
    new Chart(ctx1, {type: 'horizontalBar', data: barData1, options: barOptions1});

    // Gráfico 2 - Barra
    var barData2 = {
        labels: ["Bastante Adequados", "Adequados", "Parcialamente Adequados", "Pouco Adequados", "Inadequados"],
        datasets: [
            {
                backgroundColor: [colorFunction('navy-mid'),colorFunction('yellow-mid'),colorFunction('red-mid'),colorFunction('lazur-mid'),colorFunction('gray-mid')],
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                hoverBackgroundColor: 'rgba(103, 106, 108, 0.7)',
                data: [85, 10, 3, 1, 1]
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
        legend: {
            display: false
        },
        responsive: true
    };


    var ctx2 = document.getElementById("chartInfra2").getContext("2d");
    new Chart(ctx2, {type: 'horizontalBar', data: barData2, options: barOptions2});

// //    Gráfico 3 - Doughnut
//     var doughnutData = {
//         labels: ["Excelente", "Ótima", "Boa", "Ruím", "Péssima"],
//         datasets: [{
//             data: [80,11,8,1,0],
//             backgroundColor: [randomColorGeneratorRgb(),randomColorGeneratorRgb(),randomColorGeneratorRgb(),randomColorGeneratorRgb(), randomColorGeneratorRgb()]
//         }]
//     } ;
//
//
//     var doughnutOptions = {
//         responsive: true
//     };
//
//
//     var ctx3 = document.getElementById("chartInfra3").getContext("2d");
//     new Chart(ctx3, {type: 'doughnut', data: doughnutData, options:doughnutOptions});
//
// //    Gráfico 4 - Polar
//
//     var polarData = {
//         datasets: [{
//             data: [
//                 60,25,10,5
//             ],
//             backgroundColor: [randomColorGeneratorRgb(),randomColorGeneratorRgb(),randomColorGeneratorRgb(),randomColorGeneratorRgb()],
//             label: [
//                 "My Radar chart"
//             ]
//         }],
//         labels: [
//             "Muito satisfatório","Satisfatório","Pouco satisfatório","Não satisfatório"
//         ]
//     };
//
//     var polarOptions = {
//         segmentStrokeWidth: 2,
//         beginAtZero: true,
//         steps: 10,
//         stepValue: 5,
//         max: 100
//
//     };
//
//     var ctx4 = document.getElementById("chartInfra4").getContext("2d");
//     new Chart(ctx4, {type: 'polarArea', data: polarData, options:polarOptions});

});