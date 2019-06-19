import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lista-tarefa',
  templateUrl: './lista-tarefa.page.html',
  styleUrls: ['./lista-tarefa.page.scss'],
})
export class ListaTarefaPage implements OnInit {
  
  constructor(public toastController: ToastController, public alertController: AlertController) {}

  ngOnInit() {
  }

}
