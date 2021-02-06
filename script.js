let data = document.getElementById('data');
let variants = document.getElementById("variants");
let amount = document.getElementById("amount");
let item = document.getElementById("item");
// let amnt = document.getElementById("amnt")[0].value;
let amnt = document.getElementsByTagName("input")[0].value;
let bag = [];
let x = ''
let j = []

// let x =  `https://wa.me/15551234567?text=I%20am%20interested%20in${bag[0]}r%20sale`;
amount.style.display = 'none'
variants.addEventListener('change',async (e)=>{
	d = e.target.value
 if('change' && d != ''){
	bag.push (d);
	let a = prompt(`how many packs of ${d} plantain are you interested in please`);
	if(a > 0){

	let o = prompt('what price range are you orderding from please')

		let j =	 a + " packs" + " " + bag[0] +" " +'plantain' +" " + o; 
alert(`thank you for orderding ${j}, you will be redirected to sales now, thank you`)
	
		location.href = `https://wa.me/2348155386242?text=Good%20afternoon%20please%20%20%20I%20am%20interested%20in%20${a}%20packs%20of${0}%20${d}chips%20for%20sale`;
	

console.log(j)

// let x =  `https://wa.me/2348155386242?text=I%20am%20interested%20${j}%20sale`;

// let l = prompt('is that all please enter YES or NO')
// if(l == 'yes' || l =='Yes' || l== 'YES'){
// 	location.href = `https://wa.me/2348155386242?text=Good%20afternoon%20please%20%20%20I%20am%20interested%20in%${j}%20for%20sale`;
// }
// if(l == 'no' || l =='No' || l== 'NO'){



// 	location.href = `https://wa.me/2348155386242?text=Good%20afternoon%20please%20%20%20I%20am%20interested%20in%${j}%20for%20sale`;
// }
}
	// console.log(bag)
	console.log(d)
}

})

data.addEventListener('click',()=>{
	location.href = `https://wa.me/2348155386242?text=Good%20afternoon%20please%20%20%20I%20am%20interested%20in%20chips%20for%20sale`;
});


