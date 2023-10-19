$('.closeBtn').click(function(){
    $('.navs ').hide()
})
$('.open').click(function()
{let navwidth=$('.navs').outerWidth();
if($('.navs').css('left') == '0px'){
 
    $('.navs').animate( {left:`-${navwidth}`},1000)
}
else{
    $('.navs').animate( {left:`0px`},1000)
}
   
});

$(document).ready(function(){
    $('#singers h3').click(function(){
        $(this).next().slideToggle(1000);
        $("#singers div").not($(this).next()).slideup(1000);
    });
});



function countDown(){
    let now = new Date();
    let concertDate = new Date(2023,12,29);
    let  currentTime = now.getTime();
    let concertTime=concertDate.getTime();
    let  remTime = concertTime - currentTime;
    



    let s = Math.floor ( remTime /1000);
    let m = Math.floor (s/60);
    let h= Math.floor(m/60);
    let d = Math.floor(h/24)-30;

    h %=24;
    m %=60;
    s %=60;    
    document.getElementById("days").innerHTML = "<h4>" + d + " d" + "</h4>";
    document.getElementById("hours").innerHTML = "<h4>" + h + " h" + "</h4>";
    document.getElementById("minutes").innerHTML = "<h4>" + m + " m" + "</h4>";
    document.getElementById("seconds").innerHTML = "<h4>" + s + " s" + "</h4>";
 

    setTimeout(countDown, 1000);
}
countDown();
$(function(){
    let max =100;
    $('textarea').keyup(function(){
       let length = $(this).val().length;
       let character = max - length;
       console.log(character)
       if(character <=0){
        $('#num').text("your available nums finished");
       }
       else{
        $("#num").text(character);
       }
    });
});
