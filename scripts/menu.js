import MenuModule from "../modules/MenuModule.js"

let menu = document.querySelector("#menu-info");

let currMenu = "Meny";

// Sandra: show menus by dropdown
function selectionHandler(selection){

    switch(selection) {
        
        case "Meny":
            menu.innerHTML = "<h1 class='is-size-3 has-text-centered has-text-weight-semibold'>Meny</h1>";
            generateMenu("pizzas");
            generateMenu("extras");
            generateMenu("desserts");
            generateMenu("drinks");
            addEventsDeleteButtons();
            currMenu = "Meny";
            break;
        case "Pizzameny":
            menu.innerHTML = "<h1 class='is-size-3 has-text-centered has-text-weight-semibold '>Endre pizzameny</h1>";
            generateMenu("pizzas");
            addEventsDeleteButtons();
            currMenu = "Pizzameny";
            break;
        case "Siderettmeny":
            menu.innerHTML = "<h1 class='is-size-3 has-text-centered has-text-weight-semibold '>Endre siderettmeny</h1>";
            generateMenu("extras");
            addEventsDeleteButtons();
            currMenu = "Siderettmeny";
            break; 
        case "Drikkemeny":
            menu.innerHTML = "<h1 class='is-size-3 has-text-centered has-text-weight-semibold mb-2'>Endre drikkemeny</h1>";
            generateMenu("drinks");
            addEventsDeleteButtons();
            currMenu = "Drikkemeny";
            break;
        case "Dessertmeny":
            menu.innerHTML = "<h1 class='is-size-3 has-text-centered has-text-weight-semibold mb-2'>Endre dessertmeny</h1>";
            generateMenu("desserts");
            addEventsDeleteButtons();
            currMenu = "Dessertmeny";
            break; 
        default:
    }
}

function generateMenu(type) {
    let content = "";
    let menuObject = MenuModule.getMenu();
    // Martin: check if type exists in menuObject
    if (menuObject[type] != undefined && menuObject[type] != null) {
        if (menuObject[type].length > 0) {
            // Martin: add start of table to content variable
            content += `
                <table id="pizza-table" class="table">
                    <thead>
                        <tr>
            `;
            // Martin: add all attributes of type as th in the table
            for (let key in menuObject[type][0]) {
                content += `<th class="is-capitalized">${key}</th>`;
            }
            // Martin: close the head of table
            content += `
                        <th></th></tr>
                    </thead>
                    <tbody>
            `;
            // Martin: add content from menuObject to the table
            for (let i = 0; i < menuObject[type].length; i++) {
                // Martin: figure out the price
                let thisPrice = "";
                // Martin: if there is more than 1 price, add them together with '/' inbetween
                for (let priceKey in menuObject[type][i].price) {
                    thisPrice += menuObject[type][i].price[priceKey]+"/";
                }
                if (thisPrice === "") { // Martin: if object does not have multiple prices it should be an empty string
                    thisPrice += menuObject[type][i].price;
                } else {
                    thisPrice = thisPrice.slice(0, -1); // Martin: remove last slash from the string
                }

                for (let key in menuObject[type][i]) {
                    // Martin: add all values to the table
                    if (key != "price") {
                        content += `<td>${menuObject[type][i][key]}</td>`;
                    } else if (key == "price") {
                        content += `<td>${thisPrice}</td>`;
                    }
                }
                // Martin: add delete button to the table
                content += `
                    <td><a class="remove-button fas fa-trash" data-toggle="modal" data-menuItem="${menuObject[type][i].nr}"></a></td>
                `;
                content += `</tr>`;
            }
            // Martin: close the table
            content += `
                    </tbody>
                </table>
            `;
        }
    }
    // Martin: add content variable (the full table) to the screen
    menu.innerHTML += content;
}

function addEventsDeleteButtons() {
    document.querySelectorAll(".remove-button").forEach(function(x) {
        var _this = x;
        x.onclick = () => {
            getModal("delete");
            //removeMealModal.classList.add('is-active');
            document.getElementById("remove-meal-button").onclick = () => {
                MenuModule.removeMenuItem(_this.dataset.menuitem);
                selectionHandler(currMenu);
            }
        }
    });
}

document.querySelectorAll(".dropdown-button").forEach(function (elem) {
    elem.addEventListener("click", function () {
        document.getElementById("dropdown-label").innerHTML = this.childNodes[1].innerHTML;
    });
});

document.querySelectorAll(".dropdown-button").forEach(function (elem) {
    elem.addEventListener("click", function (){
        selectionHandler(this.childNodes[1].innerHTML);
    });
});

