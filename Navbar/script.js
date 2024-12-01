const email = document.getElementById('email');
const password = document.getElementById('password');
const login = document.getElementById('login');
const logout = document.getElementById('logout');
const submit = document.getElementById('submit-btn');
// console.log(email.value)
// console.log( password.value)

if (submit) {
    submit.addEventListener('click' , ()=>{
        localStorage.setItem('email', email.value)
        localStorage.setItem('password', password.value)
    })
}
if (localStorage.getItem('email') && localStorage.getItem('password')) {
    if (login && logout) {
        login.style.display= 'none'
        logout.style.display= 'block' 
    }
}else{
    if (login && logout) {
          login.style.display= 'block'
    logout.style.display= 'none'
    }
}
function logout_fun(){
    localStorage.removeItem('email')
    localStorage.removeItem('password')
}