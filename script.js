// Animate skill bars when scrolling into view
const skills = document.querySelectorAll('.fill');

function animateSkills() {
  const triggerBottom = window.innerHeight * 0.8;
  
  skills.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;
    if(skillTop < triggerBottom) {
      skill.style.width = skill.style.width; // triggers CSS transition
    }
  });
}

window.addEventListener('scroll', animateSkills);

// Smooth scroll down from arrow
document.querySelector('.scroll-down').addEventListener('click', () => {
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});
