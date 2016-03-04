//Javascript

//call to jQuery ready function
//make sure html and css are loaded

var audioCorrect = document.createElement('audio');
var audioIncorrect = document.createElement('audio');
audioCorrect.controls = true;
audioCorrect.src = 'media/correct.mp3';
audioIncorrect.controls = true;
audioIncorrect.src = 'media/wrong.mp3';


$(document).ready(function(){
    
    console.log('ready');

    
    $('.object').draggable({
        cursor: 'grab',
        opacity: 0.6,
    })
    $('.binC').droppable({
        drop: function (event, ui){
            audioCorrect.play();
        }
    })
    $('.binR').droppable({
        drop: function (event, ui){
            audioIncorrect.play();
        }
    })
     $('.binL').droppable({
        drop: function (event, ui){
            audioIncorrect.play();
        }
    })
})