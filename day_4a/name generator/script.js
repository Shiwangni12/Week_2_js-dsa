
const adjectives = ["Innovative", "Dynamic", "Creative", "NextGen", "Brilliant", "Smart"];
const nouns = ["Solutions", "Enterprises", "Technologies", "Ventures", "Corporation", "Industries", "shiva interprises", "deepseek", "tech titians", "avengers"];

function generateBusinessName() {
    const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    document.getElementById("result").innerText = `${randomAdj} ${randomNoun}`;
}
