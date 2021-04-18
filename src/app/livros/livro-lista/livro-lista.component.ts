import { Component, OnInit, OnDestroy } from '@angular/core';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit, OnDestroy {

  livros: Livro[] = [];
  private livrosSubscription!: Subscription;

  constructor(public livroService: LivroService) { }

  ngOnDestroy():void{
    this.livrosSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.livroService.getLivros();
    this.livrosSubscription = this.livroService
    .getListaDeLivrosAtualizadaObservable()
    .subscribe((livros: Livro[]) => {
      this.livros = livros;
    });
  }

}
