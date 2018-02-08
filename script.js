	function displayBlock(elem) {
		if(elem.style.display == 'none') { 
			elem.style.display='block'
		} else {
			elem.style.display = 'none'
		}
	}
	
	function saveSize(elem, value) {
		if(value>=8 && value<=24) {
			for(var i=0; i<elem.length; i++) {
				elem[i].style.fontSize = value + 'px'
			}
		} else {
			alert("No correct input SIZE TEXT: " + value)
		}
	}
	
	function saveBg(elem, value) {
		elem.style.background = value;
	}
	
	function saveStyle(elem, value) {
		if (value == 0) {		
			for(var i=0; i<elem.length; i++) {
				elem[i] = "Times New Roman";
			}
		} else {
			for(var i=0; i<elem.length; i++) {
				elem[i].style.fontFamily = "Arial";
			}
		}
	}
	
	function deleteP(elem) {
		elem=elem[elem.length-1];
		elem.innerHTML = '';
	}
		