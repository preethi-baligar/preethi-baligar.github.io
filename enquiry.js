function submitForm(){

let name = document.getElementById("name").value;

document.getElementById("response").innerHTML =
"Thank you " + name + ". Your enquiry has been received. We will contact you soon.";

return false;

}
