/**
 *  Class Persona that only contains the name and last name
 *  @author Alberto Jose Marun Indriago
 */
class Persona{
    /**
     * Constructor of the Class Persona
     * @param {*} name (Name of the Person)
     * @param {*} lastName (LastName of the Person)
     */
    constructor(name, lastName){
        this._nombre = name;
        this._apellidos = lastName;
    }

    /**
     *  Get the Name of the person.
     *  @returns the name of the Person (String)
     */
    getNombre(){
        return this._nombre;
    }

    /**
     *  Set the new Name of the person.
     * @param {*} name the new name of the Person (String).
     */
    setNombre(name){
        this._nombre = name;
    }

    /**
     * Set the new Last Name of the Person.
     * @param {*} lastName the new name of the Person (String).
     */
    setApellidos(lastName){
        this._apellidos = lastName;
    }

    /**
     * Get the Last Name of the Person.
     * @returns the last name of the Person (String)
     */
    getApellidos(){
        return this._apellidos;
    }

    /**
     * Get the full name of the Person.
     * @returns the full name of the Person (String)
     */
    toString(){
        return this.getNombre() + " " + this.getApellidos();
    }
}

// Array of type Persona.
var football_players = [
    new Persona("Lionel", "Messi"),
    new Persona("Cristiano", "Ronaldo"),
    new Persona("Neymar", "Jr"),
    new Persona("Antonio", "Lopez"),
    new Persona("Sergio", "Ramos"),
    new Persona("Gareth", "Bale"),
    new Persona("Gonzalo", "Higuain"),
    new Persona("David", "Silva"),
    new Persona("Sergio", "Aguero"),
];

/**
 *  Update the table of the index.html
 */
function updateTable(){
    let table = document.getElementById('table');

    table.innerHTML = '';

    let table_row = document.createElement('tr');
    table_row.className = 'bg-danger';
    table.appendChild(table_row);

    let table_data_name = document.createElement('th');

    table_row.appendChild(table_data_name);
    table_data_name.innerHTML = 'Nombres';

    let table_data_lastName = document.createElement('th');
    table_row.appendChild(table_data_lastName);
    table_data_lastName.innerHTML = 'Apellidos';

    let table_body = document.createElement('tbody');
    table.appendChild(table_body);

    for(let i = 0; i < football_players.length; i++){
        let table_row = document.createElement('tr');
        table_body.appendChild(table_row);

        let table_data_name = document.createElement('td');
        table_row.appendChild(table_data_name);
        table_data_name.innerHTML = football_players[i].getNombre();

        let table_data_lastName = document.createElement('td');
        table_row.appendChild(table_data_lastName);
        table_data_lastName.innerHTML = football_players[i].getApellidos();
    }
}

/**
 * Add a Person to the array, it cannot have a Name or Last Name without characters.
 */
function agregarPersona(){
    do{
        var player_name = prompt("Ingresa el Nombre:");
    }while(!player_name.length);

    do{
        var player_lastName = prompt("Ingresa el Apellido:");
    }while(!player_lastName.length);

    if(player_name && player_lastName){
        football_players.push(new Persona(player_name, player_lastName) );
    } else{
        alert("Has cancelado la introducción de un nuevo jugador.");
    }

    updateTable();
}

/**
 *  Eliminate the Last Person of the football_players array.
 */
function eliminarPersona(){
    if(football_players.length == 0){
        alert("No hay personas para eliminar");
    } else{
        (confirm("¿Seguro que deseas eliminar a " + football_players[football_players.length - 1].toString() + "?") ? football_players.pop() : alert("Has cancelado eliminar a " + football_players[football_players.length - 1].toString()));
    }

    updateTable();
}