import { Component, OnInit } from '@angular/core';
import { CharacterMarvelAPIService } from '../../../../../services/character-marvel-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private comicService: CharacterMarvelAPIService) { }

  allComics?: Observable<any>;

  ngOnInit(): void {
    this.getComics();
  }

  getComics() {
    this.allComics = this.comicService.getAllComics();
  }

}
