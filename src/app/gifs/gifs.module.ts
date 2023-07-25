import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { NoResultsComponent } from './no-results/no-results.component';



@NgModule({
    declarations: [
        GifsPageComponent,
        BusquedaComponent,
        ResultadosComponent,
        NoResultsComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        GifsPageComponent,
    ]
})
export class GifsModule { }
