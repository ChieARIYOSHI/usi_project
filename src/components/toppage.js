import React from 'react';
import imagePhoto from './../img/toppage_image.jpeg';
import imageEat from './../img/toppage_eat.jpeg';
import imageLive from './../img/toppage_live.jpeg';
import SlideRoutes from "react-slide-routes";
import { Route, NavLink, useLocation } from "react-router-dom";
import Eat from './eat';
import logo from './../img/logo_shiro.png';
import './toppage.css'

const TopPage = () => {
  return (
    <div>
      <div className="toppage">
      {/* <img src={imagePhoto} className="top_image" width="100%" z-index="-1" alt="top page photo" /> */}
      <h1 className="title_line_1">牛とともに生きる。</h1>
      <h1>食べることは、</h1>
      <h1>生きること。</h1>
      </div>
      <div className="bannar">
        <nav>
          <NavLink to="/eat">
            <div  className="eat_btn">
              <h2>たべる</h2>
              <h4>あなた好みのお肉を選ぶ</h4>
            </div>
          </NavLink>
        </nav>
        <a className="live_btn">
          <h2>育てる</h2>
          <h4>あなたの休日を牛とともに</h4>
        </a>
      </div>
      <div className="main_1">
        <div className="subtitle_1">
          <h1>牛と人を</h1>
          <h1>もっと</h1>
          <h1>近く。</h1>
        </div>
        <div className="message_1">
          <p>
            あなたが普段口にしているお肉がどのような場所で、どのような人が、どのように育てられた牛なのか考えたことはありますか？
            何気なく口にしているお肉にどんなストーリーがあるのか。
            それを知ることで、本当に安心して、美味しく、ありがたく命をいただく。
            そんな体験をあなたの生活にお届けします。
            わたしたちのUsi Projectでは、牛と牛を育てる人、そしてあなた自身をもっと身近につなぐ、そんなサービスを提供します。
          </p>
        </div>
      </div>
      <div className="imagephoto_2">
        <img src={imagePhoto} className="top_image" width="100%" z-index="-1" alt="top page photo" />
        {/* ここにお肉の写真を入れる */}
      </div>
      <div className="main_2">
        <div className="subtitle_2">
          <h1>本当に身体にいい</h1>
          <h1>お肉って？</h1>
        </div>
        <div className="message_2">
          <p>
            私たちが日常的に食べている牛肉にはA5、A4、B5といった等級（ランク）で評価されています。一般的にはA5牛肉が最もおいしいお肉だといわれています。ですが、この牛肉の等級、実はお肉の「味」で評価されているわけではありません。サシと呼ばれる脂肪がいかにきめ細やかに入っているか、そして牛の体重に対するお肉の重さで決まっているのです。そのため最高ランクといわれるA5牛肉でも、必ずしも同じ味のお肉とは言えないのです。
            Usi Projectでは、本当に健康的に育てられた牛を安心して食べていただける。そんなセカイを目指します。
          </p>
        </div>
      </div>

      <div className="imagephoto_2">
        <img src={imagePhoto} className="top_image" width="100%" z-index="-1" alt="top page photo" />
        {/* ここに牛の別写真を入れる */}
      </div>
      <div className="main_3">
        <div className="subtitle_3">
          <h1>健康な牛が</h1>
          <h1>育つ環境とは。</h1>
        </div>
        <div className="message_3">
          <p>
            本当に健康に育てられた牛ってどんな牛だと思いますか？
            日本では現在のサシに基づく評価基準があるため、ほとんどが牛舎の中であまり運動もしない状態で、穀物飼料を食べて脂肪を蓄えることを優先して育てられた牛なのです。
            しかし、その評価基準に囚われず牛の健康や幸せを第一に考えてこだわりを持って育てている牧場の方々も多くいらっしゃいます。
            例えば、草原で放牧をしながら本来牛が主食とする牧草を食べながら育てたり、牛舎の中でもストレスが少ないよう自由に歩き回れる観光を配備したり、様々な工夫があります。
            Usi Projectでは、どんな方々がどんな想いで育てた牛なのかを知っていただき、直接牧場からお肉を購入できるサイトです。
          </p>
        </div>
      </div>

      <div className="main_4">
        <div className="subtitle_4">
          <h1>Usi Projectについて</h1>
        </div>
        <div className="message_4">
          <p>
            Usi Projectは、どんな人がどんな想いで育てた牛なのかを知っていただき、牛と牧場の方々、そしてあなたを直接繋ぐサービスです。
          </p>
          <p>主なサービスは２つ。</p>
          <p>　❶ 牧場から直接お肉を購入する</p>
          <p>　❷ 牧場の方々と一緒に牛を育てる</p>
          <p>２つのサービスから自由にお選びいただけます。</p>
          {/* <div>
          <img src={logo} className="logo" width="320px" alt="logo" />
          ここに牛アイコンのみverを入れる
          </div> */}
        </div>
      </div>

      <div>
        <div>
        <a>
          <h2>たべる</h2>
          <p>あなた好みのお肉を選ぶ</p>
          <img src={imageEat} className="eat_image" width="180px" alt="meat photo" />
        </a>
        <a>
          <h2>育てる</h2>
          <p>あなたの休日を牛とともに</p>
          <img src={imageLive} className="live_image" width="180px" alt="cattle photo" />
        </a>
        </div>
      </div>

      <div>
        <h2>Usi Project</h2>
        <p>〒810-0041</p>
        <p>福岡県福岡市中央区大名1-3-41</p>
        <a>問い合わせ</a>
      </div>
    </div>
  );
};

const App = () => {
  const location = useLocation();

  return (
    <div>
      <SlideRoutes location={location} duration={500}>
        <Route path="/" component={TopPage} exact />
        <Route path="/eat" component={Eat} />
      </SlideRoutes>
    </div>
  )};

export default App
