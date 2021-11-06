import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class ByCountryComponent {

  wordSearch: string = '';
  isError: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  showSugency: boolean = false;

  constructor( private countryService: CountryService) { }

  
search( wordInput: string ) {
 
  this.isError = false;
  this.wordSearch = wordInput;
  this.showSugency = false;

  this.countryService.searchCountry( this.wordSearch )
      .subscribe( countriesResp => {
         
         console.log( countriesResp);
         this.countries = countriesResp;
         this.wordSearch = '';

      }, (error) => {

        this.isError = true;
        this.countries = [];

      });
}

suggestions( wordInput: string ) {
  this.isError = false;
  this.wordSearch = wordInput;
  this.showSugency = true;

  this.countryService.searchCountry ( wordInput)
      .subscribe( countriesResp => {
            this.suggestedCountries = countriesResp.splice(0,5);
      }, (error) => {
            this.suggestedCountries = [];
      });
}


searchSuggested ( wordInput: string ){
  this.search( wordInput);
 
}


}
