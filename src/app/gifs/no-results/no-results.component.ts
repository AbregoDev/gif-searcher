import { Component, Input, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-no-results',
  templateUrl: './no-results.component.html',
  styles: [`
  .error-container {
    display: flex;
    flex-direction: column;
    padding: 30px;
  }

  h1 {
    text-align: center;
    margin-bottom: 30px;
  }

  img {
    height: 400px;
    margin: 0 auto;
  }
  `]
})
export class NoResultsComponent implements OnInit {

    oopsImageUrl: string = '';

    get query(): string {
        return this.gifsService.query;
    }

    constructor(private gifsService: GifsService) { }

    ngOnInit(): void {
        this.gifsService.getErrorGif().subscribe(imgUrl => {
            this.oopsImageUrl = imgUrl;
        })
    }
}
