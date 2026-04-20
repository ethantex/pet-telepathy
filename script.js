// 話術資料庫
const sentencePool = {
    emotion: [
        "他其實比外表看起來更在意你的情緒，有時候你難過，他雖然沒靠近，但心裡是在陪你的。",
        "在他的世界裡，你是唯一的發光體，但他有時也渴望一點點獨立的空間。",
        "他感受到你最近的壓力，他很想分擔，但只能用最原始的方式守護你。",
        "他對你的愛是非常純粹的，即使有時候表現得不在乎，那也是他在撒嬌。",
        "他在你身上看見了一種溫暖的頻率，這讓他覺得待在你身邊是最安全的事。",
        "他有時候會陷入沉思，其實是在回憶與你剛相遇時的那種氣味。",
        "對於你的忽冷忽熱，他其實都看在眼裡，但他選擇無條件地包容你。",
        "他覺得你最近似乎有點累，他希望你能多留一點時間給自己。",
        "在他的潛意識裡，你不僅是主人，更是他生命中不可或缺的靈魂伴侶。"
    ],
    environment: [
        "他最近對家裡的某個角落感到特別好奇，那裡可能有他覺得神祕的氣息。",
        "他覺得目前的空間雖然舒服，但如果能多一點跟你獨處的安靜時光，他會更開心。",
        "家裡的某個新物件讓他感到一絲緊張，但他正在努力適應中。",
        "他很喜歡窗外透進來的某種光影，那對他來說是一種心靈的洗滌。",
        "他覺得家裡的某個位置磁場特別好，那是他專屬的能量補給站。",
        "有時候他會盯著虛空看，並不是看到了什麼，而是在感受空氣中細微的震動。",
        "他對你最近佈置環境的小改變有所察覺，他內心是給予正面評價的。",
        "他渴望能有更多機會去接觸泥土或草地的味道，那會讓他感到更踏實。",
        "他對於家中的聲音非常敏感，某些細小的嗡嗡聲其實一直吸引著他的注意力。"
    ],
    desire: [
        "在吃的方面，他其實很有主見，只是有時候為了遷就你才表現得隨和。",
        "他對於目前的飲食模式感到穩定，但內心深處其實渴望一點點「驚喜」。",
        "關於你問的問題，他希望你能從他的眼神中尋找答案，而不是語言。",
        "他最近有一種想要「出走」的小衝動，這並非不愛你，而是本能的探索欲。",
        "他希望你能多摸摸他某個特定的部位（或許是耳朵後方），那裡藏著他的開關。",
        "他對於玩具的喜好正在改變，他現在更傾向於那些能讓他思考的東西。",
        "他覺得目前的作息還有優化的空間，希望能有更多規律的互動時間。",
        "他有時候故意搗蛋，只是為了確認你還是一樣在意他。",
        "他希望你能理解他的沈默，那不是抗拒，而是他正在進行心靈充電。"
    ],
    philosophical: [
        "他眼中的時間與你不同，對他來說，當下即是永恆。",
        "他認為生活中的小插曲都是緣分，就像他出現在你的生命中一樣。",
        "他有一種超越物種的直覺，能預感到某些即將發生的微小改變。",
        "他並不追求複雜的邏輯，他只追求那種純粹的、情感上的連結。",
        "在他的靈魂藍圖中，你是一道不可磨滅的色彩。",
        "他教導我們的是：即使什麼都不做，光是存在本身就是有價值的。",
        "他對這個世界的理解是感性的，所有看似偶然的動作都有其背後的意義。",
        "他並不擔心未來，因為他相信你的愛會帶領他走向正確的方向。"
    ]
};

// --- 溝通邏輯 ---
function startCommunication() {
    const photo = document.getElementById('photoInput').files[0];
    const question = document.getElementById('questionInput').value;

    if (!photo || !question.trim()) {
        alert("🚨 提醒：請先上傳寵物圖像並輸入探詢問題。");
        return;
    }

    const btn = document.getElementById('actionBtn');
    btn.disabled = true;
    btn.innerText = "調頻中...";
    document.getElementById('result').classList.add('hidden');
    document.getElementById('loading').classList.remove('hidden');

    setTimeout(() => {
        const getRand = arr => arr[Math.floor(Math.random() * arr.length)];
        const finalResponse = [
            getRand(sentencePool.emotion),
            getRand(sentencePool.environment),
            getRand(sentencePool.desire),
            getRand(sentencePool.philosophical)
        ].join('\n\n');

        document.getElementById('responseText').innerText = finalResponse;
        document.getElementById('randomFreq').innerText = (Math.random() * 500 + 100).toFixed(2);
        
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('result').classList.remove('hidden');
        btn.disabled = false;
        btn.innerText = "啟動量子糾纏連結";
    }, 3000); 
}