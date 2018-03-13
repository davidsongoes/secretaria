$(function () {
    //Cor do background aleatória RGB
    var randomColorGeneratorRgb = function (flag) {
        graphBackground1 = "";
        var randomR = Math.floor((Math.random() * 130) + 100);
        var randomG = Math.floor((Math.random() * 130) + 100);
        var randomB = Math.floor((Math.random() * 130) + 100);

        if (flag == 'back') {
            var graphBackground1 = "rgb("
                + randomR + ", "
                + randomG + ", "
                + randomB + ","
                + 0.5 + ")";
        }
        if (flag == 'borda') {
            var graphBackground1 = "rgb("
                + randomR + ", "
                + randomG + ", "
                + randomB + ","
                + 0.8 + ")";
        }if (flag == 'ponto'){
            var graphBackground1 = "rgb("
                + randomR + ", "
                + randomG + ", "
                + randomB + ","
                + 1 + ")";
        }
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
            + randomB +", "
            + 0.7 + ")";
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

    var internalDataLength2 = internalData1.length;
    i = 0;
    while (i <= internalDataLength2) {
        var randomR = Math.floor((Math.random() * 130) + 100);
        var randomG = Math.floor((Math.random() * 130) + 100);
        var randomB = Math.floor((Math.random() * 130) + 100);

        var graphBackground2 = "rgb("
            + randomR + ", "
            + randomG + ", "
            + randomB +", "
            + 0.3 + ")";
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

    // Gráfico 1 - Radar
    var radarData = {
        labels: ["A pedido", "Voo", "Ensino", "Liminar", "Saude"],
        datasets: [
            {
                label: "CFOAV",
                backgroundColor: randomColorGeneratorRgb('back'),
                borderColor: randomColorGeneratorRgb('borda'),
                data: [10, 30, 40, 10, 5]
            },
            {
                label: "CFOINT",
                backgroundColor: randomColorGeneratorRgb('back'),
                borderColor: randomColorGeneratorRgb('borda'),
                data: [20, 0, 40, 20, 20]
            },
            {
                label: "CFOINF",
                backgroundColor: randomColorGeneratorRgb('back'),
                borderColor: randomColorGeneratorRgb('borda'),
                data: [30, 0, 20, 10, 40]
            }
        ]
    };

    var radarOptions = {
        responsive: true
    };

    var ctx1 = document.getElementById("chartDidatico1").getContext("2d");
    new Chart(ctx1, {type: 'radar', data: radarData, options: radarOptions});

    // Gŕafico 2 - Barra
    var barData2 = {
        labels: [
            "Muito satisfatório","Satisfatório","Pouco satisfatório","Não satisfatório"],
        datasets: [
            {
                backgroundColor: graphColors1,
                borderColor: graphOutlines1,
                pointBackgroundColor: "rgba(26,179,148,1)",
                hoverBackgroundColor: hoverColor1,
                pointBorderColor: "#fff",
                data: [60, 20, 10, 10]
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


    var ctx2 = document.getElementById("chartDidatico2").getContext("2d");
    new Chart(ctx2, {type: 'horizontalBar', data: barData2, options: barOptions2});

//    Gráfico 3 - Line

    var lineData = {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
        datasets: [

            {
                label: "CFAOV",
                backgroundColor: graphBackground2,
                pointBackgroundColor: randomColorGeneratorRgb('ponto'),
                pointBorderColor: "#fff",
                data: [0, 7, 11, 13, 15, 19]
            },{
                label: "CFOINT",
                backgroundColor: randomColorGeneratorRgb('back'),
                pointBackgroundColor: randomColorGeneratorRgb('ponto'),
                data: [0, 5, 9, 12, 14, 16]
            },{
                label: "CFOINF",
                backgroundColor: randomColorGeneratorRgb('back'),
                pointBackgroundColor: randomColorGeneratorRgb('ponto'),
                data: [0, 8,11, 16, 20, 26]
            }
        ]
    };

    var lineOptions = {
        beginAtZero: true,
        steps: 10,
        stepValue: 5,
        max: 100,
        responsive: true
    };


    var ctx3 = document.getElementById("chartDidatico3").getContext("2d");
    new Chart(ctx3, {type: 'line', data: lineData, options:lineOptions});

//    Gráfico 4 - Doughnut
    var doughnutData = {
        labels: ["Fase 1","Fase 2","Fase 3" ],
        datasets: [{
            data: [50,60,45],
            backgroundColor: [randomColorGeneratorRgb('back'),randomColorGeneratorRgb('back'),randomColorGeneratorRgb('back')]
        }]
    } ;


    var doughnutOptions = {
        responsive: true
    };


    var ctx4 = document.getElementById("chartDidatico4").getContext("2d");
    new Chart(ctx4, {type: 'doughnut', data: doughnutData, options:doughnutOptions});

});