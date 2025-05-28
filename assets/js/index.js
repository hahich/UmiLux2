function initScrollHeader() { let e = 0; const t = document.querySelector("header"); window.addEventListener("scroll", (function () { let n = window.pageYOffset || document.documentElement.scrollTop; n > e ? t.classList.add("hide") : t.classList.remove("hide"), e = n <= 0 ? 0 : n })) }
function initDropdowns() { const e = document.querySelectorAll(".dropdown"), t = document.querySelectorAll(".language-option, .currency-option"); window.toggleDropdown = function (t) { const n = document.getElementById(t); e.forEach((e => { e.id !== t && e.classList.remove("active") })), n.classList.toggle("active") }, document.addEventListener("click", (function (n) { Array.from(t).some((e => e.contains(n.target))) || e.forEach((e => { e.classList.remove("active") })) })) }
function initCategoryMenu() { const e = document.getElementById("categoryToggle"), t = document.getElementById("submenu-categories"), n = document.getElementById("overlay"); e && t && n && (e.addEventListener("click", (e => { e.stopPropagation(), t.classList.toggle("active"), n.classList.toggle("active") })), document.addEventListener("click", (o => { e.contains(o.target) || (t.classList.remove("active"), n.classList.remove("active")) })), n.addEventListener("click", (() => { t.classList.remove("active"), n.classList.remove("active") }))) }
function toggleMenu() { const e = document.getElementById("menuOverlay"), t = document.getElementById("backdrop"); e.classList.toggle("active"), t.classList.toggle("active"), e.classList.remove("gray"), document.querySelectorAll(".mobile-sub-menu").forEach((e => { e.classList.remove("active") })) }
function toggleSubMenu(e) { const t = document.getElementById(`subMenu-${e}`), n = document.getElementById("menuOverlay"), o = t.classList.contains("active"); document.querySelectorAll(".mobile-sub-menu").forEach((e => { e.classList.remove("active") })), o ? n.classList.remove("gray") : (t.classList.add("active"), n.classList.add("gray")) } function closeAll() { const e = document.getElementById("menuOverlay"), t = document.getElementById("backdrop"); e.classList.remove("active"), t.classList.remove("active"), document.querySelectorAll(".mobile-sub-menu").forEach((e => { e.classList.remove("active") })), e.classList.remove("gray") }
function initBannerSlider() {
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const banner = document.querySelector("#banner");
    const items = document.querySelectorAll(".banner-item");
    const dots = document.querySelectorAll(".dot");
    const bannerInner = document.querySelector(".banner-inner");

    let interval;
    let currentSlide = 0;
    let startX = 0;
    let isDragging = false;

    let currentTranslate = 0;
    let prevTranslate = 0;

    const updateSlider = () => {
        items.forEach((item, index) => {
            item.classList.toggle("active", index === currentSlide);
            item.style.zIndex = index === currentSlide ? 1 : 0;
        });
        dots.forEach((dot, index) => dot.classList.toggle("active", index === currentSlide));
    };

    const setSlide = (index) => {
        currentSlide = (index + items.length) % items.length;
        updateSlider();
    };

    const nextSlide = () => setSlide(currentSlide + 1);

    const startAutoplay = () => {
        if (!interval) {
            interval = setInterval(nextSlide, 5000);
        }
    };

    const stopAutoplay = () => {
        clearInterval(interval);
        interval = null;
    };

    function touchStart(event) {
        isDragging = true;
        startX = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
        stopAutoplay();
    }

    function touchMove(event) {
        if (!isDragging) return;
        const currentPosition = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
        const diff = currentPosition - startX;

        if (Math.abs(diff) > 100) {
            if (diff > 0) {
                setSlide(currentSlide - 1);
            } else {
                setSlide(currentSlide + 1);
            }
            isDragging = false;
            startAutoplay();
        }
    }

    function touchEnd() {
        isDragging = false;
        startAutoplay();
    }

    bannerInner.addEventListener('touchstart', touchStart);
    bannerInner.addEventListener('touchmove', touchMove);
    bannerInner.addEventListener('touchend', touchEnd);
    bannerInner.addEventListener('mousedown', touchStart);
    bannerInner.addEventListener('mousemove', touchMove);
    bannerInner.addEventListener('mouseup', touchEnd);
    bannerInner.addEventListener('mouseleave', touchEnd);

    bannerInner.addEventListener('contextmenu', (e) => e.preventDefault());

    prevBtn?.addEventListener("click", () => {
        stopAutoplay();
        setSlide(currentSlide - 1);
        setTimeout(startAutoplay, 100);
    });

    nextBtn?.addEventListener("click", () => {
        stopAutoplay();
        nextSlide();
        setTimeout(startAutoplay, 100);
    });

    dots.forEach((dot, index) => dot.addEventListener("click", () => {
        stopAutoplay();
        setSlide(index);
        startAutoplay();
    }));

    banner?.addEventListener("mouseenter", stopAutoplay);
    banner?.addEventListener("mouseleave", startAutoplay);

    updateSlider();
    startAutoplay();
}
function initSaleCarousels() {
    if (typeof jQuery === 'undefined') return;
} const isMobile = window.innerWidth < 1024;
const initCarousel = (selector, responsive) => { jQuery(selector).owlCarousel({ loop: false, lazyLoad: true, nav: false, mouseDrag: selector !== '.carousel-deals' && selector !== '.carousel-recommend', touchDrag: true, autoplay: true, autoplayTimeout: 3000, autoplayHoverPause: true, responsive: responsive, onInitialized: updateAriaLabels, onRefreshed: updateAriaLabels }); }, updateAriaLabels = function () { jQuery(this.$element).find('.owl-dot').each(function (index) { jQuery(this).attr('aria-label', `Go to slide ${index + 1}`); }); }; jQuery(document).ready(function () { initCarousel('.carousel-sale', { 0: { items: 1 }, 576: { items: 2 }, 756: { items: 3 }, 1024: { items: 4 }, 1200: { items: 8 } }); initCarousel('.carousel-deals', { 0: { items: 1 }, 576: { items: 2 }, 768: { items: 3 }, 1024: { items: 4 }, 1200: { items: 5 } }); initCarousel('.carousel-recommend', { 0: { items: 1 }, 576: { items: 2 }, 768: { items: 3 }, 1024: { items: 4 }, 1200: { items: 5 } }); });
function initCountdown() { let e = localStorage.getItem("countDownEndTime"); e ? e = parseInt(e) : (e = Date.now() + 739584e5, localStorage.setItem("countDownEndTime", e)), setInterval((() => { const t = Date.now(), n = e - t, o = Math.floor(n / 864e5), s = Math.floor(n % 864e5 / 36e5), i = Math.floor(n % 36e5 / 6e4), a = Math.floor(n % 6e4 / 1e3); document.getElementById("days").textContent = String(o).padStart(2, "0"), document.getElementById("hours").textContent = String(s).padStart(2, "0"), document.getElementById("minutes").textContent = String(i).padStart(2, "0"), document.getElementById("seconds").textContent = String(a).padStart(2, "0") }), 1e3) }
function initSellCarousel() { const e = document.querySelector(".section-sell-product-carousel"); if (!e) return; let t, n, o = !1, s = 0, i = 0, a = 0, c = 0; const r = e => e.type.includes("mouse") ? e.pageX : e.touches[0].clientX, l = t => e.style.transform = `translateX(${t}px)`, d = t => { s = r(t), o = !0, e.classList.add("grabbing"), g(), cancelAnimationFrame(n) }, u = e => { o && (i = a + (r(e) - s), l(i)) }, m = () => { o = !1, e.classList.remove("grabbing"); const t = e.querySelector(".section-sell-product-card"), s = -(e.querySelectorAll(".section-sell-product-card").length * t.offsetWidth - e.offsetWidth); let r = Math.round(i / t.offsetWidth) * t.offsetWidth; r = Math.max(s, Math.min(0, r)), c = Math.abs(Math.round(r / t.offsetWidth)); const d = () => { const e = r - i; if (Math.abs(e) < .5) return i = r, a = i, l(i), void v(); i += .2 * e, a = i, l(i), n = requestAnimationFrame(d) }; n = requestAnimationFrame(d) }, v = () => { g(), t = setInterval((() => { const t = e.querySelector(".section-sell-product-card"), n = e.querySelectorAll(".section-sell-product-card").length, o = Math.floor(e.offsetWidth / t.offsetWidth); c = c >= n - o ? 0 : c + 1, f(-c * t.offsetWidth) }), 3e3) }, g = () => clearInterval(t), f = e => { const t = i, n = performance.now(), o = s => { const c = s - n; if (c >= 500) return l(e); const r = 1 - Math.pow(1 - c / 500, 3); i = t + (e - t) * r, a = i, l(i), requestAnimationFrame(o) }; requestAnimationFrame(o) }; e.addEventListener("touchstart", d, { passive: !0 }), e.addEventListener("touchmove", u, { passive: !0 }), e.addEventListener("touchend", m), e.addEventListener("mousedown", d), e.addEventListener("mousemove", u), e.addEventListener("mouseup", m), e.addEventListener("mouseleave", m), e.addEventListener("contextmenu", (e => e.preventDefault())); const h = () => { i = a = 0, c = 0, l(0), window.innerWidth >= 992 ? g() : v() }; window.addEventListener("resize", h), document.addEventListener("visibilitychange", (() => document.hidden ? g() : window.innerWidth < 992 && v())), h() }
function fadeIn() { if (window.innerWidth <= 768) return void document.querySelectorAll(".section-fadein").forEach((e => { e.classList.add("visible") })); const e = document.querySelectorAll(".section-fadein"), t = new IntersectionObserver((e => { e.forEach((e => { e.isIntersecting && e.target.parentElement.querySelectorAll(".section-fadein").forEach(((e, t) => { setTimeout((() => { e.classList.add("visible") }), 200 * t) })) })) }), { threshold: .1 }); e.forEach((e => { t.observe(e) })) }
document.addEventListener("DOMContentLoaded", (() => { initDropdowns(), initBannerSlider(), initSaleCarousels(), initCountdown(), initSellCarousel(), initScrollHeader(), initCategoryMenu(), fadeIn() }))