<template>
  <div id="app" class="allwrap">
    <Header :menuList="menuList"></Header>

    <!-- 본문 -->
    <div class="Container">
      <div class="MainSection MainSection-1" id="MainSection-1">
        <section class="section">
          <div class="Program">
            <h2 class="Program__title"><span class="en">Inclusion Plus Solution Lab</span> <span class="ko">매트라이프재단 X 한국사회투자</span></h2>
            <p class="Program__text">
              <span>건강한 금융생활을 위한</span>
              <strong>사회혁신 솔루션 투자육성 프로그램</strong>
            </p>
            <div class="Program__button pt20">
              <a href="" class="ButtonType-1"><span>자세히보기</span></a>
              <a href="" class="ButtonType-1"><span>참가방법</span></a>
            </div>
          </div>
        </section>
      </div>
      <div class="MainSection MainSection-2" id="MainSection-2">
        <section class="section">
          <h2><span>참가혜택</span></h2>
        </section>
      </div>
      <div class="MainSection MainSection-3" id="MainSection-3">
        <section class="section">
          <h2><span>공모요강</span></h2>

        </section>
      </div>
      <div class="MainSection MainSection-4" id="MainSection-4">
        <section class="section">
          <h2><span>참가방법</span></h2>
        </section>
      </div>
      <div class="MainSection MainSection-5" id="MainSection-5">
        <section class="section">
          <h2><span>사업설명회</span></h2>
        </section>
      </div>
      <div class="MainSection MainSection-6" id="MainSection-6">
        <section class="section">
          <h2><span>공지사항</span></h2>
        </section>
      </div>
    </div>

    <!-- //본문 -->
    <footer class="Footer">
      <section class="section">
        <h2 class="Footer__logo"><span>Inclusion Plus Solution Lab</span></h2>
        <!-- Sponsor -->
        <div class="Sponsor">
          <h3 class="Sponsor__title"><span>주최 &middot; 주관</span></h3>
          <dl class="Sponsor__list">
            <dt class="Sponsor__logo"><span><img src="~@/assets/images/logo-sponsor-1.png" alt="스폰서로고1"></span></dt>
            <dd class="Sponsor__explain">
              <p>메트라잉프재단은..</p>
            </dd>
            <dt class="Sponsor__logo pt10"><span><img src="~@/assets/images/logo-sponsor-2.png" alt="스폰서로고2"></span></dt>
            <dd class="Sponsor__explain">
              <p>메트라잉프재단은..</p>
            </dd>
          </dl>
        </div>
        <!-- //Sponsor -->
      </section>
    </footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  data(){
    return {
      menuList : null,
      sections : null
    }
  },
  name: 'app',
  components: {
    Header
  },
  mounted(){
  },
  created(){
  }
}
</script>

<style lang="scss">
@import '~@/assets/css/reset.css';
@import '~@/assets/css/style.css';

.Container{
}
.Program{
  padding-top:8em;
  &__title{
    position: relative;
    display:inline-block;
    color:#fff;
    .en{
      font-size:5em;
      letter-spacing: -.02em;
      font-weight: bold;
      display: block;
    }
    .ko{
      position: absolute;
      top:-2em;
      right:0;
      font-weight: bold;
      color:rgba(255,255,255,0.4);
    }
  }
  &__text{
    color:#fff;
    letter-spacing: -.2em;
    span{
      font-weight: bold;
      padding-top:1rem;
      display: block;
      font-size:2rem;
      line-height: 1.5em;
    }
    strong{
      display: block;
      font-size:2.8rem;
      line-height: 1.5em;
    }
  }
  &__button{
    .ButtonType-1{
      margin-right:0.6rem;
      &:hover{
        transition: all 1s;
        background: rgba(255,255,255,0.2);
      }
    }
  }
}

.ButtonType-1{
  display: inline-block;
  border:1px solid rgba(255,255,255,0.4);
  padding:1em 0;
  line-height:1rem;
  width:14rem;
  font-size:1rem;
  color:#fff;
  text-align: center;
  box-sizing: border-box;
  &:hover{
    color:#fff;
  }
  span{
    vertical-align: middle;
  }
}
.MainSection{
  &-1{
    padding-top:6em;
    height:30em;
    background:#006cce;
  }
  &-2{
    height:45em;
    background:coral
  }
  &-3{
    height:40em;
    background:#fbfbfb
  }
  &-4{
    height:30em;
    background:#006cce
  }
  &-5{
    height:30em;
    background:violet
  }
  &-6{
    height:30em;
    background:yellow
  }
}

.Footer{
  background:#e4f1f9;
  padding:2em 0;
  &__logo{
    font-weight: bold;
    color:#000;
    font-size:1.6em;
    letter-spacing: -1px;
  }
}

.Sponsor{
  &__title{
    padding:1em 0;
    span{
      font-size:1em;
      font-weight: bold;
      color:#000;
    }
  }
  &__explain{
    p{
      font-size:0.85em;
    }
  }
}
</style>
