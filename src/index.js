import { dom } from '@artevelde-uas/canvas-lms-app';

import styles from './index.module.css';


export default async function ({
    showScrollbar = true,
    thinScrollbar = false,
    classicStyles = false,
    resetOnScroll = false
}) {
    const stickyContainer = await dom.onElementReady('#sticky-container');

    // Use a thin scrollbar
    if (thinScrollbar) {
        stickyContainer.classList.add(styles.thinScrollbar);
    }
    
    // Use the classic menu styles
    if (classicStyles) {
        stickyContainer.classList.add(styles.classicStyles);
    }
    
    // Hide the scrollbar but keep scroll behavior
    if (showScrollbar === false) {
        stickyContainer.classList.add(styles.hideScrollbar);
        stickyContainer.classList.remove('has-scrollbar');
    }
    
    // Show scrollbar on hover
    if (showScrollbar === 'hover') {
        stickyContainer.classList.add(styles.hoverScrollbar);
    }

    /** Sets the correct height of the left menu based on current document scroll position */
    function setHeight(smooth = true) {
        const height = Math.floor(document.documentElement.clientHeight - stickyContainer.getBoundingClientRect().top);

        stickyContainer.style.height = `${height}px`;

        if (resetOnScroll) {
            stickyContainer.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
        }
    }

    // Apply the behavior when the menu becomes visible
    dom.onClassAdded(document.body, () => {
        setHeight(false);
        
        window.addEventListener('resize', setHeight);
        document.addEventListener('scroll', setHeight);
    }, {
        filter: 'course-menu-expanded'
    });
    
    // Stop the behavior when the menu is collapsed
    dom.onClassRemoved(document.body, () => {
        window.removeEventListener('resize', setHeight);
        document.removeEventListener('scroll', setHeight);
    }, {
        filter: 'course-menu-expanded'
    });
}
