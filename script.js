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
variants.addEventListener('click',async (e)=>{
	d = e.target.value
 if('click' && d != ''){
	bag.push(d);
	let a = prompt('how many');

	if(a >0){
let j =	bag[0] + '%20'+ a 
let x =  `https://wa.me/2348155386242?text=I%20am%20interested%20${j}%20sale`;

let l = prompt('is that all please enter YES or NO')
if(l == 'yes' || l =='Yes' || l== 'YES'){
	location.href = `https://wa.me/2348155386242?text=I%20am%20interested%20${j}%20sale`;
}else{
	return
}
	}
	// console.log(bag)
	console.log(x)
}

})

data.addEventListener('click',()=>{
	location.href = `https://wa.me/2348155386242?text=I%20am%20interested%20$%20sale`;
});


