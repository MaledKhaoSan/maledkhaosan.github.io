// Scrolling to change body color
    // window.addEventListener("load", function() {
    //     const scrollColorElems = document.querySelectorAll("[data-scrollcolor]");
    //     scrollColorElems.forEach((colorSection, i) => {
    //     const prevColor = i === 0 ? "black" : scrollColorElems[i - 1].dataset.scrollcolor;
    //     ScrollTrigger.create({
    //         trigger: colorSection,
    //         start: "-50% bottom",
    //         end: "100% bottom",
    //         toggleActions: 'play complete reverse resume',
    //         onEnter: () => gsap.to("body", {duration: 0.7, backgroundColor: colorSection.dataset.scrollcolor, overwrite: 'auto'}),
    //         onLeaveBack: () => gsap.to("body", {backgroundColor: prevColor, overwrite: 'auto'}),
    //         // markers: {
    //         //     startColor: "red",
    //         //     endColor: "lime"}
    //     });
    //     });
    // });

    var refresh = window.localStorage.getItem('refresh');
    console.log(refresh);
    if (refresh===null){
        window.location.reload();
        window.localStorage.setItem('refresh', "1");
    }
    
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
  window.requestAnimationFrame();
}

// ----------------------------------//
//                                   //
//         Scrolling Animation       //
//                                   //
// ----------------------------------//


// ----------------------------------//
//                                   //
//    Introduce Scene Animation      //
//                                   //
// ----------------------------------//

let IntrolScrolling = gsap.timeline({
    scrollTrigger: {
        trigger: ".Storyboard---Introl",
        start: "top% center",
        end: "bottom center",
        // toggleActions: "play complete resume reverse",
        toggleActions: "play none none none",
        pin: true,
        // scrub: 1.5,
        // markers: {
        //     startColor: "black",
        //     endColor: "black"},

    }
});
IntrolScrolling.to(".YSLC_LOGO1", 1.5, {autoAlpha:1, repeat:1, repeatDelay:0.8,yoyo:true, ease: Linear.easeNone}, "<");

IntrolScrolling.to(".Web_AboutUs", 1, {autoAlpha:1, repeat:1, repeatDelay:1,yoyo:true, ease: Linear.easeNone}, ">+1");

IntrolScrolling.to(".Web_Band1", 3, {autoAlpha:1, yoyo:true, width:"63%",top:"49%", ease: Linear.easeNone}, ">");

IntrolScrolling.set(".YSLC_LOGO1",{top: "6%",left:"8%", width:"7%"},">");
IntrolScrolling.to(".YSLC_LOGO1, .Web_Contract", 3, {autoAlpha:1, yoyo:true, ease: Linear.easeNone}, "<");

// IntrolScrolling.set(".SectionRelativeSize, .Storyboard---1, .Storyboard---2, .Storyboard---3, .Storyboard---4, .Storyboard---5, .StoryText---5, .Storyboard---6, .Storyboard---7, .Storyboard---8, .Storyboard---9, .Storyboard---10",{display: "none"},">");
// IntrolScrolling.add(IntrolAnimated, 0, ">");





// ----------------------------------//
//                                   //
//            Leaves Transition      // School Scene ---> Main Characters **ใบไม้เลื่อนแล้วเปลี่ยน BG เลื่อน SchoolScene ขั้นไปด้านบนด้วยการ UnPin**
//                                   //
// ----------------------------------//
function LeavesTransition() {
    var LeavesTransition = gsap.timeline({reverse: false});
    LeavesTransition.to(".illustration1-Leaves, .illustration1-BackGround", 20.0, {xPercent: 100, y:0, yoyo:true, ease: Power3.easeIn},"-=0.0");
    LeavesTransition.to(".illustration1-Leaves", 20, {rotation: -4, yoyo:true, ease: Power3.easeIn},"<");
    LeavesTransition.to(".illustration1-5",{filter: "blur(5px)", duration: 20}, "<")
    LeavesTransition.to(".illustration1-5, .schoolText4",{opacity: 0, duration: 20.0}, "<")
    return LeavesTransition;
}

// ----------------------------------//
//                                   //
//       school view Transition      // 
//                                   //
// ----------------------------------//









    
// ----------------------------------//
//                                   //
//            school view            // Scene 1
//                                   //
// ----------------------------------//
    let Schoolscrolling1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".Storyboard---1",
            start: "center center",
            end: "+=4000 center",
            toggleActions: "play complete reverse resume",
            pin: true,
            scrub: 1.5,
            // markers: {
            //     startColor: "white",
            //     endColor: "white"},

        }
    });
    //Img2
    Schoolscrolling1.to(".illustration1-1, .illustration1-2, .illustration1-3, .illustration1-4, .illustration1-5", 20, {rotationY: "+=180", transformOrigin:"up", transformStyle: "preserve-3d", ease: Power1.easeInOut});
    Schoolscrolling1.to(".illustration1-1, .illustration1-2, .illustration1-3, .illustration1-4, .illustration1-5", {transformPerspective: 1900}, "<")
    Schoolscrolling1.to(".illustration1-1, .illustration1-2, .illustration1-3, .illustration1-4, .illustration1-5", {filter: "blur(0px)"}, "<+7")
    Schoolscrolling1.set(".illustration1-1", {display: "none"}, "<+3.5")
    //Img3
    Schoolscrolling1.set(".illustration1-2", {},"<-0.05");

    Schoolscrolling1.to(".illustration1-2, .illustration1-3, .illustration1-4, .illustration1-5", 20, {rotationY: "+=180", transformOrigin:"up", transformStyle: "preserve-3d", ease: Power1.easeInOut});
    Schoolscrolling1.to(".illustration1-2, .illustration1-3, .illustration1-4, .illustration1-5", {transformPerspective: 1900}, "<")
    Schoolscrolling1.to(".illustration1-2, .illustration1-3, .illustration1-4, .illustration1-5", {filter: "blur(0px)"}, "<+7")
    Schoolscrolling1.set(".illustration1-2", {display: "none"}, "<+3.5")
    //Img4
    Schoolscrolling1.set(".illustration1-2", {},"<-0.05");
    
    Schoolscrolling1.to(".illustration1-3, .illustration1-4, .illustration1-5", 20, {rotationY: "+=180", transformOrigin:"up", transformStyle: "preserve-3d", ease: Power1.easeInOut});
    Schoolscrolling1.to(".illustration1-3, .illustration1-4, .illustration1-5", {transformPerspective: 1900}, "<")
    Schoolscrolling1.to(".illustration1-3, .illustration1-4, .illustration1-5", {filter: "blur(0px)"}, "<+7")
    Schoolscrolling1.set(".illustration1-3", {display: "none"}, "<+3.5")
    //Img5
    Schoolscrolling1.set(".illustration1-2", {},"<-0.05");

    Schoolscrolling1.to(".illustration1-4, .illustration1-5", 20, {rotationY: "+=180", transformOrigin:"up", transformStyle: "preserve-3d", ease: Power1.easeInOut});
    Schoolscrolling1.to(".illustration1-4, .illustration1-5", {transformPerspective: 1900}, "<")
    Schoolscrolling1.to(".illustration1-4, .illustration1-5", {filter: "blur(0px)"}, "<+7")
    Schoolscrolling1.set(".illustration1-4", {display: "none"}, "<+3.5")
    

    Schoolscrolling1.to(".LeavesParticle0", 35,{left:"150%", ease: Power1.easeIn},"<-15");
    Schoolscrolling1.from(".LeavesParticle0", 10,{opacity: 0, ease: Power1.easeIn},"<");
    Schoolscrolling1.to(".LeavesParticle0", 35,{rotation: -740},"<");
    Schoolscrolling1.fromTo(".LeavesParticle0", 20,{top: "20%"} ,{top: "60%"},"<-0.5");

    Schoolscrolling1.to(".LeavesParticle1", 20,{left:"150%", ease: Power1.easeIn},">-15");
    Schoolscrolling1.from(".LeavesParticle1", 10,{opacity: 0, ease: Power1.easeIn},"<");
    Schoolscrolling1.to(".LeavesParticle1", 20,{rotation: 540},"<");
    Schoolscrolling1.fromTo(".LeavesParticle1", 20,{top: "20%"} ,{top: "60%"},"<-0.5");


    Schoolscrolling1.to(".LeavesParticle2", 22,{left:"110%", ease: Power3.easeIn},"<-5");
    Schoolscrolling1.to(".LeavesParticle2", 22,{rotation: -875},"<");
    Schoolscrolling1.fromTo(".LeavesParticle2", 28,{top: "100%"} ,{top: "35%"},"<");


    Schoolscrolling1.to(".LeavesParticle3", 20,{left:"150%", ease: Power1.easeIn},"<-1");
    Schoolscrolling1.to(".LeavesParticle3", 20,{rotation: 840},"<");
    Schoolscrolling1.to(".LeavesParticle3", 20,{width: "3.3%"},"<");
    Schoolscrolling1.fromTo(".LeavesParticle3", 20,{top: "13%"} ,{top: "75%"},"<");

    Schoolscrolling1.to(".LeavesParticle4", 30,{left:"150%"},"<-1");
    Schoolscrolling1.to(".LeavesParticle4", 30,{rotation: 120},"<");
    Schoolscrolling1.to(".LeavesParticle4", 30,{width: "11%"},"<");
    Schoolscrolling1.fromTo(".LeavesParticle4", 30,{top: "80%"} ,{top: "15%"},"<");

    Schoolscrolling1.to(".LeavesParticle5", 30,{left:"150%"},"<");
    Schoolscrolling1.to(".LeavesParticle5", 30,{rotation: -90},"<");
    Schoolscrolling1.to(".LeavesParticle5", 30,{width: "6%"},"<");
    Schoolscrolling1.fromTo(".LeavesParticle5", 30,{top: "0%"} ,{top: "38%"},"<");
    Schoolscrolling1.add( LeavesTransition(), "<+5" );

    Schoolscrolling1.from(".schoolText1", 5,{opacity: 0, ease: Power1.easeIn, delay: 2},"0.0");
    Schoolscrolling1.to(".schoolText1", 5,{opacity: 0, ease: Power1.easeIn, delay: 32},"0.0");
    Schoolscrolling1.from(".schoolText2", 5,{opacity: 0, ease: Power1.easeIn, delay: 32},"0.0");
    Schoolscrolling1.from(".schoolText3", 5,{opacity: 0, ease: Power1.easeIn, delay: 45},"0.0");
    Schoolscrolling1.to(".schoolText2", 5,{opacity: 0, ease: Power1.easeIn, delay: 61},"0.0");
    Schoolscrolling1.to(".schoolText3", 5,{opacity: 0, ease: Power1.easeIn, delay: 63},"0.0");
    Schoolscrolling1.from(".schoolText4", 5,{opacity: 0, ease: Power1.easeIn, delay: 64},"0.0");
    Schoolscrolling1.from("#SchoolMainBackground1", 5,{opacity: 0, ease: Power1.easeIn, delay: 2},"0.0");






















