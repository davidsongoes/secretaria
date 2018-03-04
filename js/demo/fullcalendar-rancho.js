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
        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar
        drop: function () {
            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                $(this).remove();
            }
        },
        eventRender: function (event, element) {
            if (event.title == 'Café da Manhã'){
                element.css({
                    'background-color':'#ed5565',
                    'color':'#ffffff',
                    'border-color': '#ed5565'

                });
            }if (event.title == 'Almoço'){
                element.css({
                    'background-color':'#1ab394',
                    'color':'#ffffff',
                    'border-color': '#1ab394'
                });
            }if (event.title == 'Jantar'){
                element.css({
                    'background-color':'#f8ac59',
                    'color':'#ffffff',
                    'border-color': '#f8ac59'
                });
            }if (event.title == 'Ceia'){
                element.css({
                    'background-color':'#1c84c6',
                    'color':'#ffffff',
                    'border-color': '#1c84c6'
                });
            }
            element.append("<span class='closeon'>X</span>");
            element.find(".closeon").click(function () {
                $('#calendar').fullCalendar('removeEvents', event._id);
            });
        },
        events: [
            {
                title: 'Almoço',
                start: new Date(),
                color: '#1ab394'
            }
        ]
    });


});