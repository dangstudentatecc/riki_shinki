// Dữ liệu món ăn
const data = {
  wagyu: [
    { name: "和牛ロース", img: "./img/menu/wagyu_rosu.webp" },
    { name: "和牛カルビ", img: "./img/menu/wagyu_karubi.webp" },
    { name: "和牛モモロース", img: "./img/menu/wagyu_momo.webp" },
    { name: "本日の和牛", img: "./img/menu/wagyu_honjitu.webp" },
    { name: "和牛しゃぶ", img: "./img/menu/wagyu_shabu.webp" },
    { name: "タンステーキ", img: "./img/menu/tan_suteki.webp" },
    { name: "力丸タン", img: "./img/menu/usui_tan.webp" },
    { name: "厚切りタン", img: "./img/menu/atuikiri_tan.webp" },
    { name: "ホタテ", img: "./img/menu/hotate.webp" },
    { name: "イカ" },
    { name: "エビ", img: "./img/menu/ebi.webp" },
    { name: "タコ", img: "./img/menu/tako.webp" },
    { name: "パフェ", img: "./img/menu/parfei.webp" },
  ],
  premium: [
    { name: "牛タン", img: "./img/menu/gyutan.webp" },
    { name: "ミノ" },
    { name: "厚切りステーキ", img: "./img/menu/atukiri_suteki.webp" },
    { name: "ハラミの串焼きステーキ", img: "./img/menu/harami_suteki.webp" },
    { name: "中落カルビ一本焼き" },
    { name: "ロースステーキ", img: "./img/menu/rosu_suteki.webp" },
    { name: "名物4種盛り", img: "./img/menu/4shumori_suteki.webp" },
    { name: "力丸漬けハラミステーキ", img: "./img/menu/zuke_harami.webp" },
    { name: "巻き野菜", img: "./img/menu/makiyasai.webp" },
    { name: "辛い！冷麵", img: "./img/menu/karai_reimen.webp" },
  ],

  standard: [
    { name: "手羽先", img: "./img/menu/tebasaki.webp" },
    { name: "せせり", img: "./img/menu/seseri.webp" },
    { name: "鶏もも", img: "./img/menu/torimomo.webp" },
    { name: "豚バラ", img: "./img/menu/butabara.webp" },
    { name: "豚トロ", img: "./img/menu/tontoro.webp" },
    { name: "豚タン", img: "./img/menu/butatan.webp" },
    { name: "レバー", img: "./img/menu/reba.webp" },
    { name: "タン軟骨", img: "./img/menu/tannankotsu.webp" },
    { name: "テッチャン", img: "./img/menu/tecchan.webp" },
    { name: "アカセン", img: "./img/menu/akasen.webp" },
    { name: "上カルビ", img: "./img/menu/karubi.webp" },
    { name: "上ハラミ", img: "./img/menu/harami.webp" },
    { name: "上ロース", img: "./img/menu/rosu.webp" },
    { name: "牛しゃぶ", img: "./img/menu/shabu.webp" },
    { name: "ナムル盛り合わせ" },
    { name: "キムチ盛り合わせ", img: "./img/menu/kimuchi.webp" },
    { name: "枝豆", img: "./img/menu/edamame.webp" },
    { name: "きゅうり", img: "./img/menu/kyuuri.webp" },
    { name: "韓国のり", img: "./img/menu/nori.webp" },
    { name: "味付け煮卵", img: "./img/menu/nizuke_tamago.webp" },
    { name: "麻辣メンマ", img: "./img/menu/menma.webp" },
    { name: "自家製チャンヂャ", img: "./img/menu/chanza.webp" },
    { name: "韓国のりのチョレギサラダ", img: "./img/menu/choregi.webp" },
    { name: "全力！ネギ推しサラダ", img: "./img/menu/negi_sarada.webp" },
    { name: "ニラチヂミ", img: "./img/menu/nirachizimi.webp" },
    { name: "マンドゥ", img: "./img/menu/mandu.webp" },
    { name: "唐揚げ", img: "./img/menu/karaage1.webp" },
    { name: "手羽先唐揚げ", img: "./img/menu/tebasakiage.webp" },
    { name: "ヤンニョムチキン", img: "./img/menu/yanyomu_chikin.webp" },
    { name: "フライドポテト", img: "./img/menu/poteto.webp" },
    { name: "サムジャン", img: "./img/menu/samuzan.webp" },
    { name: "ネギ塩", img: "./img/menu/negishio.webp" },
    { name: "シャキシャキワサビ" },
    { name: "ニンニクスライス", img: "./img/menu/ninniku_tougarashi.webp" },
    { name: "刻み唐辛子", img: "./img/menu/ninniku_tougarashi.webp" },
    { name: "焼き野菜", img: "./img/menu/yakiyasai.webp" },
    { name: "ご飯", img: "./img/menu/gohan.webp" },
    { name: "石焼ビビンバ", img: "./img/menu/ishibibinba.webp" },
    { name: "冷麵", img: "./img/menu/reimen.webp" },
    { name: "たまごスープ", img: "./img/menu/tamago_supu.webp" },
    { name: "味噌汁" },
    { name: "力丸バナナ", img: "./img/menu/banana.webp" },
  ],
};

document.addEventListener("DOMContentLoaded", function () {
  const containers = {
    wagyu: document.getElementById("wagyu-group"),
    premium: document.getElementById("premium-group"),
    standard: document.getElementById("standard-group"),
  };

  let totalImages = 0;
  let loadedImages = 0;

  const onImageLoaded = () => {
    loadedImages++;
    if (loadedImages === totalImages) {
      document.body.classList.add("loaded");
      console.log("✅ All images loaded");
    }
  };

  const createECard = (flag, item) => {
    const li = document.createElement("li");
    li.className = "menuCard";
    li.dataset.flag = flag;

    const imgSrc = item.img || "./img/header_logo.png";

    li.innerHTML = `
      <div class="image">
        <img src="${imgSrc}"
             alt="${item.name}"
             loading="lazy">
      </div>
      <span class="menuName">${item.name}</span>
    `;

    const img = li.querySelector("img");
    totalImages++;

    // Trường hợp ảnh đã cache
    if (img.complete) {
      onImageLoaded();
    } else {
      img.addEventListener("load", onImageLoaded);
      img.addEventListener("error", onImageLoaded); // tránh treo loading
    }

    return li;
  };

  Object.keys(data).forEach((flag) => {
    const container = containers[flag];
    if (!container) return;

    const fragment = document.createDocumentFragment();
    data[flag].forEach((item) => {
      fragment.appendChild(createECard(flag, item));
    });
    container.appendChild(fragment);
  });
});

