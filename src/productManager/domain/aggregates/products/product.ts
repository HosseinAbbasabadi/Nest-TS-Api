export class Product {
    id: string
    name: string;
    price: string;
    category: string;

    constructor(_name: string, _price: string, _category: string) {
        this.guardAgainstInvalidName(_name);
        
        this.name = _name;
        this.price = _price;
        this.category = _category;
    }

    private guardAgainstInvalidName(_name: string) {
        if (_name === '')
            throw new Error("invalid name passed");
    }
}