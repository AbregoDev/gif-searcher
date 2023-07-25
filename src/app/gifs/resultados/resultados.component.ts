import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
    selector: 'app-resultados',
    templateUrl: './resultados.component.html',
    styles: [
    ]
})
export class ResultadosComponent {

    get resultados() {
        return this.gifsService.resultados;
    }

    get isLoading(): boolean {
        return this.gifsService.isSearching;
    }

    constructor(private gifsService: GifsService) { }

}
