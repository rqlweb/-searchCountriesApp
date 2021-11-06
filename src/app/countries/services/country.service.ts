import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams () {
    return new HttpParams().set( 'fields', 'name,capital,population,flags,cca2');

  }

  constructor( private http: HttpClient ) { }

  searchCountry ( wordSearch: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/name/${ wordSearch }`
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  searchCapital ( wordSearch: string ): Observable<Country[]> {
    
    const url = `${ this.apiUrl }/capital/${ wordSearch }`
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  searchRegion ( wordSearch: string ): Observable<Country[]> {
    
    const url = `${ this.apiUrl }/region/${ wordSearch }`
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  getCountryAlpha ( id: string ): Observable<Country[]> {
    
    const url = `${ this.apiUrl }/alpha/${ id }`
    return this.http.get<Country[]>( url );
  }

}
