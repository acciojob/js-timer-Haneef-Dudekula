// function time() {
	const date = new Date();
	
	const day = date.getDate();
	const month = date.getMonth()+1; //months starts with 0 so we add 1
	const year = date.getFullYear();

	const hours = date.getHours().toString();
	const mins = date.getMinutes().toString();
	const secs = date.getSeconds().toString();

	const time = `${day}/${month}/${year}, ${hours}:${mins}:${secs}`;

	document.getElementById("timer").textContent =  time;
	
	
// }
// time()