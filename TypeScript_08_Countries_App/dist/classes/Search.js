var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getCountryInfo } from "../helpers.js";
import { Component } from "./Component.js";
import { CountryCard } from "./CountryCard.js";
export class Search extends Component {
    constructor() {
        super('country-search', 'app', true, 'user-search');
        this.countryInput = this.element.querySelector('#country');
        this.configure();
    }
    configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }
    renderContent() { }
    clearCard() {
        const element = document.getElementById("country-info");
        element === null || element === void 0 ? void 0 : element.remove();
    }
    submitHandler(event) {
        return __awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            this.clearCard();
            const country = this.countryInput.value;
            const countryInfo = yield getCountryInfo(country);
            new CountryCard(countryInfo, country);
        });
    }
}
//# sourceMappingURL=Search.js.map