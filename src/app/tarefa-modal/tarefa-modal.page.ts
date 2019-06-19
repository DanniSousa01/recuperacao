import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-tarefa-modal',
  templateUrl: './tarefa-modal.page.html',
  styleUrls: ['./tarefa-modal.page.scss'],
})
export class TarefaModalPage implements OnInit {
  tarefa;
  constructor(public modalController: ModalController) {
    this.tarefa = {
      'tarefa': '',
      'horario': '',
    }
   }

  ngOnInit() {
  }

  add() {
    this.modalController.dismiss(this.tarefa)
  }
}
