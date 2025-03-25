import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto/producto.model';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  url = 'https://tienda-online-678a6-default-rtdb.firebaseio.com/';

  constructor(private HttpClinet: HttpClient) {}

  listadoProdcutos():Observable<{[llave:string]:Producto}>{
   return this.HttpClinet.get<{[llave:string]:Producto}>(this.url + 'datos.json');
  }

  agregarProducto(producto:Producto):Observable<any>{
  return this.HttpClinet.post(`${this.url}datos.json`, producto);
  }
  
  modificarProducto(prodcuto:Producto,llave:string): Observable<any>{
    const url_modificar = `${this.url}datos/${llave}.json`;
    return this.HttpClinet.put(url_modificar,prodcuto);
  }

  eliminarProducto(llave:string): Observable<any>{
    const url_elliminar = `${this.url}datos/${llave}.json`
    return this.HttpClinet.delete(url_elliminar);
  }
}
