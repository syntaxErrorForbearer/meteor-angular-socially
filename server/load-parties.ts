import { Parties } from '../collections/parties.ts';

export function loadParties() {
	if (Parties.find().count() === 0) {
		
		console.log("inside of loadParties!");

		var parties = [
			{
				'name': 'Dubstep-free Zone',
				'description': 'Can we please just not listen to dubstep for one night!',
				'locaiton': 'Washington D.C.'
			},
			{
				'name': 'All dubstep all the time',
				'description': 'Get down, get down', 
				'locaiton': 'Washington D.C.'

			},
			{
				'name': 'Savage lounging',
				'description': 'Leisure suit requited. And only fiercest mannners.', 
				'locaiton': 'Fairfax'
			}
		];

		for (var i = 0; i < parties.length; i++) {
			Parties.insert(parties[i]);
		}
	}
}