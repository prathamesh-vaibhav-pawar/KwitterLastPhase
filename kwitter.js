function Data_S(){
    User_name = document.getElementById("User_name").value 
    localStorage.setItem("UserName" , User_name)
    window.location = "kwitter_room.html"
}