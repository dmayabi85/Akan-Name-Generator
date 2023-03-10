function checkForm(form) {
			// regular expression to match required date format
			re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
			if(form.dob.value != '') {
				if(regs = form.dob.value.match(re)) {
					// day value between 1 and 31
					if(regs[1] < 1 || regs[1] > 31) {
						alert("Invalid value for day, please enter a valid day: " + regs[1]);
						form.dob.focus();
						return false;
					}
					// month value between 1 and 12
					if(regs[2] < 1 || regs[2] > 12) {
						alert("Invalid value for month, please enter a valid month: " + regs[2]);
						form.dob.focus();
						return false;
					}
					// year value between 1902 and 2021
					if(regs[3] > (new Date()).getFullYear()) {
						alert("Invalid value for year, please enter a valid year: " + regs[3] + " - must be less than or equal to  " + (new Date()).getFullYear());
						form.dob.focus();
						return false;
					}
				} else {
					alert("Invalid date format use dd/mm/yyyy: " + form.dob.value);
					form.dob.focus();
					return false;
				}
			}
			//alert("DOB is okay");
			// ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
			var gender = document.getElementById('gender').value;
			//alert(form.gender.value);
			
			function farLeft(CC) {
				return Math.floor((CC / 4) - 2 * CC - 1);
			}
	
			function middle(YY) {
				return Math.floor(5 * YY / 4);
			}
	
			function farRight(MM) {
				return Math.floor(26 * (MM + 1) / 10);
			}
			
			var dateArray = form.dob.value.split("/");
			var day = parseInt(dateArray[0]);
			var month = parseInt(dateArray[1]);
			var year = parseInt(dateArray[2]);
			
			var CC = Math.floor(year / 100);
			var YY = year % 100;
			
			const farLeftResult = farLeft(CC)
			const farRightResult = farRight(month)
			const middleResult = middle(YY)
			var calculationResult = (farLeftResult + middleResult + farRightResult + day) % 7
			const wholeNumber = calculationResult.toPrecision(1);
			//alert(wholeNumber);
			// calculationResult = 2
			const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
			const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
			//alert(maleNames);
			var result;
			if(gender == "Male") {
				result = maleNames[wholeNumber]
			} else if(gender == "Female") {
				result = femaleNames[wholeNumber]
			} else {
				alert('Enter a valid gender')
		}
		alert(`Your day name is ${result}`, )
		return true;
	}
