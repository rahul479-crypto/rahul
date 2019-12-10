import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  



  constructor(private route:Router, private hc:HttpClient) { }

  ngOnInit() {
  }
  
  senddata(data){
    if (data.name=="user") {
      console.log(data);
      
    this.hc.post('/user/login',data).subscribe(res=>{
      alert(res["message"])
    })
    }


    

//     if (data.username=="admin" && data.password=="admin"){
//       this.route.navigate(["profile"])
//       alert("logged in successfully")
//     }
// else{
//   alert("Invalid username/password")
// }
  }


}
