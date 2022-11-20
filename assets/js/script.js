let input = document.getElementById("userinput");
let submit = document.getElementById("enter");

let liste = document.querySelector("ul");

let li = document.createElement("li");

// enter
input.addEventListener("keydown", (a) => {
	if (a.key === "Enter") addItem();
});
// eingabe

submit.addEventListener(
	"click",
	(addItem = () => {
		let li = document.createElement("li");

		if (input.value === "") {
		} else {
			/* li.appendChild("input"); */
			li.textContent = input.value;
			let liInput = document.createElement("input");
			li.appendChild(liInput);
			liInput.type = "checkbox";
			liInput.class = "checkLi";
			li.prepend(liInput);

			liste.appendChild(li);
			input.value = "";
		}
	})
);
let ulLi = document.querySelectorAll("li");

/* ulLi.style.color = "red"; */
ulLi.forEach((e) => {
	let liInput = document.createElement("input");
	liInput.type = "checkbox";

	e.prepend(liInput);

	let alleCheckbox = document.querySelectorAll("input[type=checkbox]");
	alleCheckbox.forEach((g) => {
		/* e.style.textDecoration = "line-through"; */
	});
	console.log(alleCheckbox);
});

console.log(ulLi);
