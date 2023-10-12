var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequiref97b;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequiref97b=r);var o=r("fmRoT");const l=new URLSearchParams(location.search),a=[],c=document.querySelector("#player");c.volume=.5,// console.log(prams.get("id"));
(0,o.default).get(`https://monster-siren.hypergryph.com/api/album/${l.get("id")}/detail`).then(e=>{let t=document.getElementById("album-info"),n=document.querySelector("title"),r=e.data.data,l=[],d=r.name,i=r.cid;r.coverUrl;let u=r.intro,s=r.songs;s.forEach(e=>{l.push(e.cid)}),n.textContent=d;//template要素の取得
let m=document.getElementById("album-content"),p=m.content.cloneNode(!0);// 中身を設定
p.querySelector(".album-img").src=`./images/${i}.jpg`,p.querySelector("h2").textContent=d,p.querySelector("h4").textContent=s[0].artistes,p.querySelector("small").textContent=u,// ul要素にli要素を追加
t.appendChild(p),async function(){for(let e of s){let t=await (0,o.default).get(`https://monster-siren.hypergryph.com/api/song/${e.cid}`),n=document.getElementById("songs-wrapper"),r=t.data.data,l=r.name,d=r.cid;r.artists,r.mvCoverUrl,r.mvUrl,r.lyricUrl,r.sourceUrl,a.push(t.data.data);//template要素の取得
let i=document.getElementById("songs-content"),u=i.content.cloneNode(!0);// onloadPlay();
// 中身を設定
u.querySelector("label").textContent=l,u.querySelector(".song-name").id=l,u.querySelector("label").htmlFor=l,u.querySelector(".song-name,label").addEventListener("click",e=>{for(num=0;num<a.length;num++)if(a[num].cid==d){c.src=a[num].sourceUrl;break}else c.src=""}),// playerObj.addEventListener("ended", () => {
//     for (num = 0; num < playerList.length; num++) {
//         if (playerList[num]["sourceUrl"] == playerObj.src) {
//             console.log(playerObj.src);
//             playerObj.src = playerList[num + 1]["sourceUrl"];
//         }
//         break;
//     }
// })
// ul要素にli要素を追加
n.appendChild(u)}}()});//# sourceMappingURL=album.8b121912.js.map

//# sourceMappingURL=album.8b121912.js.map
