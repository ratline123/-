(function() {
    'use strict';
    
    const overlay = document.createElement('div');
    overlay.id = 'ratline-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: #000000;
        z-index: 999999;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: 'Courier New', monospace;
        cursor: default;
        user-select: none;
    `;
    
    const title = document.createElement('h1');
    title.textContent = 'RATLINE';
    title.style.cssText = `
        color: #ff0000;
        font-size: 4rem;
        letter-spacing: 0.5em;
        margin: 0 0 30px 0;
        text-shadow: 0 0 20px #ff0000;
        animation: ratlinePulse 2s ease-in-out infinite;
    `;
    
    const link = document.createElement('a');
    link.href = 'https://discord.gg/YjQsuharj';
    link.textContent = 'discord.gg/YjQsuharj';
    link.target = '_blank';
    link.style.cssText = `
        color: #5865F2;
        font-size: 1.2rem;
        text-decoration: none;
        letter-spacing: 0.1em;
        transition: all 0.3s ease;
    `;
    link.onmouseenter = () => {
        link.style.color = '#ffffff';
        link.style.textShadow = '0 0 10px #5865F2';
    };
    link.onmouseleave = () => {
        link.style.color = '#5865F2';
        link.style.textShadow = 'none';
    };
    
    const subtitle = document.createElement('p');
    subtitle.textContent = 'Click link to join';
    subtitle.style.cssText = `
        color: #444444;
        font-size: 0.8rem;
        margin-top: 15px;
        letter-spacing: 0.2em;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ratlinePulse {
            0%, 100% { opacity: 1; text-shadow: 0 0 20px #ff0000; }
            50% { opacity: 0.7; text-shadow: 0 0 40px #ff0000, 0 0 60px #ff0000; }
        }
    `;
    document.head.appendChild(style);
    
    overlay.appendChild(title);
    overlay.appendChild(link);
    overlay.appendChild(subtitle);
    
    if (document.body) {
        document.body.appendChild(overlay);
    } else {
        window.addEventListener('DOMContentLoaded', () => {
            document.body.appendChild(overlay);
        });
    }
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            overlay.style.transition = 'opacity 0.5s ease';
            overlay.style.opacity = '0';
            setTimeout(() => overlay.remove(), 500);
        }
    });
    
})();
