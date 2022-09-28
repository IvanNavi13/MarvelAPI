import { Component, OnInit } from '@angular/core';
import { CharacterMarvelAPIService } from '../../../../../services/character-marvel-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor( private characterService: CharacterMarvelAPIService ) { }

  allCharacters?: Observable<any>;
  
  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(){
    this.allCharacters = this.characterService.getAllCharacters();
  }
  


}
