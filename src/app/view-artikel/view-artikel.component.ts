import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtikelService } from '../services/artikel.service';

@Component({
  selector: 'app-view-artikel',
  templateUrl: './view-artikel.component.html',
  styleUrls: ['./view-artikel.component.css']
})
export class ViewArtikelComponent implements OnInit {

  artikelData: Array<any> = [];
  artikelIndex: any;
  username: string = "";
  comment: string = "";
  constructor(private artikelService: ArtikelService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // debugger;
    this.artikelIndex = this.route.snapshot.paramMap.get('artikelindex');


    this.artikelService.getArtikels().subscribe((res) => {
      // debugger;
      this.artikelData = res;
    })
  }

  addComment() {
    let obj = { username: this.username, comment: this.comment };
    this.artikelData[this.artikelIndex].comments.push(obj);
    this.artikelService.updateArtikels(this.artikelData[this.artikelIndex]).subscribe((res) => {
      // debugger;
      this.username = "";
      this.comment = "";
    })
  }

}
