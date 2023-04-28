import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {
    //creamos una variable llamada segundo de tipo number inicializada en 0
  public segundo : number = 0;
  //se utiliza para recibir datos de un componente padre a un componente hijo.
    @Input() public inicio : number = 0;
    //declarar una nueva propiedad utilizando la directiva @Output() y asignarle un nuevo objeto
    // EventEmitter. Este objeto emitirá el evento personalizado 
    //y los datos asociados a cualquier componente que esté escuchando ese evento.
    @Output() public multiplo10 = new EventEmitter();
    //Creamos el metodo ngOnInit que no retornar nada
    ngOnInit() : void {
        //accedemos a la propiedad segundo en el cual le asignamos a inicio
        this.segundo = this.inicio;
        //accedemos al metodo actualizarSegungo en el cual ponemos el valor de segundos 
        setInterval(this.actualizarSegundo.bind(this), 1000);
    }

    private actualizarSegundo() : void {
        //Accedemos a la propiedad segundo en cual tiene un incremento
        this.segundo++;
        //Realizamos una condicion donde accedemos a la propiedad segundo y se le saca el modulo
        //donde hacemos una si segundo es igual, igual a 0 va a realizar el bloque de codigo
        if (this.segundo % 10 === 0) {
            //accedemos a nuestro metodo emitirMultiplo
            this.emitirMultiplo10();
        }
    }
    // Nuestro metodo es privamo llamado emitirMultiplo el cual no regresara nada
    private emitirMultiplo10() : void {
        // accedemos a la propiedad multiplo10 con emit se utiliza en los componentes para emitir un evento personalizado
        // y pasar datos desde un componente secundario al componente padre.
        this.multiplo10.emit(this.segundo);
    }
}
