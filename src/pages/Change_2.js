import React, { useEffect } from 'react'
import $ from 'jquery';

function Change_2() {

  useEffect(() => function Protection() {
    let choice1 = $('article>ul>li:nth-child(1)');
    let choice2 = $('article>ul>li:nth-child(2)');
    let choice3 = $('article>ul>li:nth-child(3)');

    let head = $('article.head');
    let guard = $('article.guard');
    let hand = $('article.hand');

    head.show();
    guard.hide();
    hand.hide();

    choice1.on('click', function () {
      head.show();
      guard.hide();
      hand.hide();
    })
    choice2.on('click', function () {
      head.hide();
      guard.show();
      hand.hide();
    })
    choice3.on('click', function () {
      head.hide();
      guard.hide();
      hand.show();
    })
  })

  return (
    <>
      <div id="change_2">
        <header>
          <h1>용품</h1>
        </header>
        <section>
          <ul>
            <li>home</li>
            <li>용품</li>
          </ul>
        </section>
        <article>
          <ul>
            <li><a href="#">헬멧</a></li>
            <li><a href="#">보호대</a></li>
            <li><a href="#">장갑</a></li>
          </ul>
        </article>
        <article className="head">
          <figure>
            <img src="./images/head_1.png" alt="head_1" />
            <figcaption>AH530	&#40; 인몰드 보급형	&#41;</figcaption>
          </figure>
          <figure>
            <img src="./images/head_2.png" alt="head_2" />
            <figcaption>AH550	&#40;Z3	&#41;</figcaption>
          </figure>
          <figure>
            <img src="./images/head_3.png" alt="head_3" />
            <figcaption>AH710S 	&#40; 인드몰 어반&#41;</figcaption>
          </figure>
          <figure>
            <img src="./images/head_4.png" alt="head_4" />
            <figcaption>AH750S	&#40; 인드몰 어반_고가	&#41;</figcaption>
          </figure>
          <figure>
            <img src="./images/head_5.png" alt="head_5" />
            <figcaption>SH310L	&#40; 시크릿쥬쥬	&#41;</figcaption>
          </figure>
          <figure>
            <img src="./images/head_6.png" alt="head_6" />
            <figcaption>SH310L	&#40; 아이언맨	&#41;</figcaption>
          </figure>
        </article>
        <article className="guard">
          <figure>
            <img src="./images/guard_1.png" alt="guard_1" />
            <figcaption>SPS155 &#40; 어린이 보급형 &#41;</figcaption>
          </figure>
          <figure>
            <img src="./images/guard_2.png" alt="guard_2" />
            <figcaption>SPS100 &#40; 어린이 보급형 &#41;</figcaption>
          </figure>
          <figure>
            <img src="./images/guard_3.png" alt="guard_3" />
            <figcaption>SPS110 &#40; 보급형 보호대 &#41;</figcaption>
          </figure>
          <figure>
            <img src="./images/guard_4.png" alt="guard_4" />
            <figcaption>SPS150L &#40; 겨울왕국2 &#41;</figcaption>
          </figure>
          <figure>
            <img src="./images/guard_5.png" alt="guard_5" />
            <figcaption>SPS150L &#40; 시크릿쥬쥬 &#41;</figcaption>
          </figure>
          <figure>
            <img src="./images/guard_6.png" alt="guard_6" />
            <figcaption>SPS150L &#40; 아이언맨 &#41;</figcaption>
          </figure>
        </article>
        <article className="hand">
          <figure>
            <img src="./images/hand_1.png" alt="hand_1" />
            <figcaption>AG520 &#40; 반장갑 일반 &#41;</figcaption>
          </figure>
          <figure>
            <img src="./images/hand_2.png" alt="hand_2" />
            <figcaption>AG570 &#40; 긴장갑 주니어 &#41;</figcaption>
          </figure>
          <figure>
            <img src="./images/hand_3.png" alt="hand_3" />
            <figcaption>AG730 &#40; 반장갑 고글 &#41;</figcaption>
          </figure>
          <figure>
            <img src="./images/hand_4.png" alt="hand_4" />
            <figcaption>AG770 &#40; 긴장갑 일반 &#41;</figcaption>
          </figure>
          <figure>
            <img src="./images/hand_5.png" alt="hand_5" />
            <figcaption>SG120L &#40; 겨울왕국2 &#41;</figcaption>
          </figure>
          <figure>
            <img src="./images/hand_6.png" alt="hand_6" />
            <figcaption>SG120L &#40; 스파이더맨 &#41;</figcaption>
          </figure>
        </article>
      </div>
    </>
  )
}

export default Change_2;