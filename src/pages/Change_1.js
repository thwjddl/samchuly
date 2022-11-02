import React, { useEffect } from 'react';
import $ from 'jquery';

function Change_1() {
  useEffect(() => function Protection() {
    let choice1 = $('article>ul>li:nth-child(1)');
    let choice2 = $('article>ul>li:nth-child(2)');
    let choice3 = $('article>ul>li:nth-child(3)');
    let choice4 = $('article>ul>li:nth-child(4)');

    let ride1 = $('article.ride1');
    let ride2 = $('article.ride2');
    let ride3 = $('article.ride3');
    let ride4 = $('article.ride4');

    ride1.show();
    ride2.hide();
    ride3.hide();
    ride4.hide();

    choice1.on('click', function () {
      ride1.show();
      ride2.hide();
      ride3.hide();
      ride4.hide();
    })
    choice2.on('click', function () {
      ride1.hide();
      ride2.show();
      ride3.hide();
      ride4.hide();
    })
    choice3.on('click', function () {
      ride1.hide();
      ride2.hide();
      ride3.show();
      ride4.hide();
    })
    choice4.on('click', function () {
      ride1.hide();
      ride2.hide();
      ride3.hide();
      ride4.show();
    })
  })

  return (
    <>
      <div id="change_1">
        <header>
          <h1>자전거</h1>
        </header>
        <section>
          <ul>
            <li>home</li>
            <li>자전거</li>
          </ul>
        </section>
        <article>
          <ul>
            <li><a href="#">전기자전거</a></li>
            <li><a href="#">산악 / 로드</a></li>
            <li><a href="#">컴포트산악형 / 시티</a></li>
            <li><a href="#">주니어 / 키즈</a></li>
          </ul>
        </article>
        <article className="ride1">
          <figure>
            <img src="./images/ride_1_1.jpg" alt="ride_1_1" />
            <figcaption>팬텀 시티</figcaption>
          </figure>
          <figure>
            <img src="./images/ride_1_2.jpg" alt="ride_1_2" />
            <figcaption>팬텀 Q SF</figcaption>
          </figure>
          <figure>
            <img src="./images/ride_1_3.jpg" alt="ride_1_3" />
            <figcaption>팬텀 마이크로 SF</figcaption>
          </figure>
          <figure>
            <img src="./images/ride_1_4.jpg" alt="ride_1_4" />
            <figcaption>팬텀 데이지</figcaption>
          </figure>
          <figure>
            <img src="./images/ride_1_5.jpg" alt="ride_1_5" />
            <figcaption>팬텀 베스티아 플러스</figcaption>
          </figure>
          <figure>
            <img src="./images/ride_1_6.jpg" alt="ride_1_6" />
            <figcaption>팬텀 이콘 플러스</figcaption>
          </figure>
        </article>
        <article className="ride2">
          <figure>
            <img src="./images/ride_2_1.jpg" alt="ride_2_1" />
            <figcaption>칼라스 카본</figcaption>
          </figure>
          <figure>
            <img src="./images/ride_2_2.jpg" alt="ride_2_2" />
            <figcaption>칼라스 70</figcaption>
          </figure>
          <figure>
            <img src="./images/ride_2_3.jpg" alt="ride_2_3" />
            <figcaption>칼라스 40</figcaption>
          </figure>
          <figure>
            <img src="./images/ride_2_4.jpg" alt="ride_2_4" />
            <figcaption>XRS 14</figcaption>
          </figure>
          <figure>
            <img src="./images/ride_2_5.jpg" alt="ride_2_5" />
            <figcaption>XRS 14 G</figcaption>
          </figure>
          <figure>
            <img src="./images/ride_2_6.jpg" alt="ride_2_6" />
            <figcaption>XRS 16</figcaption>
          </figure>
        </article>
        <article className="ride3">
          <figure>
            <img src="./images/ride_3_1.jpg" alt="ride_3_1" />
            <figcaption>루시아</figcaption>
          </figure>
          <figure>
            <img src="./images/ride_3_2.jpg" alt="ride_3_2" />
            <figcaption>프림로즈</figcaption>
          </figure>
          <figure>
            <img src="./images/ride_3_3.jpg" alt="ride_3_3" />
            <figcaption>선데이 1</figcaption>
          </figure>
          <figure>
            <img src="./images/ride_3_4.jpg" alt="ride_3_4" />
            <figcaption>스팅커 100D</figcaption>
          </figure>
          <figure>
            <img src="./images/ride_3_5.jpg" alt="ride_3_5" />
            <figcaption>스팅커 SF</figcaption>
          </figure>
          <figure>
            <img src="./images/ride_3_6.jpg" alt="ride_3_6" />
            <figcaption>스팅커 SF</figcaption>
          </figure>
        </article>
        <article className="ride4">
          <figure>
            <img src="./images/ride_4_1.jpg" alt="ride_4_1" />
            <figcaption>칼라스 JR 디스크</figcaption>
          </figure>
          <figure>
            <img src="./images/ride_4_2.jpg" alt="ride_4_2" />
            <figcaption>칼라스 JR</figcaption>
          </figure>
          <figure>
            <img src="./images/ride_4_3.jpg" alt="ride_4_3" />
            <figcaption>태풍 DX</figcaption>
          </figure>
          <figure>
            <img src="./images/ride_4_4.jpg" alt="ride_4_4" />
            <figcaption>트레이스</figcaption>
          </figure>
          <figure>
            <img src="./images/ride_4_5.jpg" alt="ride_4_5" />
            <figcaption>뉴 톰톰</figcaption>
          </figure>
          <figure>
            <img src="./images/ride_4_6.jpg" alt="ride_4_6" />
            <figcaption>딩고</figcaption>
          </figure>
        </article>
      </div>
    </>
  );
}

export default Change_1;
