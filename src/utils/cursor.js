export function initCursor() {
    const cursor = document.getElementById('cursor-stalker');
    if (!cursor) return;

    // Basic styling
    Object.assign(cursor.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        zIndex: '9999',
        transition: 'transform 0.05s linear, width 0.3s, height 0.3s', // Faster follow
        mixBlendMode: 'difference'
    });

    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    });

    // Event Delegation for hover effects
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.cursor-hover')) {
            cursor.style.width = '60px'; // Slightly larger
            cursor.style.height = '60px';
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.cursor-hover')) {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
        }
    });
}
