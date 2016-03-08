//Javascript

//call to jQuery ready function
//make sure html and css are loaded

var audioCorrect = document.createElement('audio');
var audioIncorrect = document.createElement('audio');
audioCorrect.controls = true;
audioCorrect.src = 'media/correct.mp3';
audioIncorrect.controls = true;
audioIncorrect.src = 'media/wrong.mp3';

$(document).ready(function () {

    console.log('ready');
    $('.itemName1').hide();
    $('.itemName2').hide();
    $('.itemName3').hide();
    $('.itemName4').hide();
    $('.itemName5').hide();
    $('#nextLevel').hide();

    counterForDropped = $('#wasteItems').find('.object').length;

    $('#wasabi').draggable({
        cursor: 'grab',
        opacity: 0.6,
        scope: 'compost',
        drag: function (event, ui) {
            $('.itemName1').show();
        },
        revert: function (wasteObj) {
            //if false then no waste obj drop occured
            if (wasteObj === false) {
                //alert('item does not belong here!');
                $('#msg').html('Sorry, try again. All food is compostable.').css('color', '#D0021B');
                //revert the obj by returning true
                return true;
            } else {
                //waste obj was dropped
                //return false so obj does not revert
                return false;
            }
        },
    })

    $('#chopsticks').draggable({
        cursor: 'grab',
        opacity: 0.6,
        scope: 'compost',
        drag: function (event, ui) {
            $('.itemName3').show();
        },
        revert: function (wasteObj) {
            //if false then no waste obj drop occured
            if (wasteObj === false) {
                //alert('item does not belong here!');
                $('#msg').html('Whoops, try again. Natural materials like wood and paper can be composted and broken down by earth worms.').css('color', '#D0021B');
                //revert the obj by returning true
                return true;
            } else {
                //waste obj was dropped
                //return false so obj does not revert
                return false;
            }
        },
    })

    $('#soySauce').draggable({
        cursor: 'grab',
        opacity: 0.6,
        scope: 'recycle',
        drag: function (event, ui) {
            $('.itemName2').show();
        },
        revert: function (wasteObj) {
            //if false then no waste obj drop occured
            if (wasteObj === false) {
                //alert('item does not belong here!');
                $('#msg').html('Oops... Plastic or aluminum condiment packets and containers can actually be recycled.').css('color', '#D0021B');
                //revert the obj by returning true
                return true;
            } else {
                //waste obj was dropped
                //return false so obj does not revert
                return false;
            }
        },
    })

    $('#tray').draggable({
        cursor: 'grab',
        opacity: 0.6,
        scope: 'compost',
        drag: function (event, ui) {
            $('.itemName5').show();
        },
        revert: function (wasteObj) {
            //if false then no waste obj drop occured
            if (wasteObj === false) {
                //alert('item does not belong here!');
                $('#msg').html('Sorry, try again. Sushi containers from the Memorial Union are compostable.').css('color', '#D0021B');
                //revert the obj by returning true
                return true;
            } else {
                //waste obj was dropped
                //return false so obj does not revert
                return false;
            }
        },
    })

    $('#sushiLid').draggable({
        cursor: 'grab',
        opacity: 0.6,
        scope: 'compost',
        drag: function (event, ui) {
            $('.itemName4').show();
        },
        revert: function (wasteObj) {
            //if false then no waste obj drop occured
            if (wasteObj === false) {
                //alert('item does not belong here!');
                $('#msg').html('Oops, try again. The Memorial Union uses compostable sushi containers.').css('color', '#D0021B');
                //revert the obj by returning true
                return true;
            } else {
                //waste obj was dropped
                //return false so obj does not revert
                return false;
            }
        },
    })


    $('.binC').droppable({
        scope: 'compost',
        drop: function (event, ui) {
            audioCorrect.play();
            $(ui.draggable).remove();
            $('.itemName1').hide();
            $('.itemName3').hide();
            $('.itemName4').hide();
            $('.itemName5').hide();
            $('#msg').html('Way to go! Composting helps us reach zero waste!').css('color', '#5EB246');
            counterForDropped--;
            checkLastDrop();
        }
    })

    $('.binR').droppable({
        scope: 'recycle',
        drop: function (event, ui) {
            audioCorrect.play();
            $(ui.draggable).remove();
            $('.itemName2').hide();
            $('#msg').html('That is correct! Please dump any liquids or food scraps from containers before placing in bin.').css('color', '#5EB246');
            counterForDropped--;
            checkLastDrop();
        }

    })

    $('.binL').droppable({
        scope: 'landfill',
        drop: function (event, ui) {
            audioCorrect.play();
            $(ui.draggable).remove();
            $('#msg').html('Good job! Try to limit disposing waste into the landfill bin.').css('color', '#5EB246');
            counterForDropped--;
            checkLastDrop();
        }
    })

    function checkLastDrop() {
        if (counterForDropped === 0) {
            alert('Nice Work! You can advance to the next level.');
            $('#msg').hide();
            $('#nextLevel').show();
        }
    }

})