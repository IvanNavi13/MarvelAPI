import { Component, OnInit } from '@angular/core';
import { CharacterMarvelAPIService } from '../../../../../services/character-marvel-api.service';
import { Observable } from 'rxjs';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-find-format',
  templateUrl: './find-format.component.html',
  styleUrls: ['./find-format.component.scss']
})
export class FindFormatComponent implements OnInit {

  constructor(private comicService: CharacterMarvelAPIService) { }

  comicsFormat?: Observable<any>;
  public formSearch!: FormGroup;
  nameFormat!: string;

  ngOnInit(): void {
    this.getnameValidation();
    this.onSubmit();
  }

  getFormatComic(type: string) {
    this.comicsFormat = this.comicService.getComicsByFormatType(type);
  }

  getnameValidation() {
    this.formSearch = new FormGroup({
      nameFormat: new FormControl('', [Validators.minLength(1), Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.formSearch.get("nameFormat")?.value);
    this.nameFormat = this.formSearch.get("nameFormat")?.value;
    if (this.formSearch.invalid) {
      return
    }
    this.getFormatComic(this.nameFormat);
  }

}
