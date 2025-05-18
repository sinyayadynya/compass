document.addEventListener('alpine:init', () => {
    Alpine.data('carousel', () => ({
        slides: [],
        currentIndex: 0,
        originalSlideCount: 0,
        dotCount: 0,
        init(endpoint) {
            fetch(endpoint)
                .then(response => response.json())
                .then(data => {
                    this.slides = data.rows;
                    this.originalSlideCount = this.slides.length;
                    this.dotCount = this.slides.length;

                    const carousel = this.$refs.carousel;
                    const slides = Array.from(carousel.children);

                    slides.forEach(slide => carousel.appendChild(slide.cloneNode(true)));
                    slides.forEach(slide => carousel.appendChild(slide.cloneNode(true)));

                    this.$nextTick(() => {
                        carousel.scrollLeft = carousel.scrollWidth / 3;
                        this.updateCurrentIndex();
                    });
                });
        },
        isActiveSlide(index) {
            return index === this.currentIndex;
        },
        onScroll() {
            this.updateCurrentIndex();
        },
        updateCurrentIndex() {
            const carousel = this.$refs.carousel;
            const scrollLeft = carousel.scrollLeft;
            const viewWidth = carousel.clientWidth;
            const totalScrollWidth = carousel.scrollWidth;

            if (scrollLeft <= 0) {
                carousel.scrollLeft = totalScrollWidth / 3;
            } else if (scrollLeft + viewWidth >= totalScrollWidth) {
                carousel.scrollLeft = totalScrollWidth / 3 - viewWidth;
            }

            const relativeScrollLeft = carousel.scrollLeft - (totalScrollWidth / 3);
            this.currentIndex = Math.round(relativeScrollLeft / viewWidth) % this.originalSlideCount;
            if (this.currentIndex < 0) {
                this.currentIndex += this.originalSlideCount;
            }
        },
        isActiveDot(index) {
            return index === this.currentIndex;
        },
        scrollToSlide(index) {
            const carousel = this.$refs.carousel;
            const viewWidth = carousel.clientWidth;
            const offset = carousel.scrollWidth / 3;

            this.currentIndex = index;
            carousel.scrollLeft = offset + (index * viewWidth);
        }
    }));
});
