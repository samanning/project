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

    $('#chipsBag').draggable({
        cursor: 'grab',
        opacity: 0.6,
        scope: 'landfill',
        drag: function (event, ui) {
            $('.itemName1').show();
        },
        revert: function (wasteObj) {
            //if false then no waste obj drop occured
            if (wasteObj === false) {
                //alert('item does not belong here!');
                $('#msg').html('Try again. Chip bags belong in landfill unless labeled as compostable.').css('color', '#D0021B');
                //revert the obj by returning true
                return true;
            } else {
                //waste obj was dropped
                //return false so obj does not revert
                return false;
            }
        },
    })

    $('#glassBottle').draggable({
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
                $('#msg').html('Sorry, try again. Glass is recyclable.').css('color', '#D0021B');
                //revert the obj by returning true
                return true;
            } else {
                //waste obj was dropped
                //return false so obj does not revert
                return false;
            }
        },
    })

    $('#gum').draggable({
        cursor: 'grab',
        opacity: 0.6,
        scope: 'landfill',
        drag: function (event, ui) {
            $('.itemName3').show();
        },
        revert: function (wasteObj) {
            //if false then no waste obj drop occured
            if (wasteObj === false) {
                //alert('item does not belong here!');
                $('#msg').html('Close, but gum cannot be broken down naturally.').css('color', '#D0021B');
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
            
            $('#msg').html('Nice work! Composting benefits our campus and our ecosystem!').css('color', '#5EB246');
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
            $('#msg').html('Good job! Did you know? Our campus collects over 21,000 tons of waste.').css('color', '#5EB246');
            counterForDropped--;
            checkLastDrop();
        }

    })

    $('.binL').droppable({
        scope: 'landfill',
        drop: function (event, ui) {
            audioCorrect.play();
            $(ui.draggable).remove();
            $('.itemName1').hide();
            $('.itemName3').hide();
            $('#msg').html('Yes! Try to avoid throwing waste in the landfill.').css('color', '#5EB246');
            counterForDropped--;
            checkLastDrop();
        }
    })

    function checkLastDrop() {
        if (counterForDropped === 0) {
            //alert('Nice Work! You can advance to the next level.');
            $('#msg').hide();
            $('#nextLevel').show();
        }
    }

})