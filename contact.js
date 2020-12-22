function display_on_submit(){
    var senders_name = document.getElementById("name").value;
    var senders_email = document.getElementById("email").value;
    var senders_subject = document.getElementById("subject").value;
    var senders_message = document.getElementById("message").value;

    // alert(senders_email);
    var pattern =  /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
    if((senders_name.replace(/\s/g, '').length) && (senders_subject.replace(/\s/g, '').length) && (senders_message.replace(/\s/g, '').length) && (senders_email.replace(/\s/g, '').length)){
        document.getElementById("submit_button_error_message").style.display = "none";
        document.getElementById("submit_button_sent_message").style.display = "block";
        return(true);
    }
    else{
        document.getElementById("submit_button_sent_message").style.display = "none";
        document.getElementById("submit_button_error_message").style.display = "block";
        return(false);
    }
}
