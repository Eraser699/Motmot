
    const photos = document.querySelectorAll('.photo');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.5 });

    photos.forEach(photo => observer.observe(photo));

     const container = document.querySelector('.falling-container');

  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('falling');
    heart.textContent = '🌸';

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = 5 + Math.random() * 5 + 's';
    heart.style.fontSize = 16 + Math.random() * 24 + 'px';

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 10000);
  }

  setInterval(createHeart, 500); 

    function playMusic() {
      const audio = document.getElementById('bgMusic');
      audio.play();
    }