import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Grid } from '../model/grid';
import { Observable, of  } from 'rxjs';
import { ResultFire } from '../model/resultFire';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  private baseURL = 'http://localhost:8080/api/v1/walo';
  grid : Grid;
  constructor(private http:HttpClient) { }

  addGrid(howa : Grid) : Observable<Grid>{
    return this.http.post<Grid>(`${this.baseURL}`, howa);
  }

   private log(response:any){
    console.table(response);
}
}


