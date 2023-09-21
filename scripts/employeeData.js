import EmployeeModule from "../modules/EmployeeModule.js";

const employeeListDiv = document.querySelector("#employee-list-div");
const employeeInfoDiv = document.querySelector("#employee-info-div");

// Gila: Data from modules
let frognerEmployeeData = EmployeeModule.getEmployeesFrogner();
let nydalenEmployeeData = EmployeeModule.getEmployeesNydalen();
let grunerlokkaEmployeeData = EmployeeModule.getEmployeesGrunerlokka();
let toyenEmployeeData = EmployeeModule.getEmployeesToyen();

let currFilial = "Alle filialer";

function selectionHandler(selection) {
    // Gila: hides the show-info window
    var element =  document.getElementById('show-info');
    if (typeof(element) != 'undefined' && element != null){
        document.getElementById("show-info").classList.add('is-hidden');
    }
    
    switch(selection) {
        case "Alle filialer" : 
            generateEmptyTable();
            addEmployeesToTable(frognerEmployeeData.sort(compareEmployees));
            addEmployeesToTable(nydalenEmployeeData.sort(compareEmployees));
            addEmployeesToTable(grunerlokkaEmployeeData.sort(compareEmployees));
            addEmployeesToTable(toyenEmployeeData.sort(compareEmployees));
            currFilial = "Alle filialer";
            break;
        case "Frogner" : 
            generateEmptyTable();
            addEmployeesToTable(frognerEmployeeData.sort(compareEmployees));
            currFilial = "Frogner";
            break;
        case "Nydalen" : 
            generateEmptyTable();
            addEmployeesToTable(nydalenEmployeeData.sort(compareEmployees));
            currFilial = "Nydalen";
            break;
        case "Tøyen" : 
            generateEmptyTable();
            addEmployeesToTable(toyenEmployeeData.sort(compareEmployees));
            currFilial = "Tøyen";
            break;
        case "Grünerløkka" : 
            generateEmptyTable();
            addEmployeesToTable(grunerlokkaEmployeeData.sort(compareEmployees));
            currFilial = "Grünerløkka";
            break;
    }
}

//Gila & Simen: Generating an empty table for employees
function generateEmptyTable() {
    let htmlTxt = ""; 
    employeeListDiv.innerHTML = htmlTxt;

    htmlTxt += `
    <div class="column is-11">
        <table class="table is-hoverable is-fullwidth mt-1">
            <thead>
            <tr>
                <th>AnsattNr.</th>
                <th>Navn</th>
                <th>Stilling</th>
            </tr>
            </thead>
            <tbody id="table-body-id">
            </tbody>
        </table>
    </div>
    `;
    employeeListDiv.innerHTML = htmlTxt;
}   
// Martin & Ida 
function addEmployeesToTable(employeeArray) {
    let tempHtmlTxt = "";
    employeeArray.forEach( employee => {

        tempHtmlTxt = `
            <tr>
                <th>${employee.employeeNumber}</th>
                <td>${employee.name}</td>
                <td>${employee.position}</td>    
                <td><a class="show-employee fas fa-user-edit" data-toggle="modal" data-employee="${employee.employeeNumber}"></a></td>
            </tr> 
        `;
        document.getElementById("table-body-id").innerHTML += tempHtmlTxt;
    })

    document.querySelectorAll(".show-employee").forEach(function(x) {
        var _this = x;
        x.onclick = () => {
            showEmployerInfo(_this.dataset.employee);
        }
    });
}   
// Martin & Ida 
function deleteEmployee(employeeNumber) {
    EmployeeModule.removeEmployee(employeeNumber);
}

document.querySelectorAll(".dropdown-button").forEach(function (elem) {
	elem.addEventListener("click", function () {
		selectionHandler(this.childNodes[1].innerHTML);
	});
})

//Gila & Simen: Generating employer info on chosen employee in section employee-info-div
function showEmployerInfo(employeeNumber) {
    let chosenEmployee = EmployeeModule.findEmployee(employeeNumber);
    employeeInfoDiv.innerHTML = `
        <div class="column is-9 mt-3">
        <div class="card is-fullwidth mt-4" id="show-info">
                <div class="card-content">
                    <div class="content">
                        <article>
                        <h1 class="header is-size-5 mb-4">Ansattnummer: ${ chosenEmployee.employeeNumber }</h1>
                        <p>Navn: ${ chosenEmployee.name }</p>
                        <p>Fødselsdato: ${ chosenEmployee.birth }</p>
                        <p>Adresse: ${ chosenEmployee.address }</p>
                        <p>Telefon: ${ chosenEmployee.phone }</p>
                        <p>Stilling: ${ chosenEmployee.position }</p>
                        <p>Avdeling: ${ chosenEmployee.department}</p>
                        <button class="button btn-styling" id="edit-employee-button" data-employee="${chosenEmployee.employeeNumber}">Rediger</button>
                        <button class="button delete-btn-styling" id="remove-employee" data-toggle="modal" data-employee="${chosenEmployee.employeeNumber}">Slett</button>
                        </article>
                    </div>
                </div>
            </div>
        </div>
        `;

        document.getElementById("edit-employee-button").addEventListener('click', () => {
            document.getElementById("show-info").classList.remove('is-active');
            
            editChosenEmployee(chosenEmployee);
        });

        document.getElementById("remove-employee").addEventListener('click', () => {
            deleteModal.classList.add('is-active');

            document.querySelector("#delete-button").onclick = () => {
                document.getElementById("show-info").classList.add('is-hidden');
                deleteEmployee(employeeNumber);
                selectionHandler(currFilial);
            }

        }); 
}
// Martin & Ida 
function addNewEmployee() {
    let newName = document.querySelector('#new-name').value;
    let newAddress = document.querySelector('#new-address').value;
    let newZipCode = document.querySelector('#new-zipCode').value;
    let newPhone = document.querySelector('#new-phone').value;
    let newBirth = document.querySelector('#new-birth').value;
    let newPosition = document.querySelector('#new-position').value;
    let newDepartment = document.querySelector('#select-department').value;
    let newEmployeeNumber = document.querySelector('#new-employeeNumber').value;

    EmployeeModule.addEmployee(newName,newAddress,newZipCode,newPhone,newBirth,newPosition,newDepartment,newEmployeeNumber);

    selectionHandler(currFilial);

    document.querySelector('#new-name').value = "";
    document.querySelector('#new-address').value = "";
    document.querySelector('#new-zipCode').value = "";
    document.querySelector('#new-phone').value = "";
    document.querySelector('#new-birth').value = "";
    document.querySelector('#new-position').value = "";
    document.querySelector('#new-employeeNumber').value = "";

    addModal.classList.remove('is-active');
}

