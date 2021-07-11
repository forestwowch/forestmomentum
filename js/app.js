const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginSubmitClick(event) {
   event.preventDefault();
   loginForm.classList.add(HIDDEN_CLASSNAME);
   const username = loginInput.value;
   localStorage.setItem(USERNAME_KEY, username);
   textGreetings(username);
   }
function textGreetings(username){
   greeting.innerText = `Hello ${username}`;
   greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", loginSubmitClick);

const savedUsername=localStorage.getItem(USERNAME_KEY);

if(savedUsername===null){
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit", loginSubmitClick);

}else{
   textGreetings(savedUsername);
}
