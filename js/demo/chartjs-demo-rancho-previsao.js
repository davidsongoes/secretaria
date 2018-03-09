$(function () {
    //Cor do background aleatória
    var randomColorGenerator = function () {
        return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
    };

    // barra 1
    var barData = {
        labels: ["Café da Manhã", "Almoço", "Jantar", "Ceia",],
        datasets: [
            {
                label: "Docentes",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [95, 30, 0, 2]
            },
            {
                label: "Discentes",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [333, 70, 120, 90]
            }
        ]
    };

    var barOptions = {
        responsive: true
    };


    var ctx1 = document.getElementById("barChartPrevisaoRancho").getContext("2d");
    new Chart(ctx1, {type: 'bar', data: barData, options: barOptions});
});