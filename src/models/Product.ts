//base class for a product-----------------------------------------------
export default class Product {
    protected sku: string;
    protected name: string;
    protected price: number;

    constructor(sku: string, name: string, price: number) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }

    // methods
    displayDetails(): string {
        return `Product Details | SKU: ${this.sku}, Name: ${this.name}, Price: $${this.price.toFixed(2)}` // made toFixed to format only 2 decinal places
    }

    protected getTaxRate(): number {
        return 0.06; // default tax
    }

    getPriceWithTax(): number {
        // tax can be polymorphic
        return this.price * 1.06;
    }
}