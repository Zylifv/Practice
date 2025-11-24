const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submit");
let remainGuesses = 3;

const usersArray = [
  {
    username: "Bob300",
    password: "Icecream123!"
  }
];

function togglePassword() {
  return passwordInput.type === "password" ? passwordInput.type = "text" : passwordInput.type = "Password";
}

function checkDetails() {
  let currUsernameInput = document.getElementById("username").value;
  let currUserPasswordInput = document.getElementById("password").value;
  
  if (remainGuesses === 1)
        {
          console.log("You have been locked out.");
          passwordInput.disabled = true;
          submitBtn.disabled = true;
          return;
        }
  
  for (let i = 0; i < usersArray.length; i++)
  {
    if (currUsernameInput !== usersArray[i].username)
    {
      console.log("invalid username, please try again.")
      return;
    }
    else if (usersArray[i].username === currUsernameInput)
    {
      if (usersArray[i].password === currUserPasswordInput)
      {
        console.log(`Welcome back ${usersArray[i].username}!`)
        return;
      }
      else if (usersArray[i].password !== currUserPasswordInput)
      {
        if (remainGuesses > 0)
        {
          remainGuesses -= 1;
          console.log(`Incorrect password for account ${usersArray[i].username}.. Please try again, you have ${remainGuesses} left.`);
          return;
        }
      }
    }
  }
}
