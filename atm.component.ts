import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class ATMComponent implements OnInit {

  balance:number=30000;
 
 

  showBalance()
  {
    console.log("Displaying the balance amount: "+this.balance)
  }

  withdraw(withdr:number)
  {
    this.balance=this.balance-withdr;
  }

  deposit(depst:number)
  {
    this.balance=this.balance+depst;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
