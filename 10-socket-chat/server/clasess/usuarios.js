class Usuarios {

    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {
        let persona = { id, nombre, sala };
        this.personas.push(persona);
        return this.personas;
    }
    
    getPersona(id) {
        let persona = this.personas.filter(persona => persona.id === id)[0];
        return persona;
    }

    getPersonas() {
        return this.personas;
    }

    getPersonasPorSala (idSala) {
        console.log(this.personas);
        return this.personas.filter(persona => persona.sala === idSala);
    }

    borrarPersona(id) {
        let personaBorrada = this.getPersona(id);
        console.log('borrar persona', this.getPersona(id));
        this.personas = this.personas.filter(persona => persona.id !== id);
        return personaBorrada;
    }
};

module.exports = {
    Usuarios
}