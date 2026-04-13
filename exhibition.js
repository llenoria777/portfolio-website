document.addEventListener('DOMContentLoaded', function () {
    const scrollContainer = document.getElementById('scrollContainer');
    const skewScrollItem = document.getElementById('skewScrollItem');
    const backIcon = document.getElementById('backIcon');

    if (!scrollContainer || !skewScrollItem) return;

    function update() {
        const scrollY = scrollContainer.scrollTop;
        
        const moveX = -scrollY * 0.35;
        const moveY = -scrollY * 0.35;

        skewScrollItem.style.transform =
            `translate3d(${moveX}px, ${moveY}px, 0)`;
    }


});
if (backIcon) {
    backIcon.addEventListener('click', function () {
        window.location.href = 'index.html';
    });
}
