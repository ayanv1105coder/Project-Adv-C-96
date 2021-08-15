// <------CODE------>//
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
  
// do not touch until next class
userName = localStorage.getItem("user_name");
console.log(userName);
document.getElementById("user_name").innerHTML = "Welcome " + userName;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    //Start code
    console.log("Room Name: " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function addRoom() {
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
purpose: "Adding The Room Name"
});

localStorage.setItem("room_name", room_name);

window.location = "chat_room.html";
}

function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name", name);
window.location = "chat_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location= "chat.html";

}