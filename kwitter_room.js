function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       var firebaseConfig = {
            apiKey: "AIzaSyAajsglz7g-oqeImFli0Hger6PIitegAnQ",
            authDomain: "project-94-65761.firebaseapp.com",
            projectId: "project-94-65761",
            storageBucket: "project-94-65761.appspot.com",
            messagingSenderId: "344974047591",
            appId: "1:344974047591:web:4adbd43b0bf23e4f9997c2"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
      });});}
getData();
