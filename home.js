
	function highlight(value) {
		value.setAttribute('class','focus');
	}
	function message(value)
	{
		alert("***"+value+"***");
	}

	function work()
	{
		var user = document.getElementById('user');
		var code = document.getElementById('code');

		
		if (user.value != '' && code.value != '')
		{
			code.removeAttribute('class');
			user.removeAttribute('class');
			alert('start');
		} 
		else if ((user.value == '') && (code.value != ''))
		{
			highlight(user);
			code.removeAttribute('class');
			message('DONT LEAVE USERNAME EMPTY')
		}
		else if ((code.value == '') && (user.value != ''))
		{
			highlight(code);
			user.removeAttribute('class');
			message('DONT LEAVE PASSWORD EMPTY')
		}
		else if ((code.value == '') && (user.value == ''))
		{
			highlight(code);
			highlight(user);
			message('DONT LEAVE TEXTBOX EMPTY')

		}

	}