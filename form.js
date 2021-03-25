

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDXNCw2_0zl-VGW1QYMMuLVOYIYeSBF7M0",
    authDomain: "diabetesdetection-cb1d7.firebaseapp.com",
    projectId: "diabetesdetection-cb1d7",
    storageBucket: "diabetesdetection-cb1d7.appspot.com",
    messagingSenderId: "573585480036",
    appId: "1:573585480036:web:6221b63374b9e8f3138271"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth= firebase.auth();


  function signUp()
  {
      var email=document.getElementById("email").value;
      var password=document.getElementById("pass").value;

      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });

  }

  function signIn()
  {
    var email=document.getElementById("emailsignin").value;
    var password=document.getElementById("passsignin").value;


    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
    window.location='file:///C:/Users/Chetan%20Chaudhary/Downloads/Covid_HealthCare-main/Covid_HealthCare-main/healthcare-website-main/index.html';
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  }


  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
      uid=null;
      windows.location='index.html';
    }
  });