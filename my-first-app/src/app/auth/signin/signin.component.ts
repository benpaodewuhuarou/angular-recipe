import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  name: string;
  password: string;
  constructor(private auth:AuthService) { }

  ngOnInit() {
  }
  onSubmit(f:NgForm){
    this.name = f.value.email;
    this.password = f.value.password;
    this.auth.signinUser(this.name,this.password);
  }
}
