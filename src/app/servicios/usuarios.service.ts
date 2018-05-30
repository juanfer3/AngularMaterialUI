import { Injectable } from '@angular/core';

@Injectable()
export  class UsuariosService {
    usuarios = [
        {id: 1, nombre: 'JuanFer'},
        {id: 2, nombre: 'Winnie'}
    ];
    constructor() {
    }

    getUsuarios() {
        return this.usuarios;
    }

    getUsuarioId(id: number) {
        return this.getUsuarios().find( usuario => usuario.id === id);
    }

}
