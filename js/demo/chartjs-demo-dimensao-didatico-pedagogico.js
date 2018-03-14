$(function () {
    // Cor do background aleatória RGB
    var randomColorGeneratorRgb = function (flag) {
        var randomR = Math.floor((Math.random() * 130) + 100);
        var randomG = Math.floor((Math.random() * 130) + 100);
        var randomB = Math.floor((Math.random() * 130) + 100);

        if (flag == 'back') {
            var graphBackground4 = "rgba("
                + randomR + ", "
                + randomG + ", "
                + randomB + ", 0.4)";
        }if( flag == 'borda'){
            var graphBackground4 = "rgba("
                + randomR + ", "
                + randomG + ", "
                + randomB + ", 1)";
        }if(flag == 'ponto'){
            var graphBackground4 = "rgba("
                + randomR + ", "
                + randomG + ", "
                + randomB + ", 1)";
        }if(flag == 'back-forte'){
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

    // Gráfico 1 - Radar
    var radarData = {
        labels: ["A pedido", "Ensino - Área Militar", "Ensino - Área Específica", "Decisão Judicial", "Saude"],
        datasets: [
            {
                label: "1º Ano",
                backgroundColor: randomColorGeneratorRgb('back'),
                pointBackgroundColor: randomColorGeneratorRgb('ponto'),
                borderColor: 'rgba(103, 106, 108, 0.4)',
                data: [5, 6, 7, 4, 9]
            },
            {
                label: "2º Ano",
                backgroundColor: randomColorGeneratorRgb('back'),
                pointBackgroundColor: randomColorGeneratorRgb('ponto'),
                borderColor: 'rgba(103, 106, 108, 0.4)',
                data: [7, 5, 6, 3, 10]
            },
            {
                label: "3º Ano",
                backgroundColor: randomColorGeneratorRgb('back'),
                pointBackgroundColor: randomColorGeneratorRgb('ponto'),
                borderColor: 'rgba(103, 106, 108, 0.4)',
                data: [6, 4, 8, 5, 7]
            }
        ]
    };

    var radarOptions = {
        responsive: true
    };

    var ctx1 = document.getElementById("chartDidatico1").getContext("2d");
    new Chart(ctx1, {type: 'radar', data: radarData, options: radarOptions});


    // // Gráfico 2 - Radar
    // var radarData2 = {
    //     labels: ["A pedido", "Ensino - Área Militar", "Ensino - Área Específica", "Decisão Judicial", "Saúde", "Voo"],
    //     datasets: [
    //         {
    //             label: "1º Ano",
    //             backgroundColor: randomColorGeneratorRgb('back'),
    //             pointBackgroundColor: randomColorGeneratorRgb('ponto'),
    //             borderColor: 'rgba(103, 106, 108, 0.4)',
    //             data: [5, 6, 7, 4, 9, 0]
    //         },
    //         {
    //             label: "2º Ano",
    //             backgroundColor: randomColorGeneratorRgb('back'),
    //             pointBackgroundColor: randomColorGeneratorRgb('ponto'),
    //             borderColor: 'rgba(103, 106, 108, 0.4)',
    //             data: [7, 5, 6, 3, 10, 0]
    //         },
    //         {
    //             label: "3º Ano",
    //             backgroundColor: randomColorGeneratorRgb('back'),
    //             pointBackgroundColor: randomColorGeneratorRgb('ponto'),
    //             borderColor: 'rgba(103, 106, 108, 0.4)',
    //             data: [6, 4, 8, 5, 7, 10]
    //         },
    //         {
    //             label: "4º Ano",
    //             backgroundColor: randomColorGeneratorRgb('back'),
    //             pointBackgroundColor: randomColorGeneratorRgb('ponto'),
    //             borderColor: 'rgba(103, 106, 108, 0.4)',
    //             data: [6, 4, 8, 5, 7, 6]
    //         }
    //     ]
    // };
    //
    // var radarOptions2 = {
    //     responsive: true
    // };
    //
    // var ctx2 = document.getElementById("chartDidatico2").getContext("2d");
    // new Chart(ctx2, {type: 'radar', data: radarData2, options: radarOptions2});



//    Gráfico 2 - Line

    var lineData2 = {
        labels: ["0","Final do 1º Ano", "Final do 2º Ano", "Final do 3º Ano", "Final do 4º"],
        datasets: [

            {
                label: "1º Ano",
                backgroundColor: randomColorGeneratorRgb('back'),
                pointBackgroundColor: randomColorGeneratorRgb('ponto'),
                pointBorderColor: "#fff",
                data: [130, 110]
            }, {
                label: "2º Ano",
                backgroundColor: randomColorGeneratorRgb('back'),
                pointBackgroundColor: randomColorGeneratorRgb('ponto'),
                data: [130, 115, 105]
            }, {
                label: "3º Ano",
                backgroundColor: randomColorGeneratorRgb('back'),
                pointBackgroundColor: randomColorGeneratorRgb('ponto'),
                data: [130, 120, 110, 102]
            },
            {
                label: "4º Ano",
                backgroundColor: randomColorGeneratorRgb('back'),
                pointBackgroundColor: randomColorGeneratorRgb('ponto'),
                data: [125, 118, 108, 105, 98]
            },
            {
                label: "Meta COMGEP",
                backgroundColor: randomColorGeneratorRgb('back'),
                pointBackgroundColor: randomColorGeneratorRgb('ponto'),
                data: [140, 130, 120, 110, 100]
            }
        ]
    };

    var lineOptions2 = {
        beginAtZero: true,
        steps: 10,
        // stepValue: 5,
        max: 130,
        responsive: true
    };


    var ctx2 = document.getElementById("chartDidatico2").getContext("2d");
    new Chart(ctx2, {type: 'line', data: lineData2, options: lineOptions2});

    // Gŕafico 3 - Barra
    var barData3 = {
        labels: ["Matriculados", "A pedido","Decisão Judicial","Saúde", "Ensino", "Formados"],
        datasets: [
            {
                label: "Turma 2016 - Subturma BCT",
                backgroundColor: randomColorGeneratorRgb('back-forte'),
                borderColor: graphOutlines1,
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [100, 3, 1, 3, 10, 73]
            },
            {
                label: "Turma 2017 - Subturma BCT",
                backgroundColor: randomColorGeneratorRgb('back-forte'),
                borderColor: graphOutlines1,
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [110, 4, 3, 7, 15, 81]
            }
        ]
    };

    var barOptions3 = {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    steps: 10,
                    stepValue: 5,
                    max: 150
                }
            }]
        },
        responsive: true
    };


    var ctx3 = document.getElementById("chartDidatico3").getContext("2d");
    new Chart(ctx3, {type: 'horizontalBar', data: barData3, options: barOptions3});

// //    Gráfico 4 - Doughnut
//     var doughnutData = {
//         labels: ["Fase 1", "Fase 2", "Fase 3"],
//         datasets: [{
//             data: [50, 60, 45],
//             backgroundColor: [randomColorGeneratorRgb('back'), randomColorGeneratorRgb('back'), randomColorGeneratorRgb('back')]
//         }]
//     };
//
//
//     var doughnutOptions = {
//         responsive: true
//     };
//
//
//     var ctx4 = document.getElementById("chartDidatico4").getContext("2d");
//     new Chart(ctx4, {type: 'doughnut', data: doughnutData, options: doughnutOptions});

});