// -------------------------------------//
//                                      //
//  Maincharacter LongScene Background  // Scene 2 & 3 Background**
//                                      //
// -------------------------------------//
    let MainCharacterPresentScrollingBackGround = gsap.timeline({
        scrollTrigger: {
            trigger: ".Storyboard---2",
            start: "center center",
            end: "+=3000 center",
            toggleActions: "play complete reverse resume",
            scrub: 2.5,
            // markers: {
            //     startColor: "red",
            //     endColor: "red"}
        }
    });
    MainCharacterPresentScrollingBackGround.to(".illustration2-MC1Background",{top: "-100%", duration: 10.0, yoyo:true})

    
    MainCharacterPresentScrollingBackGround.from(".MC1Text1", {filter: "blur(16px)", opacity: 0, duration: 0.5, delay: 1},"<+=1.5")
    MainCharacterPresentScrollingBackGround.to(".MC1Text1", {y: innerHeight * -1, duration: 10},"<+=1")


    MainCharacterPresentScrollingBackGround.from(".MC1Text2", {filter: "blur(16px)", opacity: 0, duration: 0.5, delay: 2},"<+=3.5")
    MainCharacterPresentScrollingBackGround.to(".MC1Text2", {y: innerHeight * -0.9, duration: 5.9},"<+=1.5")

    MainCharacterPresentScrollingBackGround.from(".MC1Text3", {filter: "blur(16px)", opacity: 0, duration: 0.8, delay: 1},">-5.5")
    MainCharacterPresentScrollingBackGround.to(".MC1Text3", {y: innerHeight * -1, duration: 10},"<+=1")
// ----------------------------------//
//                                   //
//      Main Character LongScene     // Scene 2
//                                   //
// ----------------------------------//
    let MainCharacterPresentScrolling1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".Storyboard---2",
        start: "center center",
        end: "+=3000 center",
        toggleActions: "restart complete complete complete",
        scrub: 2.5,
        pin: true,
        // markers: {
        //     startColor: "red",
        //     endColor: "red"}
        }
    });
    // MainCharacterPresentScrolling1.to(".illustration2-MC1Background",{y: innerHeight * -3.25, yoyo:true})
    MainCharacterPresentScrolling1.to("body", 3,{backgroundColor:"#000000", ease:Power3.easeOut},"<");
    MainCharacterPresentScrolling1.from(".illustration2-MC1",{duration: 0.8})
    // MainCharacterPresentScrolling1.from(".illustration2-MC1",{top:"-200%" ,duration: 0.5, ease: Circ.easeOut, yoyo:true},"-=3.0");
    MainCharacterPresentScrolling1.from(".illustration2-MC1",{duration: 3.5, opacity: 0,ease: Circ.easeOut, yoyo:true},"-=3.0");

    MainCharacterPresentScrolling1.to(".illustration2-MC1",{duration: 8.5, opacity: 0, ease: Circ.easeOut, yoyo:true},"+=15.0");
    //Transitions
    MainCharacterPresentScrolling1.to(".MC1Gradient_Background",3,{opacity: 1, ease: Power1.easeIn},"<")
    MainCharacterPresentScrolling1.to(".MC1Gradient_Background",4,{top: "50%", yoyo:true},"<")




