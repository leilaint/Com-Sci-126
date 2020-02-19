function myfunc()
{	
	var s = document.getElementById("str").value;
	var temp = s.toLocaleLowerCase().replace(/[\W_]/g,'');
	var temp1 = temp.split("");
	var array_rev = temp1.reverse();
	var array_join = array_rev.join("");

if (temp == array_join){
	document.getElementById("demo1").innerHTML = "String is a palindrome.";
}
else{
	document.getElementById("demo1").innerHTML = "String is NOT a palindrome.";
}

}