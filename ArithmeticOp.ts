/**
 * Function that performs arithmetic operations
 * @author Diya Suthiv
 * @param {number}  num1 - first operand
 * @param {number}  num2 - second operand
 * @param {String}  op - operation to be performed on opernads
*/

function CalcOp(num1:number, num2:number,op:String)
{
    if(op.charAt(0)=='+')
    {
        //checking first char
        return num1+num2;
    }
    else if(op.charAt(0)=='-')
    {
        return num1-num2;
    }
    else if(op.charAt(0)=='*')
    {
        return num1*num2;
    }
    else if(op.charAt(0)=='/')
    {
        if(num2!=0)
        {
            return num1/num2;
        }
        else
        {
            return 0;
        }
    }
    else if(op.charAt(0)=='%')
    {
        if(num2!=0)
        {
            return num1%num2;
        }
        else
        {
            return 0;
        }
    }
    else
    {
        return 'Invalid Operator';
    }
}

console.log(CalcOp(3,3,'&'));


