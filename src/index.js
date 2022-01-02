import { dom } from '@artevelde-uas/canvas-lms-app';

import styles from './index.module.css';


export default async function ({ hideScrollbar }) {
    const stickyFrame = await dom.onElementReady('.ic-sticky-frame');

    if (hideScrollbar) {
        stickyFrame.classList.add(styles.hideScrollbar);
    }

    function setHeight() {
        const height = Math.floor(document.documentElement.clientHeight - stickyFrame.getBoundingClientRect().top);

        stickyFrame.style.height = `${height}px`;
    }

    dom.onClassAdded(document.body, 'course-menu-expanded', () => {
        setHeight();

        window.addEventListener('resize', setHeight);
        document.addEventListener('scroll', setHeight);
    });

    dom.onClassRemoved(document.body, 'course-menu-expanded', () => {
        window.removeEventListener('resize', setHeight);
        document.removeEventListener('scroll', setHeight);
    });
}
