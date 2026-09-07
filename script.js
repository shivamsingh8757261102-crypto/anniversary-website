alert("JavaScript is working!");
const anniversaryDate = new Date("2026-09-08T00:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const difference = anniversaryDate - now;

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("countdown").innerHTML =
        days + " Days " +
        hours + " Hours " +
        minutes + " Minutes " +
        seconds + " Seconds ❤️";
}

updateCountdown();

setInterval(updateCountdown, 1000);


function showLove() {

    document.getElementById("loveMessage").innerHTML =
        "I love you so much ❤️🥺 Forever & Always 💕";

    for (let i = 0; i < 40; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML = "💗";
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = (15 + Math.random() * 20) + "px";
        confetti.style.zIndex = "10001";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        confetti.animate(
            [
                { transform: "translateY(0) rotate(0deg)", opacity: 1 },
                { transform: "translateY(100vh) rotate(360deg)", opacity: 0 }
            ],
            {
                duration: 3000 + Math.random() * 2000,
                easing: "linear"
            }
        );

        setTimeout(() => confetti.remove(), 5000);
    }
}


function showSurprise() {

    document.getElementById("surpriseMessage").innerHTML =
        "No matter what happens, I will always be grateful for every memory we have made together. ❤️🥺✨";

}function openWebsite() {

    document.getElementById("welcomeScreen").style.display = "none";

}
const galleryImages = document.querySelectorAll(".photo-gallery img");

galleryImages.forEach(function(img) {
    img.style.cursor = "pointer";

    img.addEventListener("click", function() {
        openImage(img.src);
    });
});

function openImage(src) {
    document.getElementById("modalImage").src = src;
    document.getElementById("imageModal").style.display = "flex";
}

function closeImage() {
    document.getElementById("imageModal").style.display = "none";
}
const loveText = `Happy Anniversary babyy 💗🥺 Aaj ka din mere liye genuinely bohot special hai, kyunki ye sirf hmlog ka anniversary nahi hai balki wo saare moments ko yaad karne ka din hai jo hmlog saath mein spend kiye yaad h hmko wo teacher day wala din yaar thoda barish mausam decoration ke din apko dekhe the dil mera whi lg gya tha ap mera life mai aakr hmko bohot saara achha memories diye hai aur sach mai wo sab hmko hamesha yaad rahega Perfect relationship toh humara bhi nahi hai, ldai aur misunderstandings hote rhta h but I think real relationship wahi hai jaha problem ko baad bhi dono ek dusre ko choose karte hai Aur hm apko choose karte rahenge ha ldai mai bhut kuch hmlog dono ek dushre ko bhut bolte h but at last hmko ap hi chaiye 🫠❤️ Bas ek wish hai ki hmlog dono aage bhi saath rhe grow kre Happy rhe aur bahut saara memorie banaye. Happy Anniversary babyyy, always stay with me 🧿🥹💋💗`;

let textIndex = 0;

function typeLoveLetter() {
    if (textIndex < loveText.length) {
        document.getElementById("loveLetter").textContent += loveText.charAt(textIndex);
        textIndex++;
        setTimeout(typeLoveLetter, 35);
    }
}

typeLoveLetter();
function toggleMusic() {

    const song = document.getElementById("mySong");
    const button = document.getElementById("musicButton");

    if (song.paused) {
        song.play();
        button.innerHTML = "⏸️ Pause Music";
    } else {
        song.pause();
        button.innerHTML = "▶️ Play Music";
    }
}
function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 800);
function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

    const button = document.getElementById("darkModeButton");

    if (document.body.classList.contains("dark-mode")) {
        button.innerHTML = "☀️ Light Mode";
    } else {
        button.innerHTML = "🌙 Dark Mode";
    }
}
