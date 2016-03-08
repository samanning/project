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

    $('#paper').draggable({
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
                $('#msg').html('Close, but try again... Paper products with grease or food stains can be composted.').css('color', '#D0021B');
                //revert the obj by returning true
                return true;
            } else {
                //waste obj was dropped
                //return false so obj does not revert
                return false;
            }
        },
    })

    $('#bag').draggable({
        cursor: 'grab',
        opacity: 0.6,
        scope: 'compost',
        drag: function (event, ui) {
            $('.itemName2').show();
        },
        revert: function (wasteObj) {
            //if false then no waste obj drop occured
            if (wasteObj === false) {
                //alert('item does not belong here!');
                $('#msg').html('Close, but actually paper can be composted and broken down by earth worms.').css('color', '#D0021B');
                //revert the obj by returning true
                return true;
            } else {
                //waste obj was dropped
                //return false so obj does not revert
                return false;
            }
        },
    })

    $('#sleeve').draggable({
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
                $('#msg').html('This item belongs in a better bin. All paper products can be composted.').css('color', '#D0021B');
                //revert the obj by returning true
                return true;
            } else {
                //waste obj was dropped
                //return false so obj does not revert
                return false;
            }
        },
    })

    $('#coffeeLid').draggable({
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
                $('#msg').html('Oops, try again. The Memorial Union provides compostable lids.').css('color', '#D0021B');
                //revert the obj by returning true
                return true;
            } else {
                //waste obj was dropped
                //return false so obj does not revert
                return false;
            }
        },
    })

    $('#coffeeCup').draggable({
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
                $('#msg').html('Almost, but not quite... Coffee cups can be composted since they are made of paper and soiled by food.').css('color', '#D0021B');
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
            $('.itemName2').hide();
            $('.itemName3').hide();
            $('.itemName4').hide();
            $('.itemName5').hide();
            $('#msg').html('Nice! Try to use items that can be composted and turned into rich organic matter.').css('color', '#5EB246');
            counterForDropped--;
            checkLastDrop();
        }
    })

    $('.binR').droppable({
        scope: 'recycle',
        drop: function (event, ui) {
            audioCorrect.play();
            $(ui.draggable).remove();
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
            //alert('Nice Work! You can advance to the next level.');
            $('#msg').hide();
            $('#nextLevel').show();
        }
    }

})