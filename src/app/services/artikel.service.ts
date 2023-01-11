import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ArtikelService extends BaseService {

  constructor(
    private base: BaseService
  ) { super(base.http) }

  public postArtikel(data: any) {
    return this.base.postReq('/artikels', data);
  }
  public getArtikels() {
    return this.base.getReq('/artikels');
  }
  public updateArtikels(artikelData: any) {
    return this.base.putReq('/artikels/' + artikelData.id, artikelData);
  }
}
