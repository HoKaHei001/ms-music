import axios from "axios";

const prams = new URLSearchParams(location.search);
const playerList = [];
const playerObj = document.querySelector("#player");

// console.log(prams.get("id"));


axios.get(`https://monster-siren.hypergryph.com/api/album/${prams.get("id")}/detail`)
    .then((response) => {

        const ul = document.getElementById('album-info')
        const site_title = document.querySelector('title');


        const item = response.data.data;

        const sSongsId = [];

        // タイトルを取得

        const cName = item.name;
        const cId = item.cid;
        const cCover = item.coverUrl;
        const cIntro = item.intro;
        const cSongs = item.songs

        cSongs.forEach(element => {
            sSongsId.push(element['cid'])
        });


        // const asyncFunc = async () => {
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

        site_title.textContent = cName;


        //template要素の取得
        const template = document.getElementById("album-content");

        // li要素をコピーする
        const li = template.content.cloneNode(true);

        // 中身を設定
        li.querySelector('.album-img').src = `./images/${cId}.jpg`;
        li.querySelector('h2').textContent = cName;
        li.querySelector('small').textContent = cIntro;


        // ul要素にli要素を追加
        ul.appendChild(li);

        cSongs.forEach(element => {
            // console.log(element);
            axios.get(`https://monster-siren.hypergryph.com/api/song/${element.cid}`)
                .then((response) => {

                    // console.log(response.data);

                    const ul = document.getElementById('songs-wrapper')

                    const item = response.data.data;

                    // タイトルを取得
                    const sName = item.name;
                    const sId = item.cid;
                    const sArtists = item.artists;
                    const smvCoverUrl = item.mvCoverUrl;
                    const smvUrl = item.mvUrl;
                    const slyricUrl = item.lyricUrl;
                    const sSourceUrl = item.sourceUrl

                    playerList.push(response.data.data);

                    // console.log(sName, sId, sArtists, smvCoverUrl, smvUrl, slyricUrl, sSourceUrl);



                    //template要素の取得
                    const template = document.getElementById("songs-content");

                    // li要素をコピーする
                    const li = template.content.cloneNode(true);

                    function onloadPlay() {
                        if (playerObj.src == "") {
                            console.log("test");
                            playerObj.src = playerList[0]["sourceUrl"]
                        }
                    }

                    onloadPlay();

                    // 中身を設定
                    // li.querySelector('label').textContent = sName;
                    // // li.querySelector('audio').src = sSourceUrl;
                    // li.querySelector("label").addEventListener("click", () => {
                    //     for (num = 0; num < playerList.length; num++) {
                    //         if (playerList[num]["cid"] == sId) {
                    //             playerObj.src = playerList[num]["sourceUrl"];
                    //             console.log("1");
                    //             break;
                    //         } else {
                    //             playerObj.src = "";
                    //             console.log("2");
                    //         }
                    //     }
                    // })

                    // li.querySelector('.song-name').value = sName;

                    li.querySelector('label').textContent = sName;
                    li.querySelector('.song-name').id = sName;

                    li.querySelector('label').htmlFor = sName;
                    li.querySelector("label").addEventListener("click", (e) => {
                        for (num = 0; num < playerList.length; num++) {
                            if (playerList[num]["cid"] == sId) {
                                playerObj.src = playerList[num]["sourceUrl"];
                                break;
                            } else {
                                playerObj.src = "";
                            }
                        }
                    })


                    // playerObj.addEventListener("ended", () => {
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

                    playerObj.addEventListener("ended", () => {
                        for (num = 0; num < playerList.length; num++) {
                            if (playerList[num]["sourceUrl"] == playerObj.src) {
                                console.log("3");
                                console.log(playerObj.src);
                                playerObj.src = playerList[num + 1]["sourceUrl"];
                                break;
                            }
                        }
                    })



                    // ul要素にli要素を追加
                    ul.appendChild(li);
                })

        });


    }
    )

console.log(playerList);

