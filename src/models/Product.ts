//base class for a product-----------------------------------------------
class Product {
    sku: string;
    name: string;
    price: number;

    constructor(sku: string, name: string, price: number){
        this.sku = sku;
        this.name = name;
        this.price = price;
    }

    // methods
    displayDetails(): string{
        return `Product Details | Sku: ${this.sku}, Product Name: ${this.name}, Price: $${this.price}`
    }

    getPriceWithTax(): number{
        const finalPrice = this.price * .06;
        return finalPrice;
    }
}