// ----------------------------------//
//                                   //
//      Main Character Opening       // Scene 2
//                                   //
// ----------------------------------//
    let MainCharacterPresentScrolling2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".Storyboard---3",
        start: "center center",
        end: "+=4500px center",
        toggleActions: "play complete reverse resume",
        scrub: 2.5,
        // pin: true,
        // markers: {
        //     startColor: "blue",
        //     endColor: "blue"}
        }
    });
    //Settings BeforeStart
    MainCharacterPresentScrolling2.to(".ClassroomBackground1",{duration: 0.0, top: "-50%"}, "0.0")
    MainCharacterPresentScrolling2.to(".ClassroomBackground2",{duration: 0.0, top: "150%"}, "0.0")
    // ----------------------------------//
    //                                   //
    //       Main Characters             // Scene 2
    //                                   //
    // ----------------------------------//

    //Zoom In settings
    MainCharacterPresentScrolling2.to(".illustration2-MC2",{duration: 0.0, top: "10%", scale: 3},"0.0")
    MainCharacterPresentScrolling2.to(".illustration2_MC2Background",{duration: 0.0, scale: 3},"0.0")

    //LandDown
    MainCharacterPresentScrolling2.from(".illustration2-MC2",{duration: 12.5, opacity: 0}, ">")
    MainCharacterPresentScrolling2.from(".illustration2_MC2Background",{duration: 12.5, opacity: 0}, "<")
    MainCharacterPresentScrolling2.to(".illustration2-MCframe", {duration: 1.5, opacity: 1}, "<")
    MainCharacterPresentScrolling2.from(".illustration2-MCframe", {duration: 12.5, width: "120%"}, "<")
    
    //Zoom Out [Top]
    MainCharacterPresentScrolling2.to(".illustration2-MC2",{duration: 18.0, top: "70%"}, "<+=8.0")
    MainCharacterPresentScrolling2.to(".illustration2_MC2Background",{duration: 18.0, top: "30%"}, "<")
    //Zoom Out [Scale to default]
    MainCharacterPresentScrolling2.to(".illustration2-MC2", {duration: 18.0, scale: 1, top: "50%"},">+=7.0")
    MainCharacterPresentScrolling2.to(".illustration2_MC2Background", {duration: 18.0, scale: 1, top: "50%"},"<")

    MainCharacterPresentScrolling2.from(".MC2Text1",8,{opacity: 0}, "<+1")
    MainCharacterPresentScrolling2.from(".MC2Text2",8,{opacity: 0}, "<+5")
    MainCharacterPresentScrolling2.from(".MC2Text3",8,{opacity: 0}, "<+3")
    
    MainCharacterPresentScrolling2.to(".MC2Text1, .MC2Text2, .MC2Text3",4,{opacity: 0}, ">+5")
    MainCharacterPresentScrolling2.from(".MC2Text3_1",8,{opacity: 0, width:"36%"}, ">")






































    // ----------------------------------//
    //                                   //
    //       Classroom Present           // Scene 2
    //                                   //
    // ----------------------------------//
    //Transition Introls
    MainCharacterPresentScrolling2.set(".ClassroomBackground1, .ClassroomBackground2",{duration: 0.0, opacity: 1}, ">")
    MainCharacterPresentScrolling2.to(".ClassroomBackground1",{duration: 10, top: "26%"}, "<")
    MainCharacterPresentScrolling2.to(".ClassroomBackground2",{duration: 10, top: "75%"}, "<")
    MainCharacterPresentScrolling2.set(".illustration2_MC2Background, .illustration2-MC2, .illustration2-MCframe, .MC2Text1, .MC2Text2, .MC2Text3, .MC2Text3_1",{display:"none"}, ">")

    //Classroom Present
    MainCharacterPresentScrolling2.from(".MC2Text4",2,{opacity: 0}, ">")
    //CLassroom Band [In]
    // MainCharacterPresentScrolling2.to(document.getElementById('ClassroomBandEffect'), 30, {attr:{ baseFrequency: '0.0'}}, ">")
    MainCharacterPresentScrolling2.from(".ClassroomBand1",25,{top:"150%", ease: Circ.easeOut}, "<")
    MainCharacterPresentScrolling2.from(".MC2Text5",8,{opacity: 0}, ">-10")
    //Classroom Present [In]
    MainCharacterPresentScrolling2.from(".illustration4-ClassroomPresent2",{top: "140%", ease: Power1.easeOut, duration: 10, yoyo:true}, ">+8")
    MainCharacterPresentScrolling2.from(".illustration4-ClassroomPresent3",{top: "140%", ease: Power1.easeOut, duration: 10, yoyo:true}, ">")
    MainCharacterPresentScrolling2.from(".illustration4-ClassroomPresent1, .ClassroomPresent1_Paper",{top:"140%", ease: Power1.easeOut, duration: 10, yoyo:true}, ">")
    
    //CLassroom Band [Out]
    MainCharacterPresentScrolling2.to(".ClassroomBand1, .MC2Text4, .MC2Text5",15,{opacity:0, ease: Circ.easeOut}, "<-5")
    MainCharacterPresentScrolling2.to(".ClassroomBackground1, .ClassroomBackground2",9,{opacity: 0}, ">")
    MainCharacterPresentScrolling2.set(".ClassroomBand1, .MC2Text4",{display:"none"}, ">")


    // Paper Throwing
    MainCharacterPresentScrolling2.to(".ClassroomPresent1_Paper",{left: "71%",ease: Power1.easeOut,duration: 10.0},"<-11")
    MainCharacterPresentScrolling2.to(".ClassroomPresent1_Paper",{top:"38%" ,ease: Power1.easeOut, duration: 8.0}, "<")
    MainCharacterPresentScrolling2.to(".ClassroomPresent1_Paper",{top:"37%" , duration: 2}, ">+2")
    MainCharacterPresentScrolling2.to(".ClassroomPresent1_Paper",{left: "68%",ease: Power1.easeOut, duration: 15.0},"<")
    MainCharacterPresentScrolling2.to(".ClassroomPresent1_Paper",{top:"52%" , duration: 12, ease: Power1.easeIn}, "<+2.1")
    MainCharacterPresentScrolling2.set(".illustration2-MC2, .illustration2-MCframe ,.ClassroomPresent1_Paper",{duration: 0.0, display:"none"}, '>+5');


    // //Classroom padding
    MainCharacterPresentScrolling2.to(".illustration4-ClassroomPresent1, .illustration4-ClassroomPresent2, .illustration4-ClassroomPresent3",{padding: "5%", ease: Circ.easeOut, duration: 10, yoyo:true}, "<")
    MainCharacterPresentScrolling2.to(".illustration4-ClassroomPresent2",{left: "32%", ease: Circ.easeOut, duration: 10, yoyo:true},"<")
    MainCharacterPresentScrolling2.to(".illustration4-ClassroomPresent3",{left: "68%", ease: Circ.easeOut, duration: 10, yoyo:true},"<")

    MainCharacterPresentScrolling2.to(".illustration4-ClassroomPresent2",{y: "-50%", ease: Circ.easeIn, duration: 10},"<")
    MainCharacterPresentScrolling2.to(".illustration4-ClassroomPresent1",{y: "-50%", ease: Circ.easeIn, duration: 10},"<")
    MainCharacterPresentScrolling2.to(".illustration4-ClassroomPresent3",{y: "-50%", ease: Circ.easeIn, duration: 10},"<")
    MainCharacterPresentScrolling2.to("body", 10,{backgroundColor:"#ffffff", ease:Power3.easeOut},"<");



    function Transition3() {
        var Transition3 = gsap.timeline({scrollTrigger:{reverse: true}});
        Transition3.to(window, 1.2, {scrollTo:{y:".Storyboard---4", offsetY: -300, ease: Power4.easeIn}}, "0.0");
        return Transition3;
    }

    let MainCharacterPresent2Transition = gsap.timeline({
        scrollTrigger: {
            trigger: ".Storyboard---3",
            start: "+=4000px center",
            end: "+=4500px center",
            toggleActions: "restart play reverse reset",
            // markers: {
            //     startColor: "blue",
            //     endColor: "blue"},
        }
    });
    MainCharacterPresent2Transition.resume(Transition3, 0, "<-1");

    let MainCharacterPresentScrollingPIN = gsap.timeline({
    scrollTrigger: {
        trigger: ".Storyboard---3",
        start: "center center",
        end: "+=4500px center",
        pin: true,
        // markers: {
        //     startColor: "red",
        //     endColor: "red"}
        }
    });





































    























// ----------------------------------//
//                                   //
//          School Balcony           // Scene 3
//                                   //
// ----------------------------------//

let BalconyScrollingPin = gsap.timeline({
    scrollTrigger: {
        trigger: ".Storyboard---4",
        start: "center center",
        end: "+=9000px center",
        pin: true,
    }
});


let BalconyScrolling1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".Storyboard---4",
        toggleActions: "restart complete reverse resume",
        start: "center center",
        end: "+=9000px center",
        scrub: 2.5,
        // markers: {
        //     startColor: "green",
        //     endColor: "green"}
    }
});
//Settings before start
BalconyScrolling1.from(".Storyboard---4",1,{opacity: 0}, "<")
// Transition [Introl]
BalconyScrolling1.to(".people1_body",{xPercent: 160, duration: 1.2, opacity: 1}, ">")
BalconyScrolling1.fromTo("#BalconyBackgroundTransitionIn", {autoAlpha:1}, {autoAlpha:1}, '<');
BalconyScrolling1.to('#TransitionIn', {xPercent: 186, duration: 2, ease: Power2.easeOut}, '<+.1')
BalconyScrolling1.set("#BalconyBackgroundTransitionIn, #TransitionIn",{display:"none"}, '>');
// People [idle]
BalconyScrolling1.to(".people2_body",{xPercent: -100, duration: 5.6, opacity: 1,}, "<-2")
BalconyScrolling1.to(".people3_body",{xPercent: -180, duration: 8.6, opacity: 1.5,}, "<+0.7")
BalconyScrolling1.from(".BalconyText1",0.56,{opacity:0}, "<")
BalconyScrolling1.to(".people4_body",{xPercent: 110, duration: 5.6, }, "<+0.5")
BalconyScrolling1.to(".MC_body",{left:"120%", duration: 4.8, ease: Power1.easeIn, opacity: 1,}, "<-1.3")

BalconyScrolling1.from(".BalconyText2",0.65,{opacity:0}, ">-3.87")
// Main character talking [Text]

// Transition [Outrol]
BalconyScrolling1.to(".BalconyTransition",{xPercent: -250, duration: 6.6, opacity: 1,}, ">-3.5")
BalconyScrolling1.set('#BalconyBackgroundTransitionFrame', {autoAlpha:1}, '>-5.5')
BalconyScrolling1.from('#TransitionCrop', {xPercent:100, duration:2, ease:'none'}, '<')
//Hide people & Cchange blackground color[saveMemory]
BalconyScrolling1.set(".people1_body, .people2_body, .people3_body, .people4_body, .Balcony_SCbody, .MC_body, #BalconyBackgroundTransitionIn, #TransitionIn, .balcony-Background, .BalconyText1, .BalconyText2",{display:"none"}, '>');
BalconyScrolling1.to("body", 3,{backgroundColor:"#000000", ease:Power3.easeOut},"<+1");
BalconyScrolling1.from(".Activities2, .Activities3, .Activities4, .Activities1Text, .Activities2Text, .Activities3Text, .Activities4Text, .A3BadmintonPlayer, .LockerText1, .LockerText2, .LockerText3, .LockerText4, .LockerText5",{display:"none"}, '<');

