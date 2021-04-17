import { Component, EventEmitter, Output } from '@angular/core';
import { Livro } from '../livro.model';

@Component({
  selector: 'app-livro-inserir',
  templateUrl: './livro-inserir.component.html',
  styleUrls: ['./livro-inserir.component.css']
})
export class LivroInserirComponent {
  @Output() livroAdicionado = new EventEmitter<Livro>();
  id!: string;
  titulo!: string;
  autor!: string;
  paginas!: string;
  onAdicionarLivro() {
    const livro: Livro = {
      id: this.id,
      titulo: this.titulo,
      autor: this.autor,
      paginas: this.paginas
    };
    this.livroAdicionado.emit(livro);
  }
}

