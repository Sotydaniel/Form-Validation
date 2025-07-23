const fname = document.getElementById('firstname');
const lname = document.getElementById('lastname');
const phone = document.getElementById('phone');
const dob = document.getElementById('dob');
const email = document.getElementById('email');
const address = document.getElementById('address');
const check = document.getElementById('check');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');


function validate(){
    // fname === '' && lname === '' &&  phone === '' && email === '' && address === ''
    //  //&& check && password && confirm_password == "" 
    // ? alert("All fields are required") : alert ("Form Valid");

    if(     
    fname.value.trim() === "" ||
    lname.value.trim() === "" ||
    phone.value.trim() === "" ||
    dob.value.trim() === "" ||
    email.value.trim() === "" ||
    address.value.trim() === "" ||
    password.value.trim() === "" ||
    confirm_password.value.trim() === ""

){
        
        alert("All field must be filled");

        fname.value.trim() === "" ?
        fname.classList.add("is-invalid"): 
        fname.classList.remove("is-invalid"),
        fname.classList.add("is-valid");

        lname.value.trim() === "" ?
        lname.classList.add("is-invalid"): 
        lname.classList.remove("is-invalid"),
        lname.classList.add("is-valid");

        phone.value.trim() === "" ?
        phone.classList.add("is-invalid"): 
        phone.classList.remove("is-invalid"),
        phone.classList.add("is-valid");

        dob.value.trim() === "" ?
        dob.classList.add("is-invalid"): 
        dob.classList.remove("is-invalid"),
        dob.classList.add("is-valid");

        email.value.trim() === "" ?
        email.classList.add("is-invalid"):
        email.classList.remove("is-invalid"),
        email.classList.add("is-valid");

        address.value.trim() === "" ?
        address.classList.add("is-invalid"):
        address.classList.remove("is-invalid"),
        address.classList.add("is-valid");

        password.value.trim() === "" ?
        password.classList.add("is-invalid"): 
        password.classList.remove("is-invalid"),
        password.classList.add("is-valid");

        confirm_password.value.trim() === "" ?
        confirm_password.classList.add("is-invalid"):
        confirm_password.classList.remove("is-invalid"),
        confirm_password.classList.add("is-valid");




        // fname.classList.add("is-invalid");

}else{
        alert("All fields are valid");
    }

}

function formSubmit(e){
    e.preventDefault();
    validate();

}

