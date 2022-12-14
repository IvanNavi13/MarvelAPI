import { Component, OnInit } from '@angular/core';
import { CharacterMarvelAPIService } from '../../../../../services/character-marvel-api.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {

  constructor( private characterService: CharacterMarvelAPIService ) { }

  startWithCharacters?: Observable<any>;
  public formSearch!: FormGroup;
  nameCharacter!: string;
  
  ngOnInit(): void {
    this.getnameStartValidation();
    this.onSubmit();
    // this.getStartWithCharacters();
  }

  getStartWithCharacters(nameStart: string){
    this.startWithCharacters = this.characterService.getAllCharacterNameStart(nameStart);
  }

  getnameStartValidation(){
    this.formSearch = new FormGroup({
      nameStart: new FormControl('', [Validators.minLength(1), Validators.required] ), 
      });
  }

  onSubmit(){
    console.log(this.formSearch.get("nameStart")?.value);
    this.nameCharacter = this.formSearch.get("nameStart")?.value;
    if(this.formSearch.invalid){
      return 
    }
    this.getStartWithCharacters(this.nameCharacter);
  }
  

}
