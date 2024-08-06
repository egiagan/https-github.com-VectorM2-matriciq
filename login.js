import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider ,signInWithPopup ,sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyC3hXKMkfJ11FJgM2z0yp83vfXBcA9pOqM",

    authDomain: "matriciq-520b5.firebaseapp.com",
  
    projectId: "matriciq-520b5",
  
    storageBucket: "matriciq-520b5.appspot.com",
  
    messagingSenderId: "74691569329",
  
    appId: "1:74691569329:web:0f9eb6989399d0f7472490"

};



const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app)
auth.useDeviceLanguage()

//grab
const spinner = document.getElementById("spinner");
const spinnerG = document.getElementById("spinner-g");

const login= document.getElementById("login");
login.addEventListener("click", function (event) {
 event.preventDefault();
 spinner.style.display = "inline-block";

 let email = document.getElementById("email").value;
 const password = document.getElementById("password").value;

 signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   const user = userCredential.user;
   window.location.href = "dashboard.html";
   spinner.style.display = "none";
  })
  .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   spinner.style.display = "none";
 
alert(errorMessage)
  });

})



const google = document.getElementById("google");
google.addEventListener("click",
 function registerWithGoogle() {
    spinnerG.style.display = "inline-block";
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    window.location.href = "dashboard.html";
    spinnerG.style.display = "none";

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    spinnerG.style.display = "none";
    
alert(errorMessage)

  });



 }
)

//reset password .
 const reset = document.getElementById("resetPassword")
 reset.addEventListener("click",function(event){
    event.preventDefault();
  let email = document.getElementById("email").value;
  console.log(email)
if(email == "null"){
  alert("Please Enter Your email!!")
} else{

  sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    alert("Password reset email sent!")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
}



 })