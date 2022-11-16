import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signUpForm = document.querySelector("#registro-form"); //ID FORM

signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signUpForm["registro-email"].value; //CAMPOS PARA INFO
  const password = signUpForm["registro-password"].value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredential)

    // Close the signup modal
    //const signupModal = document.querySelector('#signupModal'); //BOTON
    //const modal = bootstrap.Modal.getInstance(signupModal);
    //modal.hide();

    // reset the form
    signUpForm.reset();

    // show welcome message
    //showMessage("Welcome" + userCredential.user.email);

  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      showMessage("Este email ya esta en uso", "error")
    } else if (error.code === 'auth/invalid-email') {
      showMessage("Email invalido", "error")
    } else if (error.code === 'auth/weak-password') {
      showMessage("contraseña debil", "error")
    } else if (error.code) {
      showMessage("Algo salio mal", "error")
    }
  }

});