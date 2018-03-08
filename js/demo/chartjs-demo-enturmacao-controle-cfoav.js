$(function () {
    //Cor do background aleatória
    var randomColorGenerator = function () {
        return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
    };

    // Gráfico Barra CFOAV 2018
    var barData2018 = {
        labels: ["2015", "2016", "2017", "2018"],
        datasets: [
            {
                label: "Vagas Edital",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [160, 160, 160, 160]
            },
            {
                label: "Matriculados",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [145, 145, 145, 145]
            },
            {
                label: "Liminaristas",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [6, 6, 5, 4]
            },
            {
                label: "Desligados",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [10, 10, 5, 2]
            },
            {
                label: "ONA",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [5, 5, 4, 3]
            },
            {
                label: "Total",
                backgroundColor: randomColorGenerator(),
                borderColor: "#000",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [130, 120, 113, 109]
            }
        ]
    };

    var barOptions2018 = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        responsive: true
    };


    var ctx2018 = document.getElementById("barChartCfoav2018AgdMatricula").getContext("2d");
    new Chart(ctx2018, {type: 'bar', data: barData2018, options: barOptions2018});


//     // Gráfico Barra CFOAV 2017
//     var barData2017 = {
//         labels: ["2014", "2015", "2016", "2017"],
//         datasets: [
//             {
//                 label: "Vagas Edital",
//                 backgroundColor: randomColorGenerator(),
//                 borderColor: "#000",
//                 pointBackgroundColor: "rgba(26,179,148,1)",
//                 pointBorderColor: "#fff",
//                 data: [160, 160, 160, 160]
//             },
//             {
//                 label: "Matriculados",
//                 backgroundColor: randomColorGenerator(),
//                 borderColor: "#000",
//                 pointBackgroundColor: "rgba(26,179,148,1)",
//                 pointBorderColor: "#fff",
//                 data: [145, 145, 145, 145]
//             },
//             {
//                 label: "Liminaristas",
//                 backgroundColor: randomColorGenerator(),
//                 borderColor: "#000",
//                 pointBackgroundColor: "rgba(26,179,148,1)",
//                 pointBorderColor: "#fff",
//                 data: [6, 6, 5, 4]
//             },
//             {
//                 label: "Desligados",
//                 backgroundColor: randomColorGenerator(),
//                 borderColor: "#000",
//                 pointBackgroundColor: "rgba(26,179,148,1)",
//                 pointBorderColor: "#fff",
//                 data: [10, 10, 5, 2]
//             },
//             {
//                 label: "ONA",
//                 backgroundColor: randomColorGenerator(),
//                 borderColor: "#000",
//                 pointBackgroundColor: "rgba(26,179,148,1)",
//                 pointBorderColor: "#fff",
//                 data: [5, 5, 4, 3]
//             },
//             {
//                 label: "Total",
//                 backgroundColor: randomColorGenerator(),
//                 borderColor: "#000",
//                 pointBackgroundColor: "rgba(26,179,148,1)",
//                 pointBorderColor: "#fff",
//                 data: [130, 120, 113, 109]
//             }
//         ]
//     };
//
//     var barOptions2017 = {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         },
//         responsive: true
//     };
//
//
//     var ctx2017 = document.getElementById("barChartCfoav2017EmAndamento").getContext("2d");
//     new Chart(ctx2017, {type: 'bar', data: barData2017, options: barOptions2017});
//
//
// // Gráfico Barra CFOAV 2017
//     var barData2016 = {
//         labels: ["2013", "2014", "2015", "2016"],
//         datasets: [
//             {
//                 label: "Vagas Edital",
//                 backgroundColor: randomColorGenerator(),
//                 borderColor: "#000",
//                 pointBackgroundColor: "rgba(26,179,148,1)",
//                 pointBorderColor: "#fff",
//                 data: [160, 160, 160, 160]
//             },
//             {
//                 label: "Matriculados",
//                 backgroundColor: randomColorGenerator(),
//                 borderColor: "#000",
//                 pointBackgroundColor: "rgba(26,179,148,1)",
//                 pointBorderColor: "#fff",
//                 data: [145, 145, 145, 145]
//             },
//             {
//                 label: "Liminaristas",
//                 backgroundColor: randomColorGenerator(),
//                 borderColor: "#000",
//                 pointBackgroundColor: "rgba(26,179,148,1)",
//                 pointBorderColor: "#fff",
//                 data: [6, 6, 5, 4]
//             },
//             {
//                 label: "Desligados",
//                 backgroundColor: randomColorGenerator(),
//                 borderColor: "#000",
//                 pointBackgroundColor: "rgba(26,179,148,1)",
//                 pointBorderColor: "#fff",
//                 data: [10, 10, 5, 2]
//             },
//             {
//                 label: "ONA",
//                 backgroundColor: randomColorGenerator(),
//                 borderColor: "#000",
//                 pointBackgroundColor: "rgba(26,179,148,1)",
//                 pointBorderColor: "#fff",
//                 data: [5, 5, 4, 3]
//             },
//             {
//                 label: "Total",
//                 backgroundColor: randomColorGenerator(),
//                 borderColor: "#000",
//                 pointBackgroundColor: "rgba(26,179,148,1)",
//                 pointBorderColor: "#fff",
//                 data: [130, 120, 113, 109]
//             }
//         ]
//     };
//
//     var barOptions2016 = {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         },
//         responsive: true
//     };
//
//
//     var ctx2016 = document.getElementById("barChartCfoav2016EmAndamento").getContext("2d");
//     new Chart(ctx2016, {type: 'bar', data: barData2016, options: barOptions2016});
});