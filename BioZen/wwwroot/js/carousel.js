
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.bz-carousel__btn');
    if (!btn) return;

    const track = btn.closest('.bz-carousel').querySelector('.bz-carousel__track');
    const cards = track.children;
    if (cards.length < 2 || track.dataset.moving) return;

    const step = cards[1].offsetLeft - cards[0].offsetLeft;
    const max = track.scrollWidth - track.clientWidth;
    const next = btn.classList.contains('bz-carousel__btn--next');
    let index = Math.round(track.scrollLeft / step);

    track.dataset.moving = 'true';
    track.style.scrollSnapType = 'none';

    if (next && (index + 1) * step > max + 1) {
        track.append(cards[0]);
        index--;
    } else if (!next && index === 0) {
        track.prepend(cards[cards.length - 1]);
        index++;
    }

    track.scrollTo({ left: index * step, behavior: 'instant' });
    track.scrollTo({ left: (next ? index + 1 : index - 1) * step, behavior: 'smooth' });

    const done = () => {
        track.style.scrollSnapType = '';
        delete track.dataset.moving;
    };
    track.addEventListener('scrollend', done, { once: true });
    setTimeout(done, 600);
});
