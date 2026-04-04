// importing product class from Product.ts
import Product from "./Product.js";

export class PhysicalProduct extends Product {
    protected weight: number;

    constructor(sku: string, name: string, price: number, weight: number) {
        super(sku, name, price);
        this.weight = weight;
    }

    protected getTaxRate(): number {
        return 0.10;
    }

    // getter to return formatted weight
    get formattedWeight(): string {
        return `${this.weight} kg`;
    }


}
