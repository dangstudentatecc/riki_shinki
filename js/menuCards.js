document.addEventListener("DOMContentLoaded", function () {
  const wagyuContainer = document.getElementById("wagyu-group");
  const premiumContainer = document.getElementById("premium-group");
  const standardContainer = document.getElementById("standard-group");
  const data = [
    { flag: "wagyu", name: "和牛ロース", img: "./img/menu/wagyu_rosu.webp" },
    { flag: "wagyu", name: "和牛カルビ", img: "./img/menu/wagyu_karubi.webp" },
    { flag: "wagyu", name: "和牛モモロース", img: "./img/menu/wagyu_momo.webp" },
    { flag: "wagyu", name: "本日の和牛", img: "./img/menu/wagyu_honjitu.webp" },
    { flag: "wagyu", name: "和牛しゃぶ", img: "./img/menu/wagyu_shabu.webp" },
    { flag: "wagyu", name: "タンステーキ", img: "./img/menu/tan_suteki.webp" },
    { flag: "wagyu", name: "力丸タン", img: "./img/menu/usui_tan.webp" },
    { flag: "wagyu", name: "厚切りタン", img: "./img/menu/atuikiri_tan.webp" },
    { flag: "wagyu", name: "ホタテ", img: "./img/menu/hotate.webp" },
    { flag: "wagyu", name: "イカ" },
    { flag: "wagyu", name: "エビ", img: "./img/menu/ebi.webp" },
    { flag: "wagyu", name: "タコ", img: "./img/menu/tako.webp" },
    { flag: "wagyu", name: "パフェ", img: "./img/menu/parfei.webp" },

    { flag: "premium", name: "牛タン", img: "./img/menu/gyutan.webp" },
    { flag: "premium", name: "ミノ" },
    { flag: "premium", name: "厚切りステーキ", img: "./img/menu/atukiri_suteki.webp" },
    { flag: "premium", name: "ハラミの串焼きステーキ", img: "./img/menu/harami_suteki.webp" },
    { flag: "premium", name: "中落カルビ一本焼き" },
    { flag: "premium", name: "ロースステーキ", img: "./img/menu/rosu_suteki.webp" },
    { flag: "premium", name: "名物4種盛り", img: "./img/menu/4shumori_suteki.webp" },
    { flag: "premium", name: "力丸漬けハラミステーキ", img: "./img/menu/zuke_harami.webp" },
    { flag: "premium", name: "巻き野菜", img: "./img/menu/makiyasai.webp" },
    { flag: "premium", name: "辛い！冷麵", img: "./img/menu/karai_reimen.webp" },

    { flag: "standard", name: "手羽先", img: "./img/menu/tebasaki.webp" },
    { flag: "standard", name: "せせり", img: "./img/menu/seseri.webp" },
    { flag: "standard", name: "鶏もも", img: "./img/menu/torimomo.webp" },
    { flag: "standard", name: "豚バラ", img: "./img/menu/butabara.webp" },
    { flag: "standard", name: "豚トロ", img: "./img/menu/tontoro.webp" },
    { flag: "standard", name: "豚タン", img: "./img/menu/butatan.webp" },
    { flag: "standard", name: "レバー", img: "./img/menu/reba.webp" },
    { flag: "standard", name: "タン軟骨", img: "./img/menu/tannankotsu.webp" },
    { flag: "standard", name: "テッチャン", img: "./img/menu/tecchan.webp" },
    { flag: "standard", name: "アカセン", img: "./img/menu/akasen.webp" },
    { flag: "standard", name: "上カルビ", img: "./img/menu/karubi.webp" },
    { flag: "standard", name: "上ハラミ", img: "./img/menu/harami.webp" },
    { flag: "standard", name: "上ロース", img: "./img/menu/rosu.webp" },
    { flag: "standard", name: "牛しゃぶ", img: "./img/menu/shabu.webp" },
    { flag: "standard", name: "ナムル盛り合わせ" },
    { flag: "standard", name: "キムチ盛り合わせ", img: "./img/menu/kimuchi.webp" },
    { flag: "standard", name: "枝豆", img: "./img/menu/edamame.webp" },
    { flag: "standard", name: "きゅうり", img: "./img/menu/kyuuri.webp" },
    { flag: "standard", name: "韓国のり", img: "./img/menu/nori.webp" },
    { flag: "standard", name: "味付け煮卵", img: "./img/menu/nizuke_tamago.webp" },
    { flag: "standard", name: "麻辣メンマ", img: "./img/menu/menma.webp" },
    { flag: "standard", name: "自家製チャンヂャ", img: "./img/menu/chanza.webp" },
    { flag: "standard", name: "韓国のりのチョレギサラダ", img: "./img/menu/choregi.webp" },
    { flag: "standard", name: "全力！ネギ推しサラダ", img: "./img/menu/negi_sarada.webp" },
    { flag: "standard", name: "ニラチヂミ", img: "./img/menu/nirachizimi.webp" },
    { flag: "standard", name: "マンドゥ", img: "./img/menu/mandu.webp" },
    { flag: "standard", name: "唐揚げ", img: "./img/menu/karaage1.webp" },
    { flag: "standard", name: "手羽先唐揚げ", img: "./img/menu/tebasakiage.webp" },
    { flag: "standard", name: "ヤンニョムチキン", img: "./img/menu/yanyomu_chikin.webp" },
    { flag: "standard", name: "フライドポテト", img: "./img/menu/poteto.webp" },
    { flag: "standard", name: "サムジャン", img: "./img/menu/samuzan.webp" },
    { flag: "standard", name: "ネギ塩", img: "./img/menu/negishio.webp" },
    { flag: "standard", name: "シャキシャキワサビ" },
    { flag: "standard", name: "ニンニクスライス", img: "./img/menu/ninniku_tougarashi.webp" },
    { flag: "standard", name: "刻み唐辛子", img: "./img/menu/ninniku_tougarashi.webp" },
    { flag: "standard", name: "焼き野菜", img: "./img/menu/yakiyasai.webp" },
    { flag: "standard", name: "ご飯", img: "./img/menu/gohan.webp" },
    { flag: "standard", name: "石焼ビビンバ", img: "./img/menu/ishibibinba.webp" },
    { flag: "standard", name: "冷麵", img: "./img/menu/reimen.webp" },
    { flag: "standard", name: "たまごスープ", img: "./img/menu/tamago_supu.webp" },
    { flag: "standard", name: "味噌汁" },
    { flag: "standard", name: "力丸バナナ", img: "./img/menu/banana.webp" },

  ];


  data.forEach(item => {
    const cardHTML = `
      <li class="menuCard" data-flag="${item.flag}">
        <div class="image">
          <img src="${item.img || './img/header_logo.png'}" alt="${item.name}" width="700" height="500">
        </div>
        <span class="menuName">${item.name}</span>
      </li>
    `;
    if (item.flag === "wagyu") wagyuContainer.insertAdjacentHTML("beforeend", cardHTML);
    else if (item.flag === "premium") premiumContainer.insertAdjacentHTML("beforeend", cardHTML);
    else standardContainer.insertAdjacentHTML("beforeend", cardHTML);
  });


});
