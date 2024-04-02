
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getDatabase, get, ref, child } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBPs0BjxvW1kmj2pTFQDGouEypRsjcnZHo",
    authDomain: "peg-ecf30.firebaseapp.com",
    projectId: "peg-ecf30",
    storageBucket: "peg-ecf30.appspot.com",
    messagingSenderId: "774605221629",
    appId: "1:774605221629:web:caab16adf2d1d6e993d894",
    measurementId: "G-QWG585TYLX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase();
  const auth = getAuth();
  const dbref = ref(db);



  
  let email = document.getElementById('email');
  let senha = document.getElementById('senha');
  let formulario = document.getElementById('formulario-login');

  let RegisterUser = evt => {
    evt.preventDefault();

    signInWithEmailAndPassword(auth, email.value, senha.value)
    .then((credentials)=>{
        get(child(dbref, 'UsersAuthList/' + credentials.user.uid)).then((snapshot)=>{
            if(snapshot.exists){
            sessionStorage.setItem("user-info", JSON.stringify({
                
        }))
        sessionStorage.setItem('user-creds', JSON.stringify(credentials));
        window.location.href='home.html';
    }
        })

    })
    .catch((error)=>{
        alert(error.message);
        console.log(error.code);
        console.log(error.message);
    })
  }



  

  formulario.addEventListener('submit', RegisterUser);
  