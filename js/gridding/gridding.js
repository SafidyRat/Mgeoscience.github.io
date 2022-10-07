




    
    ////read data
    var file="./geoid/ascii _raster_file/EGM2008Res.asc";
    var reader  = new XMLHttpRequest()|| new ActiveXObject('MSXML2.XMLHTTP');
    var datacorr=[];
    var datacor=[];

  var intensity=[];
  var xgrid=[];
  var ygrid=[];
  var xgridl=[];
  var ygridl=[];
  var heatmapLayer2;




function loadcor(){

     tosplit=null;
     sp=null;

    reader.open("get",file, true);
    reader.onreadystatechange=  storedata;
    reader.send(null);
   
   }

   loadcor();
function storedata (){
   if(reader.readyState==4) {
        
   //READ Correction DATA
   datacor=null;
   datacorr=reader.responseText.split("\n");

   datacor=datacorr;
/////////////load intensity
   for(let j=6; j<=datacor.length-3;j++)
  {
    sp = [];
    tosplit = String(datacor[j]); 
   

  
    sp = tosplit.split(" ");
    sp= sp.slice(0);
    //sp=sp.push("");
   

    sp=sp.map(s => parseFloat(s));

    sp[0]=null;
    sp[sp.length]=null;

    if(j==6){
      sp=sp.map(s=>null);
    }
    if(j==datacor.length-3){
      sp=sp.map(s=>null);
    }


    //firstFunction();

    intensity.push(sp);
    
  }




//////genrate coordinate drid
  var s=0;

  for(let j=0; j<=300;j++){
    ygridl=[];
    xgridl=[];
    
    for(let i=0; i<= 300;i++)
    {
      xgridl[i]=42.3958 +0.4861111*(i);
      
      ygridl[i]=(-1)*11.4375+(-0.497311)*s;
     
    }
    s=s+1;

    ygrid.push(ygridl);

    xgrid.push(xgridl);

 
}








//////////////////////////////////////////////////////////////////////////////////////////allllllllllllll
const data= {
x: xgrid,
y: ygrid,
z: intensity,
};

console.log( data.z[20]);
console.log( data.x[20]);
/*
let a = document.createElement('a');
a.href = "data:application/octet-stream,"+encodeURIComponent(data.x);
a.download = 'abc.txt';
a.click();*/

//console.log(data.z[0]);


const colors = [
        {
          color: "#053061",
          point: 0,
        },
        {
          color: "#09386d",
          point: 0.032258064516129,
        },
        {
          color: "#134c87",
          point: 0.0645161290322581,
        },
        {
          color: "#1d5fa2",
          point: 0.0967741935483871,
        },
        {
          color: "#276eb0",
          point: 0.129032258064516,
        },
        {
          color: "#337eb8",
          point: 0.161290322580645,
        },
        {
          color: "#3f8ec0",
          point: 0.193548387096774,
        },
        {
          color: "#569fc9",
          point: 0.225806451612903,
        },
        {
          color: "#71b0d3",
          point: 0.258064516129032,
        },
        {
          color: "#8dc2dc",
          point: 0.290322580645161,
        },
        {
          color: "#a2cde3",
          point: 0.32258064516129,
        },
        {
          color: "#b8d8e9",
          point: 0.354838709677419,
        },
        {
          color: "#cfe4ef",
          point: 0.387096774193548,
        },
        {
          color: "#ddebf2",
          point: 0.419354838709677,
        },
        {
          color: "#eaf1f5",
          point: 0.451612903225806,
        },
        {
          color: "#f7f6f6",
          point: 0.483870967741936,
        },
        {
          color: "#f9eee7",
          point: 0.516129032258065,
        },
        {
          color: "#fbe4d6",
          point: 0.548387096774194,
        },
        {
          color: "#fdd9c4",
          point: 0.580645161290323,
        },
        {
          color: "#f9c6ac",
          point: 0.612903225806452,
        },
        {
          color: "#f6b394",
          point: 0.645161290322581,
        },
        {
          color: "#f2a17f",
          point: 0.67741935483871,
        },
        {
          color: "#e8896c",
          point: 0.709677419354839,
        },
        {
          color: "#dd7059",
          point: 0.741935483870968,
        },
        {
          color: "#d25849",
          point: 0.774193548387097,
        },
        {
          color: "#c53e3d",
          point: 0.806451612903226,
        },
        {
          color: "#b82531",
          point: 0.838709677419355,
        },
        {
          color: "#a81529",
          point: 0.870967741935484,
        },
        {
          color: "#8d0c25",
          point: 0.903225806451613,
        },
        {
          color: "#730421",
          point: 0.935483870967742,
        },
        {
          color: "#67001f",
          point: 1,
        },
      ];
      function getColor(value, min, max, colors) {
        function hex(c) {
          var s = "0123456789abcdef";
          var i = parseInt(c, 10);
          if (i === 0 || isNaN(c)) return "00";
          i = Math.round(Math.min(Math.max(0, i), 255));
          return s.charAt((i - (i % 16)) / 16) + s.charAt(i % 16);
        }
        function trim(s) {
          return s.charAt(0) === "#" ? s.substring(1, 7) : s;
        }
        function convertToRGB(hex) {
          var color = [];
          color[0] = parseInt(trim(hex).substring(0, 2), 16);
          color[1] = parseInt(trim(hex).substring(2, 4), 16);
          color[2] = parseInt(trim(hex).substring(4, 6), 16);
          return color;
        }
        function convertToHex(rgb) {
          return hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
        }

        if (value === null || isNaN(value)) {
          return "#ffffff";
        }
        if (value > max) {
          return colors[colors.length - 1].color;
        }
        if (value < min) {
          return colors[0].color;
        }
        var loc = (value - min) / (max - min);
        if (loc < 0 || loc > 1) {
          return "#fff";
        } else {
          var index = 0;
          for (var i = 0; i < colors.length - 1; i++) {
            if (loc >= colors[i].point && loc <= colors[i + 1].point) {
              index = i;
            }
          }
          var color1 = convertToRGB(colors[index].color);
          var color2 = convertToRGB(colors[index + 1].color);

          var f =
            (loc - colors[index].point) /
            (colors[index + 1].point - colors[index].point);
          var rgb = [
            color1[0] + (color2[0] - color1[0]) * f,
            color1[1] + (color2[1] - color1[1]) * f,
            color1[2] + (color2[2] - color1[2]) * f,
          ];

          return `#${convertToHex(rgb)}`;
        }
      }




      //var map = L.map("mapid").setView([-18, 44], 6);

 
/*
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
        {
          maxZoom: 18,
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
        }
      ).addTo(map);*/

     

       heatmapLayer2= L.contour(data, {
        thresholds:100,
        style: (feature) => {
          return {
            color: getColor(feature.geometry.value, -29,10, colors),
            opacity: 0.01,
            fillOpacity: 0.05,
          };
        },
        onEachFeature: onEachContour(),
      });

      function onEachContour() {
        return function onEachFeature(feature, layer) {
          //console.log(feature.value);
      
          layer.bindPopup(
            `<table><tbody><tr><td>${feature.value}°C</td></tr></tbody></table>`
          );
        };

      

      }

  
  }

}















    
    
    
