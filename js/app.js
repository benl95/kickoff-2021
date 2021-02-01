const url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/';
const path = `${url}/squads/2/teams/6/members`;
const mugshot =
	'https://avatars.githubusercontent.com/u/43675725?s=400&u=8f8850b53c4e07e1b86805c4fb29dd238ee065d3&v=4';
const githubHandle = 'https://github.com/benl95';
const sport = ['MMA', 'Gaming', 'Anime'];
const music = ['Hiphop', 'R&B', 'Rock'];
const workingSpot = ['Home', 'Office'];

// GET Request
const teams = fetch(`${url}/squads/2/teams/6/members`)
	.then((response) => response.json())
	.then((data) => console.log('fetch', data));

// Put data
const putData = {
	id: 5,
	teamId: 6,
	name: 'Ben',
	prefix: '',
	surname: 'Langenberg',
	mugshot: mugshot,
	githubHandle: githubHandle,
	other: {
		sport: sport,
		muziek: music,
		werkplek: workingSpot,
	},
};

async function postData(url = `${path}`, data = { putData }) {
	const response = await fetch(url, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	return response.json();
}

postData(`${url}/squads/2/teams/6/members/5`, putData).then((data) => {
	console.log('put', data);
});

// Render data to html

let header = document.getElementById('name');
header.innerHTML = putData.name + ' ' + putData.surname;
console.log(header);

let team = document.getElementById('team');
team.innerHTML = `Team: Squid ${putData.teamId}`;
console.log(team);

let handle = document.getElementById('handle');
handle.href = 'https://github.com/benl95';
handle.innerHTML = 'Github Handle';
console.log(handle);
