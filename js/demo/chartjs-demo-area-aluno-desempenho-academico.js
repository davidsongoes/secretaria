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
                label: "Matemática",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [9.0132, 8.0215, 8.9875, 8.7587]
            },
            {
                label: "Português",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [9.0000, 8.1548, 9.2157, 9.1248]
            },
            {
                label: "Aerodinâmica",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [0.000, 9.7589, 8.9854, 9.1254]
            },
            {
                label: "Matemática II",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [0.000, 8.7587, 8.6587,9.4685]
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


    var ctx1 = document.getElementById("barCfoav").getContext("2d");
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