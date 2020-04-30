$(document).ready(function () {
    

// 8 task

let btn = $('#btn')
$(btn.on('click', function(){
    body.css('background-color','yellow')
})



// 9 Task


let btn = $('#btn');
btn.click(function() {
    let firstname = $('.firstname').val();
    let lastname = $('.lastname').val();
    let password = $('.password').val();

    if(firstname =='',lastname =='', password === ''){
        alert('Вы не ввели данные');

    }else{
        window.location = "http://google.com";
    }

    
})



// 10 task

let move = 0
$('.square').click(function () {
    
    move += 100;
    $('.square').css('left', `${move}px`)
})


// 11 task

$(document).on('mousemove', function(e){
    console.log(e.offsetX, e.offsetY)
})





})