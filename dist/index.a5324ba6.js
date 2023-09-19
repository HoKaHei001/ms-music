var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},r=e.parcelRequiref97b;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in l){var r=l[e];delete l[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){l[e]=t},e.parcelRequiref97b=r),(0,r("fmRoT").default).get("https://monster-siren.hypergryph.com/api/albums").then(e=>{// console.log(response.data.data);
let t=document.getElementById("albums");for(let l of e.data.data){// タイトルを取得
let e=l.cid,r=l.name;l.coverUrl,l.artistes;// console.log(cId, cCover, cName, cArtistes);
//template要素の取得
let o=document.getElementById("albums-item"),n=o.content.cloneNode(!0);// // 中身を設定
n.querySelector(".album-img").src=`./images/${e}.jpg`,n.querySelector("small").textContent=`${r}`,n.querySelector(".album-page").href=`./album.html?id=${e}`,// ul要素にli要素を追加
t.appendChild(n)}});//# sourceMappingURL=index.a5324ba6.js.map

//# sourceMappingURL=index.a5324ba6.js.map
