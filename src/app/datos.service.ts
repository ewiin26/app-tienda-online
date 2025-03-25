import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto/producto.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  url = 'https://tienda-online-678a6-default-rtdb.firebaseio.com/';

  constructor(private HttpClient: HttpClient, private loginService:LoginService) {}

 // cargarProductos(): Observable<{[llave:string]:Producto}>{
//  const token = this.loginService.getIdToken();
//    return this.HttpClient.get<{[llave:string]:Producto}>(this.url + 'datos.json?auth=' + token);
//}


  listadoProdcutos():Observable<{[llave:string]:Producto}>{
   const token = this.loginService.getIdToken();
   const url_listar =  `${this.url}datos.json?auth=${token}`;
   return this.HttpClient.get<{[llave:string]:Producto}>(url_listar);
  }

  agregarProducto(producto:Producto):Observable<any>{
    const token = this.loginService.getIdToken();
    const url_agregar =`${this.url}datos.json?auth=${token}`;
  return this.HttpClient.post(url_agregar,producto);
  }
  
  modificarProducto(prodcuto:Producto,llave:string): Observable<any>{
    const token = this.loginService.getIdToken();
    const url_modificar = `${this.url}datos/${llave}.json?auth=${token}`;
    return this.HttpClient.put(url_modificar,prodcuto);
  }

  eliminarProducto(llave:string): Observable<any>{
    const token = this.loginService.getIdToken();
    const url_elliminar = `${this.url}datos/${llave}.json?auth=${token}`
    return this.HttpClient.delete(url_elliminar);
  }
}
