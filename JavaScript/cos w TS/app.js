"use strict";
const divNames = {
    input: 'area',
    radio1: 'tile20',
    radio2: 'radio25',
    result: 'result',
};
class Tiles {
    constructor(divNames) {
        this.divNames = divNames;
        this.inputDiv = document.querySelector(`#${this.divNames.input}`);
        this.radio20Div = document.querySelector(`#${this.divNames.radio1}`);
        this.radio25Div = document.querySelector(`#${this.divNames.radio2}`);
        this.resultDiv = document.querySelector(`#${this.divNames.result}`);
    }
    getInputValue() {
        const value = this.inputDiv.value;
        if (value)
            return Number(this.inputDiv.value);
        else
            return undefined;
    }
    writeValue(value) {
        this.resultDiv.textContent = value.toString();
    }
}
const tiles = new Tiles(divNames);
console.log(tiles.getInputValue());
