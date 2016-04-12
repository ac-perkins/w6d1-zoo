(function(ns) {
    'use strict';


    ns.Animal = function Animal (name, dob) {
        if (name) { this.name = name; }
        this.name = name;
        this.dob = new Date(dob);
    };


    ns.Animal.prototype.age = function age() {
        return Math.floor( (Date.now() - this.dob) / 1000 / 60 / 60 / 24 / 365.25 );
    };


    ns.Animal.prototype.name = 'Larry';

    window.zoo = ns;

})(window.zoo || {});
