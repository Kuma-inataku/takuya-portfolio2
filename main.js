window.onload=function(){
  new Vue({
    el: '#app',
    data: {
      current_slide: 0,
      slides: [
        {img: '../images/top_image5.jpg'},
        {img: '../images/top_image4.jpg'},
        {img: '../images/top_image3.jpg'}
      ],
    },
    mounted() {
      setInterval(() => {
        this.current_slide = this.current_slide < this.slides.length -1 ? this.current_slide +1 : 0
      }, 5000)
    }
  })
}