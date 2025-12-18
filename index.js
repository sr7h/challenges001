بconst data = [
    "ZmxhZ3t0aGlua18=",   // part A
    "dGhlX2JveH0=",       // part C
    "ZmFrZV9wYXJ0"        // fake
];

function check() {
    const user = document.getElementById("flagInput").value;

    if (user === buildFlag()) {
        document.getElementById("msg").innerText = "✅ Correct!";
        document.getElementById("msg").style.color = "green";
    } else {
        document.getElementById("msg").innerText = "❌ Try again";
        document.getElementById("msg").style.color = "red";
    }
}

function buildFlag() {
    // الجزء الناقص ليس هنا 😉
    return atob(data[0]) + atob(data[1]);
}

// ZmxhZ3t0aGlua18=
