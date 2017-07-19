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

	var rand_num1 = Math.floor(Math.random() * 15) + 1;

	var rand_num2 = Math.floor(Math.random() * 15) + 1;

	document.getElementById("digit1").innerHTML = rand_num1;

	document.getElementById("digit2").innerHTML = rand_num2;
}
function a(){
alert("SUBMISSION SUCCESFULL");}
function rec(){


var select = document.getElementById("limit");
select.onchange=function(){
    if(select.value=="2"){
       document.getElementById("mem2name").style.display="inline";
	    document.getElementById("mem3name").style.display="none";
    }
	
	else if(select.value=="3"){
		  document.getElementById("mem2name").style.display="inline";
       document.getElementById("mem3name").style.display="inline";
    }else{
       document.getElementById("mem2name").style.display="none";
	     document.getElementById("mem3name").style.display="none";
    }
}
}
