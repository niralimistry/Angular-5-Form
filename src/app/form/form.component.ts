import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


user: Object = {};
   submitted = false;
  constructor() { }

  ngOnInit() {
  }

  onSubmitTemplateBased() {
        this.submitted = true; 
        console.log(this.user);
    }

}
