import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DepRecCaisse } from './dep-rec-caisse.model';

@Injectable({
  providedIn: 'root'
})
export class RecDepCaisseService {

  constructor(
    private http: HttpClient
  ) { }

  // Dep Caisse var
  readonly baseDepCaisseURL = 'http://localhost:5000/api/DepCaisse';
  depCaisse: DepRecCaisse = new DepRecCaisse();
  listDepCaisse: DepRecCaisse[];

  // Rep Caisse var
  readonly baseRecCaisseURL = 'http://localhost:5000/api/RepCaisse';
  recCaisse: DepRecCaisse = new DepRecCaisse();
  listRecCaisse: DepRecCaisse[];

  // crud dep Caisse
  postDepCaisse() {
    return this.http.post(this.baseDepCaisseURL, this.depCaisse);
  }

  putDepCaisse() {
    return this.http.put(`${this.baseDepCaisseURL}/${this.depCaisse.DepBanId}`, this.depCaisse);
  }

  deleteDepCaisse(id: number) {
    return this.http.delete(`${this.baseDepCaisseURL}/${id}`);
  }

  refreshListDepCaisse() {
    this.http.get(this.baseDepCaisseURL)
      .toPromise()
      .then(res =>this.listRecCaisse = res as DepRecCaisse[]);
  }

  // crud Rec Caisse

  postRecCaisse() {
    return this.http.post(this.baseRecCaisseURL, this.recCaisse);
  }

  putRecCaisse() {
    return this.http.put(`${this.baseRecCaisseURL}/${this.recCaisse.DepBanId}`, this.recCaisse);
  }

  deleteRecCaisse(id: number) {
    return this.http.delete(`${this.baseRecCaisseURL}/${id}`);
  }

  refreshListRecCaisse() {
    this.http.get(this.baseRecCaisseURL)
      .toPromise()
      .then(res =>this.listRecCaisse = res as DepRecCaisse[]);
  }

}
