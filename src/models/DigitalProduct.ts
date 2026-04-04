
import Product from "./Product"

export default class DigitalProduct extends Product {
    protected fileSize: number;

    constructor(sku: string, name: string, price: number, fileSize: number) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }

    // overriding the tax rate
    // inherits the pricing logic 
    protected getTaxRate(): number {
        return 0;
    }

    get formattedSize(): string {
        return `${this.fileSize} MB`
    }

    displayDetails(): string {
        return `${super.displayDetails()}, File Size: ${this.formattedSize}`;
    }
}



let hp = new DigitalProduct("sku001", "HP Devo", 577, 5677)

console.log(hp.displayDetails());