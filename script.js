function validEmail(str) {
  //your JS code here.function validateEmail(email) {
    const emailPattern = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
    return emailPattern.test(str);
}

}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
