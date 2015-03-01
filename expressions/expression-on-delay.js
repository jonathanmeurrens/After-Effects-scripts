// execute an expression on delay

t = time - marker.key(1).time;
veloc = 17
amplitude = 50
decay = 7

if (t < 0){
	value;
}
else{
	res=transform.position[1]+amplitude*Math.sin(veloc*t)/Math.exp(decay*t);
	[transform.position[0],res]
}