$(function () {
    var today = new Date(),
        day = 1000 * 60 * 60 * 24;

// Set to 00:00:00:000 today
    today.setUTCHours(0);
    today.setUTCMinutes(0);
    today.setUTCSeconds(0);
    today.setUTCMilliseconds(0);
    today = today.getTime();

// THE CHART
    Highcharts.setOptions({
            lang: {
                loading: 'Aguarde...',
                months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
                weekdays: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
                shortMonths: ['Jan', 'Feb', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                exportButtonTitle: "Exportar",
                printButtonTitle: "Imprimir",
                rangeSelectorFrom: "De",
                rangeSelectorTo: "Até",
                rangeSelectorZoom: "Periodo",
                downloadPNG: 'Download imagem PNG',
                downloadJPEG: 'Download imagem JPEG',
                downloadPDF: 'Download documento PDF',
                downloadSVG: 'Download imagem SVG',
                resetZoom: "Reset",
                resetZoomTitle: "Reset",
                thousandsSep: ".",
                decimalPoint: ','
            }
        }
    );
    Highcharts.ganttChart('chartGantt', {
        title: {
            text: 'CFOAV - CFOINT'
        },
        xAxis: {
            // currentDateIndicator: true,
            // min: today - 60 * day,
            // max: today + 18 * day
        },

        /*
        plotOptions: {
            gantt: {
                pathfinder: {
                    type: 'simpleConnect'
                }
            }
        },
        */

        series: [{
            name: 'CFOAV - 2018',
            data: [{
                taskName: 'CFOAV - 2018',
                id: 'cfoav2018',
                start: today - 3 * day,
                end: today + 30 * day
            }, {
                taskName: 'Período de Inscrições - CFOAV',
                id: 'prepare_building',
                parent: 'cfoav2018',
                start: today - (3 * day),
                end: today + (6 * day),
                completed: {
                    amount: 0.6
                }
            }, {
                taskName: 'Exame de Admissão - CFOAV',
                id: 'inspect_building',
                dependency: 'prepare_building',
                parent: 'cfoav2018',
                start: today + 6 * day,
                end: today + 8 * day
            }, {
                taskName: 'Exame de Aptidão Psicológica - CFOAV',
                id: 'passed_inspection',
                dependency: 'inspect_building',
                parent: 'cfoav2018',
                start: today + 9.5 * day,
                end: today + 11 * day
                // milestone: true
            }, {
                taskName: 'Inspeção de Saúde - CFOAV',
                id: 'relocate',
                dependency: 'passed_inspection',
                parent: 'cfoav2018',
                start: today + 15 * day,
                end: today + 19 * day
            }, {
                taskName: 'Teste de Aptidão de Condicionamento Físico - CFOAV',
                id: 'relocate_staff',
                dependency: 'relocate',
                parent: 'cfoav2018',
                start: today + 25 * day,
                end: today + 30 * day
            }]
        }, {
            name: 'CFOINT - 2018',
            data: [{
                taskName: 'CFOINT - 2018',
                id: 'cfoint2018',
                start: today - 3 * day,
                end: today + 30 * day
            }, {
                taskName: 'Período de Inscrições - CFOINT',
                id: 'prepare_building1',
                parent: 'cfoint2018',
                start: today - (3 * day),
                end: today + (6 * day),
                completed: {
                    amount: 0.6
                }
            }, {
                taskName: 'Exame de Admissão - CFOINT',
                id: 'inspect_building1',
                dependency: 'prepare_building1',
                parent: 'cfoint2018',
                start: today + 6 * day,
                end: today + 8 * day
            }, {
                taskName: 'Exame de Aptidão Psicológica - CFOINT',
                id: 'passed_inspection1',
                dependency: 'inspect_building1',
                parent: 'cfoint2018',
                start: today + 9.5 * day,
                end: today + 11 * day
                // milestone: true
            }, {
                taskName: 'Inspeção de Saúde - CFOINT',
                id: 'relocate1',
                dependency: 'passed_inspection1',
                parent: 'cfoint2018',
                start: today + 15 * day,
                end: today + 19 * day
            }, {
                taskName: 'Teste de Aptidão de Condicionamento Físico CFOINT',
                id: 'relocate_staff1',
                dependency: 'relocate1',
                parent: 'cfoint2018',
                start: today + 25 * day,
                end: today + 30 * day
            }]
        }]
    });
});