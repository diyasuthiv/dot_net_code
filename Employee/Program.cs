/*Create a class Employee with data members empno, ename, designation and salary.
 * Write public methods to accept and print values of all the data members. 
 * Call and verify class functionality using main method. */
using System;

namespace First
{
    class main
    {
        static void Main(string[] args)
        {

            Employee s = new Employee();

            s.GetData();
            s.PrintData();
            Console.ReadKey();

        }
    }
    class Employee
    {

        int empno, salary;
        string empname, des;

        public void GetData()
        {
            Console.WriteLine("Enter the Employee name,designation, number and salary");

            empname = Console.ReadLine();
            des = Console.ReadLine();
            empno = Convert.ToInt32(Console.ReadLine());
            salary = Convert.ToInt32(Console.ReadLine());

        }

        public void PrintData()
        {
            Console.WriteLine("Employee Name:" + empname);
            Console.WriteLine("Employee Number:" + empno);
            Console.WriteLine("Employee Designation:" + des);
            Console.WriteLine("Employee Salary:" + salary);
        }
    }
}
