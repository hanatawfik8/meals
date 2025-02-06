import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategoryFood } from '../../interfaces/icategory-food';

@Injectable({
  providedIn: 'root'
})
export class DisplayCategoryService {

  serviceCategoryFood!: ICategoryFood[]
  sentCategory!: string

  constructor(private _httpClient: HttpClient) { }

  getSpecificCategory(cat: string): Observable<any> {
    return this._httpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
  }
}
