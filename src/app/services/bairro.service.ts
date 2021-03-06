import {Injectable} from '@angular/core';
import {Bairro} from "../model/bairro";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";

@Injectable()
export class BairroService {

  url: string;
  token: any;
  header: HttpHeaders;

  constructor(private http: HttpClient) {
    this.url = `http://${window.location.hostname}/api/bairro`;
    this.header = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.token = localStorage.getItem('API_TOKEN');
  }

  busca(form): Promise<Bairro> {
    const url = `${this.url}/busca`;
    return this.http.post(url, form, {headers: this.header})
      .toPromise()
      .then((response: HttpResponse<Bairro>) => response)
      .catch(this.handleError);
  }

  getBairro(id) {
    const url = `${this.url}/${id}`;
    return this.http.get(url, {headers: this.header})
      .toPromise()
      .then((response: HttpResponse<Bairro>) => response)
      .catch(this.handleError);
  }

  getBairros() {
    const url = `${this.url}`;
    return this.http.get(url, {headers: this.header})
      .toPromise()
      .then((response: HttpResponse<Bairro>) => response)
      .catch(this.handleError);
  }

  store(formulario): Promise<Bairro> {
    const url = `${this.url}`;
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.post(url, formulario, {headers: headers})
      .toPromise()
      .then((response: HttpResponse<Bairro>) => response)
      .catch(this.handleError);
  }

  update(id: number, formulario) {
    const url = `${this.url}/${id}`;
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.put(url, formulario, {headers: headers})
      .toPromise()
      .then((response: HttpResponse<Bairro>) => response)
      .catch(this.handleError);
  }

  delete(id: number) {
    const url = `${this.url}/${id}`;
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.delete(url, {headers: headers})
      .toPromise()
      .then((response: HttpResponse<any>) => response)
      .catch(this.handleError);
  }

  handleError(error: any): Promise<any> {
    if (error.status === 401) {
      return Promise.reject('Unauthorized');
    }
    if (error.status === 403) {
      return Promise.reject('Forbidden');
    }
    return Promise.reject(error);
  }
}
