import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterMarvelAPIService } from '../../../../../services/character-marvel-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-find-name',
  templateUrl: './find-name.component.html',
  styleUrls: ['./find-name.component.scss']
})
export class FindNameComponent implements OnInit {

  constructor(private comicService: CharacterMarvelAPIService) { }

  comicsFullName?: Observable<any>;
  public formSearch!: FormGroup;
  nameComic!: string;

  ngOnInit(): void {
    this.getnameValidation();
    this.onSubmit();
  }

  getNameComic(comic: string) {
    this.comicsFullName = this.comicService.getComicsFullTitle(comic);
  }

  getnameValidation() {
    this.formSearch = new FormGroup({
      nameComic: new FormControl('', [Validators.minLength(1), Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.formSearch.get("nameComic")?.value);
    this.nameComic = this.formSearch.get("nameComic")?.value;
    if (this.formSearch.invalid) {
      return
    }
    this.getNameComic(this.nameComic);
  }


}
