const messages = [
    "Hi, sayangkuuu. I just wany you to know that.. ❤",
        "No matter what happens, I’m always here for you sayang 💖",
        "You are strong, and I believe in you! sayang always be our good boy 💪",
        "No matter how hard things get, you’ll always have me tauu sayangg 💕",
        "Everything will be okay. I always proud of you sayang. I gonna be your no  1 supporter, listener and best friend. I love everything about you sayang 🌸",
        "Lastly, i know how stress and tired you are sayang but baby percaya dengan sayang. I know  sometimes sayang pun tak kuat but baby selalu doa sayang kuat and sayang bolehh go through all this. May Allah ease all your works. Listen to me sayang, every ups and downs let share with me. My shoulder just for you. Just cry, if u wanna cry. it doesnt matter u are a man but u are human. let express your feelings to me. dont hide it, BABY SELALU ADA UNTUK SAYANG TAU!!!!!! BABY SAYANG AYANGGG!!! HARAP AYANG SUKA AND CAN HELP BOOST YOUR SPIRIT OKAY MUAHH!! ILOVEYOU ALWAYS SYAHMEE NUR HAQIEM ☀"
];

let index = 0;

function nextMessage() {
    index++;
    if (index >= messages.length) {
        index = 0; // Restart from the first message
    }
    document.getElementById("message").innerText = messages[index];
}

