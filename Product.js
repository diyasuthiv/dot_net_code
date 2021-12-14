/*
write a class product
pid
pname
amount
discount
qty
calculate discount
*/
var ProductInfo = /** @class */ (function () {
    function ProductInfo(pid, pname, amount, pdisc, qty) {
        this.finalAmount = 0;
        this.pid = pid;
        this.pname = pname;
        this.amount = amount;
        this.p_discount = pdisc;
        this.qty = qty;
    }
    ProductInfo.prototype.calcDisc = function () {
        var discounted_amount = 0;
        var totalcost = this.qty * this.amount;
        discounted_amount = (totalcost * (this.p_discount / 100));
        this.finalAmount = totalcost - discounted_amount;
        return this.finalAmount;
    };
    ProductInfo.prototype.display = function () {
        console.log("--------");
        console.log("Order Data: ");
        console.log("Product ID: " + this.pid);
        console.log("Product Name: " + this.pname);
        console.log("Product Amount: " + this.amount);
        console.log("Product Quantity: " + this.qty);
        console.log("Discount: " + this.p_discount + "%");
        console.log("FInal Amount: " + this.finalAmount);
    };
    return ProductInfo;
}());
//making object of class and summoning methods
var pr = new ProductInfo(1, 'Shoes', 300, 10, 100);
var total = pr.calcDisc();
pr.display();
