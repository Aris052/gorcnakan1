// գրել ֆունկցիա, որը տրված N թվի համար վերադարձնում է N պատահական սիմվոլներից
// կազմված տեքստ ներառյալ տառեր, թվեր և սիմվոլներ

// function generatePassword(length) {
// 	const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// 	const lowercase = 'abcdefghijklmnopqrstuvwxyz'
// 	const numbers = '0123456789'
// 	const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?'
// 	const allCharacters = uppercase + lowercase + numbers + specialChars

// 	let password = ''
// 	for (let i = 0; i < length; i++) {
// 		const randomIndex = Math.floor(Math.random() * allCharacters.length)
// 		password += allCharacters[randomIndex]
// 	}

// 	return password
// }

// const newPassword = generatePassword(12)
// console.log(newPassword)









// գրել ֆունկցիա, որը կիրականացնի Binary Search ալգորիթմը, ռեկուրսիվ տարբերակով



// function binarySearch(arr, target, left, right) {
// 	if (left > right) {
// 		return -1
// 	}

// 	const mid = Math.floor((left + right) / 2)

// 	if (arr[mid] === target) {
// 		return mid
// 	}

// 	if (target < arr[mid]) {
// 		return binarySearch(arr, target, left, mid - 1)
// 	}

// 	return binarySearch(arr, target, mid + 1, right)
// }

// function search(arr, target) {
// 	return binarySearch(arr, target, 0, arr.length - 1)
// }

// const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15]
// console.log(search(sortedArray, 7))// Output: 3