BalconyScrolling1.from(".Activities1Text",0.56,{opacity:0}, "<+1.2")
BalconyScrolling1.to('#BalconyBackgroundTransitionFrame, .Activities1Text', {left: "-100%", duration: 1, delay: 1, ease: Power1.easeNone}, '<')

//Activitest [2]
BalconyScrolling1.to('.Activities2', {left: "50%", duration: 1, ease: Power1.easeNone}, '>-1')
BalconyScrolling1.from(".Activities2Text",0.56,{opacity:0}, ">")
BalconyScrolling1.to('.Activities2, .Activities2Text', {left: "-50%", duration: 1, ease: Power1.easeNone}, '>')

//Activitest [3]
BalconyScrolling1.to('.Activities3, .A3BadmintonPlayer', {left: "50%", duration: 1, ease: Power1.easeNone}, '<')
BalconyScrolling1.to('.A3BadmintonPlayer', {top:"47%", ease: Power1.easeNone}, '>-0.6')
BalconyScrolling1.from(".Activities3Text",0.56,{opacity:0}, ">-0.2")
BalconyScrolling1.set(".Activities2, #BalconyBackgroundTransitionFrame",{display:"none", duration: 0.0001}, '>');
BalconyScrolling1.to('.Activities3, .A3BadmintonPlayer, .Activities3Text', {left: "-50%", duration: 1, ease: Power1.easeNone}, '>')

//Activitest [4]
BalconyScrolling1.to('.Activities4', {left: "50%", duration: 1, ease: Power1.easeNone}, '<')
BalconyScrolling1.from(".Activities4Text",0.56,{opacity:0}, ">")
// Text
BalconyScrolling1.to('.Activities4, .Activities3, .Activities2, .Activities4Text', {opacity: 0, duration: 2, ease: Power1.easeIn}, '>')

BalconyScrolling1.to(".LockerText1", {top: "25%",duration: 1.3, opacity:1, ease: Power1.easeIn},">")
BalconyScrolling1.to(".LockerText2", {top: "35%",duration: 1, opacity:1, ease: Power2.easeIn},">-0.83")
BalconyScrolling1.to(".LockerText3", {top: "55%",duration: 1.3, opacity:1, ease: Power1.easeIn},">")
//1-3 Out
BalconyScrolling1.to(".LockerText1", {y: "-300px",duration: 1.2, opacity:0, ease: Power2.easeOut},"<+1.5")
BalconyScrolling1.to(".LockerText2", {y: "-300px",duration: 1.5, opacity:0, ease: Power2.easeOut},"<")
BalconyScrolling1.to(".LockerText3, .LockerFade3", {y: "-300px",duration: 1.7, ease: Power2.easeOut},"<")
//4-5 In
BalconyScrolling1.to(".LockerText4", {top: "49%",duration: 1.3, opacity:1, ease: Power1.easeIn},">")
BalconyScrolling1.to(".LockerText5", {top: "58%",duration: 1, opacity:1, ease: Power2.easeIn},">-0.93")

// //Outrol
BalconyScrolling1.to(".LockerText4", {top: "45%",duration: 1.6, ease: Power2.easeOut},">")
BalconyScrolling1.to(".LockerText5", {top: "60%",duration: 1.7, ease: Power3.easeOut},"<")
BalconyScrolling1.to(".LockerText5", 5,{},">")


//People & background Animated [walking]
BalconyScrolling1.fromTo(".MC_body",{top: "50%", yoyo: true}, {top: "50.7%", duration: 0.3, yoyo: true, repeat: 30, repeatDelay: 0.015, ease:Power1.easeIn}, "0.0")
BalconyScrolling1.fromTo(".people2_body",{top: "50%", yoyo: true}, {top: "53.7%", duration: 0.5, yoyo: true, repeat: 10, repeatDelay: 0.015, ease:Power1.easeOut}, "0.1")
BalconyScrolling1.fromTo(".people3_body",{top: "55%", yoyo: true}, {top: "53.1%", duration: 0.3, yoyo: true, repeat: 20, repeatDelay: 0.01, ease:Power1.easeOut}, "0.0")
BalconyScrolling1.fromTo(".people4_body",{top: "51%", yoyo: true}, {top: "49.1%", duration: 0.32, yoyo: true, repeat: 20, repeatDelay: 0.01, ease:Power1.easeOut}, "0.6")
BalconyScrolling1.to(".balcony-Background", {left: "-23%",duration: 20, ease: Power1.easeOut},"0.6")


















































    















// ----------------------------------//
//                                   //
//          School Lockers           // Scene 5
//                                   //
// ----------------------------------//
let LockerScrolling1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".Storyboard---5",
        start: "center center",
        end: "+=5500px center", //top%
        scrub: 1,
        toggleActions: "restart complete reverse resume",
        pin: true,
    //     markers: {
    //         startColor: "purple",
    //         endColor: "purple"}
    }
});

// Settings Before start
LockerScrolling1.set(".MC_ReactionBody, .MC_ReactionText, .MC_ReactionBase", {opacity: 0, duration: 0.0},"0.0")
LockerScrolling1.set(".LockerBackground2, .Body2_LockerScene" ,{duration: 0.0, filter: "blur(0px)"},"0.0")
LockerScrolling1.set(".LockerPeople1", {opacity: 1, duration: 0.0,left:"55%", top:"65%", width:"58%"},"0.0")
LockerScrolling1.set(".LockerBackground4" ,{opacity: 0,filter: "blur(16px)"},"0.0")


//Locker Opening
LockerScrolling1.from(".LockerFrame" ,{opacity: 0, duration: 1.2,},">+2")
LockerScrolling1.from(LockerGroup,{opacity: 0, duration: 1.23,},">")
LockerScrolling1.from(".LockerMCText1" ,{opacity: 0, duration: 1.23,},"<")
LockerScrolling1.to(".LockerMCText1" ,{opacity: 0, duration: 1.23,},">+1")
LockerScrolling1.from(".LockerMCText2" ,{opacity: 0, duration: 1.23,},"<0.6")
LockerScrolling1.to(".LockerMCText2" ,{opacity: 0, duration: 1.23,},">+1")

LockerScrolling1.to(".Hand1_LockerScene",{opacity: 0, duration: 0.8},">-0.5");
LockerScrolling1.to(".Hand2_LockerScene, .LockerBackground2", {opacity: 1, duration: 0.7}, '>-0.75')

//Character Animated
LockerScrolling1.to(".LockerPeople1", 14,{opacity: 1, left:"105%", width:"90%"},"2")
LockerScrolling1.fromTo(".LockerPeople1",{top: "65%", yoyo: true}, {top: "64.3%", duration: 1, yoyo: true, repeat: 15, repeatDelay: 0.015, ease:Power1.easeInOut}, "1")


//Main Character Reaction to Letter Add: Blur
LockerScrolling1.set(".LockerBackground3",{display:"unset"},">")
LockerScrolling1.set(".LockerBackground1, .LockerBackground2, .Hand2_LockerScene, .Body1_LockerScene, .Body2_LockerScene, .LockerPeople2, .LockerPeople3, .LockerSC_Body1" ,{display:"none"},"<")

// Main character Reaction Animated
LockerScrolling1.to(".LockerBackground3, .LockerPeople1" ,{filter: "blur(16px)", duration: 0.85 , delay: 1},">-0.5")
LockerScrolling1.to(".MC_ReactionBody, .MC_ReactionBase", {opacity: 1, duration: 0.45, width:" 87%"}, '>-0.5')
LockerScrolling1.to(".MC_ReactionText", {opacity: 1, duration: 1, width:" 87%"}, '>-0.3')

// -------[ Change Background ]-------//
LockerScrolling1.set(".LockerBackground4", {display: "unset"}, "<")
LockerScrolling1.to(".LockerBackground4", {opacity: 1, duration: 0.5}, '<')
LockerScrolling1.set(".LockerBackground3" ,{display:"none"},">")
// -------[ Change Background ]-------//

// Main character Reaction [Text]
LockerScrolling1.from(".LockerMCText3" ,{opacity: 0, duration: 1.23,},"<")
LockerScrolling1.from(".LockerMCText4" ,{opacity: 0, duration: 1.23,},">-0.3")

//Main Character Reaction to Letter Remove: Blur
LockerScrolling1.to(".MC_ReactionBody, .MC_ReactionText, .MC_ReactionBase", {opacity: 0, duration: 0.45, width:"90%",delay: 2.2},">+1");
LockerScrolling1.to(".LockerMCText4, .LockerMCText3" ,{opacity: 0, duration: 0.45,},"<+0.1")

