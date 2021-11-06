import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {

  wordSearch: string = '';
  isError: boolean = false;
  capital: Country[] = [];

  constructor( private countryService: CountryService) { }

  
search( wordInput: string ) {
 
  this.isError = false;
  this.wordSearch = wordInput;

  this.countryService.searchCapital( this.wordSearch )
      .subscribe( capitalResp => {
         
         console.log( capitalResp);
         this.capital = capitalResp;
         this.wordSearch = '';

      }, (error) => {

        this.isError = true;
        this.capital = [];

      });
}

}
