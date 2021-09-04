import { Injectable } from '@angular/core';
import { CompteDetail } from './comptes.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CompteDetailService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'http://localhost:61236/api/Comptes'
  formData: CompteDetail = new CompteDetail();
  list: CompteDetail[];

  postCompteDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  putCompteDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.CompteId}`, this.formData);
  }

  deleteCompteDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as CompteDetail[]);
  }


}
