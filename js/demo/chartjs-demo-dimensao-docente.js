$(function () {
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
            + randomB + ", 0.5)";
        graphColors1.push(graphBackground1);

        var graphOutline1 = "rgba("
            + (randomR - 80) + ", "
            + (randomG - 80) + ", "
            + (randomB - 80) + ", 0.7)";
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
            + randomB1 + ", 0.4)";
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
        labels: ["Bacharelado", "Licenciatura", "Pós-Graduação", "Mestrado", "Doutorado"],
        datasets: [
            {
                label: "Militar",
                backgroundColor: randomColorGeneratorRgb('back'),
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [30, 3, 20, 10, 8]
            },
            {
                label: "Civil",
                backgroundColor: randomColorGeneratorRgb('back'),
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [25, 10, 16, 8, 2]
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
        // legend: {
        //     display: false
        // },
        responsive: true
    };


    var ctx1 = document.getElementById("chartDocente1").getContext("2d");
    new Chart(ctx1, {type: 'horizontalBar', data: barData1, options: barOptions1});

    // Gráfico 2 - Barra
    var barData2 = {
        labels: ["Bacharelado", "Licenciatura", "Pós-Graduação", "Mestrado", "Doutorado"],
        datasets: [
            {
                label: "Militar",
                backgroundColor: randomColorGeneratorRgb('back-forte'),
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [30, 3, 20, 10, 8]
            },
            {
                label: "Civil",
                backgroundColor: randomColorGeneratorRgb('back-forte'),
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [25, 10, 16, 8, 2]
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


    var ctx2 = document.getElementById("chartDocente2").getContext("2d");
    new Chart(ctx2, {type: 'horizontalBar', data: barData2, options: barOptions2});

    // Gráfico 3 - Barra
    var barData3 = {
        labels: ["Português", "Matemática", "Geografia"],
        datasets: [
            {
                label: "Militar",
                backgroundColor: randomColorGeneratorRgb('back-forte'),
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [3, 2, 2]
            },
            {
                label: "Civil",
                backgroundColor: randomColorGeneratorRgb('back-forte'),
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [2, 3, 4]
            }
        ]
    };

    var barOptions3 = {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    steps: 1
                    // stepValue: 1,
                    // max: 5
                }
            }]
        },
        responsive: true
    };


    var ctx3 = document.getElementById("chartDocente3").getContext("2d");
    new Chart(ctx3, {type: 'horizontalBar', data: barData3, options: barOptions3});

    // Gráfico 4 - Barra
    var barData4 = {
        labels: ["Português", "Matemática", "Geografia"],
        datasets: [
            {
                label: "Militar",
                backgroundColor: randomColorGeneratorRgb('back-forte'),
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [80, 120, 80]
            },
            {
                label: "Civil",
                backgroundColor: randomColorGeneratorRgb('back-forte'),
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [60, 100, 60]
            }
        ]
    };

    var barOptions4 = {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    steps: 1
                    // stepValue: 1,
                    // max: 5
                }
            }]
        },
        responsive: true
    };


    var ctx4 = document.getElementById("chartDocente4").getContext("2d");
    new Chart(ctx4, {type: 'horizontalBar', data: barData4, options: barOptions4});

    // Gráfico 5 - Barra
    var barData5 = {
        labels: ["CL Ghuerren", "1T Aline","2T Ferraz", "Prof. Dra. Fabiana", "Prof. Me. Juliano" ,  "Prof. Orlando"],
        datasets: [
            {
                label: "Carga Horária Efetiva",
                backgroundColor: randomColorGeneratorRgb('ponto'),
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [300, 250, 230, 190, 170, 70]
            },
            {
                label: "Carga Horária Disponível",
                backgroundColor: randomColorGeneratorRgb('ponto'),
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [300, 255, 235, 220, 220, 150]
            }
        ]
    };

    var barOptions5 = {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    steps: 10,
                    stepValue: 5
                }
            }],
            yAxes: [{
                stacked: true
            }]
        },
        // legend: {
        //     display: false
        // },
        responsive: true
    };


    var ctx5 = document.getElementById("chartDocente5").getContext("2d");
    new Chart(ctx5, {type: 'horizontalBar', data: barData5, options: barOptions5});

    // Gráfico 6 - Barra
    var barData6 = {
        labels: ["Matemática", "Português", "Química", "Biologia"],
        datasets: [
            {
                label: "Carga Horária dos Professores da Disciplina",
                backgroundColor: randomColorGeneratorRgb('ponto'),
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [145, 105, 145, 130]
            },
            {
                label: "Carga Horária Disciplina",
                backgroundColor: randomColorGeneratorRgb('ponto'),
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [160, 115, 165, 130]
            }
        ]
    };

    var barOptions6 = {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    steps: 10,
                    stepValue: 5
                }
            }],
            yAxes: [{
                stacked: true
            }]
        },
        // legend: {
        //     display: false
        // },
        responsive: true
    };


    var ctx6 = document.getElementById("chartDocente6").getContext("2d");
    new Chart(ctx6, {type: 'horizontalBar', data: barData6, options: barOptions6});


    //    Gráfico 6 - Doughnut
    // var doughnutData6 = {
    //     labels: ["Matemática", "Português", "Química"],
    //     datasets: [{
    //         data: [150, 140, 100],
    //         backgroundColor: [randomColorGeneratorRgb('back-forte'), randomColorGeneratorRgb('back-forte'), randomColorGeneratorRgb('back-forte'), randomColorGeneratorRgb('back-forte'), randomColorGeneratorRgb('back-forte')]
    //     },
    //     {
    //         data: [130, 120,80],
    //         backgroundColor: [randomColorGeneratorRgb('back-forte'), randomColorGeneratorRgb('back-forte'), randomColorGeneratorRgb('back-forte'), randomColorGeneratorRgb('back-forte'), randomColorGeneratorRgb('back-forte')]
    //     }]
    // };
    //
    //
    // var doughnutOptions6 = {
    //     responsive: true
    // };
    //
    //
    // var ctx6 = document.getElementById("chartDocente6").getContext("2d");
    // new Chart(ctx6, {type: 'doughnut', data: doughnutData6, options: doughnutOptions6});

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
//     var ctx3 = document.getElementById("chartDocente3").getContext("2d");
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
//     var ctx4 = document.getElementById("chartDocente4").getContext("2d");
//     new Chart(ctx4, {type: 'polarArea', data: polarData, options:polarOptions});

});