import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PerfilModalPage } from '../perfil-modal/perfil-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  perfil = {
    'perfil':'',
    'avatar':''
  }
  constructor(public modalController: ModalController,) {}

  // Criação do Modal, onde ele irá abrir o modal
  async abrir_modal() {
    let modal = await this.modalController.create({
      component: PerfilModalPage
    });

    //preparação para quando fechar o modal, ele executa esse código ! (quando clica no OKAY)
    modal.onDidDismiss().then((retorno) => {
      //Será executado somente após o Modal ter sído fechado
      this.perfil = (retorno.data);
    });
    modal.present();
  }
}
