
$(document).ready(function() {
  $("#doneButtonRc").prop("disabled", true);

  $("#noButtonSu").click(function(){
    var regExp = /\S+@\S+\.\S+/;
    var email = $("#emailSu").val();
  
    if(!email.match(regExp)){
      document.getElementById("emailSu").focus();
      alert("Email is not correct.");
      return false;
    }else{
      alert("Your email " + email + " was successfully unsubscribed.");
      return true;
    }
  });

  $("img").click(function() {
    window.location.href = "index.html";
  });

  $("#doneButtonRc").click(function(){
    var email = $("#emailRc").val();
    alert("Your account for email " + email + " was successfully recovered.");
    location.reload();
  });

  $("#sendButtonRc").click(function(event){
      var emailRegExp = /\S+@\S+\.\S+/;
      var phoneRegExp = /^\d{10}$/;
      var email = $("#emailRc").val();
      var phone = $("#phoneRc").val();
      
      if(!email.match(emailRegExp)){
        document.getElementById("emailRc").focus();
        alert("Email is not correct.");
        return false;
      }
      if(!phone.match(phoneRegExp)){
        document.getElementById("phoneRc").focus();
        alert("Phone number is not correct.");
        return false;
      }
      //alert("A messagge with a recovery code was sent to " + phone + " number.");
      $("#doneButtonRc").prop("disabled", false);
      event.preventDefault();
    });

});

function onRegister(){
  var username = $("#usernameRg").val();
  var password = $("#passwordRg").val();
  var confPassword = $("#confPasswordRg").val();
  var email = $("#emailRg").val();
  var location = $("#locationRg").val();
  var agreement = $("#agreementRg").is(":checked");

  var regExp = /\S+@\S+\.\S+/;

  if(username==''){
    document.getElementById("usernameRg").focus();
    alert("Username filed should not be empty.");
    return false;
  }
  if(password != confPassword || password=='' || confPassword==""){
    document.getElementById("passwordRg").focus();
    alert("Password is incorrect.");
    return false;
  }
  if(!email.match(regExp)){
    document.getElementById("emailRg").focus();
    alert("Email is not correct.");
    return false;
  }
  if(location=='Your location'){
    document.getElementById("locationRg").focus();
    alert("Choose your location.");
    return false;
  }
  if(agreement!=true){
    document.getElementById("agreementRg").focus();
    alert("To be registered, please read and accept the terms of use.");
    return false;
  }
  alert("Hello " + username + ". You are registered.");
}


function onSignIn(){
  var username = $("#usernameS").val();
  var password = $("#passwordS").val();
  var remember = $("#rememberS").is(":checked");

  if(username==''){
    document.getElementById("usernameS").focus();
    alert("Username filed should not be empty.");
    return false;
  }
  if(password==''){
    document.getElementById("passwordS").focus();
    alert("Password is incorrect.");
    return false;
  }
  if(remember==true) {
    alert("Hello " + username + ". You are signed in and remembered.");
  }else{
    alert("Hello " + username + ". You are signed in.");
  }
}

function onSubscribe(){
  var regExp = /\S+@\S+\.\S+/;
  var email = $("#emailSu").val();
  
  if(!email.match(regExp)){
    document.getElementById("emailSu").focus();
    alert("Email is not correct.");
    return false;
  }else{
    alert("Your email " + email + " was successfully subscribed.");
  }
}

function onSendEmail(){
  var regExp = /\S+@\S+\.\S+/;
  var username = $("#usernameSe").val();
  var email = $("#emailSe").val();
  var message = $("textarea#textSe").val();
  var forward = $("#forwardCheckboxSe").is(":checked");
  
  if(username==''){
    document.getElementById("usernameSe").focus();
    alert("Username filed should not be empty.");
    return false;
  }
  if(!email.match(regExp)){
    document.getElementById("emailSe").focus();
    alert("Email is not correct.");
    return false;
  }
  if(message==''){
    document.getElementById("textSe").focus();
    alert("Message is empty.");
    return false;
  }
  if(message.search("insert")!=-1 || message.search("select")!=-1){
    alert("Message is invalid.");
    return false;
  }
  if(forward==false) {
    alert(username + ", your message was successfully sent to " + email + ".");
  }else{
    alert(username + ", your message was successfully sent to " + email + " and to yourself.");
  }
}