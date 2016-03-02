//Javascript

//call to jQuery ready function
//make sure html and css are loaded

var myAudio = document.createElement('audio');
myAudio.controls = true;
myAudio.src = 'media/clink.mp3';


$(document).ready(function(){
    
    console.log('ready');
    
    //click event to start
    //$('#home').click(function(){
        //call function to go to nav
        
    //
    
    $('object').draggable({
        cursor: 'grab';
        opacity: 0.6,
    })
    $('.bin').droppable({
        drop: function (event, ui){
            myAudio.play();
        }
    });
})