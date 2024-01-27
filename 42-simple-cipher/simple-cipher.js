export class Cipher {
	constructor(key = "couldbeanything") {
		this._key = key;
	}

	encode(encode) {
		return [...encode]
			.map((c, i) => {
				//Get character code from the table
				let characterCode = c.charCodeAt(0) - 97;
				//Offset the character with the key
				let offset = this._key[i % this._key.length].charCodeAt(0) - 97;
				//Build new character
				let newCharacter = (characterCode + offset) % 26;
				return String.fromCharCode(newCharacter + 97);
			})
			.join("");
	}

	decode(decode) {
		return [...decode]
			.map((c, i) => {
				let characterCode = c.charCodeAt(0) - 97;
				let offset = this._key[i % this._key.length].charCodeAt(0) - 97;
				//Build back character
				let newCharacter = characterCode - offset;
				if (newCharacter < 0) newCharacter += 26;
				return String.fromCharCode(newCharacter + 97);
			})
			.join("");
	}

	get key() {
		return this._key;
	}
}
