import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-form-overley',
  templateUrl: './form-overley.component.html',
  styleUrls: ['./form-overley.component.css']
})
export class FormOverleyComponent implements OnInit {

  form: FormGroup;
  isSubmitted: boolean = false;
  @Input('donationAmount') donationAmount = 1200;
  

  constructor(private fb: FormBuilder, private modal: NzModalRef) { }

  ngOnInit(){
    this.form = this.createForm();
  }

  createForm(){
    let formModal = this.fb.group({
      name: [''],
      mobile_number: [''],
      email_id: [''],
      occassion: [''],
      amount: [this.donationAmount]
    });
    return formModal;
  }

  onNext(){
    console.log(this.form.value);
    this.modal.destroy();
  }

  onClose(){
    this.modal.destroy();
  }

}
