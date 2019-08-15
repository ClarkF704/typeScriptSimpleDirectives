import { Component, OnInit } from '@angular/core';
import { DataApp } from '../../DataApp';
import { UserApp } from '../../UserApp';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  data = new DataApp('');
  // ^ ngModel
  people: any[] = [
    {
      "name": "John Smith",
      "age": 30
    },
    {
      "name": "Melanie Johnson",
      "age": 36
    },
    {
      "name": "MaryFer Chavez",
      "age": 40
    },
    {
      "name": "Buttons Farriss",
      "age": 10
    },
  ]
  // ^ ngFor

  peopleTwo: any[] = [
    {
      "name": "Woodly Smith",
      "age": 30,
      "country": "USA"
    },
    {
      "name": "Jack Johnson",
      "age": 36,
      "country": "United Kingdom"
    },
    {
      "name": "Ignasio Chavez",
      "age": 40,
      "country": "Mexico"
    },
    {
      "name": "Bing Ping",
      "age": 10,
      "country": "China"
    },
  ]
 

  constructor() { }

  ngOnInit() {
  }

  hoverMethod(){
    document.getElementById("myID").className = "mystyle";
  }
  hoverMethod2(){
    document.getElementById("myID").className = "mystyle2";
  }
  

  changeColor(newColor) {
    var elem = document.getElementById('para');
    elem.style.color = newColor;
  }

}
