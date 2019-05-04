var participants1 = [
	'Abdulrohman Al-Akrad',
	'Ahmad Aldarkashli',
	'Ammar Alkhooly',
	'Ayman Alhariri',
	'Besslan',
	'Esraa Ramahi',
	'Hasan Al-Abrash',
	'Mohammad Elokour',
	'Mohammad Jozaa',
	'Yazan Eliwah',
	'Yazan Alnajjar',
	'Yousef (Joe)',
	'Ahmad(coach)',
	'Amer Alkharashgah',
	'Areej Obaid',
	'Basma Al-Tayeh',
	'Canaan',
	'Fatema',
	'Hamza Olimat',
	'Hamzeh Obiedat',
	'Huda Al-Raee',
	'Iman Elokour',
	'Jomana Obaida',
	'Laith Obeidat',
	'Mahmoud',
	'Medina Sheikh',
	'Mohammad Hassan',
	'Moatasem Fayez Alraggad',
	'Oday Abueid',
	'Qusai Alzunaymat',
	'Raed Shhabeddin',
	'Rafat Ahmed',
	'Rawan Akram',
	'Rubah Addad',
	'Sahar',
	'Samia Albess',
	'Sara Bashaireh',
	'Shareef',
	'Wael',
	'Yasser Qasem',
	'Yazan Eliwah',
	'Yousef Alshabah',
	'Kelsey',
	'Mr. Hugh Bosely',
	'Bayan Alraqqad',
	'Zainab Hammami',
	'Seif Miehair'
];

// var participants2 = ["Yaser","Asmaa","Somaya","Ammar","Basel","Mohammad","Ahmad","Ibrahim"];

function randomName(myArray) {
	var random = Math.floor(Math.random() * myArray.length);
	var name = myArray[random];
	myArray.splice(random, 1);
	return name;
}

$(document).ready(function() {
	$('#generaten').on('click', function(myArray) {
		$('#whois').html('');
		$('#whois').append('<h1>' + randomName(participants1) + '</h1>');
		inputs().crazy();
		inputs().stupid();
		inputs().smart();
		inputs().nerd();
		inputs().lazy();
		inputs().cool();
		inputs().cheater();
		inputs().legChair();
		inputs().chair();
		inputs().funny();
		inputs().annoying();
		inputs().handsome();
		inputs().beautiful();
		inputs().ugly();
		inputs().famous();
		inputs().angry();
		inputs().sad();
		inputs().depressed();
		inputs().happy();
		inputs().leaving();
		inputs().dangerous();
		inputs().fat();
		inputs().esbello();
		inputs().strong();
		inputs().cryBaby();
	});

	$('.reload').on('click', function() {
		location.reload();
	});
});

function inputs() {
	var instance = {};

	instance.crazy = crazy;
	instance.stupid = stupid;
	instance.smart = smart;
	instance.nerd = nerd;
	instance.lazy = lazy;
	instance.cool = cool;
	instance.cheater = cheater;
	instance.legChair = legChair;
	instance.chair = chair;
	instance.funny = funny;
	instance.annoying = annoying;
	instance.handsome = handsome;
	instance.beautiful = beautiful;
	instance.ugly = ugly;
	instance.famous = famous;
	instance.angry = angry;
	instance.sad = sad;
	instance.depressed = depressed;
	instance.happy = happy;
	instance.leaving = leaving;
	instance.dangerous = dangerous;
	instance.fat = fat;
	instance.esbello = esbello;
	instance.strong = strong;
	instance.cryBaby = cryBaby;

	return instance;
}

function crazy() {
	console.log($('#input').val().toLowerCase());

	if ($('#input').val().toLowerCase() === 'crazy') {
		$('#image').html('');
		$('#image').append('<img src="https://thumbs.gfycat.com/CraftyShoddyKid-size_restricted.gif">');
	}
}

function stupid() {
	console.log($('#input').val().toLowerCase());

	if ($('#input').val().toLowerCase() === 'stupid') {
		$('#image').html('');
		$('#image').append(
			'<img src="https://media1.tenor.com/images/46184ba586520186efd7b06d7d876256/tenor.gif?itemid=10099218">'
		);
	}
}

function smart() {
	console.log($('#input').val().toLowerCase());

	if ($('#input').val().toLowerCase() === 'smart') {
		$('#image').html('');
		$('#image').append(
			'<img src="https://media1.tenor.com/images/b06111ca4f61490fe7dc535e0250d603/tenor.gif?itemid=7713620">'
		);
	}
}

function nerd() {
	console.log($('#input').val().toLowerCase());

	if ($('#input').val().toLowerCase() === 'nerd') {
		$('#image').html('');
		$('#image').append('<img src="https://media.giphy.com/media/yODVOeMxWBwBO/giphy.gif">');
	}
}

function lazy() {
	console.log($('#input').val().toLowerCase());

	if ($('#input').val().toLowerCase() === 'lazy') {
		$('#image').html('');
		$('#image').append(
			'<img src="https://media1.tenor.com/images/d6f9560d7bf4cc39b630595050702215/tenor.gif?itemid=4149575">'
		);
	}
}

function cool() {
	console.log($('#input').val().toLowerCase());

	if ($('#input').val().toLowerCase() === 'cool') {
		$('#image').html('');
		$('#image').append('<img src="https://media.giphy.com/media/3o6UBhjHobLFgEmrJu/giphy.gif">');
	}
}

function cheater() {
	console.log($('#input').val().toLowerCase());

	if ($('#input').val().toLowerCase() === 'cheater') {
		$('#image').html('');
		$('#image').append('<img src="https://media.giphy.com/media/Qz05KZBMUZA8E/giphy.gif">');
	}
}

