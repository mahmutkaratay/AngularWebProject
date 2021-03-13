import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Model } from '../models/model';
 

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  Models: Model[] = [];
  apiUrl = 'http://api.otovio.com/api/';
  token =
    'zghDivjXrRwQKtQqz0zbcmR42Aw0zc8JNp9T3Ggk6Id5jjAQLb18ztvQv4CJghAZUObc2LrcB6muiApFe_mY51HBSuHvshx1oj9GCdST1RKFPzK4dTcgNFEhH89j2JA14W6ojwYzWV3ST8N7xMOwOoVsE5tC6XlSgoQxZyNJNLuR1WxsO_JBGiQDcAWaXp4weIL_3ULqiry-1SolB-B5THV9t7YJ8EPUEgollcPp836guyhsp-ej4bLbGnjnIxNhFd-u_TiGp582VWGCwx8TxEooHirjLfkwGoLDFULPW7tuWSp7YGftBX4M_CWn7hmEonFpzsOalDKXlSzW0jLUcHKSb_ZIcEK6GqtHUha0qxc';

    
  constructor(private httpClient: HttpClient) { }

  getModels(): Observable<ListResponseModel<Model>> {
    let newPath=  this.apiUrl +"Models/GetAll";
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'No Auth',
      }),
    };

    var header = {
      headers: new HttpHeaders().set('Authorization', this.token),
    };

    var test = {}

   return  this.httpClient
      .post<ListResponseModel<Model>>(newPath,null)
  }
  

  
  getModelsByBrandId(brandId:number): Observable<ListResponseModel<Model>> {
    let newPath=  this.apiUrl +"Models/GetAll";

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'No Auth',
      }),
    };

    var header = {
      headers: new HttpHeaders().set('Authorization', this.token),
    };

    var test = {BrandId:brandId}

   return  this.httpClient
      .post<ListResponseModel<Model>>(newPath,test)
  }
  

}
