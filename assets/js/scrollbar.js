document.addEventListener('DOMContentLoaded', () => {
    const scrollbar = document.createElement('div');
    scrollbar.classList.add('scrollbar');
    document.body.appendChild(scrollbar);

    const scrollbarThumb = document.createElement('div');
    scrollbarThumb.classList.add('scrollbar-thumb');
    scrollbar.appendChild(scrollbarThumb);

    const myButton = document.getElementById('myBtn');
    let isScrolling;
    let isHovering = false;
    let isDragging = false;
    let startY, startThumbTop, contentHeight, viewportHeight, scrollHeight, scrollTopMax;

    function updateScrollbar() {
        contentHeight = document.documentElement.scrollHeight;
        viewportHeight = window.innerHeight;
        scrollHeight = viewportHeight / contentHeight * viewportHeight;

        const scrollTop = window.scrollY;
        scrollTopMax = contentHeight - viewportHeight;
        const thumbTop = scrollTop / scrollTopMax * (viewportHeight - scrollHeight);

        scrollbarThumb.style.height = `${scrollHeight}px`;
        scrollbarThumb.style.transform = `translateY(${thumbTop}px)`;

        scrollbar.style.opacity = '1';

        clearTimeout(isScrolling);
        if (!isHovering) {
            isScrolling = setTimeout(() => {
                scrollbar.style.opacity = '0';
            }, 2000);
        }
    }

    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
        };
    }

    const debouncedUpdateScrollbar = debounce(updateScrollbar, 10);

    window.onscroll = () => {
        debouncedUpdateScrollbar();
        scrollFunction(); // Chiamata alla funzione di scroll per il pulsante
    };

    scrollbar.onmouseover = () => {
        isHovering = true;
        scrollbar.style.opacity = '1';
        clearTimeout(isScrolling);
    };

    scrollbar.onmouseout = () => {
        isHovering = false;
        if (!isDragging) {
            isScrolling = setTimeout(() => {
                scrollbar.style.opacity = '0';
            }, 2000);
        }
    };

    scrollbarThumb.onmousedown = (e) => {
        isDragging = true;
        startY = e.clientY;
        const thumbTransform = window.getComputedStyle(scrollbarThumb).transform;
        if (thumbTransform !== 'none') {
            startThumbTop = parseFloat(thumbTransform.split(',')[5]);
        } else {
            startThumbTop = 0;
        }
        document.body.classList.add('no-select'); // Evita selezione del testo durante il drag

        const onMouseMove = (e) => {
            if (isDragging) {
                const deltaY = e.clientY - startY;
                const newThumbTop = startThumbTop + deltaY;
                const newScrollTop = newThumbTop / (viewportHeight - scrollHeight) * scrollTopMax;

                window.scrollTo(0, newScrollTop);
                updateScrollbar();
            }
        };

        const onMouseUp = () => {
            isDragging = false;
            document.body.classList.remove('no-select');
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            isScrolling = setTimeout(() => {
                scrollbar.style.opacity = '0';
            }, 2000);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        return false; // Previene selezione del testo
    };


    window.topFunction = topFunction; // Esponi la funzione topFunction globalmente

    // Inizializza la scrollbar
    updateScrollbar();
});
