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

    $('#calendarAulas').fullCalendar({
        lang: 'pt',
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        timeFormat: 'H(:mm)',
        displayEventTime: true,
        editable: true,
        // droppable: true, // this allows things to be dropped onto the calendar
        drop: function () {
            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                $(this).remove();
            }
        },
        eventMouseover: function( event, jsEvent, view ) {
            alert('Evento: '+event.title);
        },
        eventRender: function (event, element) {
            element.append("<span class='closeon'>X</span>");
            element.find(".closeon").click(function () {
                $('#calendarAulas').fullCalendar('removeEvents', event._id);
            });
        },
        events: [
            {
                title: 'Matemática 1',
                start: '2018-03-05T09:00:00',
                color: '#1c84c6'
            },
            {
                title: 'Matemática 1',
                start: '2018-03-05T10:00:00',
                color: '#1c84c6'
            },
            {
                title: 'Matemática 1',
                start: '2018-03-05T11:00:00',
                color: '#1c84c6'
            },
            {
                title: 'Futebol',
                start: '2018-03-05T13:00:00',
                color: '#f8ac59'
            }
        ]
    });


});