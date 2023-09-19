var types = ["electricidad","agua","fuego","hierba"];
function calculateDamege(type1,type2,attack,defense){
    var efficacy =0.5;
    if(type1!=type2){
        if(type1 =="fuego" && type2 == "hierba")efficacy=2;
        if(type1 =="agua" && type2 == "fuego")efficacy=2;
        if(type1 =="hierba" && type2 == "agua")efficacy=2;
        if(type1 =="electricidad" && type2 == "agua")efficacy=2;
        if(type1 =="fuego" && type2 == "electrico" || (type2 == " fuego" && type1 == "electrico"))efficacy=1;
        if(type1 =="fuego" && type2 == "hierba"|| (type2 == " fuego" && type1 == "hierba"))efficacy=1;
    }
    return Math.ceil(50*(attack/defense)*efficacy);
}

document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    const damageCalculator = document.getElementById("damageCalculator");
    const result = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const type1 = document.getElementById("type1").value;
        const type2 = document.getElementById("type2").value;
        const attack = parseInt(document.getElementById("attack").value);
        const defense = parseInt(document.getElementById("defense").value);

        const damage = calculateDamege(type1, type2, attack, defense);
        result.innerText = `El daño calculado es: ${damage}`;
    });
});