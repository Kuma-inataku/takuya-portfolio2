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
  new Vue({
    el: '#app2',
    data: {
        keyword: '',
        users: [
            {
                id: 1,
                title: '初心者向け！フェスの楽しみ方！',
                content: '初心者向け完全ロードマップをご紹介します！'
            },
            {
                id: 2,
                title: 'オススメ3選！2021年に来る邦ロックアーティスト！',
                content: '2021年バズるアーティストを3組紹介！'
            },
            {
                id: 3,
                title: 'リスクはこれだけ！フェス初心者の注意点！',
                content: 'これだけは気を付けてほしいリスクをご紹介！'
            },
            {
                id: 4,
                title: '初心者向け！邦ロックライブの楽しみ方！',
                content: '邦ロックライブの楽しみ方をご紹介'
            },
            {
                id: 5,
                title: '【感情別シリーズ3選！】「イライラ」した時に邦ロックオススメ曲！',
                content: 'イライラ、ムシャクシャしたときに聞くオススメ曲を3曲ご紹介！'
            }
        ],
        filteredUsers:[]
    },
    watch:{
     keyword(val){
         this.filteredUsers = [];
         for(let i of this.users){
          if (i.title.indexOf(val) !== -1){
          this.filteredUsers.push(i)
          }
          if (i.content.indexOf(val) !== -1){
          this.filteredUsers.push(i)
          }  
        }
      }
    }
});
}