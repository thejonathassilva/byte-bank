import { Transferencia } from './../services/models/transferencias.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector:('app-nova-transferencia'),
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number | string;
  destino: number | string;

  constructor(private service: TransferenciaService, private router: Router) {
    this.valor = '';
    this.destino = '';
  }

  public transferir() {
    console.log('Solicitado nova transferencia');
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino
    }
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato')
    },
    error => console.error(error));
  }

  private limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
