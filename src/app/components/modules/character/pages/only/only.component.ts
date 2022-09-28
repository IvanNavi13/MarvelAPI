import { Component, OnInit } from '@angular/core';
import { CharacterMarvelAPIService } from '../../../../../services/character-marvel-api.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-only',
  templateUrl: './only.component.html',
  styleUrls: ['./only.component.scss']
})
export class OnlyComponent implements OnInit {

  constructor( private characterService: CharacterMarvelAPIService ) { }

  fullNameCharacter?: Observable<any>;
  public formSearch!: FormGroup;
  nameCharacter!: string;
  
  ngOnInit(): void {
    this.getnameStartValidation();
    this.onSubmit();
    // this.getStartWithCharacters();
  }

  getACharacterFullName(nameStart: string){
    this.fullNameCharacter = this.characterService.getCharacterFullName(nameStart);
  }

  getnameStartValidation(){
    this.formSearch = new FormGroup({
      fullNameCharacter: new FormControl('', [Validators.minLength(1), Validators.required] ), 
      });
  }

  onSubmit(){
    console.log(this.formSearch.get("fullNameCharacter")?.value);
    this.nameCharacter = this.formSearch.get("fullNameCharacter")?.value;
    if(this.formSearch.invalid){
      return 
    }
    this.getACharacterFullName(this.nameCharacter);
  }

}
