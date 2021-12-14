/*write a Student class in type script in following data member constructor
roll-no
name
marks[]//number
Percentage
Grade
write a method to display info and calculate  result and assign grade as per percentage*/

class Student
{
    rollno:number;
    name:String;
    marks=[];
    percent:number=0;
    grade:String='';

    constructor (rno:number,name:String,smarks:number[])
    {
        this.rollno=rno;
        this.name=name;

        for(let i=0;i<smarks.length;i++)
        {
            this.marks[i]=smarks[i];
        }
    }

    calcResult():number
    {
        let noOfSubjects:number=this.marks.length;
        let total:number=0;

        for(let j=0;j<this.marks.length;j++)
        {
            total=total+this.marks[j];
        }
        this.percent=total/noOfSubjects;

        return this.percent;
    }

    calcGrade():String
    {
        if(this.percent>=90)
        {
            this.grade='A';
        }
        else if(this.percent>=80 && this.percent<90)
        {
            this.grade='B';
        }
        else if(this.percent>=60 && this.percent<80)
        {
            this.grade='C';
        }
        else if(this.percent<60)
        {
            this.grade='D';
        }

        return this.grade;
    }

    display():void
    {
        console.log("------");
        console.log("Report Card");
        console.log("Roll Number: "+this.rollno);
        console.log("Name: "+this.name);
        console.log("Marks are:");
        for(let k=0;k<this.marks.length;k++)
        {
            console.log(this.marks[k]);
        }
        console.log("Percentage: "+this.percent);
        console.log("Grade: "+this.grade);
    }
}

//creating oject of class and calling methods

let marks=[45,64,88,33];
let studs=new Student(1,'Avya',marks);

let per:number=studs.calcResult();
let grd:String=studs.calcGrade();
studs.display();