LockerScrolling1.to(".LockerBackground4, .LockerPeople1" ,{filter: "blur(0px)", duration: 0.85}, '>-0.50')
LockerScrolling1.from(".LockerMCText5" ,{opacity: 0, duration: 1.23,},">+0.5")
LockerScrolling1.from(".LockerMCText6" ,{opacity: 0, duration: 1.23,},">-0.3")
//Ending Waited
LockerScrolling1.to("body", 3,{backgroundColor:"#000000", ease:Power3.easeOut},"<");
LockerScrolling1.set(".Storyboard---5",{delay:5},">")










































    



















// ----------------------------------//
//                                   //
//          Lunch Break              // Scene 6
//                                   //
// ----------------------------------//
// PIN
let LunchBreakPIN = gsap.timeline({
    scrollTrigger: {
        trigger: ".Storyboard---6",
        start: "center center",
        end: "+=3500px center",
        pin: true,
    //     markers: {
    //         startColor: "red",
    //         endColor: "red"}
     }
});



let LunchBreak1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".Storyboard---6",
        start: "center center",
        end: "+=3000px center", //top%
        scrub: 1.2,
        toggleActions: "restart complete reverse resume",
    //     markers: {
    //         startColor: "purple",
    //         endColor: "purple"}
    }
});
// Settings Before start
LunchBreak1.set(".canteen_Background",{ width: "35%"},"0.0")
LunchBreak1.set(".canteen_cameraFlash",{ width: "120%"},"0.0")
LunchBreak1.set('.canteen_cameraUI',{width: "75%",  top: "48%", left:"46%", opacity:0},"")
LunchBreak1.set('#LunchTransitionCrop', {autoAlpha:1},"<")
LunchBreak1.set('#LunchtransitionCrop',{yPercent:-100, scale:0.8, transformOrigin:"50% 0%", ease: Power1.easeOut}, '<')
//McText1 [In]
LunchBreak1.from(".canteen_MCText1" ,{opacity: 0, duration: 4,},">")
//Body [In]
LunchBreak1.from(".canteen_Body", {opacity: 0, filter: "blur(16px)", duration: 6})
LunchBreak1.from(".canteen_Body",{left:"60%", duration: 7, ease: Power1.easeOut}, "<")
//Food1 [In]
LunchBreak1.from(".canteen_Food1", {opacity: 0, filter: "blur(16px)", duration: 6},">")
LunchBreak1.from(".canteen_Food1",{left:"60%", duration: 7, ease: Power1.easeOut}, "<")
//Lunch [In]
LunchBreak1.from(".canteen_Students", {opacity: 0, filter: "blur(16px)", duration: 6},">")
LunchBreak1.from(".canteen_Students",{left:"60%", duration: 7, ease: Power1.easeOut}, "<")
//Food2 [In]
LunchBreak1.from(".canteen_Food2", {opacity: 0, filter: "blur(16px)", duration: 6},">")
LunchBreak1.from(".canteen_Food2",{left:"60%", duration: 7, ease: Power1.easeOut}, "<")
//McText2 [In]
LunchBreak1.from(".canteen_MCText2", {opacity: 0, filter: "blur(16px)", duration: 6},">")
LunchBreak1.from(".canteen_MCText2",{left:"45%", duration: 9, ease: Power1.easeOut}, "<")
//McText1 [Out]
LunchBreak1.to(".canteen_MCText1" ,{opacity: 0, duration: 10,},"<")
//Outrol [rotation]
LunchBreak1.to(".canteen_Body, .canteen_MCText2, .canteen_Students, .canteen_Food1, .canteen_Food2, .canteen_Background", 10, {rotationY: "-=40", transformOrigin:"up", transformStyle: "preserve-3d", ease: Power1.easeInOut}, ">+2");
LunchBreak1.to(".canteen_Body, .canteen_MCText2, .canteen_Food1, .canteen_Food2, .canteen_Students, .canteen_Background", {transformPerspective: 1900}, "<-2")
//Outrol [move]
LunchBreak1.to(".canteen_Food1, .canteen_Food2", 18 ,{left: "-50%"}, ">+5")
LunchBreak1.to(".canteen_Body, .canteen_MCText2", 19, {left: "-50%"}, "<")
LunchBreak1.to(".canteen_Students, .canteen_Background", 20, {left: "-48%"}, "<")

//Delicious Food
LunchBreak1.to('#LunchtransitionCrop',20, {yPercent:0, ease: Circ.easeOut, yoyo:true}, '>')
LunchBreak1.to('#LunchTransitionCrop',20,{width: "75%", left: "50%", top: "50%"},"<");
LunchBreak1.from('#LunchCrop',15, {y: "-60%", ease: Power4.easeOut}, '<')
LunchBreak1.to('#LunchtransitionCrop',20,{scale:1, transformOrigin:"50% 0%"},"<");

//McText 3&4 [In-Out]
LunchBreak1.from(".canteen_MCText3" ,{opacity: 0, duration: 10.23,},">-5")
LunchBreak1.from(".canteen_MCText4" ,{opacity: 0, duration: 10.23,},">+5")
//Camera UI
LunchBreak1.to(".canteen_cameraUI",18, {left: "49%"},'>+5')
LunchBreak1.to(".canteen_MCText3, .canteen_MCText4" ,{opacity: 0, duration: 15,},"<")
LunchBreak1.from(".canteen_cameraUI",20, {opacity: 0},'<')
LunchBreak1.to('#LunchTransitionCrop',20,{left: "60%"},"<");

// LunchBreak1.set('#LunchTransitionCrop',{delay:20},">");


//Camera flash
LunchBreak1.to("#LunchCrop", 7,{filter: "blur(5px)"}, ">")
LunchBreak1.to('#LunchtransitionCrop',4.9,{scaleY:0.9, transformOrigin:"50% 50%", ease: Back.easeOut},">-3.6");
LunchBreak1.to('#LunchtransitionCrop',4.9,{scaleX:0.9, transformOrigin:"50% 50%", ease: Back.easeOut},"<");
LunchBreak1.to('#LunchCrop',3.5, {y: "-5.5%", ease: Back.easeOut}, '<')
LunchBreak1.to(".canteen_cameraUI",1, { width: "71%"},'<')
LunchBreak1.to("#LunchCrop", 3.6,{filter: "blur(0px)",ease: Back.easeOut}, ">")

LunchBreak1.to("#LunchCrop", 2.1,{filter: "contrast(200%)",filter: "brightness(2)",ease: Power1.easeInOut}, "<")
//Flash
LunchBreak1.to(".canteen_cameraFlash",1.56,{opacity: 1}, "<+1.41")



























// ----------------------------------//
//                                   //
//          Toilet Scene             // Scene 7
//                                   //
// ----------------------------------//

// function Transition7() {
//     var Transition7 = gsap.timeline({scrollTrigger:{reverse: true}});
//     Transition7.to(window, 1.2, {scrollTo:{y:".Storyboard---8", offsetY: -100, ease: Power4.easeOut}}, "0.0");
//     return Transition7;
// }

// let ToiletOutrol = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".Storyboard---7",
//         start: "+=4200px center",
//         end: "+=4200px center",
//         toggleActions: "restart play reverse reset",
//         markers: {
//             startColor: "yellow",
//             endColor: "yellow"},
//     }
// });
// ToiletOutrol.resume(Transition7, 0, "<-1");

// function ToiletIntrol() {
//     var ToiletIntrol = gsap.timeline({scrollTrigger:{reverse: true}});
//     // ToiletTransition1.set(".Storyboard---7",{opacity: 1}, "0.0")
//     ToiletIntrol.set(".toilet_washing1",{filter: "contrast(500%)",filter: "brightness(2)"}, ">")
//     ToiletIntrol.set(".toilet_BGOut1",{filter: "contrast(450%)",filter: "brightness(2)"}, ">")
//     ToiletIntrol.to(".toilet_washing1", 0.6,{filter: "contrast(100%)",filter: "brightness(1)",ease: Power1.easeInOut}, ">")
//     ToiletIntrol.to(".toilet_BGOut1", 0.3,{filter: "contrast(100%)",filter: "brightness(1)",ease: Power1.easeInOut}, "<")
//     ToiletIntrol.to(".toilet_cameraFlash",0.5,{opacity: 0}, "<")
//     return ToiletIntrol;
// }




let ToiletTransition1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".Storyboard---7",
        start: "center center",
        end: "+=4000px center", //top%
        pin: true,
        scrub: 1.1,
        toggleActions: "restart play none reverse",
    //     markers: {
    //         startColor: "purple",
    //         endColor: "purple"}
    }
});
//Settings Before start
ToiletTransition1.set(".Storyboard---7",{opacity: 1}, "0.0")
ToiletTransition1.set(".toilet_BGOut1, .toilet_BGIn1",{width: "300%", top: "20%", left: "5%"}, "0.0")
ToiletTransition1.set("#toilet2_SCBody1",{transform: 'translateX(60%) translateY(5%)'},"0.0")

