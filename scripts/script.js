var buyf = false;
function buy(){
	if (!buyf){
		document.getElementById('btn').style.background = 'lime';
		document.getElementById('btn').innerHTML ='В корзине';
		buyf = true;
	} else {
		document.getElementById('btn').style.background = 'Silver';
		document.getElementById('btn').innerHTML = "Купить";
		buyf = false
	}
}
