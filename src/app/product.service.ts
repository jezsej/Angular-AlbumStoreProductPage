import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http'
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { Album } from './Album.model';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) {

   }

   getAlbum(id:number){
    return this._http.get(this._albumUrl).map((response) => response.json())
  }

}
