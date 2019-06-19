import { Component, OnInit } from '@angular/core';
//declaracsao do rount
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tarefa-detail',
  templateUrl: './tarefa-detail.page.html',
  styleUrls: ['./tarefa-detail.page.scss'],
})
export class TarefaDetailPage implements OnInit {

  constructor(private route: ActivatedRoute) { }
  tarefa;
  ngOnInit() {
    this.tarefa = this.route.snapshot.paramMap.get('tarefa');
  }

}
