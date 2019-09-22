$(document).ready( function(){
    localStorage.setItem('nis','001010');
    localStorage.setItem('nma','Jihad Misbahul Munif');

    $("#nis").html('001010');
    $("#nms").html('Jihad Misbahul Munif');
    /*
    $.getJSON( server + `cariSiswa/${nis}` , function(siswa){
        $("#nis").html('');
        $("#nms").html('');
        $.each(siswa,function(i,data){
        })
    })
    */

    $("#mm_nihar").click( function(){
        //window.location="nihar.html";
        window.location="dalairiswa.html";
    })

    $("#mm_sentra").click( function(){
        window.location="nisen.html";
    })

    $("#mm_agenta").click( function(){
        window.location="agerita.html";
    })

    $("#mm_jurnal").click( function(){
        window.location="jurnalr.html";
    })

    $("#mm_kuriku").click( function(){
        window.location="kurikulum.html";
    })
});