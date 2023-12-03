window.onload = () => {
	let button = document.querySelector("#btn");

	// Function for calculating BMI
	button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

	/* Getting input from user into height variable.
	Input is string so typecasting is necessary. */
	let height = parseInt(document
			.querySelector("#height").value);

	/* Getting input from user into weight variable. 
	Input is string so typecasting is necessary.*/
	let weight = parseInt(document
			.querySelector("#weight").value);

	let result = document.querySelector("#result");

	// Checking the user providing a proper
	// value or not
	if (height === "" || isNaN(height)) 
		result.innerHTML = "Provide a valid Height!";

	else if (weight === "" || isNaN(weight)) 
		result.innerHTML = "Provide a valid Weight!";

	// If both input is valid, calculate the bmi
	else {

		// Fixing upto 2 decimal places
		let bmi = (weight / ((height * height) 
							/ 10000)).toFixed(2);

		// Dividing as per the bmi conditions
		if (bmi < 18.6) result.innerHTML =
			`Under Weight : <span>${bmi}</span>`;

		else if (bmi >= 18.6 && bmi < 24.9) 
			result.innerHTML = 
				`Normal : <span>${bmi}</span>`;

		else result.innerHTML =
			`Over Weight : <span>${bmi}</span>`;
	}
}


// mobile menu 

let menu_btn = document.querySelector('.menu-show');
let menu_close_btn = document.querySelector('.menu-close');

let nav_items = document.querySelector('.nav-items');

menu_btn.addEventListener('click', function(){
	nav_items.style.maxWidth = '450px'
	menu_close_btn.style.display = 'block'
})

menu_close_btn.addEventListener('click', function(){
	nav_items.style.maxWidth = '0'
	menu_close_btn.style.display = 'none'
})