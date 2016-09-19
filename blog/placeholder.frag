// Author: 
// Title: 

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float inv_rect (vec2 st, float x, float y) {
    return step(x, abs(st.x-.5)) + step(y, abs(st.y - .5));
}

float rect (vec2 st, float x, float y) {
    return 1.-(step(x, abs(st.x-.5)) + step(y, abs(st.y - .5)));
}


float noise(float seed) {
    float i = floor(seed);
    float f = fract(seed);
    float u = f;
    return smoothstep(i, i+1., u);
}
float rand(float theta) {	
    return fract(sin(floor(theta))*10000.);
}

float noise_rect (vec2 st, float x, float y) {
    //return step(abs(st.x-.5)+noise(rand(st.y)),x) + step(abs(st.y - .5)+noise(rand(st.y)),y);
    //vec2 vect = step(vec2(x+noise(rand(u_time+st.y*3000.)) ,y+noise(rand(u_time+st.x*5500.))), st - .5 + step(.5-x, 0.));
    return step(1.,step(x, abs(st.x-.5)) +
                step(y, abs(st.y - .5)))-(29.*noise(rand(st.y)*st.x*u_time*10.));
}

float bounded_noise_rect (vec2 st, float x, float y, float endx, float endy, float rate) {
    //return step(abs(st.x-.5)+noise(rand(st.y)),x) + step(abs(st.y - .5)+noise(rand(st.y)),y);
    //vec2 vect = step(vec2(x+noise(rand(u_time+st.y*3000.)) ,y+noise(rand(u_time+st.x*5500.))), st - .5 + step(.5-x, 0.));
    float xdist = abs(st.x-.5);
    float ydist = abs(st.y-.5);
    if (xdist > endx) {
        return 0.;
    }
    if (ydist > endy) {
        return 0.;
    }
    float ans =  step(1.,step(x, abs(st.x-.5)) +
                step(y, abs(st.y - .5)))-(29.*noise(rand(st.y*st.x*u_time*rate)));
    return ans;
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    vec3 usecol;
    vec3 usecol2;
    if (st.x <= 1.) {
        usecol = vec3(st.y,st.y/2.,st.y/3.);
        usecol2 = vec3(st.y/3.,st.y/2.,st.y/2.);
    }
    else if (st.x <= 2.) {
        usecol = vec3(st.y/2.,st.y/2.,st.y/3.);
        usecol2 = vec3(st.y,st.y/2.,st.y/3.);
    }
    else {
        usecol = vec3(st.y/3.,st.y/2.,st.y/2.);
        usecol2 = vec3(st.y/2.,st.y/2.,st.y/3.);
    }
    st.x = fract(st.x);
    vec3 color = vec3(0.);
    color += vec3(bounded_noise_rect(st, .4, .45,.5,.5,10.))*usecol2*3.;
    color += vec3(bounded_noise_rect(st, .3, .4,.4,.5,10.))*usecol*2.;
	color += vec3(bounded_noise_rect(st, .2, .25,.3,.4,10.))*usecol*.9+vec3(bounded_noise_rect(st, .1, .15,.2,.25,10.))*usecol2*2.;
    color += bounded_noise_rect(st, .0, .0, .2, .25,10.);
    gl_FragColor = vec4(color, 1.);
    
}