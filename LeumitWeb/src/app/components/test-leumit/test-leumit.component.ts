import { Component, OnInit } from '@angular/core';
import { ReverseService } from 'src/app/services/reverse.service';

@Component({
  selector: 'app-test-leumit',
  templateUrl: './test-leumit.component.html',
  styleUrls: ['./test-leumit.component.css']
})
export class TestLeumitComponent implements OnInit {

  reversedList: { s: string, color: string }[] = [];
  filteredList: { s: string, color: string }[] = [];
  colors = ["aqua", "rgb(243, 209, 158)", "rgb(93, 31, 109)", "green", "rgb(119, 207, 241)"]

  normalString: string = "Choose a div";

  constructor(private reverseService: ReverseService) { }

  ngOnInit(): void {
    this.reverseService.ReverseString("one two three four five").subscribe(res => {
      this.reversedList = res.map((s, i) => { return { s: s, color: this.colors[i] } });
      this.filteredList = this.reversedList;
    }, err => {
      console.log(err);
    })
  }

  filterList(event: any) {
    this.filteredList = this.reversedList.filter(r => r.s.toLowerCase().includes(event.toLowerCase()));
  }

  toNormalString(s: string) {
    this.normalString = s.split("").reverse().join("");
  }

}
