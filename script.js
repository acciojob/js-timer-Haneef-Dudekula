// function time() {
	const date = new Date();
	
	const day = date.getDate();
	const month = date.getMonth()+1; //months starts with 0 so we add 1
	const year = date.getFullYear();

	const hours = date.getHours()
	const mins = date.getMinutes()
	const secs = date.getSeconds()

	const time = `${day}/${month}/${year}, ${hours}:${mins}:${secs}`;

	document.getElementById("timer").textContent =  time;
	
	
// }
// time()