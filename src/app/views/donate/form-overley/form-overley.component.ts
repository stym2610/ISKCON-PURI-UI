import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-overley',
  templateUrl: './form-overley.component.html',
  styleUrls: ['./form-overley.component.css']
})
export class FormOverleyComponent implements OnInit {

  form: FormGroup;
  isSubmitted: boolean = false;
  

  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.form = this.createForm();
  }

  createForm(){
    let formModal = this.fb.group({
      name: [''],
      mobile_number: [''],
      email_id: [''],
      occassion: ['']
    });
    return formModal;
  }

  onNext(){
    console.log(this.form.value);
  }

}