function legChair() {
	console.log($('#input').val().toLowerCase());

	if ($('#input').val().toLowerCase() === 'chair leg') {
		$('#image').html('');
		$('#image').append(
			'<img src="https://s3.eu-west-1.amazonaws.com/sleeproom.assets.d3r.com/images/original/162655-oc-smu-smudge-office-upholstered-chair-study-dl.jpg">'
		);
	}
}

function chair() {
	console.log($('#input').val().toLowerCase());

	if ($('#input').val().toLowerCase() === 'chair') {
		$('#image').html('');
		$('#image').append(
			'<img src="https://harrows.co.nz/assets/uploads/2019/01/CH-Ginger-Chair-tan-uphol-GIF.gif">'
		);
	}
}

function funny() {
	console.log($('#input').val().toLowerCase());

	if ($('#input').val().toLowerCase() === 'funny') {
		$('#image').html('');
		$('#image').append(
			'<img src="https://media1.tenor.com/images/4858f43f53f0ae4cc4d9f48ef06ff002/tenor.gif?itemid=4440543">'
		);
	}
}

function annoying() {
	console.log($('#input').val().toLowerCase());

	if ($('#input').val().toLowerCase() === 'annoying') {
		$('#image').html('');
		$('#image').append(
			'<img src="https://media1.tenor.com/images/fc3d26e390806769995f75b3e14080d7/tenor.gif?itemid=11802869">'
		);
	}
}

function handsome() {
	console.log($('#input').val().toLowerCase());

	if ($('#input').val().toLowerCase() === 'handsome') {
		$('#image').html('');
		$('#image').append('<img src="https://i.gifer.com/X1Kt.gif">');
	}
}

function beautiful() {
	console.log($('#input').val().toLowerCase());

	if ($('#input').val().toLowerCase() === 'beautiful') {
		$('#image').html('');
		$('#image').append('<img src="https://media1.giphy.com/media/RLVHPJJv7jY1q/giphy.gif">');
	}
}

function ugly() {
	console.log($('#input').val().toLowerCase());

	if ($('#input').val().toLowerCase() === 'ugly') {
		$('#image').html('');
		$('#image').append(
			'<img src="http://37.media.tumblr.com/6cd3499a93b220626cbd1e8294ca8871/tumblr_mkudzpdZeC1reyd4yo1_500.gif">'
		);
	}
}

function famous() {
	console.log($('#input').val().toLowerCase());

	if ($('#input').val().toLowerCase() === 'famous') {
		$('#image').html('');
		$('#image').append('<img src="https://media.giphy.com/media/PWZ5AWxUMaUxO/giphy.gif">');
	}
}

function angry() {
	console.log($('#input').val().toLowerCase());

	if ($('#input').val().toLowerCase() === 'angry') {
		$('#image').html('');
		$('#image').append(
			'<img src="https://media1.tenor.com/images/dc560a63f5b025d1600ee8164e6848cd/tenor.gif?itemid=3482842">'
		);
	}
}

function sad() {
	console.log($('#input').val().toLowerCase());

	if ($('#input').val().toLowerCase() === 'sad') {
		$('#image').html('');
		$('#image').append('<img src="https://media.giphy.com/media/l378w70Nxv0alv2qk/giphy.gif">');
	}
}

function depressed() {
	console.log($('#input').val().toLowerCase());

	if ($('#input').val().toLowerCase() === 'depressed') {
		$('#image').html('');
		$('#image').append('<img src="https://media.tenor.com/images/62e9489a17457146e58eef82b685e924/tenor.gif">');
	}
}

function happy() {
	console.log($('#input').val().toLowerCase());

	if ($('#input').val().toLowerCase() === 'happy') {
		$('#image').html('');
		$('#image').append('<img src="http://mashable.com/wp-content/uploads/2013/07/crazy-dance.gif">');
	}
}

function leaving() {
	console.log($('#input').val().toLowerCase());

	if ($('#input').val().toLowerCase() === 'leaving') {
		$('#image').html('');
		$('#image').append('<img src="https://i.kym-cdn.com/photos/images/original/001/029/005/809.gif">');
	}
}

function dangerous() {
	console.log($('#input').val().toLowerCase());

	if ($('#input').val().toLowerCase() === 'dangerous') {
		$('#image').html('');
		$('#image').append('<img src="https://media3.giphy.com/media/3ohc11UljvpPKWeNva/giphy.gif">');
	}
}

function fat() {
	console.log($('#input').val().toLowerCase());

	if ($('#input').val().toLowerCase() === 'fat') {
		$('#image').html('');
		$('#image').append('<img src="https://i.imgur.com/0ZgDg.gif">');
	}
}

function esbello() {
	console.log($('#input').val().toLowerCase());

	if ($('#input').val().toLowerCase() === 'esbello') {
		$('#image').html('');
		$('#image').append('<img src="https://i.pinimg.com/originals/d2/02/74/d202746e84116fedc88e6c9cdd87cd13.gif">');
	}
}

function strong() {
	console.log($('#input').val().toLowerCase());

	if ($('#input').val().toLowerCase() === 'strong') {
		$('#image').html('');
		$('#image').append('<img src="https://www.nicknotas.com/wp-content/uploads/2011/06/Popeye.gif">');
	}
}

function cryBaby() {
	console.log($('#input').val().toLowerCase());

	if ($('#input').val().toLowerCase() === 'cry baby' || $('#input').val().toLowerCase() === 'baby') {
		$('#image').html('');
		$('#image').append('<img src="http://www.lequzhai.com/data/out/66/685533.gif">');
	}
}
