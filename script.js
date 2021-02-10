let data = document.getElementById('data');
let variants = document.getElementById("variants");
let amount = document.getElementById("amount");
let item = document.getElementById("item");
let amnt = document.getElementsByTagName("input")[0].value;
let bag = [];
let x = ''
let j = []

amount.style.display = 'none'
variants.addEventListener('change', async (e) => {
    d = e.target.value
    if ('change' && d != '') {

        bag.push(d);
        let a = prompt(`how many packs of ${d} plantain are you interested in please`);
        if (a > 0) {
            let o = prompt('what price range are you orderding from please? our retail prices range from N200,N500,N1000 and N2500');
            let j = a + " packs" + " " + bag[0] + " " + 'plantain' + " " + o;
            alert(`thank you for orderding ${j}, you will be redirected to sales now, thank you`)
            location.href = `https://wa.me/2348155386242?text=Good%20afternoon%20please%20%20%20I%20am%20interested%20in%20${a}%20packs%20of%20w${o}%20${d}chips%20for%20sale`;
            console.log(j)
        }
    }
})
async data.addEventListener('click', () => {

    location.href = `https://wa.me/2348155386242?text=Good%20afternoon%20please%20%20%20I%20am%20interested%20in%20chips%20for%20sale`;
});