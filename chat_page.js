var room_name = localStorage.getItem("room_name");
var user_name = localStorage.getItem("user_name")

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
  
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

    console.log(firebase_message_id);
    console.log(message_data);
    nickName = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4> "+ nickName + "<img class = 'user_tick' src = 'download.jpg'>";
    message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
    like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    span_with_tag = "<span class = 'glyphicon glyphicon-thunmbs-up'>   Like: " + like + "</span></button><hr>";
    row = name_with_tag + message_with_tag + like_button + span_with_tag;
    document.getElementById("output").innerHTML = row;
 } });  }); };
getData();

function sendMsg(){
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
  });
  document.getElementById("msg").value = "";
}
function likeUpdation(message_id) {
  console.log("clicked on like button - " + message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  console.log(updated_likes);

  firebase.database().ref(room_name).child(message_id).update({
        like: updated_likes
  });
}
function logoutFunc() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location= "chat.html";
  }