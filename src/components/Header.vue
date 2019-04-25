<template>
  <div class="Header">
    <section class="section clearfix">
      <h1 class="Logo"><span class="skip">{{this.$store.state.websiteName}}</span></h1>
      <nav class="MainMenu">
        <ul class="clear clearfix" id="MainMenu__list">
          <li class="MainMenu__item" v-bind:class="{active : currentIndex == 0}" ><a href="#MainSection-1" @click="handleGotoSection"><span>인&middot;플&middot;솔&middot;랩</span></a></li>
          <li class="MainMenu__item" v-bind:class="{active : currentIndex == 1}" ><a href="#MainSection-2" @click="handleGotoSection"><span>참가혜택</span></a></li>
          <li class="MainMenu__item" v-bind:class="{active : currentIndex == 2}"><a href="#MainSection-3" @click="handleGotoSection"><span>공모요강</span></a></li>
          <li class="MainMenu__item" v-bind:class="{active : currentIndex == 3}"><a href="#MainSection-4" @click="handleGotoSection"><span>참가방법</span></a></li>
          <li class="MainMenu__item" v-bind:class="{active : currentIndex == 4}"><a href="#MainSection-5" @click="handleGotoSection"><span>사업설명회</span></a></li>
          <li class="MainMenu__item" v-bind:class="{active : currentIndex == 5}"><a href="#MainSection-6" @click="handleGotoSection"><span>공지사항</span></a></li>
        </ul>
      </nav>
      <button class="BtnMainMenu icon-menu">
        <span class="skip">메인메뉴</span>
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'headerComponent',
  props: ["menuList"],
  data(){
    return {
      header : null,
      sectionList : [],
      currentIndex : 0,
      isScrolling : false
    }
  },
  created(){

  },
  mounted(){
    this.header = document.querySelector(".Header");
    
    //스크롤이벤트
    window.addEventListener("scroll", this.handleScroll);

    const sections = document.querySelectorAll(".MainSection");
    for( let i =0; i<sections.length;i++ ){
      this.sectionList.push( sections[i].clientHeight + sections[i].offsetTop );
    }
    this.setAnimation(this.currentIndex);
  },
  methods : {
    handleGotoSection(e){
      e.preventDefault();
      if( e.currentTarget == null ) return;
      this.isScrolling = true;
      const hash = e.currentTarget.hash;
      const selectMenu = document.querySelector(hash);
      
      if( selectMenu == null ) return;
      
      //메뉴이동
      TweenMax.to(window, 1, {scrollTo:{y:hash}, onComplete : this.onCompleteGotoSection});
    },
    onCompleteGotoSection(){
      this.isScrolling = false;
    },
    handleScroll(e){
      let offset = this.header.offsetTop + this.header.clientHeight;
      if( window.scrollY > offset ){
        this.header.classList.add("active");
      }else{
        this.header.classList.remove("active");
      }
      
      if( this.getWindowScrollSection() === this.currentIndex ){
        return;
      }
      this.currentIndex = this.getWindowScrollSection();
      //console.log( this.currentIndex );
      this.setAnimation( this.currentIndex );
      //console.log(this.currentIndex);
    },
    //현재 스크롤의 섹션값 알아내기
    getWindowScrollSection(y){
       let findIndex = 0;
       for( let i =0; i<this.sectionList.length; i++){
         let prePosition = i-1 < 0 ? 0 : this.sectionList[i-1];
         if( window.scrollY < this.sectionList[i] && window.scrollY >= prePosition ){
           findIndex = i;
         }
        if( window.innerHeight + window.scrollY == document.body.scrollHeight ){
          //console.log( 'finish')
          findIndex = this.sectionList.length-1;
        }         
         //console.log( window.scrollY, document.body.scrollHeight );
       }
      return findIndex;
    },
    setAnimation(index){
      if( this.isScrolling ) return;
      TweenMax.killAll();
      switch(index){
        case 0 : 
          const logo = document.querySelector(".Logo");
          TweenMax.fromTo(logo, 1, {x : 0},{x:15});
          const prTitle = document.querySelector(".Program__title");
          const prText = document.querySelector(".Program__text");
          const prButton = document.querySelector(".Program__button");
          TweenMax.fromTo(prTitle, .5, {y : 0, alpha : 0}, {y : 10, alpha : 1});
          TweenMax.fromTo(prText, .5, {y : 0, alpha : 0}, {y : 10, alpha : 1, delay : .5});
          TweenMax.fromTo(prButton, .5, {y:0, alpha : 0}, {y:10, alpha : 1, delay : 1 });
          break;
        case 1 :
        break;
        case 2 : 
        break;
        case 3 :
        break;
        case 4 :
        break;
        case 5 :
        break;
      }
    }    
  }
}
</script>

<style scoped lang="scss">

/* header */
.Header{
  position: fixed;
  left:0;
  right:0;
  top:0;
  border-bottom:1px solid rgba(255,255,255,0.4);
  &.active{
    background:rgba(255,255,255,0.4);
    transition: background-color .5s;
  }
  .Logo{
    position:absolute;
    left:0;
    height:3em;
    margin-top:-1.5em;
    top:50%;
    width:13em;
    padding-left:0em;
    background:url('~@/assets/images/logo.png') center no-repeat;
  }
  .MainMenu{
    padding-left:15em;
    padding-right:5em;
  }
  .BtnMainMenu{
    position: absolute;
    right:0;
    top:50%;
    margin-top:-2em;
  }
}

.MainMenu{
  ul{
    text-align: center;
  }
  &__item{
    display:inline-block;
    padding:0 1.4em;
    &.active{
      a{
        color:red;
      }
    }
    a{
      display:block;
      color:#fff;
      line-height:6rem;
    }
  }
}

</style>
