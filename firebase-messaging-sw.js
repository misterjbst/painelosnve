// Avisos do Painel Nova Era (Firebase). Fica na raiz do repositório, ao lado do index.html.
// Recebe o aviso de OS nova mesmo com o painel fechado.
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey: 'AIzaSyCoN8_V-HTyjO4eXHo3p5OC9q7BDmKH6OA', authDomain: 'painel-nve.firebaseapp.com',
  projectId: 'painel-nve', storageBucket: 'painel-nve.firebasestorage.app',
  messagingSenderId: '1087550876085', appId: '1:1087550876085:web:e5c5bad58cee6ad6e691fc'
});
firebase.messaging();
