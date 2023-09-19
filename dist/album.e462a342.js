var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequiref97b;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequiref97b=o);var r=o("fmRoT");const l=new URLSearchParams(location.search),c=[],a=document.querySelector("#player");// console.log(prams.get("id"));
(0,r.default).get(`https://monster-siren.hypergryph.com/api/album/${l.get("id")}/detail`).then(e=>{let t=document.getElementById("album-wrapper"),n=document.querySelector("title"),o=e.data.data,l=[],s=o.name,d=o.cid;o.coverUrl;let u=o.intro,i=o.songs;i.forEach(e=>{l.push(e.cid)}),// const asyncFunc = async () => {
//     try {
//         const res = await axios.get(`https://monster-siren.hypergryph.com/api/song/${sSongsId}`, {
//         })
//         const items = res.data;
//         for (const item of items) {
//             console.log(item);
//         }
//     } catch (error) {
//         const {
//             status,
//             statusText
//         } = error.response;
//         console.log(`Error! HTTP Status: ${status} ${statusText}`);
//     }
// }
// asyncFunc();
n.textContent=s;//template要素の取得
let m=document.getElementById("album-content"),p=m.content.cloneNode(!0);// 中身を設定
p.querySelector(".album-img").src=`./images/${d}.jpg`,p.querySelector("h2").textContent=s,p.querySelector("small").textContent=u,// ul要素にli要素を追加
t.appendChild(p),i.forEach(e=>{// console.log(element);
(0,r.default).get(`https://monster-siren.hypergryph.com/api/song/${e.cid}`).then(e=>{// console.log(response.data);
let t=document.getElementById("songs-wrapper"),n=e.data.data,o=n.name,r=n.cid;n.artists,n.mvCoverUrl,n.mvUrl,n.lyricUrl,n.sourceUrl,c.push(e.data.data);// console.log(sName, sId, sArtists, smvCoverUrl, smvUrl, slyricUrl, sSourceUrl);
//template要素の取得
let l=document.getElementById("songs-content"),s=l.content.cloneNode(!0);""==a.src&&(console.log("test"),a.src=c[0].sourceUrl),// 中身を設定
s.querySelector("label").textContent=o,// li.querySelector('audio').src = sSourceUrl;
s.querySelector("label").addEventListener("click",()=>{for(num=0;num<c.length;num++)if(c[num].cid==r){a.src=c[num].sourceUrl,console.log("1");break}else a.src="",console.log("2")}),// playerObj.addEventListener("ended", () => {
//     for (num = 0; num < playerList.length; num++) {
//         if (playerList[num]["cid"] == sId) {
//             console.log("3");
//             playerObj.src = playerList[num + 1]["sourceUrl"];
//         }
//         else if (playerList[playerList.length - 1]["cid"] == sId) {
//             console.log("4");
//             playerObj.src = "";
//         }
//     }
// })
a.addEventListener("ended",()=>{for(num=0;num<c.length;num++)if(c[num].sourceUrl==a.src){console.log("3"),console.log(a.src),a.src=c[num+1].sourceUrl;break}}),// ul要素にli要素を追加
t.appendChild(s)})})}),console.log(c);//# sourceMappingURL=album.e462a342.js.map

//# sourceMappingURL=album.e462a342.js.map
