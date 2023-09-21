import RevenueDataModule from "../modules/RevenueDataModule.js";
import Top5PizzaModule from "../modules/Top5PizzaModule.js";
import MenuModule from "../modules/MenuModule.js";

// SIMEN: Data from modules
let frognerRevenueData = RevenueDataModule.getFrogner();
let nydalenRevenueData = RevenueDataModule.getNydalen();
let toyenRevenueData = RevenueDataModule.getToyen();
let grunerlokkaRevenueData = RevenueDataModule.getGrunerlokka();

let top5Frogner = Top5PizzaModule.getFrogner();
let top5Nydalen = Top5PizzaModule.getNydalen();
let top5Toyen = Top5PizzaModule.getToyen();
let top5Grunerlokka = Top5PizzaModule.getGrunerlokka();

// SIMEN: For calculating the sum of the top 5 most sold pizzas
let pizzaPrices = MenuModule.getMenu().pizzas;

// SIMEN: arrays for storing values used for the chart
let chartLabels = [frognerRevenueData[0].quarter, frognerRevenueData[1].quarter, frognerRevenueData[2].quarter, frognerRevenueData[3].quarter];
let revenueThisYear = [];
let revenueLastYear = [];

let statTable = document.getElementById("stat-table");

// SIMEN: Populate Array for the chart
processAllData();

// SIMEN: Prepares the dataset for chart generation
const data = {
	labels: chartLabels,
	datasets: [
		{
			label: "I år",
			data: [revenueThisYear[0], revenueThisYear[1], revenueThisYear[2], revenueThisYear[3]],
			borderColor: ["rgb(48, 145, 230)"],
			backgroundColor: ["rgb(48, 145, 230)"],
		},
		{
			label: "I fjor",
			data: [revenueLastYear[0], revenueLastYear[1], revenueLastYear[2], revenueLastYear[3]],
			borderColor: ["rgb(230, 78, 71)"],
			backgroundColor: ["rgb(230, 78, 71)"],
		},
	],
};

// SIMEN: Config for chart generation
const chartConfig = {
	type: "line",
	data: data,
	options: {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				
				position: "top",
				labels: {
					font: {
						size: 20,
					},
				},
			},
			title: {
				display: false,
			},
		},
	},
};

// SIMEN: Generates chart
let revenueChart = new Chart(document.getElementById("revenue-chart"), chartConfig);
// SIMEN: Sets height of chart
revenueChart.canvas.parentNode.style.height = '350px';

// SIMEN:  Handles what info to put on the page when the user selects a branch
function selectionHandler(selection) {
	// SIMEN: changes contents of headers
	document.getElementById("graph-header").innerHTML = `Total omsetning: ${selection}`;
	document.getElementById("top-5-header").innerHTML = `Top 5 pizzaer sist måned: ${selection}`;

	switch (selection) {
		case "Alle filialer":
			processAllData();
			data.datasets[0].data = revenueThisYear;
			data.datasets[1].data = revenueLastYear;
			revenueChart.update();
			break;
		case "Frogner":
			processData(frognerRevenueData, top5Frogner);
			revenueChart.update();
			break;
		case "Nydalen":
			processData(nydalenRevenueData, top5Nydalen);
			revenueChart.update();
			break;
		case "Tøyen":
			processData(toyenRevenueData, top5Toyen);
			revenueChart.update();
			break;
		case "Grünerløkka":
			processData(grunerlokkaRevenueData, top5Grunerlokka);
			revenueChart.update();
			break;
		default:
			console.log("ERROR. SelectionHandler did not receive a selection");
	}
}

