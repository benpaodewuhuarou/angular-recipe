import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name: string;
  password: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    this.name = f.value.email;
    this.password = f.value.password;
    this.authService.signupUser(this.name, this.password);

  }
}
