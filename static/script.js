function checkMode(event){
	if (event.target.checked)
		darkMode();
	else
		lightMode();
}

function showPage()
{
	var bd = document.getElementsByTagName('body')[0];
    bd.style.borderWidth = '0px';
    document.getElementById("page").style.display = "block";
    document.getElementById("prex").style.display = "none";
    document.getElementById("prex").style.height = "0";
    document.getElementById("prex").style.width = "0";
    document.getElementById("preloader").style.display = "none";
    document.getElementById("txtt").innerHTML = "";

    var k = document.getElementById('switch');
    k.addEventListener('change', checkMode);

    loadMode();
}

function loadMode(){
	if (localStorage.getItem('mode') == 'dark')
		darkMode();
}


function darkMode(){
	var body = document.getElementsByTagName('body')[0];
	var horSep = document.getElementsByTagName('hr');
	var nav = document.getElementById('NavBar');
	var cards = document.getElementsByClassName('card');
	var courses = document.getElementsByClassName('courses');
	var certs = document.getElementsByClassName('certs');
	var repos = document.getElementsByClassName('repos');
	var clg = document.getElementsByClassName('clg');
	var schl = document.getElementsByClassName('schls');
	var git = document.getElementById('git');
	var resumebtn = document.getElementById('res-btn');
	var insta = document.getElementById('insta');
	var linkedin = document.getElementById('linkedin');

	var containers = document.getElementsByClassName('container');
	var fluidContainers = document.getElementsByClassName('container-fluid');

	nav.classList.replace("lightnav", "darknav");
	nav.classList.replace("navbar-light", "navbar-dark");

	resumebtn.classList.replace('btn-outline-dark', 'btn-outline-light')

	git.classList.replace("git-dark", "git")
	insta.classList.replace("insta-dark", "insta")
	linkedin.classList.replace("linkedin-dark", "linkedin")

	body.style.backgroundColor = '#191919';
	body.style.backgroundImage = "url('static/img/grid-dark.svg')";

	for (var hr of horSep)
		hr.classList.replace("bg-dark", "bg-light");

	for (var rep of repos)
		rep.classList.replace("repo-dark", "repo");

	for (var cert of certs)
		cert.classList.replace("cert-dark", "cert");

	for (var crs of courses)
		crs.classList.replace("course-dark", "course");

	clg[0].classList.replace("grad-dark", "grad");
	schl[0].classList.replace("schl-dark", "schl");

	for (var card of cards)
	{
		card.classList.replace('light-card', 'dark-card')
		card.classList.replace('custom-card-light', 'custom-card-dark')
	}

	for (var cont of containers)
		cont.classList.replace('text-dark', 'text-light')

	for (var fcont of fluidContainers)
		fcont.classList.replace('text-dark', 'text-light')

	
	if (! document.getElementById('switch').checked){
		document.getElementById('switch').click();
	}

	localStorage.setItem('mode', 'dark');
}


function lightMode(){
	var body = document.getElementsByTagName('body')[0];
	var horSep = document.getElementsByTagName('hr');
	var nav = document.getElementById('NavBar');
	var cards = document.getElementsByClassName('card');
	var courses = document.getElementsByClassName('courses');
	var certs = document.getElementsByClassName('certs');
	var repos = document.getElementsByClassName('repos');
	var clg = document.getElementsByClassName('clg');
	var schl = document.getElementsByClassName('schls');
	var git = document.getElementById('git');
	var resumebtn = document.getElementById('res-btn');
	var insta = document.getElementById('insta');
	var linkedin = document.getElementById('linkedin');

	var containers = document.getElementsByClassName('container');
	var fluidContainers = document.getElementsByClassName('container-fluid');

	nav.classList.replace("darknav", "lightnav");
	nav.classList.replace("navbar-dark", "navbar-light");

	resumebtn.classList.replace('btn-outline-light', 'btn-outline-dark')

	body.style.backgroundColor = '#f3f3f3';
	body.style.backgroundImage = "url('static/img/grid-light.svg')";
	
	git.classList.replace("git", "git-dark")
	insta.classList.replace("insta", "insta-dark")
	linkedin.classList.replace("linkedin", "linkedin-dark")

	for (var hr of horSep)
		hr.classList.replace("bg-light", "bg-dark");

	for (var rep of repos)
		rep.classList.replace("repo", "repo-dark");

	for (var cert of certs)
		cert.classList.replace("cert", "cert-dark");

	for (var crs of courses)
		crs.classList.replace("course", "course-dark");

	clg[0].classList.replace("grad", "grad-dark");
	schl[0].classList.replace("schl", "schl-dark");

	for (var card of cards)
	{
		card.classList.replace('dark-card', 'light-card')
		card.classList.replace('custom-card-dark', 'custom-card-light')
	}

	for (var cont of containers)
		cont.classList.replace('text-light', 'text-dark')

	for (var fcont of fluidContainers)
		fcont.classList.replace('text-light', 'text-dark')

	if (document.getElementById('switch').checked){
		document.getElementById('switch').click();
	}

	localStorage.setItem('mode', 'light');
}

// 404 page section

function show404()
{
	var bd = document.getElementsByTagName('body')[0];
    bd.style.borderWidth = '0px';
    document.getElementById("page").style.display = "block";
    document.getElementById("prex").style.display = "none";
    document.getElementById("prex").style.height = "0";
    document.getElementById("prex").style.width = "0";
    document.getElementById("preloader").style.display = "none";
    document.getElementById("txtt").innerHTML = "";

    var k = document.getElementById('switch');
    k.addEventListener('change', check404Mode);

    load404Mode();
}

function check404Mode(event){
	if (event.target.checked)
		dark404();
	else
		light404();
}

function load404Mode(){
	if (localStorage.getItem('mode') == 'dark')
		dark404();
}


function dark404(){
	var body = document.getElementsByTagName('body')[0];
	var horSep = document.getElementsByTagName('hr');
	var nav = document.getElementById('NavBar');
	var containers = document.getElementsByClassName('container');
	var fluidContainers = document.getElementsByClassName('container-fluid');

	nav.classList.replace("lightnav", "darknav");
	nav.classList.replace("navbar-light", "navbar-dark");

	body.style.backgroundColor = '#191919';
	body.style.backgroundImage = "url('static/img/grid-dark.svg')";

	for (var hr of horSep)
		hr.classList.replace("bg-dark", "bg-light");

	for (var cont of containers)
		cont.classList.replace('text-dark', 'text-light')

	for (var fcont of fluidContainers)
		fcont.classList.replace('text-dark', 'text-light')
	
	if (! document.getElementById('switch').checked){
		document.getElementById('switch').click();
	}

	localStorage.setItem('mode', 'dark');
}

function light404(){
	var body = document.getElementsByTagName('body')[0];
	var horSep = document.getElementsByTagName('hr');
	var nav = document.getElementById('NavBar');
	var containers = document.getElementsByClassName('container');
	var fluidContainers = document.getElementsByClassName('container-fluid');

	nav.classList.replace("darknav", "lightnav");
	nav.classList.replace("navbar-dark", "navbar-light");

	body.style.backgroundColor = '#f3f3f3';
	body.style.backgroundImage = "url('static/img/grid-light.svg')";

	for (var hr of horSep)
		hr.classList.replace("bg-light", "bg-dark");

	for (var cont of containers)
		cont.classList.replace('text-light', 'text-dark')

	for (var fcont of fluidContainers)
		fcont.classList.replace('text-light', 'text-dark')

	if (document.getElementById('switch').checked){
		document.getElementById('switch').click();
	}

	localStorage.setItem('mode', 'light');
}
