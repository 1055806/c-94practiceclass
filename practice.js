var firebaseConfig = {
    apiKey: "AIzaSyD0SbnJvtuI-fYpMtG4BVS1dZl8JqmtFPE",
    authDomain: "kwitter-practice-c-94.firebaseapp.com",
    databaseURL: "https://kwitter-practice-c-94-default-rtdb.firebaseio.com",
    projectId: "kwitter-practice-c-94",
    storageBucket: "kwitter-practice-c-94.appspot.com",
    messagingSenderId: "399922720047",
    appId: "1:399922720047:web:16a053c1952284a78c85da"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
   purpose : "adding user"
    });
}

