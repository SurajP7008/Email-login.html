function Send() {
	
	var to = document.getElementById("to").value;
	var subject = document.getElementById("subject").value;
	var message = document.getElementById("message").value;
	
	document.getElementById("send").style.visibility = "hidden";
	if (to == "suraj" && subject == "loan" && message == "hii"){
		alert ( subject );
	}
	
}