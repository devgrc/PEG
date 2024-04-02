import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBPs0BjxvW1kmj2pTFQDGouEypRsjcnZHo",
    authDomain: "peg-ecf30.firebaseapp.com",
    projectId: "peg-ecf30",
    storageBucket: "peg-ecf30.appspot.com",
    messagingSenderId: "774605221629",
    appId: "1:774605221629:web:caab16adf2d1d6e993d894",
    measurementId: "G-QWG585TYLX"
  };
// Obter a instância do serviço de autenticação
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Função para fazer logout do usuário
function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href= "index.html";
    }).cath('erro ao fazer logout');
}
