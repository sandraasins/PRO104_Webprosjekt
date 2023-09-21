const MenuModule = (function () {

	const menu = {
		pizzas: [
			{
				nr: 1,
				name: "Gyldne Pizza Spesial",
				topping: "Pepperoni, hvitløkskryddrete kjøttboller, marinert biffkjøtt, rødløk og oregano",
				allergens: "Hvete, soya melk",
				price: { medium: 182, large:302 }
			},
			{
				nr: 2,
				name: "Meat Feast",
				topping: "Pepperbiff, bacon, BBQ-kylling, skinke, rødløk og paprika. Toppet med bladpersille.",
				allergens: "Hvete, soya, melk",
				price: { medium: 192, large: 338 }
			},
			{
				nr: 3,
				name: "Tacorama",
				topping: "Marinert biffkjøtt, grønn paprika, rødløk, nachochips, tacokrydder, mozzerella, pizzasaus. Toppet med hvit saus.",
				allergens: "Hvete, soya melk",
				price: { medium: 182, large: 302 }
			},
			{
				nr: 4,
				name: "The Tropical",
				topping: "Pepperoni, ananas, oregano",
				allergens: "Hvete, soya, melk",
				price: { medium: 164, large: 248 }
			},
			{
				nr: 5,
				name: "Mr.Hot Shot",
				topping: "BBQ-kylling, bacon, pepperoni, tomat og oregano.",
				allergens: "Hvete, soya, melk",
				price: { medium: 182, large: 302 }
			},
			{
				nr: 6,
				name: "Veggie Supreme",
				topping: "Fersk mozzerella, avokado, rødløk, marinert aromasopp, grønnkålmiks, oliven og cherrytomater. Toppet med nykvernet pepper og limezest.",
				allergens: "Hvete, melk",
				price: { medium: 168, large: 268 }
			},
			{
				nr: 7,
				name: "BBQ Chicken",
				topping: "Revet BBQ-marinert kyllingbryst, BBQ-saus, bacon, purre, rødløk og vår egen osteblanding. Toppet med nykvernet pepper og bladperille.",
				allergens: "Hvete, melk, selleri, sennep",
				price: { medium: 192, large: 332 }
			},
			{
				nr: 8,
				name: "Hangry",
				topping: "Marinert biffkjøtt, pepperoni, skinke, bacon, sopp, rødløk, mozzerella, pizzasaus",
				allergens: "Hvete, soya, melk",
				price: { medium: 182, large: 302 }
			},
			{
				nr: 9,
				name: "Vegan Dream",
				topping: "Pulled Oumph!, cherrytomater, rødløk og purre. Ost er erstattet av en smaksrik vegansk chilliaioli",
				allergens: "Hvete, melk",
				price: { medium: 178, large: 278 }
			},
			{
				nr: 10,
				name: "I'm special",
				topping: "Sett sammen din egen favorittpizza! Velg intill 6 toppinger.",
				allergens: "Hvete, soya i bunn. Be om allergeninformasjon ut fra valg.",
				price: { medium: 198, large: 342 }
			},
			{
				nr: 11,
				name: "Calzone",
				topping: "Innbakt pizza med skinke, tomatsaus, vår egen osteblanding og oregano",
				allergens: "Hvete, melk",
				price: { medium: 152, large: 172 }
			}
		],
		extras: [
			{
				nr: 12,
				name: "Hvitløksbrød",
				description: "Varm og sprø baguette med hvitløkssmør. Gratinert med vår egen osteblanding",
				allergens: "Hvete og melk",
				price: 59
			},
			{
				nr: 13,
				name: "Hot Wings",
				description: "5 saftige og kryddrede kyllingklubber. Velg mellom BBQ-saus, hvitløksdressingm, rømmedressing eller salsa",
				allergens: "Melk (i rømmedressing), sennep, selleri (i BBQ-saus)",
				price: 98
			},
			{
				nr: 14,
				name: "Nachos",
				description: "Sprø nachochips med tacokrydret kjøttdeig, mais, rødløk og salsa. Gratinert med vår egen ostelanding.",
				allergens: "Melk",
				price: 128
			},
			{
				nr: 15,
				name: "Side Salat",
				description: "Blandet salat med cherrytomater, bladpersille og rødløk. Valgfri dressing.",
				allergens: "Allergener i valgt dressing",
				price: 62
			}
		],
		desserts: [
			{
				nr: 16,
				name: "Brownie",
				description: "Skikkelig digg brownie med cashewnøtter, serveres med mangosorbet og frisk bringebærsaus.",
				allergens: "Cashewnøtter",
				price: 98
			},
			{
				nr: 17,
				name: "Milkshake",
				description: "Gyldne Pizzas egne milkshake! Velg mellom sjokolade, jordbær eller Oreo.",
				allergens: "Melk, hvete, soya",
				price: 82
			},
			{
				nr: 18,
				name: "Bananasplit",
				description: "Den udødlige dessertklassikeren med jordbær-, sjokolade- og vaniljeis. Toppet med sjokolade- og jordbærsaus, krem og tutti-frutti strøssel.",
				allergens: "Melk",
				price: 82
			},
			{
				nr: 19,
				name: "Oreo Dream",
				description: "Kake laget av Oreo Cookies med seks lag av lys og mørk sjokolade. Serveres med vaniljeis og enda litt mer sjokoladesaus.",
				allergens: "Hvete, melk egg soya",
				price: 108
			}
		],
		drinks: [
			{
				nr: 20,
				name: "BonAqua med kullsyre",
				type: "Mineralvann",
				allergens: "",
				price: 49
			},
			{
				nr: 21,
				name: "Coca-Cola",
				type: "Mineralvann",
				allergens: "",
				price: 49
			},
			{
				nr: 22,
				name: "IsTe Fuze Tea Peach",
				type: "Mineralvann",
				allergens: "",
				price: 49
			},
			{
				nr: 23,
				name: "Eplemost",
				type: "Mineralvann",
				allergens: "",
				price: 49
			},
			{
				nr: 24,
				name: "Munkholm",
				type: "Alkoholholdig drikke",
				allergens: "",
				price: 49
			},
			{
				nr: 25,
				name: "Carlsberg på flaske",
				type: "Alkoholholdig drikke",
				allergens: "Bygg",
				price: 88
			},
			{
				nr: 26,
				name: "Rignes Lite",
				type: "Alkoholholdig drikke",
				allergens: "Bygg",
				price: 88
			},
			{
				nr: 27,
				name: "Corona",
				type: "Alkoholholdig drikke",
				allergens: "Bygg",
				price: 96
			},
			{
				nr: 28,
				name: "Somerby Cider",
				type: "Alkoholholdig drikke",
				allergens: "Sulfitt",
				price: 88
			},
			{
				nr: 29,
				name: "Kaffe",
				type: "Varme drikker",
				allergens: "",
				price: 34
			},
			{
				nr: 30,
				name: "Espresso",
				type: "Varme drikker",
				allergens: "",
				price: 40
			},
	
			{
				nr: 31,
				name: "Te",
				type: "Varme drikker",
				allergens: "",
				price: 34
			},
			{
				nr: 32,
				name: "Varm sjokolade",
				type: "Varme drikker",
				allergens: "Melk",
				price: 40
			}
		]
	}

	// Sandra: Get menu items
	const getMenu = () => menu;

	
	const addPizzaToMenu = function (_nr, _name, _topping, _allergens, _medium, _large){
		var currentPizzas = {
			nr: _nr,
			name: _name,
			topping: _topping, 
			allergens: _allergens,
			price: { medium: parseInt(_medium), large: parseInt(_large) }
		}
		menu.pizzas.push(currentPizzas);
	}

	const addExtrasToMenu = function(_nr, _name, _description, _allergens, _price){
		var currentExtras = {
			nr: _nr,
			name: _name,
			description: _description,
			allergens: _allergens,
			price: parseInt(_price),
		}
		menu.extras.push(currentExtras);
	}

	const addDessertToMenu = function(_nr, _name, _description, _allergens, _price){

		var currentDesserts = {
			nr: _nr,
			name: _name,
			description: _description,
			allergens: _allergens,
			price: parseInt(_price),
		}
		menu.desserts.push(currentDesserts);
	}

	const addDrinkToMenu = function (_nr, _name, _type, _allergens,_price){

		var currentDrinks = {
			nr: _nr,
			name: _name, 
			type: _type,
			allergens: _allergens,
			price: parseInt(_price),
		}
		menu.drinks.push(currentDrinks);
	}


	const removeMenuItem = function(menuItem) {
		for (let key in menu) {
			for (let i = 0; i < menu[key].length; i++) {
				if (menu[key][i].nr == menuItem) {
					menu[key].splice(i,1);
				}
			}
		}
	}

	return {
		getMenu,
		addPizzaToMenu,
		addExtrasToMenu,
		addDessertToMenu,
		addDrinkToMenu,
		removeMenuItem
	};
})();

export default MenuModule;
