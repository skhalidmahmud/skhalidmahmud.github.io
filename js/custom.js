$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/tm-bg-slide-1.jpg", 
	 		 "images/tm-bg-slide-2.jpg",
			 "images/tm-bg-slide-3.jpg"
	 			], 	{duration: 3200, fade: 1300});
		});
})

// if (window.innerWidth > 500) {
//   const cursor = document.querySelector('.cursor');
//   const cursorFollower = document.querySelector('.cursor-follower');

//   document.addEventListener('mousemove', (e) => {
//     gsap.to(cursor, {
//       x: e.clientX - 10,
//       y: e.clientY - 10,
//       duration: 0.1,
//       ease: "power2.out"
//     });
//     gsap.to(cursorFollower, {
//       x: e.clientX - 20,
//       y: e.clientY - 20,
//       duration: 0.2,
//       ease: "power2.out"
//     });
//   });
// }

// function initAnimations() {
//     // Navigation animation
//     gsap.to('nav', {
//       y: 0,
//       opacity: 1,
//       duration: 1,
//       ease: "power3.Out",
//     });

//     // Hero animation
//     const heroT1 = gsap.timeline()
//     heroT1
//         .to('.hero-title', {
//           y: 0,
//           filter: 'blur(0)',
//           opacity: 1,
//           duration: 1.2,
//           ease: "power3.Out",
//         })
//         .to('.hero-subtitle', {
//           y: 0,
//           filter: 'blur(0)',
//           opacity: 1,
//           duration: 0.8,
//           ease: "power3.Out",
//         }, "-=0.5")
//         .to('.hero-description', {
//           y: 0,
//           filter: 'blur(0)',
//           opacity: 1,
//           duration: 0.8,
//           ease: "power3.Out",
//         }, "-=0.3")
//         .to('.cta-button', {
//           y: 0,
//           filter: 'blur(0)',
//           opacity: 1,
//           duration: 0.8,
//           ease: "power3.Out",
//         }, "-=0.3")
//     }