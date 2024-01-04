

export const hey = (message) => {
	if (!message.trim()) return "Fine. Be that way!";
	
	message = message.trim()
	if (message.match(/\b[A-Z]+\b/g) && !message.match("OK")) {
		if (message.endsWith("?")) return "Calm down, I know what I'm doing!";
		return "Whoa, chill out!";
	}
	if (message.endsWith("?")) return "Sure.";
	return "Whatever.";
};

  