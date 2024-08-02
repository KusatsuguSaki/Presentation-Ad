'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const eventAtext = [ "images/EventA_select.png" ]

function cangeCardA(){
  document.getElementById("EventA").src = eventAtext[0]
};

const eventAcard = [
  "images/A1_front.png",
  "images/A2_front.png",
  "images/A3_front.png",
  "images/A4_front.png",
  "images/A5_front.png",
  "images/A6_front.png",
  "images/A7_front.png",
  "images/A8_front.png",
  "images/A9_front.png",
  "images/A10_front.png",
]

let cardNum = eventAcard.length;

let upperCard = "";
for (let i = 0; i < cardNum ;i++) { //表示させたい画像の数だけループを繰り返す
  let imgID = String(i);
  if ( i <= 4) { //５枚ごとに特別なスタイルを指定して改行する
    upperCard += `<img src=${eventAcard[i]} id =${imgID} onclick= changeImg(this.id) >` ;//this は今見てるオブジェクトを指定している。このidをキー名にもつ中からドット記法で取り出している、
    } 
};

let underCard = "";
for (let i = 5; i < cardNum ;i++) { //表示させたい画像の数だけループを繰り返す
  let imgID = String(i);
  if ( 5 < i <= 10 ) { //５枚ごとに特別なスタイルを指定して改行する
    underCard += `<img src=${eventAcard[i]} id =${imgID} onclick= changeImg(this.id) >` ; //画像のパスは配列の番号で指定
    } 
};


//idで指定した要素のHTMLを書き換え画像を表示
document.getElementById("EventA-card-up").innerHTML = upperCard;
document.getElementById("EventA-card-under").innerHTML = underCard;

const textAcard = [
  "images/A1_text.png",
  "images/A2_text.png",
  "images/A3_text.png",
  "images/A4_text.png",
  "images/A5_text.png",
  "images/A6_text.png",
  "images/A7_text.png",
  "images/A8_text.png",
  "images/A9_text.png",
  "images/A10_text.png",
]


let totalScore = 0;
let totalcards = 0;
//30行目で設定しているidを拾ってきて
function changeImg(id){
  let index = Number(id);
  document.getElementById(id).src = textAcard[index];
  let myScore = cardAscore[index];
  totalScore += myScore;
  totalcards += 1;
  totalcards <= 3 ? score.innerText = `めくったカードは${totalcards}枚目です。あなたの合計点数は${totalScore}点です💮`: score.innerText = "４枚以上カードはめくることができません"
}

const cardAscore = {
  0 :50, 
  1 :50, 
  2 :100, 
  3 :10, 
  4 :0, 
  5 :100, 
  6 :0, 
  7 :100, 
  8 :30, 
  9 :20
};

const score = document.getElementById("score")


//カードのidを取ってくる

// function getScore() {
//   for (const key in cardAscore){
//     const idElement = document.getElementById(key)
//     if (key === idElement.id){
//       score.innerText = cardAscore[key];
//     }
//   }
// }

// const idElement = document.getElementById("EventA-card-up")
// idElement.addEventListener("click", getScore);
