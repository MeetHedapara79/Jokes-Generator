let arr = [`"अगर किसी लड़की का नाम खुशी हो और वह रो रही हो, तो कोई गंभीरता से नहीं लेगा! क्योंकि लोग सोचेंगे- 'ये खुशी के आंसू' हैं।"`,
    `अगर श्रीदेवी अपना एक शोरूम खोलें, तो वह कहेंगी, 'अभी 'बोनी' का टाइम है!'`,
    `बड़ा अच्छा लगता है जब-जब सोनी का फोन हैंग होता है, क्योंकि- 'सोनी के नखरे सोणे लग दे मैनू...'`,
    `२ हफ़्तों से ज्यादा खासी TB बन जाती है.. अगर टाइम पे गर्लफ्रेंड ना चेंज करो तो वो बीबी बन जाती है.`,
    `नज़रे आज भी उस हरामखोर को ढूँढ रही हैं, जिसने कहा था बुक के बीच में मोर पंख रखने से विद्या आती है.`,
    `देवदास की तरह जान मत दो यारो, प्यार को लात मारो यारो, मेरी बात मानो यारो, ना चंद्रमुखी ना पारो, रोज़ रात एक किंगफ़िशर मारो, और चैन से ज़िंदगी गुज़ारो..!`,
    `ज़रुरत से ज़्यादा भगवान को याद मत किया करो क्योंकि, किसी दिन भगवान ने याद कर लिया तो, लेने के देने पड़ जायेंगे.`,
    `खैरियत पूछने का जमाना गया साहिब, आदमी ऑनलाइन दिख जाये तो समझ लेना सब ठीक है.. भगवान हम सबको ऑनलाइन रखे.`,
    `दुनिया बुरी हो सकती है तुम नही, लोग बुरे हो सकते है तुम नही, दुनिया बेवफा हो सकती है तुम नही, पागल ठिक हो सकते है तुम नही.`,
    `मैंने दरवाजा खोला तो, उसकी आँखो मे आँसू, चेहरे पर हँसी थी, साँसो मे आहे, दिल मे बेबसी थी, पगली ने पहले नही बताया की, दरवाजे मे उसकी ऊँगली फँसी थी.`,
    `जरुरी नहीं की कुत्ता ही वफादार निकले.. वक्त आने पर, आपका वफादार भी कुत्ता निकल सकता है!`,
    `सिर्फ मार्क जुकरबर्ग ही दुनिया का ऐसा अकेला इंसान है.. जिसकी मां बोलती है, बेटा टाइम-पास छोड़, Facebook और Whatsapp पर ध्यान दे.`,
    `ससुर ने दामाद से कहा: 6 साल मे 8 बच्चे.. ये क्या है? दामाद: मैने आपसे कहा था गरीब जरूर हु, पर आपकी बेटी को कभी खाली पेट नही रखूँगा !`,
    `अगर आपका दोस्त Online रहने के बाद भी आपको Reply नहीं दे रहा, तो समझ लीजिये की, अब वो Single नहीं रहा.`,
    `India के आधे अमीर जादे अपने बाप को नहीं जानते.. They Just Keep Asking Other, “तु जानता है मेरा बाप कौन है?”`,
    `इस मतलबी दुनिया में, एक पान वाला ही है, जो पूछ कर चुना लगाता है !`,
    `एक सरकारी दफ्तर के बोर्ड पार लिखा था, कृपया शोर ना करे. किसी ने उसके नीचे लिख दिया, “वरना हम जाग जायेंगे..”`,
    `उसने मुझसे पूछा चाहोगे मुझे कब तक, मैंने भी मुस्कुराके कह दिया, मेरी बीवी. को न पता चले तब तक.`,
    `बिना पासवर्ड लगा हुआ Wi-Fi मिल जाना भी पिछले जन्म के किसी पुण्य का ही परिणाम होता है`,
    `एक आदमी ने मुझसे पूछा… मेडम जूते 👞👟 कंहा मिलेंगे..? मैंने कहा….हर जगह मिल सकते हैं । बस आप में वो गुण होने चाहिए…!!! 😂`]
let randomJoke = arr[Math.floor(Math.random() * arr.length)]
let n = document.getElementById("new")
n.innerHTML = randomJoke;
function change_text() {
    let randomJoke = arr[Math.floor(Math.random() * arr.length)]
    let n = document.getElementById("new")
    n.innerHTML = randomJoke
    return n;
}


// let jokes = document.getElementById("joke")
// jokes.innerHTML = randomJoke