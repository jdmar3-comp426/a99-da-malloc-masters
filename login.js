window.addEventListener( "load", function() {
 // Access the HTML form element
 const signInForm = document.forms["sign-in"];

 function signIn() {

   const username = signInForm.elements.user.value;
   const pass = signInForm.elements.pass.value;

   const sendRequest = new XMLHttpRequest();

   // Set up request
   sendRequest.open( "GET", "http://localhost:5000/app/user/" + username + "/" + pass );

   // Send request
   sendRequest.send();

   // Successful data submission
   sendRequest.addEventListener( "load", function( event ) {
     if( sendRequest.status === 200 ) {
       alert( "Valid username / password" );
       localStorage.setItem( "id", JSON.parse( sendRequest.response ).id );
      // alert( "currentUserId: " + localStorage.getItem( "id" ) );
     } else if( sendRequest.status === 404 ) {
       alert( "Invalid username / password, please try again" );
     }
   } );

   // Error with data submission
   sendRequest.addEventListener( "error", function( event ) {
     alert( "Submission unsuccessful, please try again" );
   } );

 }

 // Take over submit event of form element
 signInForm.addEventListener( "submit", function( event ) {
   event.preventDefault();
   signIn();
 } );
} );