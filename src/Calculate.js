export function Calculate(item , prices, pieces){
    let n = item[0] * pieces[0] + item[1]  * pieces[1] + item[2] * pieces[1] * pieces[2] 
    let totalUnit = pieces[0] * pieces[1] * pieces[2]; 
    let box = 0;
     let packs = 0;
     let bottles = 0;
     if(n >= totalUnit){
         box = Math.floor(n/totalUnit);
         n = n % totalUnit;
     }
     if(n >= pieces[1]){
         packs = Math.floor(n / pieces[1]);
         bottles = bottles + n % pieces[1];
     }
     else{
         bottles = n + bottles;
     }
     let totalPrices = bottles * prices[0] + packs * prices[1] +  box * prices[2];
     return `Bottles: ${bottles} Packs: ${packs} Boxes: ${box} total costs: ${totalPrices}€`
 }


