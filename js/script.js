console.log('Vue OK', Vue);
Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        currentIndex: 0,
        images: ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg'],
    },
    methods: {
        nextImg(images) {
            this.currentIndex === images.length - 1 ? this.currentIndex === 0 : this.currentIndex++;
        },
        prevImg(images) {
            this.currentIndex === 0 ? this.currentIndex === images.length - 1 : this.currentIndex--;
        },
        setImg() {
            this.currentIndex = index;
        },
        isActive(index) {
            return index == this.currentIndex;
        },
    },
});