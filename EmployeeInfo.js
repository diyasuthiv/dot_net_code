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
var Employee = /** @class */ (function () {
    function Employee(eid, ename, deptno, salary) {
        this.HRA = 0;
        this.DA = 0;
        this.gross_salary = 0;
        this.eid = eid;
        this.empname = ename;
        this.deptno = deptno;
        this.basic_salary = salary;
    }
    Employee.prototype.calcSal = function () {
        if (this.basic_salary <= 20000) {
            this.HRA = (this.basic_salary * 0.2);
            this.DA = (this.basic_salary * 0.8);
        }
        else if (this.basic_salary > 20000 && this.basic_salary <= 35000) {
            this.HRA = (this.basic_salary * 0.25);
            this.DA = (this.basic_salary * 0.7);
        }
        else {
            this.HRA = (this.basic_salary * 0.10);
            this.DA = (this.basic_salary * 0.8);
        }
        this.gross_salary = this.basic_salary + this.HRA + this.DA;
        return this.gross_salary;
    };
    Employee.prototype.display = function () {
        console.log("--------");
        console.log("Employee Data: ");
        console.log("Employee ID: " + this.eid);
        console.log("Name: " + this.empname);
        console.log("Department Number: " + this.deptno);
        console.log("Basic Salary: " + this.basic_salary);
        console.log("HRA: " + this.HRA);
        console.log("DA: " + this.DA);
        console.log("Gross Salary: " + this.gross_salary);
    };
    return Employee;
}());
//making object of the Employee class and calling its methods
var emp = new Employee(1, "Mukesh", 1101, 25000);
var salCalc = emp.calcSal();
emp.display();
