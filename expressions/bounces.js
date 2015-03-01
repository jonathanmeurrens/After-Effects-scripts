// horizontal bounce from left to right

veloc = 17
amplitude = 50
decay = 5
res=transform.position[0]+amplitude*Math.sin(veloc*time)/Math.exp(decay*time);
[res,transform.position[1]]

// vertical bounce

veloc = 17
amplitude = 50
decay = 5
res=transform.position[1]+amplitude*Math.sin(veloc*time)/Math.exp(decay*time);
[transform.position[0],res]

// ball bounce

veloc = 10; 
amplitude = 200; 
decay = 0.7;
ypos = -Math.abs(amplitude*Math.sin(veloc*time)/Math.exp(decay*time));
thisComp.layer("controller").effect("positie")("Point")+[640,360]+[0, ypos]