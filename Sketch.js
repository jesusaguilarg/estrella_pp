const linea1 = {x: 0, y: 0};
const linea2 = {x: 1920, y: 937};

const ln1 = {x: 0, y: 468.5};
const ln2 = {x: 1920, y: 468.5};

const linea_up1 = {x: 0, y: 937};
const linea_up2 = {x: 1920, y: 0};

const lineal_v1 = {x: 960, y: 0};
const lineal_v2 = {x: 960, y: 937};



function setup() {
	createCanvas(windowWidth, windowHeight);
	
}


//Dibujos
function draw() {

  horizontal_line(linea1, linea2)
  horizontal_line(ln1, ln2)
  horizontal_line(linea_up1, linea_up2)
  vrt_line(lineal_v1, lineal_v2)

}


//Lineas
function horizontal_line(linea1, linea2){
	  const crossline_x = linea2.x - linea1.x;
	  const crossline_y = linea2.y - linea1.y;

	  const m = crossline_y / crossline_x;
	  const b = linea1.y - m * linea1.x;

	  point(linea1.x, linea1.y);
	  
	  let x = linea1.x + 1;
	  let y;
	  while(x != linea2.x){
	  	y = m * x + b;
	  	point(x, y);
	  	x++;
	  }

}

//mas lineas

function vrt_line(linea1,linea2){
	const crossline_x=linea1.x
	const crossline_y=linea1.y

	let y= crossline_y

	while(y != linea2.y){
		 
		point(crossline_x,y)
		y++
	}

}