//Sandra, Ida, Martin:  
function getModal(type) {
    let content = `
    <div class="modal is-active">
        <div id="modal-background" class="modal-background"></div>
        <div class="modal-card">
    `;
    //Ida & Martin: delete items from menu 
    if (type == "delete") {
        content += `
        <header class="modal-card-head">
            <p class="modal-card-title">Slett data</p>
            <button id="delete-x" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body modal-content-custom">
            <!-- Content -->
            <div class="modal-content modal-content-custom">
                <form>
                    <div class="modal-body">
                        <p><big>Er du sikker på at du vil slette all data for denne retten?</big></p>
                        <p class="text-warning">Denne handlingen kan ikke endres.</p>
                    </div>
                </form>
            </div>
            <!-- Content end -->
        </section>
        <footer class="modal-card-foot">
            <button class="button delete-btn-styling" id="remove-meal-button">Slett</button>
            <button class="button btn-styling" id="cancel-remove-button">Avbryt</button>
        </footer>
        `;
    //Sandra: add item to menu
    } else if (type == "add-item") {
        content += `
        <header class="modal-card-head">
            <p class="modal-card-title">Rediger meny</p>
            <button class="delete" aria-label="close" id="deleteButton"></button>
        </header>
        <section class="modal-card-body" id="modal-body">
        <!--Content-->
        <div class="modal-content modal-content-custom">
            <!--Content-->
            <div class="form-group">
                <label for="name">Ønsket type å legge til</label><br>
                <div class="select">
                    <select id="select-item">
                        <option value="none" selected="true" disabled>Velg</option>
                        <option value="pizza">Legg til pizza</option>
                        <option value="extra">Legg til siderett</option>
                        <option value="dessert">Legg til dessert</option>
                        <option value="drink">Legg til drikke</option>
                    </select>
                </div>
            </div>
            <div id="inp-area">
            </div>
        </div>
        </section>
        <footer class="modal-card-foot" id="modal-footer">
            <button class="button btn-styling" id="savenChangesButton">Lagre endringer</button>
            <button class="button delete-btn-styling" id="cancelButton">Avbryt</button>
        </footer>
        `;
    }

    content += `
        </div>
    </div>
    `;
    document.getElementById("modal-area").innerHTML = content;

    // Martin & Sandra: modal buttons
    if (type == "delete") {
        let modalBackground = document.querySelector("#modal-background");
        let removeMeal = document.querySelector('#remove-meal-button');
        let cancelRemove = document.querySelector('#cancel-remove-button');
        let removeX = document.querySelector('#delete-x');

        modalBackground.addEventListener('click', () => {
            document.getElementById("modal-area").innerHTML = "";
        });
        removeMeal.addEventListener('click', () => {
            document.getElementById("modal-area").innerHTML = "";
        });

        cancelRemove.addEventListener('click', () => {
            document.getElementById("modal-area").innerHTML = "";
        });

        removeX.addEventListener('click', () => {
            document.getElementById("modal-area").innerHTML = "";
        });
    } else if (type == "add-item") {

        let _this = document.getElementById("select-item");
        document.getElementById("select-item").addEventListener("change", () => {
            getAddInputs(_this.value);
        });

        let modalBackground = document.querySelector(".modal-background");
        let saveChangesButton = document.querySelector("#savenChangesButton");
        let cancelButton = document.querySelector("#cancelButton"); 
        let deleteButton = document.querySelector("#deleteButton");

        modalBackground.addEventListener("click", () => {
            document.getElementById("modal-area").innerHTML = "";
        }); 
        saveChangesButton.addEventListener("click", () => {
            addToMenu(document.getElementById("select-item").value);
            document.getElementById("modal-area").innerHTML = "";
        });
        
        cancelButton.addEventListener("click", () => {
            document.getElementById("modal-area").innerHTML = "";
        });
        
        deleteButton.addEventListener("click", () => {
            document.getElementById("modal-area").innerHTML = "";
        });
    }
}
//Sandra: input form 
function getAddInputs(type) {
    let content = ``;
    if (type == "pizza") {
        content += `

            <div class="form-group">
                <label for="name">Nr.</label><br>
                <input type="text" id="new-nr" class="input form-control" required>
            </div>
            <div class="form-group">
                <label for="name">Navn</label><br>
                <input type="text" id="new-name" class="input form-control" required>
            </div>
            <div class="form-group">
                <label for="name">Topping</label><br>
                <input type="text" id="new-topping" class="input form-control" required>
            </div>
            <div class="form-group">
                <label for="name">Allergener</label><br>
                <input type="text" id="new-allergens" class="input form-control" required>
            </div>
            <div class="form-group">
                <label for="name">Pris medium</label><br>
                <input type="text" id="new-price-medium" class="input form-control" required>
            </div>
            <div class="form-group">
                <label for="name">Pris large</label><br>
                <input type="text" id="new-price-large" class="input form-control" required>
            </div>
        `;
        document.getElementById("inp-area").innerHTML = content;
    } else if (type == "extra") {
        content += `
        
            <div class="form-group">
                <label for="name">Nr.</label><br>
                <input type="text" id="new-nr" class="input form-control" required>
            </div>
            <div class="form-group">
                <label for="name">Navn</label><br>
                <input type="text" id="new-name" class="input form-control" required>
            </div>
            <div class="form-group">
                <label for="name">Informasjon</label><br>
                <input type="text" id="new-description" class="input form-control" required>
            </div>
            <div class="form-group">
                <label for="name">Allergener</label><br>
                <input type="text" id="new-allergens" class="input form-control" required>
            </div>
            <div class="form-group">
                <label for="name">Pris</label><br>
                <input type="text" id="new-price" class="input form-control" required>
            </div>
      
        `;
        document.getElementById("inp-area").innerHTML = content;
    } else if (type == "dessert") {
        content += `
        
            <div class="form-group">
                <label for="name">Nr.</label><br>
                <input type="text" id="new-nr" class="input form-control" required>
            </div>
            <div class="form-group">
                <label for="name">Navn</label><br>
                <input type="text" id="new-name" class="input form-control" required>
            </div>
            <div class="form-group">
                <label for="name">Informasjon</label><br>
                <input type="text" id="new-description" class="input form-control" required>
            </div>
            <div class="form-group">
                <label for="name">Allergener</label><br>
                <input type="text" id="new-allergens" class="input form-control" required>
            </div>
            <div class="form-group">
                <label for="name">Pris</label><br>
                <input type="text" id="new-price" class="input form-control" required>
            </div>
        
        `;
        document.getElementById("inp-area").innerHTML = content;
    } else if (type == "drink") {
        content += `
        
            <div class="form-group">
                <label for="name">Nr.</label><br>
                <input type="text" id="new-nr" class="input form-control" required>
            </div>
            <div class="form-group">
                <label for="name">Navn</label><br>
                <input type="text" id="new-name" class="input form-control" required>
            </div>
            <div class="form-group">
                <label for="name">Type</label><br>
                <input type="text" id="new-type" class="input form-control" required>
            </div>
            <div class="form-group">
                <label for="name">Allergener</label><br>
                <input type="text" id="new-allergens" class="input form-control" required>
            </div>
            <div class="form-group">
                <label for="name">Pris</label><br>
                <input type="text" id="new-price" class="input form-control" required>
            </div>
       
        `;
    }
    document.getElementById("inp-area").innerHTML = content;
}

