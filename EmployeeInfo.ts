/*write a employee class with data constructor

eid
empname
deptno
salary
HRA
DA
gross salary
calculate gross salary on the base of
if basic salary <20000 then HRA 20% and  DA  80%
if basic salary   >20000 and<35000 then HRA 25% and DA 70%
*/

class Employee
{
    eid:number;
    empname:String;
    deptno:number;
    basic_salary:number;
    HRA:number=0;
    DA:number=0;
    gross_salary:number=0;

    constructor(eid:number,ename:String,deptno:number,salary:number)
    {
        this.eid=eid;
        this.empname=ename;
        this.deptno=deptno;
        this.basic_salary=salary;
    }

    calcSal():number
    {
        if(this.basic_salary<=20000)
        {
            this.HRA=(this.basic_salary*0.2);
            this.DA=(this.basic_salary*0.8);
        }
        else if(this.basic_salary>20000 && this.basic_salary<=35000)
        {
            this.HRA=(this.basic_salary*0.25);
            this.DA=(this.basic_salary*0.7);
        }
        else
        {
            this.HRA=(this.basic_salary*0.10);
            this.DA=(this.basic_salary*0.8);
        }

        this.gross_salary=this.basic_salary+this.HRA+this.DA;
        return this.gross_salary;
    }

    display():void
    {
        console.log("--------");
        console.log("Employee Data: ");
        console.log("Employee ID: "+this.eid);
        console.log("Name: "+this.empname);
        console.log("Department Number: "+this.deptno);
        console.log("Basic Salary: "+this.basic_salary);
        console.log("HRA: "+this.HRA);
        console.log("DA: "+this.DA);
        console.log("Gross Salary: "+this.gross_salary);
    }
}

//making object of the Employee class and calling its methods
var emp=new Employee(1,"Mukesh",1101,25000);
let salCalc=emp.calcSal();
emp.display();
