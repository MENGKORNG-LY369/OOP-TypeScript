var Country = /** @class */ (function () {
    function Country(name, population, city, currency) {
        this.name = name;
        this.population = population;
        this.city = city;
        this.currency = currency;
    }
    Country.prototype.getInformations = function () {
        return "Welcome to ".concat(this.name, ", ").concat(this.population, " millions people, ").concat(this.city, " and currency ").concat(this.currency);
    };
    return Country;
}());
var Cambodia = new Country("Cambodia", 17, "Phnom Penh", "Riel");
var France = new Country("France", 70, "Paris", "Euro");
console.log(Cambodia);
console.log(Cambodia.getInformations());
