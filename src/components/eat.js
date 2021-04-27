import React from 'react';
import rogo from './../img/eat_1.jpg';
import './eat.css';

const Head = () => {
    return (
    <div>
        <img src={rogo} className="rogo" width="100%" alt="logo" margin-top="100px 0" />
        <h1 className="subtitle">あなた好みの</h1>
        <h1 className="subtitle">お肉に</h1>
        <h1 className="subtitle">きっと出会える</h1>


        <h2 className="top_text">これまでとは全く違う新しいお肉の選び方で、</h2>
        <h2 className="top_text">あなたが心から美味しいと感じるお肉に出会えます。</h2>
        <h2 className="top_text">また、お肉のサブスクリプションもご用意してお</h2>
        <h2 className="top_text">ります。その時のおすすめのお肉や、希少な部位</h2>
        <h2 className="top_text">など、私たちのおすすめのお肉を定期的にお届け</h2>
        <h2 className="top_text">します。</h2>
        <h2 className="top_text">あなたが本当に美味しいと感じる体が喜ぶお肉を</h2>
        <h2 className="top_text">探してみませんか？</h2>

        <div className="main_2">
            <h1 className="subtitle_2">6タイプの出会い方</h1>
            <h2 className="text_1">"Usi Projectがご用意する６タイプの選び方をご紹介します。</h2>
        </div>

        {/* <div className="top_text">
            <p>
                これまでとは全く違う、新いお肉の選び方で、
                あなたが心から美味しいと思うお肉に出会えます。
                
                また、お肉のサブスクリプションもご用意しております。
                その時のおすすめのお肉や、希少な部位など、
                私たちのおすすめのお肉を定期的にお届けします。

                あなたが本当に美味しいと感じる体が喜ぶお肉を探してみませんか？

        </p>
        </div> */}
    </div>
)};

















export default Head
