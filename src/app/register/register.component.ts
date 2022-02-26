import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from 'src/register';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  inputs:[`firstName`,`lastName`,`email`,`password`]
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private service:UserService,private router:Router) { }
  registerForm:FormGroup;
  flag=false;
  message="";
  submitted:boolean=false;
  userData:Register= new Register();
  ngOnInit(): void {
    this.registerForm= this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }

  get f(){
    return this.registerForm.controls;
  }
  onSubmit(){
      this.submitted=true;

      if(this.registerForm.invalid)
        return;
  }

  displayData()
  {
    this.flag=true;
      this.service.setData(this.userData);
      this.router.navigateByUrl('/details');

  }
}
