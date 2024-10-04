function validateForm() {
    const fname = document.querySelector('.fname').value.trim();
    const lname = document.querySelector('.lname').value.trim();
    const email = document.querySelector('.email').value.trim();
    const phoneNum = document.querySelector('.phn-num').value.trim();
    const password = document.querySelector('.pwd').value.trim();
    
    let errors = [];

    if (!fname) errors.push("First name is required.");
    if (!lname) errors.push("Last name is required.");
    if (!email) errors.push("Email address is required.");
    if (!phoneNum) errors.push("Phone number is required.");
    if (!password) errors.push("Password is required.");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailPattern.test(email)) {
        errors.push("Please enter a valid email address.");
    }

    if (phoneNum && (phoneNum.length < 10 || phoneNum.length > 15)) {
        errors.push("Please enter a valid phone number (10-15 digits).");
    
    }
    if (errors.length > 0) {
        alert(errors.join("\n"));
    } else {
        alert("Form submitted successfully!");
    }
}