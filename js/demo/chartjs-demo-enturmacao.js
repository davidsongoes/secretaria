$(function () {
    //Cor do background aleatória
    var randomColorGenerator = function () {
        return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
    };

    // BARRA CFOAV
    var barData = {
        labels: ["2001", "2002", "2003", "2004"],
        datasets: [
            {
                label: "Vagas Edital",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [160, 160, 180, 170]
            },
            {
                label: "Matriculados",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [140, 145, 150, 160]
            },
            {
                label: "Liminaristas",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [5, 6, 4, 4]
            },
            {
                label: "Desligados",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [15, 9, 26,6]
            }
        ]
    };

    var barOptions = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        responsive: true
    };


    var ctx1 = document.getElementById("barEnturmacaoCfoav").getContext("2d");
    new Chart(ctx1, {type: 'bar', data: barData, options: barOptions});

//    Barra CAP

    var barData2 = {
        labels: ["2013"],
        datasets: [
            {
                label: "Liderança",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [9.8430]
            },
            {
                label: "Gestão Pública",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [9.1893]
            },
            {
                label: "Técnicas de Plataforma",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [9.3545]
            },
            {
                label: "Doutrina Militar",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [9.2047]
            }
        ]
    };

    var barOptions2 = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        responsive: true
    };


    var ctx2 = document.getElementById("barCap").getContext("2d");
    new Chart(ctx2, {type: 'bar', data: barData2, options: barOptions2});

//    Barra CCEM

    var barData3 = {
        labels: ["2017", "2018"],
        datasets: [
            {
                label: "Ciências Políticas",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [9.1846, 8.0215]
            },
            {
                label: "Estrátegia e Defesa",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [8.8819, 8.1548]
            },
            {
                label: "Ética",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [9.3011, 9.7589]
            },
            {
                label: "Legislação Militar",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [9.1603, 8.7587]
            }
        ]
    };

    var barOptions3 = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        responsive: true
    };


    var ctx3 = document.getElementById("barCcem").getContext("2d");
    new Chart(ctx3, {type: 'bar', data: barData3, options: barOptions3});
});