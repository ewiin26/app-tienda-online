import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ListadoProductosComponent } from "./listado-productos/listado-productos.component";
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Tienda Online';

  constructor(private loginService: LoginService){}

  // verifico si el usuario esta autenticado 
  isAutenticado(){
    return this.loginService.isAutenticado();
  }

  //meteto para cerrar secion 
  salir(){
    this.loginService.logout();
  }
}
