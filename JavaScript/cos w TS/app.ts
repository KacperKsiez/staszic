interface DivNames {
	input: string;
	radio1: string;
	radio2: string;
	result: string;
	button: string;
}

const divNames: DivNames = {
	input: 'area',
	radio1: 'tile20',
	radio2: 'radio25',
	result: 'result',
	button: 'btn',
};

class Tiles {
	private radioStates = {
		square: 'tile20',
		rectangle: 'tile25',
	};

	private inputDiv = document.querySelector(`#${this.divNames.input}`) as HTMLInputElement;
	private radio20Div = document.querySelector(`#${this.divNames.radio1}`) as HTMLInputElement;
	private radio25Div = document.querySelector(`#${this.divNames.radio2}`) as HTMLInputElement;
	private resultDiv = document.querySelector(`#${this.divNames.result}`) as HTMLSpanElement;
	private btnDiv = document.querySelector(`#${this.divNames.button}`) as HTMLButtonElement;

	constructor(private divNames: DivNames) {
		this.btnDiv.addEventListener('click', this.handleClick);
	}

	handleClick = () => {
		const value = this.getInputValue();
	};

	getInputValue(): number | undefined {
		const value = this.inputDiv.value;
		if (value) return Number(this.inputDiv.value);
		else return undefined;
	}

	writeValue(value: number) {
		this.resultDiv.textContent = value.toString();
	}
	checkRadiosCheck() {
		if (this.radio20Div.checked) return this.radioStates.square;
		else if (this.radio25Div.checked) return this.radioStates.rectangle;
		else return false;
	}
}

const tiles = new Tiles(divNames);
console.log(tiles.getInputValue());
