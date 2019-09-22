$(document).ready(function(){
    

    $(".gohome").click( function(){
        window.location="index.html";
    })
        
})

/* back button handler */
navigator.Backbutton.goHome(function() {
  window.location="index.html";
}, function() {
  console.log('fail')
});
/* back button handler */