document.getElementById("startBtn").onclick = function () {

    document.querySelector(".container").innerHTML = `

        <h1>😂 First Question</h1>

        <p>How are you right now?</p>

        <button onclick="nextPage()">😊 Happy</button>

        <br><br>

        <button onclick="nextPage()">😐 Fine</button>

        <br><br>

        <button onclick="nextPage()">😤 Irritated</button>

    `;

}

function nextPage(){

    document.querySelector(".container").innerHTML = `

        <h1>😈 Hehe...</h1>

        <p>Whatever you selected...</p>

        <h2>I'm going to irritate you even more 😂</h2>

        <button onclick="loading()">Continue</button>

    `;

}
  function loading(){

    document.querySelector(".container").innerHTML = `

    <h1>🤖 AI Friendship Scanner</h1>

    <h2 id="status">Initializing...</h2>

    <h3 id="percent">0%</h3>

    <progress id="bar" value="0" max="100"></progress>

    `;

    let progress = 0;

    let messages = [
        "Finding your secrets...",
        "Checking your smile...",
        "Reading your kindness...",
        "Searching for your best friend...",
        "Almost Done..."
    ];

    let timer = setInterval(function(){

        progress++;

        document.getElementById("bar").value = progress;

        document.getElementById("percent").innerHTML = progress + "%";

        if(progress==20)
            document.getElementById("status").innerHTML = messages[0];

        if(progress==40)
            document.getElementById("status").innerHTML = messages[1];

        if(progress==60)
            document.getElementById("status").innerHTML = messages[2];

        if(progress==80)
            document.getElementById("status").innerHTML = messages[3];

        if(progress==95)
            document.getElementById("status").innerHTML = messages[4];

        if(progress>=100){

            clearInterval(timer);

            congratulations();

        }

    },40);

}
function congratulations(){

document.querySelector(".container").innerHTML=`

<h1 class="glow">🎉 Congratulations!!</h1>

<h2>🏆 Achievement Unlocked</h2>

<h2>✨ Having me as your friend ❤️</h2>

<p>
You have officially unlocked one of the rarest friendships in the universe.
</p>

<button onclick="openLetter()">

💌 Open My Surprise

</button>

`;

}
function openLetter(){

document.querySelector(".container").innerHTML = `

<h1>💖 Happy Friendship Day 💖</h1>

<h2 id="friendName">Dear HANSIKA,</h2>

<p id="letter" style="font-size:22px;line-height:1.8;padding:20px;text-align:left;"></p>

<button onclick="ending()">
❤️ One Last Surprise
</button>

`;

let message = `

I don't know where life will take us in the future,
but I know one thing...

Meeting you was one of the best things that ever happened to me.

Thank you for every laugh,
every memory,
every silly conversation,
every time you stood by me.

No matter how busy life becomes,
I hope our friendship never changes.

Happy Friendship Day!

Love you always ❤️

`;

typeWriter(message);

}
function typeWriter(text){

let i = 0;

let speed = 35;

let target = document.getElementById("letter");

target.innerHTML = "";

function typing(){

if(i < text.length){

target.innerHTML += text.charAt(i);

i++;

setTimeout(typing,speed);

}

}

typing();

}
function ending(){

document.querySelector(".container").innerHTML = `

<h1>🥹</h1>

<h2>Promise me one thing...</h2>

<h2>

No matter what happens...

Stay my friend forever ❤️

</h2>

<h1>🌸 Happy Friendship Day 🌸</h1>

`;
}


setInterval(createHeart,500);

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (20 + Math.random()*20) + "px";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    },6000);

}

    



