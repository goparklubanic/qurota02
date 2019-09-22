$(document).ready(function(){
    

    $(".gohome").click( function(){
        window.location="index.html";
    })

    /* back button handler */
    navigator.Backbutton.goHome(function() {
        console.log('success')
      }, function() {
        console.log('fail')
      });
    /* back button handler */

    
})
