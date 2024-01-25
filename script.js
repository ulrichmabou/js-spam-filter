const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

// Regex to match "please help" or "assist me" - case incentive
const helpRegex = /please help|assist me/i;
// Regex to match a text like "10 dollars" or "2 thousand dollars"
const dollarRegex = /[0-9]+ (?:hundred|thousand|million|billion)? dollars/i;
// Regex to match any variation of "free money" as a whole
// It will not match "hands-free money management"
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;
// Regex to match any variation of "stock alert" as a whole
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;
// Regex to match any variation of "dear friend" as a whole
const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i;

const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

// Function to check if a message matches any of the patterns in the denyList array
const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }

  result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";
  messageInput.value = "";
});