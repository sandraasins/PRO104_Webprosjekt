document.querySelectorAll(".dropdown-button").forEach(function (elem) {
	elem.addEventListener("click", function () {
		document.getElementById("dropdown-label").innerHTML = this.childNodes[1].innerHTML;
	});
});
