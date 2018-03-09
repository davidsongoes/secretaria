$(document).ready(function () {
    /* initialize the external events
     -----------------------------------------------------------------*/


    $('#external-events div.external-event').each(function () {

        // store data so the calendar knows to render an event upon drop
        $(this).data('event', {
            title: $.trim($(this).text()), // use the element's text as the event title
            stick: true // maintain when user navigates (see docs on the renderEvent method)
        });

        // make the event draggable using jQuery UI
        $(this).draggable({
            zIndex: 1111999,
            revert: true,      // will cause the event to go back to its
            revertDuration: 0  //  original position after the drag
        });

    });


    /* initialize the calendar
     -----------------------------------------------------------------*/
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $('#calendar').fullCalendar({
        lang: 'pt',
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        displayEventTime: false,
        editable: false,
        droppable: true, // this allows things to be dropped onto the calendar
        drop: function () {
            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                $(this).remove();
            }
        },
        eventClick: function(calEvent, jsEvent, view) {

            alert('Refeição: ' + calEvent.title+'\nQuantidades: \nDocentes: '+calEvent.docentes+'\nDiscentes: '+calEvent.discentes);
        },
        events: [
            {
                title: 'Almoço',
                start: '2018-03-12',
                color: '#1ab394',
                docentes: 30,
                discentes: 70
            },
            {
                title: 'Café da Manhã',
                start: '2018-03-12',
                color: "#ed5565",
                docentes: 15,
                discentes: 120
            },
            {
                title: 'Café da Manhã',
                start: '2018-03-13',
                color: "#ed5565",
                docentes: 20,
                discentes: 78
            },
            {
                title: 'Café da Manhã',
                start: '2018-03-14',
                color: "#ed5565",
                docentes: 35,
                discentes: 65
            },
            {
                title: 'Ceia',
                start: '2018-03-15',
                color: "#1c84c6",
                docentes: 2,
                discentes: 90
            },
            {
                title: 'Café da Manhã',
                start: '2018-03-16',
                color: "#ed5565",
                docentes: 25,
                discentes: 70
            },
            {
                title: 'Jantar',
                start: '2018-03-17',
                color: "#f8ac59",
                docentes: 0,
                discentes: 120
            }
        ],
        eventRender: function (event, element) {
            element.append("Docentes: "+ event.docentes);
            element.append("</br>")
            element.append("Discentes: "+ event.discentes);
            element.append("</br>")
            element.append("<span class='closeon'>X</span>");
            element.find(".closeon").click(function () {
                $('#calendar').fullCalendar('removeEvents', event._id);
            });
            element.attr("amount",event.amount);
        }
    });


});