function calculate(){
var numOfEl=document.getElementsByTagName('input')[0].value;
const electrons='';
const subOrbital=0;
var debug='';
var isDone=false;
var countEllSubplay=0;
for(let orbyt=1;orbyt<=6;orbyt++){//1,2,3,4
    debug+="<mark>new orbital-->";
     debug+=orbyt+" --подслоя</mark><br/>";
     let hlpOrbyt=orbyt;
     if(hlpOrbyt>4){
         hlpOrbyt=4;
     }
     for(let countSubOrbit = 1;countSubOrbit<=hlpOrbyt;countSubOrbit++){// 1 , 1-2 ,1-2-3 , 1-2-3-4
        let countEl=countSubOrbit*2-1;
        // debug+=countEl+"<br/>";
        let countElectrons=countEl*2;
        // debug+=countElectrons+"<br/>";
    for(let e=0;e<countElectrons;e++){
        numOfEl--;
        countEllSubplay++;
        
        if(numOfEl==0){
            debug+="<mark>end of program</mark> <hr>";
            isDone=true;
            break;
        }
    }
    debug+=countEllSubplay+" electrons i that subply<br/>";
    countEllSubplay=0;
    if(isDone){break;}
        

     }if(isDone){break;}

    
}
document.getElementById('result').innerHTML=debug;
}