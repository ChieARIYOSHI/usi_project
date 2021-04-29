import React from 'react';
import logo from './../img/eat_1.jpg';
import imagePhoto_1 from './../img/eat_sen_1.png';
import imagePhoto_2 from './../img/eat_sen_2.png';
// import imagePhoto_3 from './../img/sen_3.png';
import typePhoto_1 from './../img/eat_type_1.png';
import typePhoto_2 from './../img/eat_type_2.png';
import typePhoto_3 from './../img/eat_type_3.png';
import typePhoto_4 from './../img/eat_type_4.png';
import typePhoto_5 from './../img/eat_type_5.jpeg';
import typePhoto_6 from './../img/eat_type_6.png';

import { Route, NavLink } from "react-router-dom";
import Head from './head';
import Shop from './shop';

import './eat.css';

const Eat = () => (
    <div>
        <div className="eat_top">
            <img src={logo} className="rogo" width="100%" alt="logo" margin-top="100px 0" />
            <h1 className="subtitle">あなた好みの</h1>
            <h1 className="subtitle">お肉に</h1>
            <h1 className="subtitle">きっと出会える</h1>
        </div>

        <div className="massage_01">
            <p>これまでとは全く違う新しいお肉の選び方で、
            あなたが心から美味しいと感じるお肉に出会えます。
            また、お肉のサブスクリプションもご用意しております。
            その時のおすすめのお肉や、希少な部位など、私たちのおすすめのお肉を定期的にお届け
            します。
            あなたが本当に美味しいと感じる体が喜ぶお肉を探してみませんか？
            </p>

        </div>
        <div className="subtitle_2">
            <img src={imagePhoto_2} className="sen_2" width="90%" margin="centa" />

            <div>
                <h2 className="text_1">6タイプの出会い方</h2>
                <h3 className="text_2">Usi Projecthがご用意する６タイプの選び方をご紹介します。</h3>
            </div>

            <div className="type_1">
                <div>
                    <h2 className="typetext_1">1.生産地で選ぶ</h2>
                    <h3 className="typetext_1_2"> 生産地から土地独自の手法で育てた牛をお選びいただけます。</h3>
                </div>
                <div>
                    <img src={typePhoto_1} className="typePhoto_1" width="80%" margin="centa" />
                </div>
                <div className="bar_btn">
                    <nav>
                        <NavLink to="/shop" className="btn-border">生産地一覧から選ぶ</NavLink>
                    </nav>
                    <img src={imagePhoto_1} className="sen_1" width="90%" margin="centa" />
                </div>

            </div>

            <div className="type_2">
                <div>
                    <h2 className="typetext_1">2.味や肉質で選ぶ</h2>
                    <h3 className="typetext_1_2"> お肉を科学的に分析した味のタイプや肉質からお選びいただけます。</h3>
                </div>

                <img src={typePhoto_2} className="typePhoto_1" width="90%" margin="centa" />
                <div className="bar_btn">
                    <nav>
                        <NavLink to="/shop" className="btn-border">味の分析表から選ぶ</NavLink>
                    </nav>
                    <img src={imagePhoto_1} className="sen_1" width="90%" margin="centa" />
                </div>
            </div>

            <div className="type_3">
                <div>
                    <h2 className="typetext_1">3.飼料のタイプから選ぶ</h2>
                    <h3 className="typetext_1_2"> 主食にしている飼料の種類からお選びいただけます。</h3>
                </div>
                <img src={typePhoto_3} className="typePhoto_3" width="90%" margin="centa" />
                <div className="bar_btn">
                    <nav>
                        <NavLink to="/shop" className="btn-border">飼料のタイプから選ぶ</NavLink>
                    </nav>
                    <img src={imagePhoto_1} className="sen_1" width="90%" margin="centa" />
                </div>
            </div>

            <div className="type_4">
                <div>
                    <h2 className="typetext_1">4.牛さんの種類から選ぶ</h2>
                </div>
                <img src={typePhoto_4} className="typePhoto_4" width="70%" margin="centa" />
                <div className="bar_btn">
                    <nav>
                        <NavLink to="/shop" className="btn-border">牛さんの種類から選ぶ</NavLink>
                    </nav>
                    <img src={imagePhoto_1} className="sen_1" width="90%" margin="centa" />
                </div>
            </div>
        </div>


        <div className="type_5">
            <div>
                <h2 className="typetext_1">５.生産者さんで選ぶ</h2>

            </div>
            <div className="box">
                <div className="pict_type_5">
                    <img src={typePhoto_5} className="type_5" width="90%" margin="centa" />
                </div>
                <div className="typetext_1_1">
                    <h2 className="typetext_1_2">斉藤牧場 斉藤さん</h2>
                    <h3 className="typetext_1_2">牛の幸せを1番に考えて育てている斉藤さん。牛本来の生き方に近い環境でストレス無く暮らせる環境づくりに力を入れています。</h3>
                </div>
            </div>
            <div className="bar_btn">
                <nav>
                    <NavLink to="/shop" className="btn-border">生産者さんで選ぶ</NavLink>
                </nav>
                <img src={imagePhoto_1} className="sen_1" width="90%" margin="centa" />
            </div>
        </div>

        <div className="type_6">
            <div>
                <h2 className="typetext_1">６.牛さんの育て方から選ぶ</h2>
            </div>
            <div>
                <img src={typePhoto_6} className="typePhoto_3" width="90%" margin="centa" />
            </div>
            <div className="bar_btn">
                <nav>
                    <NavLink to="/shop" className="btn-border">牛さんの育て方から選ぶ</NavLink>
                </nav>
                <img src={imagePhoto_1} className="sen_1" width="90%" margin="centa" />
            </div>
        </div>
    </div >
);

const ToShop = () => {
    // const location = useLocation();
    return (
        <div>
            <Route path="/eat" component={Head} component={Eat} />
            <Route path="/shop" component={Shop} />
        </div>
    );
};

export default ToShop