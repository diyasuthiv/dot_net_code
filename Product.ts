/*
write a class product
pid
pname
amount
discount
qty
calculate discount  
*/

class ProductInfo
{
    pid:number;
    pname:String;
    amount:number;
    p_discount:number;
    qty:number;
    finalAmount:number=0;

    constructor(pid:number,pname:String,amount:number,pdisc:number,qty:number)
    {
        this.pid=pid;
        this.pname=pname;
        this.amount=amount;
        this.p_discount=pdisc;
        this.qty=qty;
    }

    calcDisc():number
    {
        let discounted_amount=0;
        let totalcost=this.qty*this.amount;

        discounted_amount=(totalcost*(this.p_discount/100));

        this.finalAmount=totalcost-discounted_amount;

        return this.finalAmount;
    }

    display():void
    {
        console.log("--------");
        console.log("Order Data: ");
        console.log("Product ID: "+this.pid);
        console.log("Product Name: "+this.pname);
        console.log("Product Amount: "+this.amount);
        console.log("Product Quantity: "+this.qty);
        console.log("Discount: "+this.p_discount+"%");
        console.log("FInal Amount: "+this.finalAmount);
    }
}

//making object of class and summoning methods
var pr=new ProductInfo(1,'Shoes',300,10,100);
let total:number=pr.calcDisc();
pr.display();