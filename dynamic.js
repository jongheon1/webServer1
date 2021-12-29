var link = {
  setColor:function(color){
    // var links = document.querySelectorAll('a');
    // var i=0;
    // while(i<links.length){
    //   links[i].style.color = color;
    //   i=i+1;
    // }
    $('a').css('color',color);
  }
}
 var body = {
   setColor:function(color){
     document.querySelector('body').style.color = color;
   },
   setBackgroundColor:function(color){
     document.querySelector('body').style.backgroundColor = color;
   }
 }
 function nightDayChanger(self){
   var target = document.querySelector('body');
     if(self.value === 'night'){
      body.setBackgroundColor('black');
      body.setColor('white');
      self.value = 'day';
      link.setColor('yellow');
    } else {
      body.setBackgroundColor('white');
      body.setColor('black');
      self.value = 'night';
      link.setColor('blue');
    }
 }
