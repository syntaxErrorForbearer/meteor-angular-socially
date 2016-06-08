import 'reflect-metadata';
import { Component } from '@angular/core';
import { FormBuilder, ControlGroup, Validators, Control }	from '@angular/common';
import { Parties }	from '../../../collections/parties.ts';

@Component({
	selector: 'parties-form',
	templateUrl: '/client/imports/parties-form/parties-form.html'
})
export class PartiesForm { 
	// ControlGroup type groups provided controls together
	partiesForm: ControlGroup;

	constructor() {
		// There is a special class called FormBuilder
		let fb = new FormBuilder();

			// Each element of the form model is an instance of Control type, which binds to a form input element via NgFormModel
			// and can provide data validation in the model on demand
		this.partiesForm = fb.group({
			name: ['', Validators.required],
			description: [''],
			location: ['', Validators.required]
		});
		console.log("partiesForm.value inside constructor = " + this.partiesForm.value);
		console.log("state at the end of Partiesform constructor func = " + this.partiesForm.valid);
	}

	addParty(party) {
		if (this.partiesForm.valid) {
		console.log("partiesForm.value inside addParty = " + this.partiesForm.value);
			Parties.insert({
				name: party.name,
				description: party.description,
				location: party.location
			});
			// Each element of the form model is an instance of Control type, which binds to a form input element
			// and can provide data validation in the model on demand
			// these clear the field for the next parrrtay
			(<Control>this.partiesForm.controls['name']).updateValue('');
			(<Control>this.partiesForm.controls['description']).updateValue('');
			(<Control>this.partiesForm.controls['location']).updateValue('');
		}
	}
}