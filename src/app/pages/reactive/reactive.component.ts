import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresService } from '../../services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma: FormGroup;

  constructor(private fb: FormBuilder,
              private validaService : ValidadoresService) {

    this.crearFormulario();
    this.cargarDataFormulario();
    this.cargarListeners();

  }

  ngOnInit(): void {
  }

  get nombreNoValido(){

    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched
  }
  get apellidoNoValido(){

    return this.forma.get('apellido').invalid && this.forma.get('apellido').touched
  }
  get correoNoValido(){

    return this.forma.get('correo').invalid && this.forma.get('correo').touched
  }
  get usuarioNoValido(){

    return this.forma.get('usuario').invalid && this.forma.get('usuario').touched
  }
  get distritoNoValido(){

    return this.forma.get('direccion.distrito').invalid && this.forma.get('direccion.distrito').touched
  }
  get calleNoValido(){

    return this.forma.get('direccion.calle').invalid && this.forma.get('direccion.calle').touched
  }
  get ciudadNoValido(){

    return this.forma.get('direccion.ciudad').invalid && this.forma.get('direccion.ciudad').touched
  }

  get passNoValido(){

    return this.forma.get('pass1').invalid && this.forma.get('pass1').touched
  }

  get pass2NoValido(){
    const pass1 = this.forma.get('pass1').value;
    const pass2 = this.forma.get('pass2').value;

    return ( pass1 === pass2) ? false : true;
  }

  get pasatiempos(){
    return this.forma.get('pasatiempos') as FormArray;
  }


  crearFormulario(){

    this.forma = this.fb.group({
      //['valor','validador sync'.'validador async']
      nombre: ['', [Validators.required, Validators.minLength(4)] ],
      apellido:['', [Validators.required, this.validaService.noHerrera]],
      correo: ['', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'), Validators.required] ],
      usuario: ['', , this.validaService.existeUsuario],
      pass1: ['', Validators.required],
      pass2: ['', Validators.required],
      direccion: this.fb.group({
        distrito: ['', Validators.required],
        calle: ['', Validators.required],
        ciudad: ['', Validators.required]
      }),
      //arreglo
      pasatiempos: this.fb.array([
        [],[],[]
      ]),
    },{
      validators: this.validaService.passwordsIguales('pass1', 'pass2')
    });
  }


  cargarDataFormulario(){

    this.forma.reset({
      nombre: "Juan Luis",
      apellido: "Aguilar Lopez",
      correo: "asasd@ass.com",
      direccion: {
        distrito: "",
        calle: "",
        ciudad: "Aguascalientes"
      },

    });
  }


  cargarListeners(){

    //this.forma.valueChanges.subscribe( valor => {
    //  console.log(valor);
    //});

    this.forma.get('nombre').valueChanges.subscribe( console.log );
  }


  guardar(){

    if( this.forma.invalid){

      Object.values( this.forma.controls).forEach( control => { control.markAllAsTouched() });

      return;
    }

    console.log(this.forma.value);

    //POST INFORMACION
    this.forma.reset();
  }

  agregarPasatiempo(){
    this.pasatiempos.push( this.fb.control('', Validators.required) );
  }

  borrarPasatiempo( i: number ){
    this.pasatiempos.removeAt(i);
  }


}
