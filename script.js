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
let x =  `https://wa.me/15551234567?text=I%20am%20interested%20${j}%20sale`;
	console.log(bag)
	console.log(x)
	console.log(j)
	// let c =	prompt('is that all')
	
	// 		if(c == 'no'){
	// 				console.log(x)
	// 		}else{

			// }
		
	}
	// console.log(bag)
	console.log(x)
}

})

data.addEventListener('click',()=>{
	location.href = `https://wa.me/15551234567?text=I%20am%20interested%20in%20y${bag}%20car%20for%20sale`
});