// Sandra: adding content from user to table
function addToMenu (type) {
    if(type == "none"){
        alert("Velg hva du vil legge til i menyen");
    }else{
        if(type == "pizza"){
            let nr = document.getElementById("new-nr").value;
            let name = document.getElementById("new-name").value;
            let topping = document.getElementById("new-topping").value;
            let allergens = document.getElementById("new-allergens").value; 
            let mPrice = document.getElementById("new-price-medium").value;
            let lPrice = document.getElementById("new-price-large").value;
            MenuModule.addPizzaToMenu(nr, name, topping, allergens, mPrice, lPrice);
        }else if (type == "extra"){
            let nr = document.getElementById("new-nr").value;
            let name = document.getElementById("new-name").value;
            let description = document.getElementById("new-description").value;
            let allergens = document.getElementById("new-allergens").value;
            let price = document.getElementById("new-price").value;
            MenuModule.addExtrasToMenu(nr, name, description, allergens, price);
        }else if (type == "dessert"){
            let nr = document.getElementById("new-nr").value;
            let name = document.getElementById("new-name").value;
            let description = document.getElementById("new-description").value;
            let allergens = document.getElementById("new-allergens").value;
            let price = document.getElementById("new-price").value;
            MenuModule.addDessertToMenu(nr, name, description, allergens, price);
        }else if (type == "drink" ){
            let nr = document.getElementById("new-nr").value;
            let name = document.getElementById("new-name").value;
            let type = document.getElementById("new-type").value;
            let allergens = document.getElementById("new-allergens").value;
            let price = document.getElementById("new-price").value;
            MenuModule.addDrinkToMenu(nr, name, type, allergens, price);
        }
    }
    console.log(currMenu);
    selectionHandler(currMenu);
}

//Sandra: add item to menu button 
let addItemBtn = document.querySelector("#add-item-btn");

// Sandra: Add item to menu btn
addItemBtn.addEventListener("click", () => {
    getModal("add-item");
});

selectionHandler(currMenu);