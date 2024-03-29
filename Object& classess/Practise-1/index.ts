
class Country {
    name: string;
    population: number;
    city: string;
    currency: string;

    constructor(name: string, population: number, city: string, currency: string) {
        this.name = name;
        this.population = population;
        this.city = city;
        this.currency = currency;
    }

    getInformations() : string {
        return `Welcome to ${this.name}, ${this.population} millions people, ${this.city} and currency ${this.currency}`;
    }
}

const Cambodia = new Country("Cambodia", 17, "Phnom Penh", "Riel");
const France = new Country("France", 70, "Paris", "Euro");

console.log(Cambodia);

console.log(Cambodia.getInformations());
