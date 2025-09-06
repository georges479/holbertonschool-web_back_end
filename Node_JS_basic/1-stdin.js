const readline = require('readline');
if (process.stdin.isTTY) {
	// Interactive mode
	const rlname = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

rlname.question("Welcome to Holberton School, what is your name?\n", (name) => {
	console.log(`Your name is: ${name}`);
	rlname.close();
});
} else {
	// Redirection mode (pipe or file redirection)
	console.log("Welcome to Holberton School, what is your name?");
	process.stdin.on("data", (data) => {
		const name = data.toString().trim();
		console.log(`Your name is: ${name}`);
		console.log("This important software is now closing");
	});
}
