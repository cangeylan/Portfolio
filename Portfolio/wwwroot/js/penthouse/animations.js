function next_step_animations(step){
    const timeline = gsap.timeline()

    if(step==1){
        timeline.to('#slideContainer',{y:'-100%',duration:1.5, ease:'sine.inOut'})
        for(i=0; i<7; i++){
          if(screen.width >768){
            timeline.fromTo(`#step${i} , #stepSign${i}`,{x:100,opacity:0},{x:0, opacity:1, duration:0.7,onComplete: progressBarAnimation},'<0.1')
            x = '<';
          }else{
            document.getElementById(`step${i}`).style.opacity = 0;
            document.getElementById(`stepSign${i}`).style.opacity = 0;
            x = '<'
          }
        }
        timeline.from('#planImg,#squareMeterCont',{ y:'15vh', duration:1.5},x)
        timeline.to('#backgroundImg',{opacity:0.5, duration:0.5},'<')
    }

    if(step == 2){
        timeline
        .to('#slideContainer',{y:'-200vh',duration:1.3, ease:'sine.inOut'})
        .to('#planImg',{y:'100vh', duration:1.3, ease:'sine.inOut'},'<')
        .from('#bedroom',{ y:'15vh', duration:1.3,ease:'sine.inOut'},'-=0.6')
    }

    if(step==3){
        timeline
        .to('#slideContainer',{y:'-300vh',duration:1.3, ease:'sine.inOut'})
        .to('#planImg',{y:'200vh',duration:1.3, ease:'sine.inOut'},'<')
        .from('#utilityText,#pool,#hottub,#skip',{ y:'15vh', duration:1.3,ease:'sine.inOut'},'-=0.6')
    }

    if(step==4){
        timeline
        .to('#slideContainer',{y:'-400vh',duration:1.3, ease:'sine.inOut'})
        .to('#planImg',{y:'300vh',duration:1.3, ease:'sine.inOut'},'<')
        .from('.ktchn',{ y:'9vh', opacity:0, duration:1.3,ease:'sine.inOut'},'-=0.6')
    }

    if(step==5){
        timeline
        .to('#slideContainer',{y:'-500vh',duration:1.3, ease:'sine.inOut'})
        .to('#planImg',{y:'400vh',duration:1.3, ease:'sine.inOut'},'<')
        .from('.bathroom',{ y:'9vh', opacity:0, duration:1.3,ease:'sine.inOut'},'-=0.6')
    }

    if(step==6){        
        resultSlide()
        timeline
        .to('#slideContainer',{y:'-600vh',duration:1.3, ease:'sine.inOut'})
        .to('#planImg',{y:'500vh',duration:1.3, ease:'sine.inOut'},'<')
        .to('.resultSlogan, #resultImg, #resultText',{opacity:1,duration:1},)
    }
}


function nav_animations(pickedStep){
    const timeline = gsap.timeline()

    if(pickedStep==0){
        timeline
        .to('#slideContainer',{y:'5vh',duration:(0.7*steps),ease:'sine.inOut'})
        .to('#planImg',{y:'0vh',duration:(0),ease:'sine.inOut'})
        .to('.resultSlogan, #resultImg, #resultText',{opacity:0,duration:1})
        setTimeout(() => {
          document.getElementById('bedroomIcons').innerHTML=''
          document.getElementById('configuredImg').src = ''
        }, 1000);
    }

    if(pickedStep==1){
        timeline
        .to('#planImg',{y:'0vh',duration:(1.3), ease:'sine.inOut'})
        .to('#slideContainer',{y:'-100vh',duration:(1.3), ease:'sine.inOut'},'<')
        .to('.resultSlogan, #resultImg, #resultText',{opacity:0,duration:1},'<')
        setTimeout(() => {
        document.getElementById('bedroomIcons').innerHTML=''
        document.getElementById('configuredImg').style.opacity = '0'
        }, 1300);
    }

    if(pickedStep==2){
        timeline
        .to('#planImg',{y:'100vh',duration:(1.3), ease:'sine.inOut'})
        .to('#slideContainer',{y:'-200vh',duration:(1.3), ease:'sine.inOut'},'<')
        .to('.resultSlogan, #resultImg, #resultText',{opacity:0,duration:1},'<')
    }

    if(pickedStep==3){
        timeline
        .to('#planImg',{y:'200vh',duration:(1.3), ease:'sine.inOut'})
        .to('#slideContainer',{y:'-300vh',duration:(1.3), ease:'sine.inOut'},'<')
        .to('.resultSlogan, #resultImg, #resultText',{opacity:0,duration:1},'<')    
    }

    if(pickedStep==4){
        timeline
        .to('#planImg',{y:'300vh',duration:(1.3), ease:'sine.inOut'})
        .to('#slideContainer',{y:'-400vh',duration:(1.3), ease:'sine.inOut'},'<')
        .to('.resultSlogan, #resultImg, #resultText',{opacity:0,duration:1},'<')    
    }

    if(pickedStep==5){
        timeline
        .to('#planImg',{y:'400vh',duration:(1.3), ease:'sine.inOut'})
        .to('#slideContainer',{y:'-500vh',duration:(1.3), ease:'sine.inOut'},'<')
        .to('.resultSlogan, #resultImg, #resultText',{opacity:0,duration:1},'<')
    }
}


