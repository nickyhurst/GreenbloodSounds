const locations = [
	{
		anvilPub: { lat: 32.78435420484109, lng: -96.78482158017653 },
		threeLinks: { lat: 32.78435566325429, lng: -96.78453351340737 },
		dubliner: { lat: 32.82351572497492, lng: -96.7698894397948 },
		gasMonkey: { lat: 32.85776500687161, lng: -96.89295159948703 },
		charlies: { lat: 32.78776834329192, lng: -96.7692109378483 }
	}
];

const items = [
	{
		bgImage: {
			'background-image': 'url(assets/images/gigs/22-07-02.png)',
			'background-size': 'cover'
		},
		title: 'Syndicate Sound System',
		location: 'Charlies Star Lounge',
		description: 'Let the music fill your soul while your feet hit the floor!',
		date: 'July 2',
		isoDate: '2022-07-02',
		time: '9pm - 2am',
		url: 'https://www.facebook.com/events/374645727849956',
		center: {
			lat: locations[0].charlies.lat,
			lng: locations[0].charlies.lng
		}
	}
];
export default items;
