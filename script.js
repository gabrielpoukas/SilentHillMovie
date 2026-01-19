function updateCountdown() {
    const targetDate = new Date('2026-01-24T20:00:00').getTime(); 
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById('time-left').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        document.getElementById('time-left').innerHTML = 'O evento começou!';
    }
}
setInterval(updateCountdown, 1000);
updateCountdown();

let timerInterval; 

document.getElementById('accept-btn').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.classList.remove('hidden');
    message.classList.add('show');
    
    message.scrollIntoView({ behavior: 'smooth' });
    
    
    startPersonalTimer();
});

function startPersonalTimer() {
    const targetDate = new Date('2026-01-24T20:00:00').getTime(); 
    const timerElement = document.getElementById('event-timer');
    
    console.log('Data alvo:', new Date(targetDate)); 
    
    function updateTimer() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s restantes!`;
        } else {
            timerElement.innerHTML = 'O evento começou! 🎥';
            clearInterval(timerInterval); 
        }
    }
    
    updateTimer(); 
    timerInterval = setInterval(updateTimer, 1000); 
}

document.getElementById('share-btn').addEventListener('click', function() {
    if (navigator.share) {
        navigator.share({
            title: 'Convite para Silent Hill 2',
            text: 'Venha assistir comigo!',
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(window.location.href);
        alert('Link copiado para compartilhar!');
    }
});

window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    document.querySelector('.poster img').style.transform = `translateY(${rate}px)`;
});