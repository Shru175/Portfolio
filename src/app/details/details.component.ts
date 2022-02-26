import { Component, OnInit } from '@angular/core';
import { Register } from 'src/register';
import { UserService } from '../user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private service:UserService) { }
user:Register;
  ngOnInit(): void {
    this.user= this.service.getData();
  }

}
