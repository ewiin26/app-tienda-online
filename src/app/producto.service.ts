import { Injectable } from '@angular/core';
import { Producto } from './producto/producto.model';
import { DatosService } from './datos.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: {[llave:string]: Producto} = {};
  // Observable para notificar cambios 
  productosActualizados= new Subject <{[llave:string]:Producto}>();

  constructor( private datosService:DatosService){}

  listarProductos(){
    return this.datosService.listadoProdcutos();
  }

  // Agregar o Modificar un producto existente
  guardarProducto(producto: Producto, llave: string|null = null ) {
    if(llave === null){
      //Agregar
      this.datosService.agregarProducto(producto).subscribe(() => {
        this.refrescarProductos();
        console.log(`se agrego el nuevo prodcuto: ${producto.descripcion} - ${producto.precio}`)
      });
    }else{ // actualizar
      this.datosService.modificarProducto(producto,llave).subscribe(() =>{
        this.refrescarProductos();
      });
    }
  }

  private refrescarProductos(){
    this.listarProductos().subscribe((productos: {[llave:string]: Producto}) =>{
      this.setProdcutos(productos); // emite la actualizacion de la lista 
    });
  }

  setProdcutos(productos: {[llave:string]: Producto}){
    this.productos = productos;
    this.productosActualizados.next(this.productos);
  }

  getProductoByLlave(llave : string): Producto | undefined {
   return this.productos[llave];
  }

  eliminarProducto(llave: string ){
    this.datosService.eliminarProducto(llave).subscribe(() =>{
      this.refrescarProductos();
    });
  }

}
