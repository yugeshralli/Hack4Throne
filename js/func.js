function addNums(){
	var answer = document.getElementById("answer").value;
	var digit1 = parseInt(document.getElementById("digit1").innerHTML);
	var digit2 = parseInt(document.getElementById("digit2").innerHTML);
	var sum = digit1 + digit2;
	if(answer == ""){
		alert("Please add the numbers");
	}else if(answer != sum){
		alert("Your math is wrong");
        document.getElementById("answer").value = "";
 event.preventDefault();
	}else{
		document.getElementById("answer").value = "";
        randomNums();
	}
}
function randomNums(){

	var rand_num1 = Math.floor(Math.random() * 20) + 1;

	var rand_num2 = Math.floor(Math.random() * 20) + 1;

	document.getElementById("digit1").innerHTML = rand_num1;

	document.getElementById("digit2").innerHTML = rand_num2;
}
function a(){
alert("SUBMISSION SUCCESFULL");}