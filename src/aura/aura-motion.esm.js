/**
 * Aura Motion: versão ESM para Vite / React (ex.: projetos Lovable).
 * import { initAuraMotion } from './aura-motion.esm.js'
 * useEffect(() => { initAuraMotion(); }, []);
 */

export const defaults = {
    navSelector: "header.nav-load",
    heroTitleId: "hero-title",
    heroEarlyRevealSelector: ".hero-badge, .hero-stat",
    revealSelector: ".reveal",
    revealThreshold: 0.12,
    carouselIntervalMs: 5000,
    modalBackdropId: "ds-modal-backdrop",
    modalPanelId: "ds-modal-panel",
    modalOpenId: "ds-open-modal",
    modalCloseIds: ["ds-close-modal", "ds-close-modal-2", "ds-close-modal-3"],
};

function bindFlashlight() {
    document.addEventListener(
        "mousemove",
        (e) => {
            const card = e.target.closest(".flashlight-card");
            if (!card) return;
            const rect = card.getBoundingClientRect();
            card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
            card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
        },
        { capture: true, passive: true }
    );
}

function bindParallax() {
    window.addEventListener("scroll", () => {
        const scrolled = window.scrollY;
        document.querySelectorAll(".parallax-img").forEach((el) => {
            let speed = parseFloat(el.dataset.speed);
            if (Number.isNaN(speed)) speed = 0.1;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
        document.querySelectorAll(".parallax-element").forEach((el) => {
            let speed = parseFloat(el.dataset.speed);
            if (Number.isNaN(speed)) speed = 0.1;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

function bindModal(cfg) {
    const backdrop = document.getElementById(cfg.modalBackdropId);
    const panel = document.getElementById(cfg.modalPanelId);
    const openBtn = document.getElementById(cfg.modalOpenId);

    function openModal() {
        if (backdrop) {
            backdrop.classList.add("is-open");
            backdrop.setAttribute("aria-hidden", "false");
        }
        if (panel) panel.classList.add("is-open");
    }

    function closeModal() {
        if (backdrop) {
            backdrop.classList.remove("is-open");
            backdrop.setAttribute("aria-hidden", "true");
        }
        if (panel) panel.classList.remove("is-open");
    }

    if (openBtn) openBtn.addEventListener("click", openModal);
    cfg.modalCloseIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.addEventListener("click", closeModal);
    });
    if (backdrop) backdrop.addEventListener("click", closeModal);
}

/** @param {Record<string, unknown>} [userCfg] sobrescreve chaves de `defaults` */
export function initAuraMotion(userCfg) {
    const cfg = { ...defaults, ...userCfg };

    setTimeout(() => {
        const nav = document.querySelector(cfg.navSelector);
        if (nav) nav.classList.add("loaded");
    }, 100);

    if (cfg.heroTitleId) {
        setTimeout(() => {
            const heroTitle = document.getElementById(cfg.heroTitleId);
            if (heroTitle) heroTitle.classList.add("reveal-active");
        }, 500);
    }

    if (cfg.heroEarlyRevealSelector) {
        setTimeout(() => {
            document.querySelectorAll(cfg.heroEarlyRevealSelector).forEach((el) => {
                el.classList.add("active");
            });
        }, 500);
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("active");
                const textWrappers = entry.target.querySelectorAll(".text-reveal-wrapper");
                if (textWrappers.length > 0 || entry.target.classList.contains("text-reveal-wrapper")) {
                    entry.target.classList.add("reveal-active");
                }
                if (entry.target.tagName === "H2" || entry.target.tagName === "H1") {
                    entry.target.classList.add("reveal-active");
                }
            });
        },
        { root: null, rootMargin: "0px", threshold: cfg.revealThreshold }
    );

    document.querySelectorAll(cfg.revealSelector).forEach((el) => observer.observe(el));
    document.querySelectorAll("h1, h2").forEach((el) => {
        if (el.querySelector(".text-reveal-content")) observer.observe(el);
    });

    const slides = document.querySelectorAll(".carousel-slide");
    let currentSlide = 0;
    if (slides.length > 1) {
        setInterval(() => {
            slides[currentSlide].classList.remove("active");
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add("active");
        }, cfg.carouselIntervalMs);
    }

    bindParallax();
    bindFlashlight();
    bindModal(cfg);
}
