import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  num1:number=0;
  num2:number=0;
  sum:number=0;
  sub:number=0;
  mult:number=0;
  div:number=0;

  calc()
  {
    //Performing addition
    this.sum=this.num1+this.num2;

    //Performing subtraction
    this.sub=this.num1-this.num2;

    //Performing multiplication
    this.mult=this.num1*this.num2;

    //Performing division
    if(this.num2==0)
    {
      this.div=0;
    }
    else
    {
      this.div=this.num1/this.num2;
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
