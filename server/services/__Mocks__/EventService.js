const Services = jest.genMockFromModule('../../services/EventService');
const keys = ['email', 'first_name', 'last_name', 'password'];


function createEvent(data){
	const newEvent = {'_id':'5e2bb4004809b000d6141c73','events_create':[],'events_assist':[],'is_active':true,'first_name':'Edwin','last_name':'Salgado','email':'edwin@devf.mx','gender':'M'};

	return new Promise((resolve) => {
		if (keys.every(e => Object.keys(data).includes(e))) {
			resolve(newEvent);
		}else{
			throw new Error('Validadtion Error');
		}
	});

}

function getEvent(){
	const Event = [
		[
			{
				'_id': '5e2bb4004809b000d6141c73',
				'email': 'edwin@devf.mx',
				'first_name': 'Edwin',
				'last_name': 'Salgado'
			},
			{
				'_id': '5e2bb451085a6c08f1047931',
				'email': 'edwin2@devf.mx',
				'first_name': 'Edwin',
				'last_name': 'Salgado'
			},
			{
				'_id': '5e2f8b9027412c51ac20ec88',
				'email': 'edwin3@devf.mx',
				'first_name': 'edwin 7',
				'last_name': 'Salgado'
			},
			{
				'_id': '5e30ebd337a07c35106986be',
				'email': 'edwin4@devf.mx',
				'first_name': 'Edwin',
				'last_name': 'Salgado'
			},
			{
				'_id': '5e34b624eb5dec527f90efbf',
				'email': 'edprueba@gmail.com',
				'first_name': 'Ed prueba',
				'last_name': 'Salgado'
			}
		]
	];

	return new Promise((resolve) => {
		resolve(Event);
	});
}

Services.createEvent = createEvent;
Services.getEvent = getEvent;

module.exports = Services;