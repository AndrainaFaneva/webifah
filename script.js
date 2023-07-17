const now = new Date();

function getLeft(n) {
    return `--left:calc((100% / 7) * ${n} + 4px);`
}

const getID = (id)=> {
    return document.getElementById(id)
}

function showMonth(date) {
    let tp = 100/7;
    let today = date;
    let reponse = '';
    for (let x = 0; x <= 31; x++) {
        let isNow = (today.getDate() == now.getDate()) && (today.getYear() == now.getYear()) && (today.getMonth() == now.getMonth())
        reponse += `<span class="day ${isNow?'now': ''}" style="${getLeft(today.getDay())};--top:calc(${tp}% + 4px);">${today.getDate()}</span>`
        if (today.getDay() == 6)tp += 100/7
        today.setDate(today.getDate()+1)
        if (today.getDate() == 1)break
    }
    return reponse;
}

function addLMMJ() {
    let reponse = '';
    let i = 0;
    for (let x of "DLMMJVS".split('')) {
        reponse += `<i class='dayTitle' style="${getLeft(i)};--top: 5px">${x}</i>`
        i++
    }
    return reponse
}
const allMonth = "Janvier,Fevrier,Mars,Avril,Mai,Juin,Juillet,Août,Septembre,Octobre,Novembre,Décembre".split(",")

function showLayout(title,date){
    let rp='';
    rp += `<div id="${title}" class="month_layout"><span class="title">${title}</span>${addLMMJ()+showMonth(date)}</div>`
    return rp
}
for (let x in allMonth) {
    getID("calendar_layout").innerHTML+=showLayout(allMonth[x],new Date(2023,x,1))
}
getID("calendar_layout").innerHTML+=showLayout("My Birthday",new Date(2003,11,25))
getID("calendar_layout").innerHTML+=showLayout("Mai 2077",new Date(2077,4,1))