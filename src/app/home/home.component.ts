import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menu = [
    {label: 'Home', route: ''},
    {label: 'About', route: 'about', children: [
      {label: 'About ISKCON', route: 'about-iskcon'},
      {label: 'ISKCON Puri', route: 'about-iskcon-puri'},
      {label: 'Our Mission', route: 'our-mission'},
      {label: 'Founder Acharya', route: 'founder-acharya'}
    ]},
    {label: 'Temple', route: 'temple'},
    {label: 'Donate', route: 'donate'},
    {label: 'Contact', route: 'contact'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
