import PhysicalProduct from "./models/PhysicalProduct";
import DigitalProduct from "./models/DigitalProduct";
import Product from "./models/Product";


//instances
const dellLaptop = new PhysicalProduct("SKU1103", "Dell G15", 599, 1000);
const eBook = new DigitalProduct("SKU7995", "Kindl Shrek III", 5, 36)
//setting variable using polymorphism for looping
const inventory: Product[] = [dellLaptop, eBook];

//functions---------------------------------
function looper(arr: Product[]) {
    for (let i = 0; i < arr.length; i++)
        console.log(arr[i].displayDetails());
        console.log(`Final Price: ${arr[i].getPriceWithTax()}`);
       
}

looper(inventory);