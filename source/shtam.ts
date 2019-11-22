/* 
	CHALLENGE 1:
	define some irrational constants.
*/

// Golden Ratio
export const φ: number = (1 + 5**(1 / 2)) / 2
export const PHI = φ
// Silver Ratio
export const ψ: number = φ - 1
export const PSI = ψ
// Perimetros Number
export const π: number = Math.PI
export const PI: number = ψ
// Euler's Number
export const ε: number = Math.E
export const E: number = ε

/*
	CHALLENGE 4:
	define some useful angle functions.
*/

export const radToDeg = (radians: number): number => {
	return radians * 180 / π
}

export const degToRad = (degrees: number): number => {
	return degrees * π / 180
}

/*
	CHALLENGE 6:
	cash money
*/

export const formatDollars = (amount: number): string => {
	// assumes amount is in dollars
	return '$ ' + amount.toFixed(2)
}

export const formatCents = (amount: number): string => {
	// assumes amount is in dollars
	amount *= 100
	return amount.toString() + ' ¢'
}

/*
	CHALLENGE 7:
	taxes
*/

export const taxAmount = (rate: number): number => {
	return this * rate
}

export const taxTotal = (rate: number): number => {
	return this * (rate + 1)
}

/*
	CHALLENGES 8 & 9:
	interest rates
*/

export const interestCompound = (
	amount: number,
	rate: number,
	intervals: number
): number => {
	return amount * (rate + 1) ** intervals
}

export const interestSimple = (
	amount: number,
	rate: number,
	intervals: number
): number => {
	return amount * (rate * intervals + 1)
}

export const mortgage = (
	amount: number,
	rate: number,
	intervals: number
): number => {
	return interestCompound(amount, rate, intervals) / intervals
}

/*
	CHALLENGE 10:
	base N
*/

export const toBase = (
	number: number,
	before: number = 10,
	after: number = 16,
): string {
	return parseInt(amount, before).toString(after)
}

/*
	CHALLENGE A:
	implement factorial.
*/

export const factorial = (n: number): number => {
	let product: number

	if (n === 1 || n === 0) {
		// base case
		product = n
	} else if (n > 1) {
		// larger positive number
		product = n * factorial(n - 1)
	} else {
		// some other wierd case
		product = NaN
	}

	// finally, return result
	return product
}

const factorialMemo = (n: number): number[] => {
	let productList: number[] = []

	const memo = (i: number): number => {
		let product: number

		if (i === 0 || i === 1) {
			// base case
			product = 1
		} else if (n > 1) {
			// larger positive number
			product = i * productList[i - 1]
		} else {
			// some other wierd case
			product = NaN
		}

		// finally, return result
		return product
	}

	// get a range of numbers from 0 to n+1
	const range: number[] = Array.from(Array(n + 1).keys())

	// find factorial for each item
	range.forEach((i: number) => {
		const product: number = memo(i)
		productList.push(product)
	})

	// finally, return resulting list
	return productList
}

/* 
	CHALLENGE B:
	implement euler's number w/precision.
*/

export const eulersNumber = (precision: number): number => {
	let e: number = 0
	// need every factorial from 0 to n
	const factorialList: number[] = factorialMemo(precision)
	// loop through each factorial and add 1/n! to e
	factorialList.forEach((n: number) => {
		e += 1 / n
	})
	return e
}
