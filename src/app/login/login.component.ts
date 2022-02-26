import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
  loginForm:FormGroup;

  submitted:boolean=false;
  ngOnInit(): void {
    this.loginForm= this.formBuilder.group({
      
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }

  get f(){
    return this.loginForm.controls;
  }
  onSubmit(){
      this.submitted=true;

      if(this.loginForm.invalid)
        return;
  }


}