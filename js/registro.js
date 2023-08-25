const btnSignIn = document.getElementById("sign-in"),
    btnSignuP = document.getElementById("sign-up"),
    formRegister = document.querySelector(".register"),
    formLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide")
})

btnSignuP.addEventListener("click", e => {
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide")
})