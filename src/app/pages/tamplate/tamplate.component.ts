import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-tamplate',
  templateUrl: './tamplate.component.html',
  styleUrls: ['./tamplate.component.css']
})
export class TamplateComponent implements OnInit {

  usuario= {
    nombre: '',
    apellido: '',
    correo: '',
    pais: '',
    genero: 'M'
  }
  paises: any[] = [];

  constructor(private PaisService : PaisService) { }

  ngOnInit(): void {
    this.PaisService.getPaises().subscribe( paises => {
      this.paises = paises;


      //VALOR DE INICIO DEL SELECT
      this.paises.unshift({
        nombre: '[Seleccione Pais]',
        codigo: ''
      })
    });
  }

  guardar(formulario: NgForm){

    if( formulario.invalid){

      Object.values( formulario.controls).forEach( control => { control.markAllAsTouched() });

      return;
    }
    console.log(formulario.value);
  }
}
