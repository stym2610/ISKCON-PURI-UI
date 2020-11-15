import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FormOverleyComponent } from '../form-overley/form-overley.component';

@Component({
  selector: 'diety-seva',
  templateUrl: './diety-seva.component.html',
  styleUrls: ['./diety-seva.component.css']
})
export class DietySevaComponent implements OnInit {

  donationTypes = [
    {label: 'Raja Bhoga', amount: 3500},
    {label: 'Sakalika Bhoga', amount: 1001},
    {label: 'Balya Bhoga', amount: 1501},
    {label: 'Vaikalika Bhoga', amount: 1001},
    {label: 'Sandhya Bhoga', amount: 2501}
  ]


  constructor(private modalService: NzModalService) { }

  ngOnInit(): void { }

  showModal(amount){
    this.modalService.create({
      nzContent: FormOverleyComponent
    });
  }

}
