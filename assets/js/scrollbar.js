document.addEventListener('DOMContentLoaded', () => {
    const scrollbar = document.createElement('div');
    scrollbar.classList.add('scrollbar');
    document.body.appendChild(scrollbar);

    const scrollbarThumb = document.createElement('div');
    scrollbarThumb.classList.add('scrollbar-thumb');
    scrollbar.appendChild(scrollbarThumb);

    let isScrolling;
    let isHovering = false;

    function updateScrollbar() {
        const contentHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight;
        const scrollHeight = viewportHeight / contentHeight * viewportHeight;

        const scrollTop = window.scrollY;
        const scrollTopMax = contentHeight - viewportHeight;
        const thumbTop = scrollTop / scrollTopMax * (viewportHeight - scrollHeight);

        scrollbarThumb.style.height = `${scrollHeight}px`;
        scrollbarThumb.style.transform = `translateY(${thumbTop}px)`;

        scrollbar.style.opacity = '1';

        clearTimeout(isScrolling);
        if (!isHovering) {
            isScrolling = setTimeout(() => {
                scrollbar.style.opacity = '0';
            }, 1000);
        }
    }

    window.addEventListener('scroll', updateScrollbar);

    scrollbar.addEventListener('mouseover', () => {
        isHovering = true;
        scrollbar.style.opacity = '1';
        clearTimeout(isScrolling);
    });

    scrollbar.addEventListener('mouseout', () => {
        isHovering = false;
        isScrolling = setTimeout(() => {
            scrollbar.style.opacity = '0';
        }, 1000);
    });

    // Inizializza la scrollbar
    updateScrollbar();
});
