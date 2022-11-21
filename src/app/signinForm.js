import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";



const loginform = document.querySelector("#login-form"); //ID FORM

loginform.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = loginform["login-email"].value;
  const password = loginform["login-password"].value;
  

  try {
    
    const userCredentials = await signInWithEmailAndPassword(auth, email, password)
    console.log(userCredentials)
    
    location = "pantallap.html";

    // Close the login modal
    
    //const modal = bootstrap.Modal.getInstance(signInForm.closest('.modal'));
    //modal.hide();
    
  
    // reset the form
    signInForm.reset();

    // show welcome message
    showMessage("Welcome" + userCredentials.user.email);
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      showMessage("contraseña incorrecta", "error")
    } else if (error.code === 'auth/user-not-found') {
      showMessage("Usuario no encontrado", "error")
    } else {
      showMessage("Algo salio mal", "error")
    }
  }
});