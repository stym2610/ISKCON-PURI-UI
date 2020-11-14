import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  donationSchemes = [
    {name: 'Gau Seva', imageURL: '../../../pics/iskconsymbol.jpg', sevaURL: 'deity-seva'},
    {name: 'Deity Seva', imageURL: '../../../pics/iskconsymbol.jpg', sevaURL: 'deity-seva'},
    {name: 'Kartik Month', imageURL: '../../../pics/iskconsymbol.jpg', sevaURL: 'deity-seva'},
    {name: 'Anna Daan', imageURL: '../../../pics/iskconsymbol.jpg', sevaURL: 'deity-seva'},
    {name: 'Food for child', imageURL: '../../../pics/iskconsymbol.jpg', sevaURL: 'deity-seva'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
