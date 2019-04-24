<template>
  <div class="Header">
    <section class="section clearfix">
      <h1 class="Logo"><span class="skip">MetLife</span></h1>
      <nav class="MainMenu">
        <ul class="clear clearfix">
          <li class="MainMenu__item"><a href="#MainSection-1"><span>인&middot;플&middot;솔&middot;랩</span></a></li>
          <li class="MainMenu__item"><a href="#MainSection-2"><span>참가혜택</span></a></li>
          <li class="MainMenu__item"><a href="#MainSection-3"><span>공모요강</span></a></li>
          <li class="MainMenu__item"><a href="#MainSection-4"><span>참가방법</span></a></li>
          <li class="MainMenu__item"><a href="#MainSection-5"><span>사업설명회</span></a></li>
          <li class="MainMenu__item"><a href="#MainSection-6"><span>공지사항</span></a></li>
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
  props: {
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
  .Logo{
    position:absolute;
    left:0;
    height:3em;
    margin-top:-1.5em;top:50%;width:13em;padding-left:5em;background:url(/images/logo.png) no-repeat;
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
    a{
      display:block;
      color:#fff;
      line-height:6rem;
    }
  }
}

</style>
