/*write a Student class in type script in following data member constructor
roll-no
name
marks[]//number
Percentage
Grade
write a method to display info and calculate  result and assign grade as per percentage*/
var Student = /** @class */ (function () {
    function Student(rno, name, smarks) {
        this.marks = [];
        this.percent = 0;
        this.grade = '';
        this.rollno = rno;
        this.name = name;
        for (var i = 0; i < smarks.length; i++) {
            this.marks[i] = smarks[i];
        }
    }
    Student.prototype.calcResult = function () {
        var noOfSubjects = this.marks.length;
        var total = 0;
        for (var j = 0; j < this.marks.length; j++) {
            total = total + this.marks[j];
        }
        this.percent = total / noOfSubjects;
        return this.percent;
    };
    Student.prototype.calcGrade = function () {
        if (this.percent >= 90) {
            this.grade = 'A';
        }
        else if (this.percent >= 80 && this.percent < 90) {
            this.grade = 'B';
        }
        else if (this.percent >= 60 && this.percent < 80) {
            this.grade = 'C';
        }
        else if (this.percent < 60) {
            this.grade = 'D';
        }
        return this.grade;
    };
    Student.prototype.display = function () {
        console.log("------");
        console.log("Report Card");
        console.log("Roll Number: " + this.rollno);
        console.log("Name: " + this.name);
        console.log("Marks are:");
        for (var k = 0; k < this.marks.length; k++) {
            console.log(this.marks[k]);
        }
        console.log("Percentage: " + this.percent);
        console.log("Grade: " + this.grade);
    };
    return Student;
}());
//creating oject of class and calling methods
var marks = [45, 64, 88, 33];
var studs = new Student(1, 'Avya', marks);
var per = studs.calcResult();
var grd = studs.calcGrade();
studs.display();
