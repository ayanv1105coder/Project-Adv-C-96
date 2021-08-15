  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAa1hMcQyo2AebU3wHB5_6ANgaZ-34uTFE",
    authDomain: "project-test-8ee23.firebaseapp.com",
    databaseURL: "https://project-test-8ee23-default-rtdb.firebaseio.com",
    projectId: "project-test-8ee23",
    storageBucket: "project-test-8ee23.appspot.com",
    messagingSenderId: "182234134691",
    appId: "1:182234134691:web:559811d0187be6e22fa716"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
function addUser() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}