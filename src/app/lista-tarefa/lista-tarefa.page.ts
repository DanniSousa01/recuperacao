import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController, ModalController } from '@ionic/angular';
import { TarefaModalPage } from '../tarefa-modal/tarefa-modal.page';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-lista-tarefa',
  templateUrl: './lista-tarefa.page.html',
  styleUrls: ['./lista-tarefa.page.scss'],
})
export class ListaTarefaPage implements OnInit {
  tarefas = [];
  tarefa_KEY = "tarefas";
  constructor(public toastController: ToastController, public alertController: AlertController, public modalController: ModalController, private storage: Storage) {
    this.storage.get(this.tarefa_KEY).then((tarefa) => {
      if (tarefa) {
        this.tarefas = tarefa
      }
    })
  }

  ngOnInit() {
  }

  // Exclui o conteúdo
  async remove(tarefa) {
    const alert = await this.alertController.create({
      header: 'Confirmação!',
      message: 'Deseja realmente excluir essa opção !!',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: async () => {
            // Atualizar formulário

            // Remover o item selecionado da lista
            var i = this.tarefas.indexOf(tarefa);
            this.tarefas.splice(i, 1);
            // chamando o método salvar, para salvar no storage
            this.salvar();

            // #3 - Criando um Toast
            const toast = await this.toastController.create({
              message: ' Tarefa removida com sucesso!',
              duration: 3000,
              position: 'top',
              color: 'dark'
            });

            // #4 Exibir a mensagem na tela
            toast.present();
          }
        }
      ]
    });

    await alert.present();
  }
  //Salvar todos os storagens, para não haver repetição de código !
  salvar() {
    this.storage.set(this.tarefa_KEY, this.tarefas);
  }

  // Criação do Modal, onde ele irá abrir o modal
  async abrir_modal() {
    let modal = await this.modalController.create({
      component: TarefaModalPage
    });

    //preparação para quando fechar o modal, ele executa esse código ! (quando clica no OKAY)
    modal.onDidDismiss().then((retorno) => {
      //Será executado somente após o Modal ter sído fechado
      this.tarefas.push(retorno.data);
      // chamando o método salvar, para salvar no storage
      this.salvar();
    });
    modal.present();
  }
}
