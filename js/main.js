
function draw(){
    var c  = document.getElementById('nicepic');
    var ctx = c.getContext('2d');
    
    ctx.fillStyle = 'rgb(200,0,0)';
    ctx.strokeStyle = 'rgb(220, 50, 47)'
   
    
    for(let j=0; j<20;j++ ){
        let mx = Math.cos(2*3.14/20*j)*50+150;
        let my = Math.sin(2*3.14/20*j)*50+0;
        ctx.beginPath();
        //ctx.moveTo(mx,my);
        for( let i=0; i<500; i++){
            ctx.lineTo(Math.cos(2*3.14/500*i)*100+mx,Math.sin(2*3.14/500*i)*100+150+my);
        }
        ctx.closePath();
        ctx.stroke();
    }
    
}
