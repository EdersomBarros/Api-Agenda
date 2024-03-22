import { Component, OnInit } from '@angular/core';
import { Contato } from './Contato';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {



  constructor(
    private service: ContatoService
  ) { }



  ngOnInit(): void {
    const  c : Contato = new Contato();

    c.nome = 'Thomas'
    c.email = 'thomas@hotmail.com'
    c.favorito = false

    this.service.save(c).subscribe(resposta => {

      console.log(resposta);

    })
  }

}
