let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
	{
		quote: `"The best way to predict the future is to create it."`,
		person: `Peter Drucker`,
	},
	{
		quote: `"In the end, we will remember not the words of our enemies, but the silence of our friends."`,
		person: `Martin Luther King Jr.`,
	},
	{
		quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
		person: `Winston Churchill`,
	},
	{
		quote: `"The only way to do great work is to love what you do."`,
		person: `Steve Jobs`,
	},
	{
		quote: `"Believe you can and you're halfway there."`,
		person: `Theodore Roosevelt`,
	},
	{
		quote: `"The future belongs to those who believe in the beauty of their dreams."`,
		person: `Eleanor Roosevelt`,
	},
	{
		quote: `"It's not about how hard you hit. It's about how hard you can get hit and keep moving forward."`,
		person: `Rocky Balboa`,
	},
	{
		quote: `"The only limit to our realization of tomorrow will be our doubts of today."`,
		person: `Franklin D. Roosevelt`,
	},
	{
		quote: `"The only way of discovering the limits of the possible is to venture a little way past them into the impossible."`,
		person: `Arthur C. Clarke`,
	},
	{
		quote: `"Your time is limited, don't waste it living someone else's life."`,
		person: `Steve Jobs`,
	},
	{
		quote: `"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle."`,
		person: `Christian D. Larson`,
	},
];

btn.addEventListener("click", function () {
	let random = Math.floor(Math.random() * quotes.length);

	quote.innerText = quotes[random].quote;
	person.innerText = quotes[random].person;
});