function progressBarAnimation(){
    //show progress
    for(let i=0; i<7; i++){
      if(steps==i){
        gsap.to(`#step${i}`,{scale:1, duration:0.7})
        document.getElementById(`stepSign${i}`).style.listStyleType = 'disc'
    
      } else{
        gsap.to(`#step${i}`,{scale:0.9, duration:0.7})
        document.getElementById(`stepSign${i}`).style.listStyleType = 'circle'
      }
    } 
  
    //show clickable navigation
    for(let i = 6; i>=0 ;i--){
      if(i>steps){
        gsap.to(`#step${i}`,{opacity:'0.3', duration:0.7})
      document.getElementById(`step${i}`).disabled = true;
      document.getElementById(`stepSign${i}`).style.listStyleType = 'circle'
      document.getElementById(`stepSign${i}`).style.opacity = '0.3'
  
      }else{
        gsap.to(`#step${i}`,{opacity:'1', duration:0.7})
        document.getElementById(`step${i}`).disabled = false;
        document.getElementById(`stepSign${i}`).style.listStyleType = 'disc'
        document.getElementById(`stepSign${i}`).style.opacity = '1'
       }
    }
    if(squareMeter<=90){
      gsap.to(`#step2`,{opacity:'0.3', duration:0.7})
      document.getElementById(`step2`).disabled = true;
      gsap.to(`#step3`,{opacity:'0.3', duration:0.7})
      document.getElementById(`step3`).disabled = true;
      document.getElementById(`stepSign2`).style.listStyleType = 'circle'
      document.getElementById(`stepSign3`).style.listStyleType = 'circle'
      gsap.to(`#stepSign2`,{opacity:'0.3', duration:0.7})
      gsap.to(`#stepSign3`,{opacity:'0.3', duration:0.7})
    }
    if(squareMeter<=150){
      gsap.to(`#step3`,{opacity:'0.3', duration:0.7})
      document.getElementById(`step3`).disabled = true;
      document.getElementById(`stepSign3`).style.listStyleType = 'circle'
      gsap.to(`#stepSign3`,{opacity:'0.3', duration:0.7})
    }
  
  }
  
  
  //// SLIDE SHOW ON RESULT ///
  function resultSlide(){
  document.getElementById('resultImg').style.backgroundImage = `url(${resultImg})` 
  setTimeout(() => {
    document.getElementById('resultImg').style.backgroundImage = `url(${kitchenResultImg})`
  }, 3000);
  setTimeout(() => {
    document.getElementById('resultImg').style.backgroundImage = `url(${bathroomResultImg})`
  }, 6000);
  setTimeout(() => {
    resultSlide();
  }, 9000);
  }
  
  
  
  
  /// FOR MOBILE ///
  var switchButton = 1;
  
  function sidebar(){
  
    switchButton++ 
    
    if (screen.width < 769){
  
      const timeline = gsap.timeline ()
  
      if(switchButton%2==0){
        for(i=0; i<7; i++ ){
          timeline
          .fromTo(`#stepSign${i}`,{y:0,opacity:0},{y:15, opacity:1, duration:0.7, onComplete: progressBarAnimation},'<0.1')
          .fromTo(`#step${i}`,{y:0,opacity:0},{opacity:1, duration:0.7},'-1')
        }
        timeline
        .to('#sidebar',{rotate:-135, duration:0},'0')
      } 
  
       if(switchButton%2!==0){
        for(i=0; i<7; i++ ){
          timeline   
          .fromTo(`#stepSign${i}`,{y:15,opacity:1},{y:0, opacity:0, duration:0.7},'<0.1')
        }
        timeline
        .to('#sidebar',{rotate:45, duration:0},'0')
  
      }
    }
  }
  