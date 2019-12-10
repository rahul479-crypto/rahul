import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private hc:HttpClient) { }

  ngOnInit() {
  }
  submitUserData(data)
  {
    console.log(data)
   this.hc.post<any>('/user/register',data).subscribe(res=>{
     alert(res["message"])
   })
  }
}

