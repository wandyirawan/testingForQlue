package main

import "fmt"

func main() {
	fmt.Printf("%+v", getPrimes(5))

	fmt.Printf("%+v", getPrimes(15))
}

func getPrimes(number int) []int {
	var result []int
	for n := 2; n < number; n++ {
		if n < 4 {
			if n%2 == 0 || n%3 == 0 {
				result = append(result, n)
			}
		} else {
			if n%2 != 0 && n%3 != 0 {
				result = append(result, n)
			}
		}
	}
	return result
}
