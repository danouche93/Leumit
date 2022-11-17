import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  searchText: string = "";
  @Output() inputEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onInputChange(event: any){
    this.searchText = event;
    this.inputEvent.emit(this.searchText)
  }

}
