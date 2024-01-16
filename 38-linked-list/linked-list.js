//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Node {
	constructor(value) {
		this.value = value;
		this.prev = null;
		this.next = null;
	}
}

export class LinkedList {
	constructor() {
		this.start = null;
		this.end = null;
	}

	push(value) {
		const node = new Node(value);
		if (!this.start) {
			this.start = node;
		} else {
			this.end.next = node;
			node.prev = this.end;
		}
		this.end = node;
	}

	pop() {
		const node = this.end;
		this.end = node.prev;
		if (!this.end) {
			this.start = null;
		}
		return node.value;
	}

	shift() {
		const node = this.start;
		this.start = node.next;
		if (!this.start) {
			this.end = null;
		} else {
			this.start.prev = null;
		}
		return node.value;
	}

	unshift(value) {
		const node = new Node(value);
		if (!this.start) {
			this.end = node;
		} else {
			node.next = this.start;
			this.start.prev = node;
		}
		this.start = node;
	}

	count() {
		let count = 0,
			node = null;
		if (this.start) {
			count++;
			node = this.start;
		}
		while (node !== this.end) {
			count++;
			node = node.next;
		}
		return count;
	}

	delete(value) {
		let node = this.start;
		if (node.value === value) {
			if (node !== this.end) {
				this.start = node.next;
			} else {
				this.start = this.end = null;
			}
			return;
		}

		while (node !== null) {
			if (node.value === value) {
				if (node === this.end) {
					this.end = node.prev;
					this.end.next = null;
				} else {
					node.prev.next = node.next;
					node.next.prev = node.prev;
				}
				break;
			}
			node = node.next;
		}
	}
}
