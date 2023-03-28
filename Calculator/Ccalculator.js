var input = document.getElementById("text");
var prev = document.getElementById("prev");

var Error_msg="invalid Operation";


function clear_all()
{
	input.value='';
	prev.value='';
}


function square()
{
	if(input.value=="")
	{
			input.value="Enter something";
	}
	else{
		prev.value=input.value+"^2";
		input.value=input.value*input.value;
		}
}

function include(num)
{
input.value=input.value+num;
}

function res()
{
if(input.value=="")
	{
	input.value="Enter some value";
	}
	else{
		try{
		prev.value=input.value;
		var result=eval(input.value);
		if (result=="Infinity")
			{		
				input.value="Can't divide by zero";		
			}
		else
        {
	input.value=result;
}
		}
		catch(Exception){
			input.value=Error_msg;
		}
		}
}

function percentile()
{
	prev.value=input.value+" % 100";
	input.value/=100;
}
