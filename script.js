function getFormvalue() {
    //Write your code here
	let firstName = document.getElementById("fname");
	let lastName = document.getElementById("lname");
	let submitForm = document.getElementById("form1");

	submitForm.onsubmit = (event) => {
		event.preventDefault();
		let fName = firstName.value;
		let lName = lastName.value;
		alert (fName + " " + lName);
	}

	

}
