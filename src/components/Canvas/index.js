import React from 'react';

export default () => {
  const styled = {backgroundColor:"#ececec",marginRight:"10px"}
  const draw1 = () => {
    var canvas1 = document.getElementById('canvas1');
    if(canvas1.getContext){
      var ctx = canvas1.getContext('2d')
      ctx.fillStyle = "rgb(200,0,0)" ;
      ctx.fillRect(10,10,50,50);

      ctx.fillStyle = "rgba(0,0,200,.5)";
      ctx.fillRect (30,30,55,50)
    }
  }
  const draw2 = () => {
    var canvas2 = document.getElementById('canvas2')
    if(canvas2.getContext){
      var ctx = canvas2.getContext('2d');

      ctx.fillRect(25,25,100,100);
      ctx.clearRect(45,45,60,60);
      ctx.strokeRect(50,50,50,50)
    }
  }
  const draw3 = () => {
    var canvas3 = document.getElementById('canvas3')
    if(canvas3.getContext){
      var ctx = canvas3.getContext('2d')

      ctx.beginPath();
      ctx.moveTo(75,50)
      ctx.lineTo(100,75)
      ctx.lineTo(100,25)
      ctx.fill()
    }
  }
  const draw4 = () => {
    var canvas4 = document.getElementById('canvas4')
    if(canvas4.getContext){
      var ctx = canvas4.getContext('2d')

      ctx.beginPath();
      setTimeout(()=>{
      ctx.arc(75,75,50,0,2*Math.PI)
      ctx.fillStyle='grey'
      ctx.fill();
      },200)
    }
  }
  const draw5 = () => {
    var canvas5 = document.getElementById('canvas5')
    if(canvas5.getContext){
      var ctx = canvas5.getContext('2d')

      ctx.beginPath();
      ctx.arc(75, 75, 50, 0, Math.PI * 2, false); // 绘制
      ctx.moveTo(110, 75);
      ctx.arc(75, 75, 35, 0, Math.PI, false);   // 口(顺时针)
      ctx.moveTo(65, 65);
      ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // 左眼
      ctx.moveTo(95, 65);
      ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // 右眼
      ctx.stroke();

    }
  }


  React.useEffect(()=>{
    draw1();
    draw2();
    draw3();
    draw4();
    draw5();
  },[])

  return (
    <div>
      <canvas id="canvas1" width="150" height="150" style={styled}></canvas>
      <canvas id="canvas2" width="150" height="150" style={styled}></canvas>
      <canvas id="canvas3" width="150" height="150" style={styled}></canvas>
      <canvas id="canvas4" width="150" height="150" style={styled}></canvas>
      <canvas id="canvas5" width="150" height="150" style={styled}></canvas>
    </div> 
  )
}