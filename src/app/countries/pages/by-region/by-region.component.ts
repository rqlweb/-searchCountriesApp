import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [ ` 
  
    button {
    text-align: center;
    margin: 5px;
    }
    `
  ]
})
export class ByRegionComponent {

  regions: string[] = ['africa', 'americas', 'asia','europe', 'oceania'];
  activeRegion: string = '';
  countries: Country[] = [];
  isError: boolean = false;
  
  getClassCSS( region: string): string {
    return ( region === this.activeRegion) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  constructor( private countryService: CountryService) { }

  activateRegion( regionInput: string) {

    if( regionInput === this.activeRegion) {
      return;
    }
    
    this.activeRegion = regionInput;
    this.countries = [];

    this.countryService.searchRegion( this.activeRegion )
      .subscribe( regionResp => {
         this.isError=true;
         this.countries = regionResp;   
         console.log( regionResp);   

      });
  }


}
