import { dom } from '@artevelde-uas/canvas-lms-app';

import styles from './index.module.css';


export default async function ({ hideScrollbar, resetOnScroll }) {
    const stickyContainer = await dom.onElementReady('#sticky-container');

    if (hideScrollbar) {
        stickyContainer.classList.add(styles.hideScrollbar);
    }

    function setHeight(smooth = true) {
        const height = Math.floor(document.documentElement.clientHeight - stickyContainer.getBoundingClientRect().top);

        stickyContainer.style.height = `${height}px`;

        if (resetOnScroll) {
            stickyContainer.scrollTo({ top: 0, behavior: smooth ? 'smooth': 'auto' });
        }
    }

    dom.onClassAdded(document.body, () => {
        setHeight(false);

        window.addEventListener('resize', setHeight);
        document.addEventListener('scroll', setHeight);
    }, {
        filter: 'course-menu-expanded'
    });

    dom.onClassRemoved(document.body, () => {
        window.removeEventListener('resize', setHeight);
        document.removeEventListener('scroll', setHeight);
    }, {
        filter: 'course-menu-expanded'
    });
}
