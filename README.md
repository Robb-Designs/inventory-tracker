# Type Safety: Inventory Tracker
### An OOP inventory tracking system built with TypeScript. This project demonstrates the 4 OOP pillars; inheritance, encapsulation, abstraction, and polymorphism.
---
## Example Output

```
Product Details | SKU: SKU1103, Name: Dell G15, Price: $599.00, Weight: 2.5 kg
Final Price: $658.94
----------------------
Product Details | SKU: SKU7995, Name: Kindle Shrek III, Price: $5.00, File Size: 36 MB
Final Price: $5.00
----------------------
```
---
## References
- MDN Web Docs
- W3Schools
- typescriptlang.org

---
# Reflection
During this project, I had many instances where I would pause and reflect on TypeScript and type safety. In this program, type safety because a very important factor the deeper I went into the logic. I began to understand how critical type safety is in preventing bugs early.

One challenge I faced was; when implementing a method in my base class. I initially defined the method with a return type of `number`, but kept receiving an error indicating that the function was returning a `string` and didnt know why. My original implementation looked like this:

```ts
getPriceWithTax(): number {
    const total = this.price * 1.06;
    return total.toFixed(2); 
}
```

After researching the `.toFixed()` method, I realized that it returns a string rather than a number. This directly conflicted with my function’s declared return type. To resolve this, I used `parseFloat()` to convert the formatted string back into a number.
