const form = document.querySelector("form")
usernameField = form.querySelector(".username-field")
usernameInput = usernameField.querySelector(".username")
dateField = form.querySelector(".date-field")
dateInput = dateField.querySelector(".date")
emailField = form.querySelector(".email-field")
emailInput = emailField.querySelector(".email")
passField = form.querySelector(".create-password")
passInput = passField.querySelector(".password")
cPassFiedl = form.querySelector(".confrim-password")
cPassInput = cPassFiedl.querySelector(".cPassword")

function checkUsername () {
    const usernamePattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).+$/
    if(!usernameInput.value.match(usernamePattern)){
        return usernameField.classList.add("invalid")
    }
    return usernameField.classList.remove("invalid")
}

function checkDate () {
    const datePattern = /^200[0-6]-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
    if(!dateInput.value.match(datePattern)){
        return dateField.classList.add("invalid")
    }
    return dateField.classList.remove("invalid")
}

function emailCheck () {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailInput.value.match(emailPattern)){
        return emailField.classList.add("invalid")
    }
    return emailField.classList.remove("invalid")
}


function createPass () {
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!passInput.value.match(passPattern)){
        return passField.classList.add("invalid")
    }
    return passField.classList.remove("invalid")
}

function confrimPass () {
    if(passInput.value !== cPassInput.value || cPassInput.value === ""){
        return cPassFiedl.classList.add("invalid")
    }
    return cPassFiedl.classList.remove("invalid")
}

const eyeicons = document.querySelectorAll(".show-hide")
 eyeicons.forEach((eyeicon) => {
   eyeicon.addEventListener("click", () => {
     const pinPut = eyeicon.parentElement.querySelector("input")

     if(pinPut.type === "password"){
       eyeicon.classList.replace("bx-hide", "bx-show")
       return (pinPut.type = "text")
     }
     eyeicon.classList.replace("bx-show", "bx-hide")
     pinPut.type = "password"
   })
 })

form.addEventListener("submit", (e) => {
    e.preventDefault()
    checkUsername()
    checkDate()
    emailCheck()
    createPass()
    confrimPass()

    usernameInput.addEventListener("keyup", checkUsername) 
    dateInput.addEventListener("keyup", checkDate) 
    emailInput.addEventListener("keyup", emailCheck) 
    passInput.addEventListener("keyup", createPass) 
    cPassInput.addEventListener("keyup", confrimPass)

    if(
      !usernameField.classList.contains("invalid") &&
      !dateField.classList.contains("invalid") &&
      !emailField.classList.contains("invalid") &&
      !passField.classList.contains("invalid") &&
      !cPassFiedl.classList.contains("invalid")
    ){
      location.href = form.getAttribute("action")
    }
}) 