const EmployeeModule = (function () {
    // Ida & Gila: Frogner 
const frognerEmployees = [
    {
        name: "Tonje Vangsnes",
        address: "Falbes gate 10",
        zipCode: 1015,
        phone: 90268122,
        birth: "05.06.1980",
        position: "Daglig leder", 
        department: "Frogner",
        employeeNumber: "0001"
    },
    {
        name: "Jostein Eliassen",
        address: "Maridalsveien 30A",
        zipCode: 1020,
        phone: 99506082,
        birth: "23.01.1989",
        position: "Sjefskokk", 
        department: "Frogner",
        employeeNumber: "0002"
    },
    {
        name: "Audhild Haugan",
        address: "Herman Foss gate 12",
        zipCode: 1522,
        phone: 90234760,
        birth: "03.12.1999",
        position: "Kokk", 
        department: "Frogner",
        employeeNumber: "0003"
    },
    {
        name: "Jannike Martinsen",
        address: "Nordahl Bruns gate 13",
        zipCode: 1933,
        phone: 98889239,
        birth: "01.10.2000",
        position: "Hovmester", 
        department: "Frogner",
        employeeNumber: "0004"
    },
    {
        name: "Kjell Raja",
        address: "Meltzers gate 18",
        zipCode: 1822,
        phone: 92298832,
        birth: "15.07.2003",
        position: "Servitør", 
        department: "Frogner",
        employeeNumber: "0005"
    },
    {
        name: "Rune Horn",
        address: "Ryenbergveien 4",
        zipCode: 1211,
        phone: 96295687,
        birth: "29.06.2001",
        position: "Servitør", 
        department: "Frogner",
        employeeNumber: "0006"
    },
    {  
        name: "Rune Knutsen",
        address: "Sporveisgata 20",
        zipCode: 1321,
        phone: 96442322,
        birth: "13.03.1998",
        position: "Servitør", 
        department: "Frogner",
        employeeNumber: "0007"
    }, 
    {
        name: "Vibeke Molteberg",
        address: "Balders gate 6",
        zipCode: 1232,
        phone: 97665412,
        birth: "20.11.2005",
        position: "Bartender",
        department: "Frogner",
        employeeNumber: "0008" 
    },
    {
        name: "Sverre Svendsen",
        address: "Vidars gate 17",
        zipCode: 1452,
        phone: 90867244,
        birth: "12.08.2000",
        position: "Bartender", 
        department: "Frogner",
        employeeNumber: "0009" 
    },
    {
        name: "Laila Bakke",
        address: "Sverres gate 13",
        zipCode: 1102,
        phone: 96227610,
        birth: "22.02.1997",
        position: "Renholder", 
        department: "Frogner",
        employeeNumber: "0010"
    }
]; // Ida & Gila: Frogner end. 

// Ida & Gila: Nydalen.
const nydalenEmployees = [
    {
        name: "Terje Knudsen",
        address: "Treschows gate 16",
        zipCode: 1115,
        phone: 92182236,
        birth: "10.02.1990",
        position: "Daglig leder", 
        department: "Nydalen",
        employeeNumber: "0011"
    },
    {
        name: "Erik Nguyen",
        address: "Akersgata 17",
        zipCode: 1456,
        phone: 99164622,
        birth: "15.06.1999",
        position: "Sjefskokk", 
        department: "Nydalen",
        employeeNumber: "0012"
    },
    {
        name: "Marie Opheim",
        address: "Fayes gate 32",
        zipCode: 1321,
        phone: 98972642,
        birth: "22.05.2003",
        position: "Kokk", 
        department: "Nydalen",
        employeeNumber: "0013"
    },
    {
        name: "Vigdis Kristensen",
        address: "Stensgata 4",
        zipCode: 1826,
        phone: 90223687,
        birth: "02.06.1992",
        position: "Hovmester", 
        department: "Nydalen",
        employeeNumber: "0014"
    },
    {
        name: "Anniken Haga",
        address: "Gøteborggata 22",
        zipCode: 1756,
        phone: 97892655,
        birth: "15.12.2002",
        position: "Servitør", 
        department: "Nydalen",
        employeeNumber: "0015"
    },
    {
        name: "Marit Ribe",
        address: "Vallegata 16",
        zipCode: 1226,
        phone: 96556322,
        birth: "11.11.2003",
        position: "Servitør", 
        department: "Nydalen",
        employeeNumber: "0016"
    },
    {
        name: "Kjell Lie",
        address: "Åsengata 21",
        zipCode: 1321,
        phone: 96296433,
        birth: "24.12.2000",
        position: "Servitør", 
        department: "Nydalen",
        employeeNumber: "0017"
    },
    {
        name: "Rolf Brattås",
        address: "Blindernveien 14",
        zipCode: 1112,
        phone: 90022646,
        birth: "17.05.2003",
        position: "Bartender", 
        department: "Nydalen",
        employeeNumber: "0018"
    },
    {
        name: "Emilie Eidsheim",
        address: "Toftes gate 12",
        zipCode: 1626,
        phone: 92622282,
        birth: "01.01.2001",
        position: "Bartender", 
        department: "Nydalen",
        employeeNumber: "0019"
    },
    {
        name: "Espen Monsen",
        address: "Bøkkerveien 10",
        zipCode: 1224,
        phone: 90467682,
        birth: "31.05.1995",
        position: "Renholder", 
        department: "Nydalen",
        employeeNumber: "0020"
    }
]; // Ida & Gila: Nydalen end. 

// Ida & Gila: Grünerløkka
const grunerlokkaEmployees = [
    {
        name: "Berit Lid",
        address: "Falsens gate 16",
        zipCode: 1234,
        phone: 47843613,
        birth: "15.07.1995",
        position: "Daglig leder", 
        department: "Grünerløkka",
        employeeNumber: "0021"
    },
    {
        name: "Karin Madsen",
        address: "Stensgata 19",
        zipCode: 1244,
        phone: 47843683,
        birth: "12.08.1992",
        position: "Sjefskokk", 
        department: "Grünerløkka",
        employeeNumber: "0022"
    },
    {
        name: "Bård Rasmussen",
        address: "Toftes gate 17",
        zipCode: 4567,
        phone: 47853613,
        birth: "11.11.1988",
        position: "Kokk", 
        department: "Grünerløkka",
        employeeNumber: "0023"
    },
    {
        name: "Morten Haugen",
        address: "Geitmyrsveien 23",
        zipCode: 6780,
        phone: 47443613,
        birth: "05.10.1993",
        position: "Hovmester", 
        department: "Grünerløkka",
        employeeNumber: "0024"
    },
    {
        name: "Emilie Klungtveit",
        address: "Klokkergata 15",
        zipCode: 5930,
        phone: 47843618,
        birth: "10.04.2003",
        position: "Servitør", 
        department: "Grünerløkka",
        employeeNumber: "0025"
    },
    {
        name: "Fatima Nilsen",
        address: "Blindernveien 45",
        zipCode: 5937,
        phone: 47843611,
        birth: "01.02.1999",
        position: "Servitør", 
        department: "Grünerløkka",
        employeeNumber: "0026"
    },
    {
        name: "Carl Bårdsen",
        address: "Telthusbakken 20",
        zipCode: 3057,
        phone: 47843614,
        birth: "09.03.2002",
        position: "Servitør", 
        department: "Grünerløkka",
        employeeNumber: "0027"
    },
    {
        name: "Harald Brekke",
        address: "Welhavens gate 2",
        zipCode: 7593,
        phone: 47843611,
        birth: "15.07.1997",
        position: "Bartender", 
        department: "Grünerløkka",
        employeeNumber: "0028"
    },
    {
        name: "Geir Andersen",
        address: "Vidars gate 31",
        zipCode: 9530,
        phone: 47883613,
        birth: "11.21.1991",
        position: "Bartender", 
        department: "Grünerløkka",
        employeeNumber: "0029"
    },
    {
        name: "Ida Haugen",
        address: "Sagveien 16",
        zipCode: 3759,
        phone: 47893613,
        birth: "15.07.1996",
        position: "Renholder", 
        department: "Grünerløkka",
        employeeNumber: "0030"
    }
]; // Ida & Gila: Grünerløkka end.


// Ida & Gila: Tøyen 
const toyenEmployees = [
    {
        name: "Ellen Bjerkli",
        address: "Torggata 22",
        zipCode: 8440,
        phone: 47843619,
        birth: "04.04.1992",
        position: "Daglig leder", 
        department: "Tøyen",
        employeeNumber: "0031"
    },
    {
        name: "Simon Hoff",
        address: "Møllerveien 15",
        zipCode: 7492,
        phone: 47842613,
        birth: "15.05.1997",
        position: "Sjefskokk", 
        department: "Tøyen",
        employeeNumber: "0032"
    },
    {
        name: "Torill Aanestad",
        address: "Thorvald Meyers gate 26",
        zipCode: 3957,
        phone: 47843613,
        birth: "12.02.2002",
        position: "Kokk", 
        department: "Tøyen",
        employeeNumber: "0033"
    },
    {
        name: "Iver Eliassen",
        address: "Valdresgata 18",
        zipCode: 7493,
        phone: 47863613,
        birth: "15.08.1989",
        position: "Hovmester", 
        department: "Tøyen",
        employeeNumber: "0034"
    },
    {
        name: "Johan Stenberg",
        address: "Falsens gate 15",
        zipCode: 6385,
        phone: 47843616,
        birth: "28.07.1993",
        position: "Servitør", 
        department: "Tøyen",
        employeeNumber: "0035"
    },
    {
        name: "Bent Pedersen",
        address: "Askergata 13",
        zipCode: 1246,
        phone: 97843613,
        birth: "20.09.1995",
        position: "Servitør", 
        department: "Tøyen",
        employeeNumber: "0036"
    },
    {
        name: "Martine Solberg",
        address: "Lørenveien 22",
        zipCode: 3658,
        phone: 97843513,
        birth: "15.07.2003",
        position: "Servitør", 
        department: "Tøyen",
        employeeNumber: "0037"
    },
    {
        name: "Anja Evenrud",
        address: "Solhaugata 52",
        zipCode: 3425,
        phone: 97543613,
        birth: "05.08.2001",
        position: "Bartender", 
        department: "Tøyen",
        employeeNumber: "0038"
    },
    {
        name: "Marielle Johansen",
        address: "Hasleveien 34",
        zipCode: 1058,
        phone: 97841613,
        birth: "15.06.1998",
        position: "Bartender", 
        department: "Tøyen",
        employeeNumber: "0039"
    },
    {
        name: "Mats Magnussen",
        address: "Grenseveien 51",
        zipCode: 7594,
        phone: 47849913,
        birth: "15.07.1990",
        position: "Renholder", 
        department: "Tøyen",
        employeeNumber: "0040"
    }
]; // Ida & Gila: Tøyen end. 

// Ida & Gila: getEmployees
const getEmployeesFrogner = () => frognerEmployees;
const getEmployeesNydalen = () => nydalenEmployees;
const getEmployeesGrunerlokka = () => grunerlokkaEmployees;
const getEmployeesToyen = () => toyenEmployees;

const removeEmployee = function(employeeNumber) {
    for (let i = 0; i < frognerEmployees.length; i++) {
        if (frognerEmployees[i].employeeNumber == employeeNumber) {
            frognerEmployees.splice(i,1)
        }
    }
    for (let i = 0; i < nydalenEmployees.length; i++) {
        if (nydalenEmployees[i].employeeNumber == employeeNumber) {
            nydalenEmployees.splice(i,1)
        }
    }
    for (let i = 0; i < grunerlokkaEmployees.length; i++) {
        if (grunerlokkaEmployees[i].employeeNumber == employeeNumber) {
            grunerlokkaEmployees.splice(i,1)
        }
    }
    for (let i = 0; i < toyenEmployees.length; i++) {
        if (toyenEmployees[i].employeeNumber == employeeNumber) {
            toyenEmployees.splice(i,1)
        }
    }
}

const addEmployee = function(_name,_address,_zip,_phone,_birth,_position,_department,_employeeNumber) {
    var currEmployee = {
        name: _name,
        address: _address,
        zipCode: _zip,
        phone: _phone,
        birth: _birth,
        position: _position,
        department: _department,
        employeeNumber: _employeeNumber
    }
    if (_department == "none") {
        // Martin: need to select a department
        alert("Du må velge en filial");
    } else {
        if (_department == "frogner") {
            currEmployee.department = "Frogner";
            frognerEmployees.push(currEmployee);
        } else if (_department == "nydalen") {
            currEmployee.department = "Nydalen";
            nydalenEmployees.push(currEmployee);
        } else if (_department == "toyen") {
            currEmployee.department = "Tøyen";
            toyenEmployees.push(currEmployee);
        } else if (_department == "grunerlokka") {
            currEmployee.department = "Grünerløkka";
            grunerlokkaEmployees.push(currEmployee);
        }
    }
}

const findEmployee = function(employeeNumber) {
    for (let i = 0; i < frognerEmployees.length; i++) {
        if (frognerEmployees[i].employeeNumber === employeeNumber) {
            return frognerEmployees[i];
        }
    }
    for (let i = 0; i < nydalenEmployees.length; i++) {
        if (nydalenEmployees[i].employeeNumber === employeeNumber) {
            return nydalenEmployees[i];
        }
    }
    for (let i = 0; i < grunerlokkaEmployees.length; i++) {
        if (grunerlokkaEmployees[i].employeeNumber === employeeNumber) {
            return grunerlokkaEmployees[i];
        }
    }
    for (let i = 0; i < toyenEmployees.length; i++) {
        if (toyenEmployees[i].employeeNumber === employeeNumber) {
            return toyenEmployees[i];
        }
    }
    return "error";
}

return {
    getEmployeesFrogner,
    getEmployeesNydalen,
    getEmployeesGrunerlokka,
    getEmployeesToyen,
    removeEmployee,
    addEmployee,
    findEmployee,
};

})();

export default EmployeeModule; 