ToiletTransition1.set(".toilet_washing1",{filter: "contrast(500%)",filter: "brightness(2)"}, ">")
ToiletTransition1.set(".toilet_BGOut1",{filter: "contrast(450%)",filter: "brightness(2)"}, ">")
ToiletTransition1.to(".toilet_washing1", 0.9,{filter: "contrast(100%)",filter: "brightness(1)",ease: Power1.easeInOut}, ">")
ToiletTransition1.to(".toilet_BGOut1", 0.75,{filter: "contrast(100%)",filter: "brightness(1)",ease: Power1.easeInOut}, "<")
ToiletTransition1.to(".toilet_cameraFlash",0.8,{opacity: 0}, "<")
//Main Scene Mirror Reflections
ToiletTransition1.to(".toilet_BGOut1, .toilet_BGIn1",15,{top: "120%", ease: Power1.easeOut}, ">")
//Main character Text

ToiletTransition1.from(".toiletText1",2,{opacity: 0, width:"20%"}, "<+1")
ToiletTransition1.to(".toilet_washing1",10,{opacity: 0, delay: 1}, "<+4")
ToiletTransition1.from(".toiletText2",2,{opacity: 0, width:"15%"}, "<+1")

//Zoom out
ToiletTransition1.to(".toilet_BGOut1, .toilet_BGIn1",{left: "50%", duration: 6},">+7")
ToiletTransition1.to(".toilet_BGOut1, .toilet_BGIn1",{top: "50%", duration: 7},"<")
ToiletTransition1.to(".toilet_BGOut1, .toilet_BGIn1",{width: "85%", duration: 7},"<")
ToiletTransition1.to(".toiletText1, .toiletText2",2,{opacity: 0}, "<+5")
//Main Scene  In [2]
// ToiletTransition1.to(".toilet_BGOut1",3,{filter: "blur(5px)"},">")
ToiletTransition1.to(".toilet_BGOut1, .toilet_BGIn1",5,{opacity: 0},">+3")
ToiletTransition1.from("#toiletSVGID1",4,{opacity: 0},"<")


//Main Scene Secret Character In [2] //Character Animated
ToiletTransition1.to("#toilet2_SCBody1",20,{transform: 'translateX(20%) translateY(10%)', width:"280"},">")
ToiletTransition1.fromTo("#toilet2_SCBody1",{yPercent: 0, yoyo: true}, {yPercent: -0.56, duration: 0.9, yoyo: true, repeat: 10, repeatDelay: 0.3}, "<")
ToiletTransition1.from(".toiletText3",5,{opacity: 0, width:"20%"}, "<")


ToiletTransition1.to("#toiletSVGID1,.toilet_BGOut1, .toilet_BGIn1, .toiletText3",3,{opacity:0},">+9")

ToiletTransition1.to("body", 5,{backgroundColor:"#262524",ease:Power3.easeOut},"<");
ToiletTransition1.set(".toilet_washing1",{delay: 3}, ">")




















// ----------------------------------//
//                                   //
//       Online CLass Scene          // Scene 8
//                                   //
// ----------------------------------//
let OnlineClassPin = gsap.timeline({
    scrollTrigger: {
        trigger: ".Storyboard---8",
        start: "center center",
        end: "+=9450px center",
        pin: true,
        scrub: 0.8,
    }
});
OnlineClassPin.set(".Storyboard---8",{},"0.0")

let OnlineClass1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".Storyboard---8",
        start: "center center",
        end: "+=9400px center",
        // end: "bottom center",
        toggleActions: "restart complete none reverse",
        scrub: 0.8,
    //     markers: {
    //         startColor: "red",
    //         endColor: "red"}
    }
});
// Settings Before start
// OnlineClass1.set("body", {backgroundColor:"#262524", ease:Power3.easeOut},"0.0");
OnlineClass1.set(".polaroidText1, .polaroidText2, .polaroidText3",{y:"+460%"},"0.0")
//Paloroid Set [1]
OnlineClass1.set(".polaroid1",{top: "154%", left:"50%", width:"18%", rotation: 29},"0.0"); //--> 9
OnlineClass1.set(".polaroid2",{top: "165%", left:"16%", width:"20%", rotation: -5},"0.0"); //--> -19
OnlineClass1.set(".polaroid3",{top: "150%", left:"84%", width:"20%", rotation: -1},"0.0"); //--> -13
//Paloroid Set [2]
OnlineClass1.set(".polaroid4",{top: "150%", left:"2%", width:"16%", rotation: 19},"0.0");
OnlineClass1.set(".polaroid5",{top: "190%", left:"16%", width:"18%", rotation: -29},"0.0");
OnlineClass1.set(".polaroid6",{top: "140%", left:"92%", width:"24%", rotation: 5},"0.0");
//Paloroid Set [3]
OnlineClass1.set(".polaroid7",{top: "175%", left:"11%", width:"19.5%", rotation: 7},"0.0");
OnlineClass1.set(".polaroid8",{top: "160%", left:"86%", width:"24%", rotation: -18},"0.0");
OnlineClass1.set(".polaroid9",{top: "180%", left:"99%", width:"16%", rotation: 15},"0.0");
OnlineClass1.set(".polaroid1, .polaroid2, .polaroid3, .polaroid4, .polaroid5, .polaroid6, .polaroid7, .polaroid8, .polaroid9",{opacity: 1},"0.0");




//Paloroid Animated
OnlineClass1.to(".polaroid1, .polaroid2, .polaroid3, .polaroid5, .polaroid6",8,{y:"-500%"},">")
OnlineClass1.to(".polaroidText1, .polaroidText2, .polaroidText3, .polaroid1, .polaroid2, .polaroid3, .polaroid4, .polaroid5, .polaroid6, .polaroid7, .polaroid8, .polaroid9",1,{opacity: 1},"<");
OnlineClass1.to(".polaroidText1",12.6,{y:"-500%", ease: Power1.easeOut},"<")
OnlineClass1.to(".polaroidText2",18.2,{y:"-500%"},"<")

OnlineClass1.to(".polaroid4",12,{y:"-600%"},"<+1.2")
OnlineClass1.to(".polaroid7, .polaroid8, .polaroid9",12,{y:"-600%"},"<+00.8")

OnlineClass1.to(".polaroidText3",10.4,{y:"-1500%", ease: Power4.easeOut},"<+4.6")

//Phone In
OnlineClass1.from(".PhoneHolding_Background, .PhoneScreen_Background",{duration: 2.5, opacity:0}, "<+1")
// OnlineClass1.from(".PhoneHolding_Background, .PhoneScreen_Background",{duration: 2.5, rotation: 24,}, ">-0.2")
OnlineClass1.to(".Phone_MCText1", 3,{opacity: 1, ease: Power1.easeIn,},"<-0.8");
OnlineClass1.to(".Phone_MCText2", 3,{opacity: 1, ease: Power1.easeIn,},"<+0.5");
// 

OnlineClass1.to(".Phone_MCText1, .Phone_MCText2", 2,{opacity: 0, ease: Power1.easeIn},">+1");

//Notifications [In]
OnlineClass1.set("#PhoneNotification1, #PhoneNotification2, #PhoneNotification3",{y:"-10%", opacity: 1},"<")
OnlineClass1.to("#PhoneNotification1",{y:"3%", delay: 1, duration: 0.24, ease: Power1.easeOut},">")
OnlineClass1.to("#PhoneNotification2",{y:"3%", delay: 1, duration: 0.4, ease: Power1.easeOut},">+0.7")
OnlineClass1.to("#PhoneNotification3",{y:"3%", delay: 1, duration: 0.6, ease: Power1.easeOut},">-0.36")

OnlineClass1.to(".Phone_MCText1", 1,{opacity: 0, ease: Power1.easeIn},"<-0.4");
OnlineClass1.to(".Phone_MCText3", 2,{opacity: 1, ease: Power1.easeIn,},"<-0.8");
OnlineClass1.to(".Phone_MCText2", 1,{opacity: 0, ease: Power1.easeIn},"<+0.5");
OnlineClass1.to(".Phone_MCText4", 2,{opacity: 1, ease: Power1.easeIn,},"<");


//Notifications [Out]
OnlineClass1.to("#PhoneNotification1, #PhoneNotification2, #PhoneNotification3",{y:"-10%", duration: 0.44, ease: Power1.easeOut},">+1.3");
OnlineClass1.set("#PhoneNotification1, #PhoneNotification2, #PhoneNotification3",{display: "none"},">")
//Phone Out
OnlineClass1.to(".PhoneHolding_Background, .PhoneScreen_Background",{duration: 1.8,opacity:0, rotation: 24,}, "<+0.1")
OnlineClass1.to(".Phone_MCText3, .Phone_MCText4", 0.8,{opacity: 0, ease: Power1.easeIn},"<");


