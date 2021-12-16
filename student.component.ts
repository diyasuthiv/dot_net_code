import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studID:number=0;
  studentName:String=" ";
  mathMarks:number=0;
  phyMarks:number=0;
  chemMarks:number=0;

  percent:number=0;

  calculateMarks()
  {
    this.percent=(this.mathMarks+this.phyMarks+this.chemMarks)/300;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
