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
			'background-image': 'url(assets/images/gigs/22-05-29.png)',
			'background-size': 'cover'
		},
		title: 'Scooter Scrambler',
		location: 'Dubliner Irish Pub',
		description:
			"No matter if it's a Twist-n-Go or a two stroke terror all are welcome! Ska and Northern Soul for you enjoyment while you show off your bike at the pub. See you there!!",
		date: 'May 29',
		isoDate: '2022-05-29',
		time: '3pm - 7pm',
		url: 'https://www.facebook.com/events/517658389856309',
		center: {
			lat: locations[0].dubliner.lat,
			lng: locations[0].dubliner.lng
		}
	}
];
export default items;
