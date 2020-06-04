import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  	constructor(private httpClient: HttpClient) { }

  	public getInfo(){
  		return this.httpClient.get(`https://data.rennesmetropole.fr/api/records/1.0/search/?dataset=resultats_e19&q=&facet=numero_tour&facet=niveau_detail&facet=nom_lieu`)
  	}
}
