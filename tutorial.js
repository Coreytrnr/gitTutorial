var line = function(itemId) {
	var box = document.getElementById(itemId)
	box.style = "text-decoration: line-through";
	if (document.getElementById("checked").checked = false) {
	 box.style = "text-decoration: none";
	} 
	else { 
		box.style = "text-decoration: line-through";
	}
}