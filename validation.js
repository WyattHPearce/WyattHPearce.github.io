function validatePhone(){
    var phone = document.getElementById("myPhone").value;
    var pattern = /^\d{3}-\d{3}-\d{4}$/;
    if (pattern.test(phone)) {
        return true;
    } else {
        alert("Please enter a phone number in XXX-XXX-XXXX format");
        return false;
    }
}