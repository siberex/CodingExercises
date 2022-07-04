package main

import (
	"os"
	"strconv"
	"strings"
)

func main() {
	dataBytes, err := os.ReadFile("input.txt")
	if err != nil {
		panic(err)
	}

	input := strings.Split(string(dataBytes), "\n")

	n1 := convert(input[0])
	n2 := convert(input[1])

	if n1 > n2 {
		output(">")
	} else if n1 < n2 {
		output("<")
	} else {
		output("=")
	}
}

func convert(s string) int64 {
	s = strings.Replace(s, "one", "1", -1)
	s = strings.Replace(s, "zero", "0", -1)
	n, err := strconv.ParseInt(s, 2, 0)
	if err != nil {
		return 0
	}
	return n
}

func output(s string) {
	data := []byte(s)
	err := os.WriteFile("output.txt", data, 0644)
	if err != nil {
		panic(err)
	}
}
