$(function() {
    $('.toggle_btn').on('click', function(){
        $('.sidebar').toggleClass('active');
        $('.page_content').toggleClass('active');
    });
});


$(function() {
    $('.history_btn').on('click', function(){
        $('.history').toggleClass('history-active');
        $("body").toggleClass('no-scroll');
    });
});



function fileupload() {
    var file = _("archivefile").files[0];
    var formdata = new FormData();
    formdata.append("archivefile", file);
    var ajax = new XMLHttpRequest();
    ajax.upload.addEventListener("progress", progressHandler, false);
    ajax.open("POST", "");
    ajax.send(formdata);
}

function progressHandler(event) {
    _("uploadstatus").innerHTML = "Uploaded " + event.loaded + " bytes of " + event.total;
    var percent = (event.loaded / event.total) * 100;
    _("progressBar").value = Math.round(percent);
}