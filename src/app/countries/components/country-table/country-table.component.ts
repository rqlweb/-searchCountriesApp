import { Component,Input } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';


@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styles: [
     
    ` table {
      text-align: center;
      }

      img {
        width: 60px;
        height: 40px;
      }
  `
  ]
})
export class CountryTableComponent  {

  @Input() countries: Country[] = [];

}
