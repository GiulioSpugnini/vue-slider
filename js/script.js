console.log('Vue OK', Vue);
Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        autoplay: undefined,
        currentIndex: 0,
        images: ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg'],
    },
    methods: {
        nextImg() {
            this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : (this.currentIndex + 1);
        },
        prevImg() {
            this.currentIndex = (this.currentIndex === 0) ? (this.images.length - 1) : (this.currentIndex - 1);
        },
        setImg(index) {
            this.currentIndex = index;
        },
        isActive(index) {
            return index == this.currentIndex;
        },
        startAutoplay() {
            this.autoplay = setInterval(this.nextImg, 3000)
        },
        stopAutoplay() {
            clearInterval(this.autoplay);
        }
    },
    created() {
        this.startAutoplay();
    }
});