// SIMEN: Calculates and updates the contents on the page, when a branch is selected
function processData(revenueArray, top5Array) {
	// SIMEN: Revenue chart
	for (let i = 0; i < 4; i++) {
		revenueLastYear[i] = revenueArray[i].revenue;
	}
	for (let i = 4; i < 8; i++) {
		revenueThisYear[i - 4] = revenueArray[i].revenue;
	}
	data.datasets[0].data = revenueThisYear;
	data.datasets[1].data = revenueLastYear;

	//SIMEN: Top 5 pizzas
	let sortedTop5 = calculateTop5(top5Array);
	sortedTop5.sort(compareSum);
	insertRows(sortedTop5);
}
// SIMEN: Calculates and updates the contents on the page, when all branches are selected
function processAllData() {
	// SIMEN: Revenue chart
	for (let i = 0; i < 4; i++) {
		revenueLastYear[i] = frognerRevenueData[i].revenue + nydalenRevenueData[i].revenue + toyenRevenueData[i].revenue + grunerlokkaRevenueData[i].revenue;
	}
	for (let i = 4; i < 8; i++) {
		revenueThisYear[i - 4] = frognerRevenueData[i].revenue + nydalenRevenueData[i].revenue + toyenRevenueData[i].revenue + grunerlokkaRevenueData[i].revenue;
	}

	// SIMEN: Top 5 pizzas
	let calculatedTop5Frogner = calculateTop5(top5Frogner);
	let calculatedTop5Nydalen = calculateTop5(top5Nydalen);
	let calculatedTop5Toyen = calculateTop5(top5Toyen);
	let calculatedTop5Grunerlokka = calculateTop5(top5Grunerlokka);

	let mergedTop5 = mergeArrays(mergeArrays(calculatedTop5Frogner, calculatedTop5Nydalen), mergeArrays(calculatedTop5Toyen, calculatedTop5Grunerlokka));
	mergedTop5.sort(compareSum);
	insertRows(mergedTop5);
}

// SIMEN: Merges two top5 arrays
function mergeArrays(arr1, arr2) {
	let tmp = arr1;
	let added = false;

	// SIMEN: Checks if the item already exists in the array, and adds the values if it does
	for (let i = 0; i < arr2.length; i++) {
		added = false
		for (let y = 0; y < tmp.length; y++) {
			if (tmp[y].nr === arr2[i].nr) {
				tmp[y].amountMedium += arr2[i].amountMedium;
				tmp[y].amountLarge += arr2[i].amountLarge;
				tmp[y].sum += arr2[i].sum;
				added = true;
				break;
			}
		}
		// SIMEN: Adds the item, if it does not exist in the array
		 if(!added){
			arr1.push(arr2[i]);
		}
	}
	return arr1;
}

// SIMEN: Calculates the revenue earned from the top5 most sold pizzas from a branch
function calculateTop5(top5Array) {
	let tmp = [];

	for (let i = 0; i < top5Array.length; i++) {
		tmp[i] = {
			nr: top5Array[i].nr,
			name: pizzaPrices[top5Array[i].nr - 1].name,
			amountMedium: top5Array[i].medium,
			amountLarge: top5Array[i].large,
			sum: top5Array[i].medium * pizzaPrices[top5Array[i].nr - 1].price.medium + top5Array[i].large * pizzaPrices[top5Array[i].nr - 1].price.large,
		};
	}
	return tmp;
}

// SIMEN: Function for inserting top 5 in table
function insertRows(sortedTop5) {
	// SIMEN: Resets table
	statTable.innerHTML = "";

	for (let i = 0; i < 5; i++) {
		statTable.innerHTML += `
		<tr>
			<th>${i + 1}</th>
			<td>${sortedTop5[i].nr}</td>
			<td>${sortedTop5[i].name}</td>
			<td>${sortedTop5[i].amountMedium}</td>
			<td>${sortedTop5[i].amountLarge}</td>   
			<td>${sortedTop5[i].sum} kr</td>   
		</tr>  
`;
	}
}

// SIMEN: sorts the object in descending order
function compareSum(a, b) {
	if (a.sum < b.sum) {
		return 1;
	} else if (a.sum > b.sum) {
		return -1;
	} else {
		return 0;
	}
}
// SIMEN: makes the dropdown menu functional
document.querySelectorAll(".dropdown-button").forEach(function (elem) {
	elem.addEventListener("click", function () {
		selectionHandler(this.childNodes[1].innerHTML);
	});
});
