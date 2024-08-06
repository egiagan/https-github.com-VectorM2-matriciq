import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, onAuthStateChanged, updatePassword ,updateProfile } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getDatabase, ref, push, get, update } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";


const firebaseConfig = {

    apiKey: "AIzaSyC3hXKMkfJ11FJgM2z0yp83vfXBcA9pOqM",

    authDomain: "matriciq-520b5.firebaseapp.com",
  
    projectId: "matriciq-520b5",
  
    storageBucket: "matriciq-520b5.appspot.com",
  
    messagingSenderId: "74691569329",
  
    appId: "1:74691569329:web:0f9eb6989399d0f7472490"

};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);

const user = auth.currentUser;

// Function to update the user profile
function updateUserProfile(user) {
  const userName = user.displayName;
  const userEmail = user.email;
  const userProfilePicture = user.photoURL;
  const school = user.school;
  // Update the profile section with user data
  document.getElementById("displayName").textContent = userName;
  document.getElementById("email").textContent = userEmail;
  document.getElementById("school").textContent = user.school;
 // document.getElementById("userProfilePicture").src = userProfilePicture;
}

// Add the onAuthStateChanged listener
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, call the updateUserProfile function
    updateUserProfile(user);

    const uid = user.uid;
    return uid;

  } else {
    // User is not signed in, redirect to the registration page
    alert("Create Account & login");
    window.location.href = "/register.html";
  }
});


