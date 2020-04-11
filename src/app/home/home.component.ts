import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { Consulta } from '../Clases/Consulta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //creando variables
  verResultados:boolean = false
  verGif:boolean = false
  imagenUser:String
  dniConsulta:String = ""
  messageAlert:boolean = false
  message:String
  consulta: Consulta = new Consulta();
  constructor(private consultaInjectada: ClienteService) { }

  ngOnInit() {
    this.imagenUser = "https://i.pinimg.com/originals/9f/00/af/9f00af501d2d324ac7f8ebb559fc25dd.png"
  }

  verDni(){
    if(this.dniConsulta.length == 0){
      this.messageAlert = true
      this.message = "Digíte un el numero de DNI de la persona a buscar"
      this.verResultados = false
      setTimeout(() => {
        this.messageAlert = false
      },2500);
    }else{
      if(this.dniConsulta.length == 8){
        this.verGif = true
        setTimeout(() => {
          this.verGif = false
          this.verResultados = true
        },2000);
        this.consultaInjectada.leerUsuarioDni(this.dniConsulta).subscribe((ConsultaDNI)=>{
            this.consulta = ConsultaDNI
        });
        this.dniConsulta = ""
      }else{
        this.messageAlert = true
        this.message = "La cantidad de dígitos incorrectos"
        this.verResultados = false
        setTimeout(() => {
          this.messageAlert = false
        },2500);
      }
    }
  }

}
