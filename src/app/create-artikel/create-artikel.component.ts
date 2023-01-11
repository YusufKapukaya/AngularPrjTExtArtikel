import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ArtikelService } from '../services/artikel.service';
@Component({
  selector: 'app-create-artikel',
  templateUrl: './create-artikel.component.html',
  styleUrls: ['./create-artikel.component.css']
})
export class CreateArtikelComponent implements OnInit {
  constructor(public atikelService: ArtikelService, private router: Router) { }
  username: string = "";
  title: string = "";
  content: string = "";

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '250px',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Bitte Ihre Schrift eingeben',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    sanitize: true,
    toolbarPosition: 'top',
  };



  ngOnInit(): void {

  }

  post() {
    let postObj = {
      author: this.username,
      title: this.title,
      content: this.content,
      comments: []
    };
    this.atikelService.postArtikel(postObj).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/home']);
    })
  }


}
