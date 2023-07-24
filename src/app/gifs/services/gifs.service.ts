import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifResponse, Gif } from "../interfaces/gifs-response.interface";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class GifsService {

    private _apiKey: string = environment.GIPHY_KEY;
    private _baseApiUrl: string = 'https://api.giphy.com/v1/gifs';
    // Constantes para localStorage
    private readonly HISTORIAL = "historial";
    private readonly RESULTADOS = "resultados";
    // Respuesta de GIPHY API
    public resultados: Gif[] = [];
    // Historial de búsqueda del usuario
    private _historial: string[] = [];

    get historial() {
        return [...this._historial];
    }

    constructor(private http: HttpClient) {
        this._historial = JSON.parse(localStorage.getItem(this.HISTORIAL) ?? '[]');
        this.resultados = JSON.parse(localStorage.getItem(this.RESULTADOS) ?? '[]');
    }

    buscarGifs(query: string) {
        query = query.trim().toLowerCase();

        if (!this._historial.includes(query)) {
            this._historial.unshift(query);
            this._historial = this._historial.splice(0, 10);

            localStorage.setItem(this.HISTORIAL, JSON.stringify(this._historial));
        }

        const apiUrl = `${this._baseApiUrl}/search`;
        const params = new HttpParams()
            .set('api_key', this._apiKey)
            .set('limit', '10')
            .set('q', query);

        this.http.get<SearchGifResponse>(apiUrl, { params })
            .subscribe(resp => {
                this.resultados = resp.data;
                // Almacenar en localStorage
                localStorage.setItem(this.RESULTADOS, JSON.stringify(this.resultados));
            });
    }
}
