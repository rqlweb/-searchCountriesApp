import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit{
  

  @Output() onNewCountry: EventEmitter <string> = new EventEmitter();
  @Output () onDebounce: EventEmitter<string> = new EventEmitter();
  
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  wordSearch: string = '';

  ngOnInit() {
    this.debouncer
    .pipe( debounceTime(300))
    .subscribe( value => {
      this.onDebounce.emit( value );
    } )
  }

  search() {
    this.onNewCountry.emit( this.wordSearch );
  }

  keyPressed() {
    this.debouncer.next( this.wordSearch );
  }

}
