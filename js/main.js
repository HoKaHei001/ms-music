import axios from "axios";



axios.get('https://monster-siren.hypergryph.com/api/albums')
    .then((response) => {
        // console.log(response.data.data);

        const ul = document.getElementById('albums')

        for (const item of response.data.data) {
            // タイトルを取得
            const cId = item.cid;
            const cName = item.name;
            const cCover = item.coverUrl;
            const cArtistes = item.artistes;

            // console.log(cId, cCover, cName, cArtistes);

            //template要素の取得
            const template = document.getElementById("albums-item");

            // // li要素をコピーする
            const li = template.content.cloneNode(true);

            // // 中身を設定
            li.querySelector('.album-img').src = `./images/${cId}.jpg`;

            li.querySelector('small').textContent = `${cName}`;
            li.querySelector(".album-page").href = `./album.html?id=${cId}`

            // ul要素にli要素を追加
            ul.appendChild(li);
        }
    })