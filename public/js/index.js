// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs

// Add the Firebase products that you want to use
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs

// Add the Firebase products that you want to use
  //// model testing 
 //import * as tf from '@tensorflow/tfjs';

var firebaseConfig = {
    apiKey: "AIzaSyC_m5Za9QNy7nK-R1TLYDBAyQ6YOyp09zU",
    authDomain: "fir-webapp-a66c7.firebaseapp.com",
    databaseURL: "https://fir-webapp-a66c7.firebaseio.com",
    projectId: "fir-webapp-a66c7",
    storageBucket: "fir-webapp-a66c7.appspot.com",
    messagingSenderId: "413920966506",
    appId: "1:413920966506:web:f7df3cd20b8b976468d713",
    measurementId: "G-69QRK860Z4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
// buttons onClick 
  $("#btn-login").click(function(){
    login();
  });

   $("#btn-reset").click(function(){
      sendPasswordReset();
   });

   $("#btn-testo").click(function(){
          senpai();
   });

   $("#logoutt").click(function(){
          logout(); 
   });
 
   // functions 
          
  function sendPasswordReset() {
    var email = document.getElementById('email').value;
    // [START sendpasswordemail]
    firebase.auth().sendPasswordResetEmail(email).then(function() {
      // Password Reset Email Sent!
      // [START_EXCLUDE]
      alert('Password Reset Email Sent!');
      window.location.href="login.html";
      // [END_EXCLUDE]
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode == 'auth/invalid-email') {
        alert(errorMessage);
      } else if (errorCode == 'auth/user-not-found') {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
   
    // [END sendpasswordemail];
  }

///to set output + adding header text
  function senpai(){
    var txt ="hello world ";
   document.getElementById('out').textContent=txt;
   document.getElementById('hh').textContent="asdfghjk";
    
  }

  function login(){
    var email =$("#email").val();
    var password =$("#password").val();

    if(email !="" && password !=""){
      var result =firebase.auth().signInWithEmailAndPassword(email, password);
         
      var boo=   result.catch(function(error){
               var errorCode = error.code;
               var errorMessage =error.message;
               console.log(errorCode);
               console.log(errorMessage);
               window.alert("Message : "+errorMessage);
          
         });
         if(boo !=false){
          if(firebase.auth().currentUser){
            window.location.href="MainPage.html";
        }
         }

    }
    else{
      window.alert("fill all fields");
    }
  }

function logout(){
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    window.location.href="login.html";
  }, function(error) {
    // An error happened.
    window.alert("somthing went wrong");
  });
}






