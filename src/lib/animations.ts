/**
 * Animation Utilities for Framer Motion
 * 
 * Centralized animation configurations for consistent motion design.
 * All animations follow the compact SaaS aesthetic with subtle, professional movements.
 */

import { Variants, Transition } from "framer-motion";

/* ============================================================================
   Transition Presets
   ============================================================================ */

export const transitions = {
    // Fast - For micro-interactions (buttons, hovers)
    fast: {
        type: "spring",
        stiffness: 400,
        damping: 30,
    } as Transition,

    // Default - For most UI elements
    default: {
        type: "spring",
        stiffness: 300,
        damping: 25,
    } as Transition,

    // Smooth - For page transitions
    smooth: {
        type: "spring",
        stiffness: 200,
        damping: 20,
    } as Transition,

    // Ease - For simple fades
    ease: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
    } as Transition,
};

/* ============================================================================
   Animation Variants
   ============================================================================ */

/**
 * Fade In - Simple opacity animation
 * Usage: <motion.div variants={fadeIn} initial="hidden" animate="visible" />
 */
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: transitions.ease,
    },
};

/**
 * Fade In Up - Fade with subtle upward movement
 * Perfect for page content, cards
 */
export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 12,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: transitions.default,
    },
};

/**
 * Fade In Down - Fade with downward movement
 * Good for dropdowns, modals
 */
export const fadeInDown: Variants = {
    hidden: {
        opacity: 0,
        y: -12,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: transitions.default,
    },
};

/**
 * Scale In - Subtle scale animation
 * Great for buttons, badges
 */
export const scaleIn: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: transitions.fast,
    },
};

/**
 * Slide In Left - Horizontal slide
 * Good for sidebars, drawers
 */
export const slideInLeft: Variants = {
    hidden: {
        opacity: 0,
        x: -24,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: transitions.default,
    },
};

/**
 * Slide In Right - Horizontal slide from right
 */
export const slideInRight: Variants = {
    hidden: {
        opacity: 0,
        x: 24,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: transitions.default,
    },
};

/**
 * Stagger Container - For list animations
 * Usage: 
 * <motion.div variants={staggerContainer} initial="hidden" animate="visible">
 *   <motion.div variants={staggerItem}>Item 1</motion.div>
 *   <motion.div variants={staggerItem}>Item 2</motion.div>
 * </motion.div>
 */
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1,
        },
    },
};

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
        opacity: 1,
        y: 0,
        transition: transitions.fast,
    },
};

/* ============================================================================
   Page Transitions
   ============================================================================ */

/**
 * Page Transition - For route changes
 * Usage in layout or page component
 */
export const pageTransition: Variants = {
    initial: {
        opacity: 0,
        y: 8,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.2,
        },
    },
};

/* ============================================================================
   Hover Animations
   ============================================================================ */

/**
 * Hover Scale - Subtle scale on hover
 * Usage: <motion.button whileHover={hoverScale} />
 */
export const hoverScale = {
    scale: 1.02,
    transition: transitions.fast,
};

/**
 * Hover Lift - Slight upward movement
 */
export const hoverLift = {
    y: -2,
    transition: transitions.fast,
};

/**
 * Tap Scale - Feedback on click
 * Usage: <motion.button whileTap={tapScale} />
 */
export const tapScale = {
    scale: 0.98,
    transition: transitions.fast,
};

/* ============================================================================
   Loading Animations
   ============================================================================ */

/**
 * Pulse - For loading states
 */
export const pulse: Variants = {
    pulse: {
        scale: [1, 1.05, 1],
        opacity: [1, 0.8, 1],
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

/**
 * Spin - For spinners
 */
export const spin = {
    rotate: 360,
    transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear",
    },
};

/* ============================================================================
   Utility Functions
   ============================================================================ */

/**
 * Create a custom stagger delay
 */
export const createStagger = (staggerDelay: number = 0.05) => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: staggerDelay,
        },
    },
});

/**
 * Create a custom fade in with delay
 */
export const createFadeIn = (delay: number = 0) => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            ...transitions.ease,
            delay,
        },
    },
});
