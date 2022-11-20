import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

alert("entro")

const signUpForm = document.querySelector("#registro-form"); //ID FORM

signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  alert("entro 2")
  const email = signUpForm["registro-email"].value; //CAMPOS PARA INFO
  const password = signUpForm["registro-password"].value;

  try {
    alert("entro 3")
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredential)

    // Close the signup modal
    //const signupModal = document.querySelector('#signupModal'); //BOTON
    //const modal = bootstrap.Modal.getInstance(signupModal);
    //modal.hide();
    alert("entro 4")
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