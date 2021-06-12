import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { images } from '../data/image.data';
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }
  fetchImages(): Observable<any> {
    return of(images);
  }
}
