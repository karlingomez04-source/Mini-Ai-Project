function go(page){
document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
document.getElementById(page).classList.add('active');
}

function openLink(url){
window.open(url, "_blank");
}

// LOGIN
document.getElementById("loginBtn").addEventListener("click", () => {
let email = document.getElementById("email").value;
if(!email) return alert("Enter email");

document.getElementById("loginScreen").style.display = "none";
document.getElementById("app").classList.remove("hidden");

go("home");
});

// AI SIMPLE CHAT
document.getElementById("askAI").addEventListener("click", () => {
let input = document.getElementById("aiInput").value;

document.getElementById("aiOutput").innerHTML +=
`<p><b>You:</b> ${input}</p>
<p><b>AI:</b> I can help you break that down step by step.</p>`;
});

// CHARACTER BUILDER
function buildCharacter(){
let name = document.getElementById("name").value;
let age = document.getElementById("age").value;
let year = document.getElementById("year").value;
let major = document.getElementById("major").value;
let minor = document.getElementById("minor").value;

document.getElementById("characterBox").innerHTML =
`<h3>🧬 Your Character</h3>
<p>Name: ${name}</p>
<p>Age: ${age}</p>
<p>Year: ${year}</p>
<p>Major: ${major}</p>
<p>Minor: ${minor}</p>`;
}

// FILTER ALERT
document.getElementById("filterReviews")?.addEventListener("change", (e)=>{
alert("Filtering: " + e.target.value);
});