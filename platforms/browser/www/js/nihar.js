$(document).ready( function(){
    $("#itemNilai li").remove();
    $.each(itemNilai , function(item,nilai){
        $("#itemNilai").append(`
            <li class="list-group-item" id='${item}'>${nilai}</li>
        `);
    });

    $("#danis").click(function(){
        window.location='dalairiswa.html'
    })
    $('.gohome').click( function(){
        window.location="index.html";
    })
})