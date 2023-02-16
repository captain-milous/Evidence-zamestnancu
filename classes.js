export const ID = 0;

export default class Zamestnanec {
	constructor(name, position, salary, start_date, office, extn) {
		ID = ID + 1;
		this.id = ID;
		this.name = name;
		this.position = position;
		this.salary = salary;
		this.start_date = start_date;
		this.office = office;
		this.extn = extn;
	}
	toString() {
    	return `${this.id}. ${this.name}, ${this.position}, salary ${this.salary}`;
  	}
}

export class Evidence {
	constructor(nazev) {
		this.nazev = nazev;
		this.evidence = [];
	}
	getMyList() {
		let output = "";
		for(let i = 0; i < this.evidence.length; i++) {
			output = output + this.evidence[i].toString()+` \n`;
		}
		return output;
	}
	addZam(Zamestnanec) {
		this.evidence.push(Zamestnanec);
	}
	removeZam(Zamestnanec) {
		this.evidence.remove(Zamestnanec);
	}
}

export {ID, Zamestnanec, Evidence};