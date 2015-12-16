import { Stack } from '../lib/Stack.js';

//Stacks
export function pushToStack(printHTML) {
	var names = new Stack();
	names.push('Joe');
	names.push('Simon');
	names.push('Chris');
	names.push('Bharathy');
	names.push('Emanuele');
	names.push('Murali');
	names.push('Sai');
	names.push('Leila');

	printHTML(names.toString());
	printHTML(names.peek());

	names.pop();
	names.pop();
	printHTML(names.peek());

	names.push('Inoka');

	return names.toString();
}

export function palinDromes(printHTML) {
	var word, result;

	word = 'hello';
	result = isPalindrome(word) ? word + ' is a palindrome' : word + ' is not a palindrome';
	printHTML(result);

	word = 'racecar';
	result = isPalindrome(word) ? word + ' is a palindrome' : word + ' is not a palindrome';
	printHTML(result);

	return result;
}

function isPalindrome(word) {
	var stack = new Stack();
	var rword = '';
	var i;

	for (i = 0; i < word.length; i++) {
		stack.push(word[i]);
	}

	while (stack.length() > 0) {
		rword += stack.pop();
	}

	if (word == rword) {
		return true;
	}

	return false;
}