// Customer Zoom [1]
OnlineClass1.from(".customer1, .customer2",1,{opacity:0},">+3")
OnlineClass1.to(".customer1",5,{top:"75%",left:"-50%",width: "200%", ease: Power1.easeIn},"<")
OnlineClass1.to(".customer2",6,{top:"75%",left:"150%",width: "200%", ease: Power1.easeIn},"<")
OnlineClass1.from(".customerText1",3,{opacity:0},"<")
// [3 - 4 - 5]
OnlineClass1.from(".customer3",1,{opacity:0},"<+1.8")
OnlineClass1.to(".customer3",9,{top:"170%",left:"-100%",width: "340%", ease: Power1.easeIn},"<")

OnlineClass1.to(".customer4",7,{top:"107%",left:"-60%",width: "94%", ease: Power1.easeIn},"<")
OnlineClass1.to(".customer5",7,{top:"97%",left:"150%",width: "130%", ease: Power1.easeIn},"<")
OnlineClass1.from(".customer4, .customer5",1,{opacity:0},"<+1.8")
// [6 - 7]
OnlineClass1.to(".customer6",7,{top:"170%", ease: Power1.easeIn},"<+1")
OnlineClass1.to(".customer6",7,{width: "356%", ease: Power1.easeIn},"<")
OnlineClass1.to(".customer6",7,{left:"-52%", ease: Power1.easeIn},"<")
OnlineClass1.to(".customerText1",3,{opacity:0},"<")
OnlineClass1.from(".customer6",1.3,{opacity:0, ease: Power1.easeIn},"<+1.5")

OnlineClass1.from(".customer7",1.1,{opacity:0},"<")
OnlineClass1.from(".customerText2",3,{opacity:0},"<")
OnlineClass1.to(".customer7",6,{top:"179%",left:"150%",width: "350%", ease: Power1.easeIn},"<")


OnlineClass1.set(".PhoneHolding_Background, .PhoneScreen_Background, .customer1, .customer2, .customer3, .customer4, .customer5, .customer6, .customer7", {display: "none"}, ">")
OnlineClass1.to(".Storyboard---8",{delay: 3})









// ----------------------------------//
//                                   //
//             // Scene 10
//                                   //
// ----------------------------------//
let EndingOfStoryPIN = gsap.timeline({
    scrollTrigger: {
        trigger: ".Storyboard---10",
        start: "center center",
        end: "+=9000px center",
        pin: true,
        // pinSpacing: false,
        // markers: {
        //     startColor: "red",
        //     endColor: "red"}
        }
    });

