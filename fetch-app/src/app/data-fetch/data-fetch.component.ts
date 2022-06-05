import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-fetch',
  templateUrl: './data-fetch.component.html',
  styleUrls: ['./data-fetch.component.sass']
})
export class DataFetchComponent implements OnInit {

  jsonArray: any;
  constructor() { }

  ngOnInit(): void {
    fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => this.jsonArray = json)
  
  }

}
