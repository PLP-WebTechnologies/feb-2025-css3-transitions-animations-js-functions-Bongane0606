document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const batSignal = document.getElementById('batSignal');
    const activateSignalBtn = document.getElementById('activateSignal');
    const flyBtn = document.getElementById('flyBtn');
    const fightBtn = document.getElementById('fightBtn');
    const resetBtn = document.getElementById('resetBtn');
    const batman = document.getElementById('batman');
    const darkModeBtn = document.getElementById('darkModeBtn');
    const lightModeBtn = document.getElementById('lightModeBtn');
    const batSignalBeam = document.querySelector('.bat-signal-beam');
    const batmanContainer = document.querySelector('.batman-container');
    
    // Load saved preferences
    loadPreferences();
    
    // Bat-Signal functionality
    activateSignalBtn.addEventListener('click', function() {
        batSignal.classList.toggle('active');
        localStorage.setItem('batSignalActive', batSignal.classList.contains('active'));
        
        if (batSignal.classList.contains('active')) {
            activateSignalBtn.textContent = 'DEACTIVATE SIGNAL';
            createBatarang();
        } else {
            activateSignalBtn.textContent = 'SUMMON BATMAN';
        }
    });
    
    // Batman flying animation
    flyBtn.addEventListener('click', function() {
        batman.classList.remove('combat');
        batman.classList.add('flying');
        localStorage.setItem('batmanAnimation', 'flying');
    });
    
    // Batman combat animation
    fightBtn.addEventListener('click', function() {
        batman.classList.remove('flying');
        batman.classList.add('combat');
        localStorage.setItem('batmanAnimation', 'combat');
        createBatarang();
    });
    
    // Reset animation
    resetBtn.addEventListener('click', function() {
        batman.classList.remove('flying', 'combat');
        localStorage.setItem('batmanAnimation', 'none');
    });
    
    // Theme toggles
    darkModeBtn.addEventListener('click', function() {
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
    });
    
    lightModeBtn.addEventListener('click', function() {
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    });
    
    // Create batarang animation
    function createBatarang() {
        const batarang = document.createElement('div');
        batarang.className = 'batarang';
        batmanContainer.appendChild(batarang);
        
        setTimeout(() => {
            batarang.remove();
        }, 1000);
    }
    
    // Load saved preferences from localStorage
    function loadPreferences() {
        // Load theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-mode');
        }
        
        // Load bat-signal state
        const signalActive = localStorage.getItem('batSignalActive') === 'true';
        if (signalActive) {
            batSignal.classList.add('active');
            activateSignalBtn.textContent = 'DEACTIVATE SIGNAL';
        }
        
        // Load animation state
        const animationState = localStorage.getItem('batmanAnimation');
        if (animationState === 'flying') {
            batman.classList.add('flying');
        } else if (animationState === 'combat') {
            batman.classList.add('combat');
        }
    }
    
    // Add some random bats for atmosphere
    createBats();
    
    function createBats() {
        for (let i = 0; i < 5; i++) {
            const bat = document.createElement('div');
            bat.className = 'bat';
            bat.style.left = `${Math.random() * 100}%`;
            bat.style.top = `${Math.random() * 50}%`;
            bat.style.animationDuration = `${5 + Math.random() * 10}s`;
            bat.style.opacity = `${0.3 + Math.random() * 0.7}`;
            document.body.appendChild(bat);
        }
    }
});