let EndingOfStory = gsap.timeline({
    scrollTrigger: {
        trigger: ".Storyboard---10",
        start: "center center",
        end: "+=8000px center",
        toggleActions: "play complete reverse resume",
        scrub: 2.1,
        // markers: {
        //     startColor: "white",
        //     endColor: "white"}
        }
    });
    //Settings before animated
    EndingOfStory.set("body",{backgroundColor:"#262524"},"0.0");
    EndingOfStory.set(".Ending_window",{scale: 1.3, top:"40%"}, "0.0")
    EndingOfStory.set(".Ending_Body1",{width: "140%", top:"45%"}, "0.0")
    EndingOfStory.set(".EndingMc_Text5",{rotation: -12, opacity: 0}, "0.0")
    //Animated
    EndingOfStory.from(".EndingMc_Text1",{duration: 5, opacity: 0}, ">")
    EndingOfStory.from(EndingGroup,{duration: 15, opacity: 0}, ">+15")
    EndingOfStory.from(".Ending_Body1, .Ending_window",{duration: 15, opacity: 0}, "<")
    EndingOfStory.to(".EndingMc_Text1",{duration: 15, opacity: 0}, "<")

    //Zoom Out
    EndingOfStory.to(".Ending_window",15,{width:"80%", top:"50%", scale: 1}, "<-1")
    EndingOfStory.to(".Ending_Body1",15,{width: "80%", top:"50%"}, "<")
    EndingOfStory.from(".Ending_windowbackground1",15,{top:"30%"}, "<")
    EndingOfStory.from(".EndingMc_Text2",{duration: 8, opacity: 0}, "<")

    EndingOfStory.to(".EndingMc_Text5", 7, {y:"-=14", ease: Back.easeInOut},">+7");
    EndingOfStory.to(".EndingMc_Text5", 1.3, {width:"11%", left:"77%",top:"57%", opacity:1},"<");

    EndingOfStory.to("#EndingGroup, .EndingMc_Text5, .EndingMc_Text2",{duration: 7, opacity: 0}, ">+20")

    //Scene [2]
    EndingOfStory.from(".Ending2_BG1", {opacity: 0, filter: "blur(16px)", duration: 6},">")
    EndingOfStory.from(".Ending2_BG1",{top:"55%", duration: 7, ease: Power1.easeOut}, "<")
    EndingOfStory.from(".Ending2_img1", {opacity: 0, filter: "blur(16px)", duration: 6},">")
    EndingOfStory.from(".Ending2_img1",{left:"60%", duration: 7, ease: Power1.easeOut}, "<")
    // Text
    EndingOfStory.from(".Ending2_Text1", {opacity: 0, filter: "blur(16px)", duration: 6},">")
    EndingOfStory.from(".Ending2_Text1",{left:"38%", duration: 7, ease: Power1.easeOut}, "<")

    EndingOfStory.from(".Ending2_img2", {opacity: 0, filter: "blur(16px)", duration: 6},">")
    EndingOfStory.from(".Ending2_img2",{left:"60%", duration: 7, ease: Power1.easeOut}, "<")
    EndingOfStory.from(".Ending2_img3", {opacity: 0, filter: "blur(16px)", duration: 6},">")
    EndingOfStory.from(".Ending2_img3",{left:"60%", duration: 7, ease: Power1.easeOut}, "<")
    EndingOfStory.from(".Ending2_img4", {opacity: 0, filter: "blur(16px)", duration: 6},">")
    EndingOfStory.from(".Ending2_img4",{left:"60%", duration: 9, ease: Power1.easeOut}, "<")
    //[Out]
    EndingOfStory.to(".Ending2_BG1,.Ending2_img1,.Ending2_img2,.Ending2_img3,.Ending2_img4, .Ending2_Text1" ,{opacity: 0, duration: 5,},">")

    //Scene [3]
    EndingOfStory.from(".Ending3_img1", {opacity: 0, filter: "blur(16px)", duration: 6},">")
    EndingOfStory.from(".Ending3_img1",{duration: 7, ease: Power1.easeOut}, "<")
    //Text In
    EndingOfStory.from(".Ending3_Text1", {opacity: 0, filter: "blur(5px)", duration: 6},">")
    EndingOfStory.from(".Ending3_Text1",{left:"72%", duration: 9, ease: Power1.easeOut}, "<")
    //Text Out
    EndingOfStory.to(".Ending3_Text1",{duration: 5, opacity: 0}, ">+10")
    EndingOfStory.to(".Ending3_img1",80,{top:"-290%", ease: Power0.easeOut},"<-2")

    // Scene [4]
    EndingOfStory.from(".Ending4_img1", {opacity: 0, filter: "blur(16px)", duration: 5},">-15")
    EndingOfStory.from(".Ending4_img1",{top:"100%",width:"66%", duration: 12, ease: Power1.easeOut}, "<")

    
    EndingOfStory.from(".Ending4_Text1" ,{opacity: 0, duration: 5,},">-0.3")
    EndingOfStory.from(".Ending4_Text2" ,{opacity: 0, duration: 7,},">+0.5")


    EndingOfStory.to(".Ending4_img1, .Ending4_Text1, .Ending4_Text2", 9,{opacity: 0},">+7")
    EndingOfStory.set(".Ending4_img1, .Ending4_Text1, .Ending4_Text2",{display:"none"}, ">")
    // [Scene 5]
    
    EndingOfStory.from(".Ending5_Frame1",8, {opacity: 0},">")
    EndingOfStory.from(".Ending5_illus1",8, {opacity: 0, filter: "blur(16px)"},">")
    EndingOfStory.from(".Ending5_illus1",37, {top:"56%",left:"50%", width:"130%", ease: Power1.easeOut}, "<")
    EndingOfStory.from(".Ending5_Text1",10,{opacity: 0},"<")
    
    EndingOfStory.from(".Ending5_illus2",12,{opacity: 0, filter: "blur(16px)"},"<+8")
    EndingOfStory.from(".Ending5_illus2",34, {top:"50%",left:"48%", width:"110%", ease: Power1.easeOut}, "<")

    //Body & Shadow
    EndingOfStory.from(".Ending5_illusShadow1",6,{opacity: 0, filter: "blur(16px)"},"<+4")
    EndingOfStory.from(".Ending5_illusShadow1",33, {top:"100%",left:"40%", width:"20%", ease: Power1.easeOut}, "<")
    EndingOfStory.from(".Ending5_illusBody1",2,{opacity: 0},"<+3")
    EndingOfStory.from(".Ending5_illusBody1",5,{filter: "blur(16px)"},"<")
    EndingOfStory.from(".Ending5_illusBody1",30, {top:"110%",left:"10%"}, "<")
    EndingOfStory.from(".Ending5_illusBody1",30, { width:"56%"}, "<")
    EndingOfStory.to(".Ending5_Text1",6,{opacity: 0},"<")
    EndingOfStory.from(".Ending5_Text2",10,{opacity: 0},"<")

    EndingOfStory.from(".Ending5_illus3",5,{opacity: 0, filter: "blur(16px)"},"<+7.5")
    EndingOfStory.from(".Ending5_illus3",27, {top:"50%",left:"47%", width:"90%", ease: Power1.easeOut}, "<")

    EndingOfStory.from(".Ending5_illus4",8,{opacity: 0, filter: "blur(16px)"},"<+5")
    EndingOfStory.from(".Ending5_illus4",21, {top:"40%",left:"49%", width:"100%", ease: Power1.easeOut}, "<")

    EndingOfStory.from(".Ending5_illus5",4,{opacity: 0, filter: "blur(5px)"},"<-6")
    EndingOfStory.from(".Ending5_illus5",24, {top:"40%",left:"49%", width:"110%", ease: Power1.easeOut}, "<-6")
    
    EndingOfStory.from(".Ending5_illus6",8,{opacity: 0, filter: "blur(10px)"},"<+7")
    EndingOfStory.from(".Ending5_illus6",20, {top:"43%",left:"21.5%",width:"56%", ease: Power1.easeOut}, "<")

    EndingOfStory.from(".Ending5_illus7",8,{opacity: 0, filter: "blur(10px)"},"<+3")
    EndingOfStory.from(".Ending5_illus7",24, {top:"51%",left:"74.5%",width:"57%", ease: Power1.easeOut}, "<")
    EndingOfStory.to(".Ending5_Text2",6,{opacity: 0},"<")
    EndingOfStory.from(".Ending5_Text3",10,{opacity: 0},"<")
    // [Out]


    EndingOfStory.to(".Ending5_illus1, .Ending5_illus2, .Ending5_illus3, .Ending5_illus4, .Ending5_illus5, .Ending5_illus6, .Ending5_illus7, .Ending5_illusShadow1, .Ending5_illusBody1" ,{opacity: 0, duration: 5,},">+20")
    EndingOfStory.to(".Ending5_Frame1, .Ending5_Text3",8, {opacity: 0},">")
    EndingOfStory.set(".Ending5_Frame1, .Ending5_illus1, .Ending5_illus2, .Ending5_illus3, .Ending5_illus4, .Ending5_illus5, .Ending5_illus6, .Ending5_illus7, .Ending5_illusShadow1, .Ending5_illusBody1" ,{display:"none"},">")
    EndingOfStory.set(".Ending2_BG1,.Ending2_img1,.Ending2_img2,.Ending2_img3,.Ending2_img4, .Ending2_Text1" ,{display: "none"},">")

    // [Scene 6]
    EndingOfStory.from(".Ending6_img1", {opacity: 0, filter: "blur(16px)", duration: 6},">")
    EndingOfStory.from(".Ending6_img1",{duration: 7, ease: Power1.easeOut}, "<")
    EndingOfStory.to(".Ending6_img1",100,{top:"-290%"},">-1")
    //Scene [7]
    EndingOfStory.from("#Ending7BG1, .Ending7_SCBody1",6,{opacity: 0, filter: "blur(16px)"},">+9")
    // Transition [in]

    EndingOfStory.from(".Ending7_Text1",10,{opacity: 0},">")

    EndingOfStory.to(".Ending7Leaves", 35,{left:"150%", ease: Power1.easeIn},"<+5");
    EndingOfStory.to(".Ending7Leaves", 35,{rotation: 840},"<");
    EndingOfStory.to(".Ending7Leaves", 35,{width: "13%"},"<");
    EndingOfStory.to(".Ending7Leaves", 35,{top: "60%"},"<");
    EndingOfStory.to(".Ending7_SCBody1",3,{opacity: 0},"<+22")

    EndingOfStory.to(".Ending7_Text1",6,{opacity: 0},"<")
    EndingOfStory.from(".Ending7_Text2",10,{opacity: 0},">")
    //[Out]
    EndingOfStory.to("#Ending7BG1",35,{transform: 'translateX(-40%) translateY(0%)'},">+10")
    EndingOfStory.to("#Ending7BG1",15,{transform: 'translateX(-45%) translateY(-50%)', ease: Power1.easeInOut},">+5")

    EndingOfStory.to(".Ending7_Text2",6,{opacity: 0},"<")
    EndingOfStory.from("#Ending7BG2",15,{transform: "translateX(45%) translateY(50%)", ease: Power1.easeInOut},"<+1.5")
    EndingOfStory.from(".Ending7_Text3",10,{opacity: 0},">")
    EndingOfStory.to(".Ending7_Text3",6,{opacity: 0},">+7")
    EndingOfStory.from(".Ending7_Text4",10,{opacity: 0},">")
    EndingOfStory.to(".Ending7_Text4",6,{opacity: 0},">+7")
    EndingOfStory.from(".Ending7_Text5",10,{opacity: 0},">")
    EndingOfStory.to(".Ending7_Text5",6,{opacity: 0},">+7")

    EndingOfStory.to("#Ending7BG2",15,{transform: "translateX(-45%) translateY(-60%)", ease: Power1.easeInOut},">+5")

    EndingOfStory.from("#Ending7_BG3Base",15,{transform: "translateX(0%) translateY(60%)", ease: Power1.easeInOut},"<+1.5")
    EndingOfStory.from("#Ending7_BG3Body",15,{transform: "translateX(-25%) translateY(+70%)", ease: Power1.easeInOut},"<+1")
    EndingOfStory.from(".Ending7_Text6", {opacity: 0, filter: "blur(5px)", duration: 6},">")
    EndingOfStory.from(".Ending7_Text6",{left:"72%", duration: 9, ease: Power1.easeOut}, "<")
    // [Out]
    EndingOfStory.to("#Ending7_BG3Body",17,{opacity:0, ease: Power1.easeInOut},">")
    EndingOfStory.to("#Ending7_BG3Base",15,{opacity:0, ease: Power1.easeInOut},"<+3.5")
    EndingOfStory.to(".Ending7_Text6",{duration: 5, opacity: 0}, "<")
    EndingOfStory.set("#EndingGroup, #Ending7ImgSVGID1, #Ending7_BG3Base, #Ending7_BG3Body, #Ending7BG1, #Ending7BG2, .Ending7_SCBody1, .Ending7_Text6" ,{display: "none"},">")





    // EndingOfStory.from(".Out_Frame1",{duration: 3, opacity: 0}, ">+10")
    // EndingOfStory.to(".Out_Frame1",{duration: 1, opacity: 0}, ">+3")
    // EndingOfStory.from(".EndingMc_Text4",{duration: 5, opacity: 0}, ">+3")
    // EndingOfStory.to(".EndingMc_Text4",{duration: 1, opacity: 0}, ">+3")
    EndingOfStory.to(".Ending_Body1",{delay: 5}, ">")
    // [END]


    // $(document).ready(function(){
    //     $(document).keydown(function(event) {
    //     if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
    //         // alert('disabling zooming'); 
    //         event.preventDefault();
    //         // 107 Num Key  +
    //         //109 Num Key  -
    //         //173 Min Key  hyphen/underscor Hey
    //         // 61 Plus key  +/=
    //          }
    //     });
    
    //     $(window).bind('mousewheel DOMMouseScroll', function (event) {
    //            if (event.ctrlKey == true) {
    //         //    alert('disabling zooming'); 
    //            event.preventDefault();
    //            }
    //     });
    // });

    
//     ScrollTrigger.config({
//     // a comma-delimited list of events that trigger a refresh. 
//     // default: "visibilitychange,DOMContentLoaded,load,resize"
//     // so you could remove the "resize" one:
//     autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
//   });
