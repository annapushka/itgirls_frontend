const mailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const domainFormat = /^[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,9}$/;
const dateFormat = /^(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)[0-9]{2}$/;
const phoneFormate = /(?<=^|\s|>|\;|\:|\))(?:\+|7|8|9|\()[\d\-\(\) ]{8,}\d/;


class Validator {
    constructor(string) {
        this.string = string;
    }
    isEmail = () => ((this.string == '' || !this.string.match(mailFormat)) ? false : true);
    isDomain = () => ((this.string == '' || !this.string.match(domainFormat)) ? false : true);
    isDate = () => ((this.string == '' || !this.string.match(dateFormat)) ? false : true);
    isPhone = () => ((this.string == '' || !this.string.match(phoneFormate)) ? false : true);
}


class ValidatorStatic {
    static isEmail = (string) => ((string == '' || !string.match(mailFormat)) ? false : true);
    static isDomain = (string) => ((string == '' || !string.match(domainFormat)) ? false : true);
    static isDate = (string) => ((string == '' || !string.match(dateFormat)) ? false : true);
    static isPhone = (string) => ((string == '' || !string.match(phoneFormate)) ? false : true);
}



const validatorEmail = new Validator('exemple@mail.ru');
const validatorDomain = new Validator('exemple.ru');
const validatorDate = new Validator('08.07.2022');
const validatorPhone = new Validator('+7(000)-00-00');


console.log("---------------------");
console.log(validatorEmail.isEmail());
console.log(validatorDomain.isDomain());
console.log(validatorDate.isDate());
console.log(validatorPhone.isPhone());
console.log("---------------------");
console.log(ValidatorStatic.isEmail('exemple@mail.ru'));
console.log(ValidatorStatic.isDomain('exemple.ru'));
console.log(ValidatorStatic.isDate('08.07.2022'));
console.log(ValidatorStatic.isPhone('+7(000)-00-00'));
console.log("---------------------");