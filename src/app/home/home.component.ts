import { Component, OnInit } from '@angular/core';
import { ArtikelService } from '../services/artikel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  artikelData: Array<any> = [];
  constructor(private artikelService: ArtikelService) { }

  ngOnInit(): void {
    this.artikelService.getArtikels().subscribe((res) => {
      this.artikelData = res;
    })
  }
}
