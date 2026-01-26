document.addEventListener('DOMContentLoaded', function() {
    const svgPattern = `data:image/svg+xml;base64,${btoa(`
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#1a5c36" stop-opacity="0.08" />
                    <stop offset="50%" stop-color="#0d3b1f" stop-opacity="0.05" />
                    <stop offset="100%" stop-color="#1a5c36" stop-opacity="0.08" />
                </linearGradient>
                
                <pattern id="gridPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <rect width="60" height="60" fill="rgba(26, 92, 54, 0.03)"/>
                    <path d="M 0 15 L 60 15" stroke="rgba(76, 175, 80, 0.12)" stroke-width="0.8" fill="none"/>
                    <path d="M 0 30 L 60 30" stroke="rgba(76, 175, 80, 0.12)" stroke-width="0.8" fill="none"/>
                    <path d="M 0 45 L 60 45" stroke="rgba(76, 175, 80, 0.12)" stroke-width="0.8" fill="none"/>
                    <path d="M 15 0 L 15 60" stroke="rgba(76, 175, 80, 0.12)" stroke-width="0.8" fill="none"/>
                    <path d="M 30 0 L 30 60" stroke="rgba(76, 175, 80, 0.12)" stroke-width="0.8" fill="none"/>
                    <path d="M 45 0 L 45 60" stroke="rgba(76, 175, 80, 0.12)" stroke-width="0.8" fill="none"/>
                    
                    <circle cx="15" cy="15" r="1.2" fill="rgba(76, 175, 80, 0.18)"/>
                    <circle cx="30" cy="15" r="1.2" fill="rgba(76, 175, 80, 0.18)"/>
                    <circle cx="45" cy="15" r="1.2" fill="rgba(76, 175, 80, 0.18)"/>
                    <circle cx="15" cy="30" r="1.2" fill="rgba(76, 175, 80, 0.18)"/>
                    <circle cx="30" cy="30" r="1.2" fill="rgba(76, 175, 80, 0.18)"/>
                    <circle cx="45" cy="30" r="1.2" fill="rgba(76, 175, 80, 0.18)"/>
                    <circle cx="15" cy="45" r="1.2" fill="rgba(76, 175, 80, 0.18)"/>
                    <circle cx="30" cy="45" r="1.2" fill="rgba(76, 175, 80, 0.18)"/>
                    <circle cx="45" cy="45" r="1.2" fill="rgba(76, 175, 80, 0.18)"/>
                </pattern>
                
                <filter id="grainFilter">
                    <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch"/>
                    <feColorMatrix type="saturate" values="0"/>
                    <feBlend in="SourceGraphic" mode="soft-light" result="noise"/>
                </filter>
                
                <radialGradient id="spotlightGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="rgba(76, 175, 80, 0.15)" />
                    <stop offset="70%" stop-color="rgba(76, 175, 80, 0.05)" />
                    <stop offset="100%" stop-color="rgba(76, 175, 80, 0)" />
                </radialGradient>
            </defs>
            
            <rect width="100%" height="100%" fill="#0a0a0a"/>
            <rect width="100%" height="100%" fill="url(#gridGradient)" opacity="0.5"/>
            <rect width="100%" height="100%" fill="url(#gridPattern)" opacity="0.4"/>
            
            <circle cx="80%" cy="20%" r="400" fill="url(#spotlightGradient)" opacity="0.6" filter="blur(80px)"/>
            <circle cx="20%" cy="80%" r="300" fill="url(#spotlightGradient)" opacity="0.4" filter="blur(60px)"/>
            
            <g opacity="0.15">
                <path d="M0,0 L100,100" stroke="rgba(76, 175, 80, 0.3)" stroke-width="1"/>
                <path d="M100,0 L0,100" stroke="rgba(76, 175, 80, 0.3)" stroke-width="1"/>
            </g>
            
            <rect width="100%" height="100%" fill="rgba(10, 10, 10, 0.7)"/>
            <rect width="100%" height="100%" filter="url(#grainFilter)" opacity="0.03"/>
        </svg>
    `)}`;

    const backgroundDiv = document.createElement('div');
    backgroundDiv.id = 'background-pattern';
    backgroundDiv.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('${svgPattern}') center/cover no-repeat;
        z-index: -1;
        pointer-events: none;
    `;
    
    document.body.appendChild(backgroundDiv);
});