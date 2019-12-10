import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile1',
  templateUrl: './profile1.component.html',
  styleUrls: ['./profile1.component.css']
})
export class Profile1Component implements OnInit {
  receivedData:object

  constructor(private ls:HttpClient) { }

  ngOnInit() {
    this.ls.get<any>("https://jsonplaceholder.typicode.com/posts").subscribe((data)=>{
      this.receivedData=(data)

    })
  }

}
