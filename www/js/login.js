$(document).ready( function(){
    localStorage.setItem('nis','');
    localStorage.setItem('nma','');

    $("#submit").click(function(event){
        event.preventDefault();
        let uname = $('#inputNis').val();
        let upass = $('#inputPassword').val();
        $.post(server + `login` , {
            namalogin : uname,
            katasandi : upass
        },function(resp){
            let data = JSON.parse(resp);
            //console.log(data);
            if( data.resp == 1 ){
                // console.log('Login Sukses');
                // console.log('Nis',data.rslt[0].idSiswa);
                // console.log('Nama',data.rslt[0].namaSiswa);
                localStorage.setItem('nis',data.rslt[0].idSiswa);
                localStorage.setItem('nma',data.rslt[0].namaSiswa);
                window.location = 'index.html';
            }
        })
    })
})