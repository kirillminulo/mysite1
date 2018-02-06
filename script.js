	function toggle(el) {
		el.style.display = (el.style.display == 'none') ? 'block' : 'none';
	}
	
	function saveSize() {
		var textInput = document.getElementById("input1").value;
		tagName =  document.querySelectorAll('#content > p');
		if(textInput>=8 && textInput<=24) {
			for(var i=0; i<tagName.length; i++) {
				tagName[i].style.fontSize = textInput + 'px';
			}
		} else {
			alert("Size 8 - 24 px | ERROR INPUT: " + textInput);
		}
	}
	
	function saveBg() {
		var textInput = document.getElementById("input2").value;
		tagName =  document.querySelector('#main-bg')
		tagName.style.background = textInput;
		document.body.background = textInput;
	}
	
	function saveStyle() {
		var textInput = document.getElementById("style").options.selectedIndex;
		if (textInput == 0) {		
			document.getElementById("body").style.fontFamily = "Times New Roman";
		} else {
			document.getElementById("body").style.fontFamily = "Arial";
		}
	}
	
	function deleteP() {
		elem =  document.querySelectorAll('#content > p');
		elem=elem[elem.length-1];
		elem.innerHTML = '';
	}
		