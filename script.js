let grid=document.querySelector("#grid");
let form=document.querySelector("form");
let previousSelectedCell=null;

form.addEventListener("submit", (eveObj) => {
	eveObj.preventDefault();

	let inputvalue=form[0].value;
	let colorvalue=form[1].value;

	console.log(inputvalue, colorvalue);
	let cell=document.getElementById(inputvalue);
	cell.style.background= colorvalue;

	if(previousSelectedCell)
	{
		previousSelectedCell.style.background= "transparent";
	}
	previousSelectedCell=cell;

});