//Gila & Simen:
function editChosenEmployee(chosenEmployee) {
    editModal.classList.add('is-active');
    
    document.querySelector('#employee-number-div').innerHTML = `<h2 id="show-employee-number" data-employee="${chosenEmployee.employeeNumber}">Redigerer ansattnummer: ${ chosenEmployee.employeeNumber }</h2>`;
    document.querySelector('#edit-name').value = chosenEmployee.name;
    document.querySelector('#edit-address').value = chosenEmployee.address;
    document.querySelector('#edit-zipCode').value = chosenEmployee.zipCode;
    document.querySelector('#edit-phone').value = chosenEmployee.phone;
    document.querySelector('#edit-birth').value = chosenEmployee.birth;
    document.querySelector('#edit-position').value = chosenEmployee.position;

    // Gila: Sets default value for department selector
    var department = chosenEmployee.department;
    var departmentSelect = document.getElementById("edit-select-department");

    switch(department){
        case "Frogner" : 
            departmentSelect.selectedIndex = 0;
            break;
        case "Nydalen":
            departmentSelect.selectedIndex = 1;
            break;
        case "Tøyen":
            departmentSelect.selectedIndex = 2;
            break;
        case "Grünerløkka":
            departmentSelect.selectedIndex = 3;
            break;
        default:
            departmentSelect.selectedIndex = 0
            break;
    }
}

//Gila & Simen:
function updateEmployee() {
    let newName = document.querySelector('#edit-name').value;
    let newAddress = document.querySelector('#edit-address').value;
    let newZipCode = document.querySelector('#edit-zipCode').value;
    let newPhone = document.querySelector('#edit-phone').value;
    let newBirth = document.querySelector('#edit-birth').value;
    let newPosition = document.querySelector('#edit-position').value;
    let newDepartment = document.querySelector('#edit-select-department').value;
    let storedEmployeeNumber = document.querySelector('#show-employee-number').dataset.employee;

    EmployeeModule.removeEmployee(storedEmployeeNumber);
    EmployeeModule.addEmployee(newName,newAddress,newZipCode,newPhone,newBirth,newPosition,newDepartment,storedEmployeeNumber);

    selectionHandler(currFilial);
    showEmployerInfo(storedEmployeeNumber);

}

function compareEmployees(a, b) {
    return parseInt(a.employeeNumber) - parseInt(b.employeeNumber);
}

// Gila: Modal Add button
let addBtn = document.querySelector('#add-button');
let saveBtn = document.querySelector('#save-button');
let cancelAddBtn = document.querySelector('#cancel-button');
let modalBg = document.querySelector('.modal-background');
let addModal = document.querySelector('#modalAdd');
let addX = document.querySelector('#add-x');

// Gila: Modal Edit button
let editX = document.querySelector('#edit-x');
let editModal = document.querySelector('#modalEdit');
let cancelEditBtn = document.querySelector('#cancel-edit-button');
let updateBtn = document.querySelector('#update-button');
let showInfoCard = document.getElementById("show-info");

// Gila: Activate edit button
addBtn.addEventListener('click', () => {
    addModal.classList.add('is-active');
});
// Gila: Save changes button
saveBtn.addEventListener('click', () => {
    addNewEmployee();
});
// Gila: Cancel button
cancelAddBtn.addEventListener('click', () => {
    addModal.classList.remove('is-active');
});
addX.addEventListener('click', () => {
    addModal.classList.remove('is-active');
});
// Gila: Modal background
modalBg.addEventListener('click', () => {
    addModal.classList.remove('is-active');
});

// Gila: Modal Delete button
let deleteBtn = document.querySelector('#delete-button');
let cancelDeleteBtn = document.querySelector('#cancel-delete-button');
let deleteX = document.querySelector('#delete-x');
let deleteModal = document.getElementById("modalDelete"); 

// Gila: Delete button
deleteBtn.addEventListener('click', () => {
    deleteModal.classList.remove('is-active');
});
// Gila: Cancel button
cancelDeleteBtn.addEventListener('click', () => {
    deleteModal.classList.remove('is-active');
});
deleteX.addEventListener('click', () => {
    deleteModal.classList.remove('is-active');
});

// Gila: Edit-X
editX.addEventListener('click', () => {
    editModal.classList.remove('is-active');
});

// Gila: Cancel Edit button
cancelEditBtn.addEventListener('click', () => {
    editModal.classList.remove('is-active');
});

// Gila: Update button
updateBtn.addEventListener('click', () => {
    updateEmployee();
    editModal.classList.remove('is-active');
});

selectionHandler(currFilial);