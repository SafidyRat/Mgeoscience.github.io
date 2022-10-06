var files=[ "./geoid/corgeoid.txt", "./geoid/EGM0825min2.txt","./geoid/wgmbouguer.txt", "./geoid/EGM2008GridData.txt"];


var datacor=[];
var Longcor=[];
var Latcor=[];
var Cor=[] ;
var Datab=[];
var sp=[];
var tosplit;
var locName=[];
var testData=[];
var i=0;
var addressPoints=[];

var intensity=[];
  var xgrid=[];
  var ygrid=[];
  var xgridl=[];
  var ygridl=[];

    var reader  = new XMLHttpRequest()|| new ActiveXObject('MSXML2.XMLHTTP');
    var datacorr=[];


function loadcor(){
     Datab=[];
     tosplit=null;
     sp=null;

    reader.open("get",files[i], true);
    reader.onreadystatechange=  storedata;
    //reader.send(null);
   
   }

function storedata (){

    if(reader.readyState==4) {
   
          
           //READ Correction DATA
           datacor=null;
           datacorr=reader.responseText.split("\n");

           datacor=datacorr;


           if(i==0){

         
  for(let j=0; j<=datacor.length-3;j++)
  {
    sp = [];
    tosplit = String(datacor[j+1]); 
    sp = tosplit.split("\t");

    locName[j]=sp[0];
    Longcor[j] = parseFloat(sp[2]);
    Latcor[j] = parseFloat(sp[1]);
      Cor[j] =parseFloat(sp[3]);

  }

}

if(i==1){


    var l=0;
  for(let j=0; j<=datacor.length-3;j++)
    {
      sp = [];
      tosplit = String(datacor[j+1]); 
      sp = tosplit.split("\t");

  
      Longcor[j] = parseFloat(sp[0]);
     

      Latcor[j] = parseFloat(sp[1]);
      

        Cor[j] =(sp[2]);
      
      

    }

}


if(i==2){

    for(let j=0; j<=datacor.length-3;j++)
    {
      sp = [];
      tosplit = String(datacor[j+1]); 
      sp = tosplit.split("\t");

      locName[j]=sp[0];
      Longcor[j] = parseFloat(sp[1]);
      Latcor[j] = parseFloat(sp[2]);
        Cor[j] =parseFloat(sp[3]);

    }



}


//////////read as grid data

if(i==3){
  





  for(let j=6; j<=datacor.length;j++)
  {
    sp = [];
    tosplit = String(datacor[j]); 

    /*async function firstFunction(){
      sp = tosplit.split(" ");
      sp= sp.slice(1);
      return;
    };*/

    sp = tosplit.split(" ");
    sp= sp.slice(1);

    //firstFunction();


    
    intensity.push(sp);
    console.log( sp.length);


  }

  

  //generate coordinate of grid



  var s=0;

  for(let j=0; j<=datacor.length-6;j++){
    ygridl=[];
    xgridl=[];
    
    for(let i=0; i<= 210;i++)
    {
      xgridl[i]=42.3958333+0.041666*(i);
    
      
      ygridl[i]=(-1)*11.437499+(-0.04166)*s;

    }
    s=s+1;

    ygrid.push(ygridl);

    xgrid.push(xgridl);

    //console.log(ygridl);

  





    //console.log("fffffff" +ygrid);
 
}
console.log( ygrid);
console.log( "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");

console.log( xgrid);


}


  
var obj=[];
for(let f=0; f<=datacor.length-3; f++){

  obj[f]={lat: Latcor[f], lng: Longcor[f], count: Cor[f]}
  Datab.push(obj[f]);

  
 
}




////

  

      testData[i] = {
    
       
        data: Datab
      };

      if (i<=3){
          i=i+1;
        loadcor();

      }

    else{
        display();
        window.open("http://127.0.0.1:5500/contour.html");
       

    }


           
        
    //return console.log(datacorr);

           
           }
      }