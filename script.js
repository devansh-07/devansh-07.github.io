function showPage()
{
	var bd = document.getElementsByTagName('body')[0];
    bd.style.borderWidth = '0px';
    document.getElementById("page").style.display = "block";
    document.getElementById("preloader").style.display = "none";
    document.getElementById("txtt").innerHTML = "";
}