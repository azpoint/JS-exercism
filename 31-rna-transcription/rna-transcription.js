//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const seqBase = {
	G: "C",
	C: "G",
	T: "A",
	A: "U",
};

export const toRna = (seq) => {
	return [...seq].reduce((total, nucle) => total += seqBase[nucle], "");
};
