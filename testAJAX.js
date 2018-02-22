var xhr; //define the globle to process the AJAX request
function callDivChange(){
	xhr = new XMLHttpRequest();
	//xhr.open("GET","./dir1/dir2/dir3/dir4/dir5/test5.html",true);
	xhr.open("GET","./test.html",true);
	xhr.onreadystatechange = processDivChange;
	try{
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	}
	catch(e){
		//this only works in internet explorer
	}
	xhr.send();
	
}

function processDivChange(){
	//while waiting response from server
	if(xhr.readyState <4)  document.getElementById('div1').innerHTML="Loading...";
	///4 = response from server has been completely loaded.
	else if (xhr.readyState === 4){
		//200-300 --> all successful
		if (xhr.status==200&&xhr.status<300) document.getElementById('div1').innerHTML=xhr.responseText;
	}
}


