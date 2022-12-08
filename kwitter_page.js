//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCelbjOdbC8Ze7sh8AaMJ4LWnAEmlf39CM",
      authDomain: "kwitter-page-aecc9.firebaseapp.com",
      databaseURL: "https://kwitter-page-aecc9-default-rtdb.firebaseio.com",
      projectId: "kwitter-page-aecc9",
      storageBucket: "kwitter-page-aecc9.appspot.com",
      messagingSenderId: "952389462961",
      appId: "1:952389462961:web:0f8e2faeff9b7e2c0fab90"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    User_name = localStorage.getItem("UserName")
    Room_name = localStorage.getItem("Room_name")

    function Send(){
      message = document.getElementById("Message").value 
      firebase.database().ref(Room_name).push({
            User_name:User_name,
            Message:message,
            Likes:0
      })
      document.getElementById("Message").innerHTML = " "
    }

function logout(){
      localStorage.removeItem("UserName")
      localStorage.removeItem("Room_name")
      window.location = "index.html"
}


function getData() { firebase.database().ref("/"+Room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         Message = message_data['Message']
         Name1 = message_data['User_name']
         Likes = message_data['Likes']
          UserName = "<h4>"+Name1+"<img src = 'tick.png' class = 'User_tick'></h4>"
          Message2 = "<h4 class = 'message_h4'>"+Message+"</h4>"
         Like = "<button class = 'btn btn-danger' id ="+firebase_message_id+"  value ="+ Likes+" onclick = update(this.id) ><span class = 'glyphican glyphican-thumbs-up'>"+Likes+"</span></button>"
         var Row = UserName + Message2+Like
         document.getElementById("output").innerHTML += Row

         //End code
      } });  }); }
getData();

function update(message_id){
      buttonId = message_id
      like = document.getElementById(ButtonId).value
      var UpdateLike = Number(like) +1
      firebase.database().ref(Room_name).child(message_id).update({
            Likes:UpdateLike
      })
}

