import { animateScroll as scroll, scroller } from 'react-scroll';

function scrollToTop() {
    scroll.scrollToTop();
}

function scrollTo(e) {
    scroller.scrollTo(e.target.id.split('-')[1] + '-content', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      })
}
export {scrollToTop, scrollTo};