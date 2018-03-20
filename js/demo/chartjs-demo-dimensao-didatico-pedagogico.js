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
            color = 'rgba(243,243,244,0.8)';
        }if (flag == 'gray-mid') {
            color = 'rgba(243,243,244,0.6)';
        }if (flag == 'gray-low') {
            color = 'rgba(243,243,244,0.4)';
        }
        return color;
    };

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

    // Gráfico 1 - Radar
    var radarData = {
        labels: ["A pedido", "Ensino - Área Militar", "Ensino - Área Específica", "Decisão Judicial", "Saude"],
        datasets: [
            {
                label: "1º Ano",
                backgroundColor: colorFunction('yellow-low'),
                pointBackgroundColor: colorFunction('yellow-high'),
                borderColor: 'rgba(103, 106, 108, 0.5)',
                data: [7, 6, 3, 4, 9]
            },
            {
                label: "2º Ano",
                backgroundColor: colorFunction('lazur-low'),
                pointBackgroundColor: colorFunction('lazur-high'),
                borderColor: 'rgba(103, 106, 108, 0.5)',
                data: [7, 5, 4, 3, 6]
            },
            {
                label: "3º Ano",
                backgroundColor: colorFunction('navy-low'),
                pointBackgroundColor: colorFunction('navy-high'),
                borderColor: 'rgba(103, 106, 108, 0.5)',
                data: [7, 5, 4, 3, 7]
            },
            {
                label: "4º Ano",
                backgroundColor: colorFunction('red-low'),
                pointBackgroundColor: colorFunction('red-high'),
                borderColor: 'rgba(103, 106, 108, 0.5)',
                data: [8, 6, 5, 2, 5]
            }
        ]
    };

    var radarOptions = {
        responsive: true
    };

    var ctx1 = document.getElementById("chartDidatico1").getContext("2d");
    new Chart(ctx1, {type: 'radar', data: radarData, options: radarOptions});

//    Gráfico 2 - Line

    var lineData2 = {
        labels: ["0", "Final do 1º Ano", "Final do 2º Ano", "Final do 3º Ano", "Final do 4º"],
        datasets: [

            {
                label: "1º Ano",
                backgroundColor: colorFunction('yellow-low'),
                borderColor: colorFunction('yellow-low'),
                pointBackgroundColor: colorFunction('yellow-high'),
                pointBorderColor: "#fff",
                data: [140, 112]
            }, {
                label: "2º Ano",
                backgroundColor: colorFunction('lazur-low'),
                borderColor: colorFunction('lazur-low'),
                pointBackgroundColor: colorFunction('lazur-high'),
                data: [140, 115, 105]
            }, {
                label: "3º Ano",
                backgroundColor: colorFunction('navy-low'),
                borderColor: colorFunction('navy-low'),
                pointBackgroundColor: colorFunction('navy-high'),
                data: [140, 120, 116, 102]
            },
            {
                label: "4º Ano",
                backgroundColor: colorFunction('red-low'),
                borderColor: colorFunction('red-low'),
                pointBackgroundColor: colorFunction('red-high'),
                data: [130, 110, 108, 100, 90]
            },
            {
                label: "Meta COMGEP",
                backgroundColor: colorFunction('gray-low'),
                borderColor: 'rgba(103, 106, 108, 0.7)',
                pointBackgroundColor: colorFunction('gray-high'),
                data: [130, 123, 116, 108, 100]
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
        labels: ["Matriculados", "A pedido", "Decisão Judicial", "Saúde", "Ensino", "Formados"],
        datasets: [
            {
                label: "Turma 2016",
                backgroundColor: colorFunction('lazur-mid'),
                borderColor: colorFunction('lazur-mid'),
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [100, 3, 1, 3, 10, 73]
            },
            {
                label: "Turma 2017",
                backgroundColor: colorFunction('yellow-mid'),
                borderColor: colorFunction('yellow-mid'),
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [110, 4, 3, 7, 15, 81]
            },
            {
                label: "Turma 2018",
                backgroundColor: colorFunction('red-mid'),
                borderColor: colorFunction('red-mid'),
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
});