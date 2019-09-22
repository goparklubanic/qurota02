$(document).ready( function(){
    let nis = localStorage.getItem('nis');
    if(nis == null || nis =='' ){ 
        window.location='login.html';
    }else{
        let nis = localStorage.getItem('nis');
        let nma = localStorage.getItem('nma');
        $("#nis").html(nis);
        $("#nms").html(nma);
    }
 
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

    /* back button handler */
    navigator.Backbutton.goHome(function() {
        console.log('success')
      }, function() {
        console.log('fail')
      });
    /* back button handler */
});