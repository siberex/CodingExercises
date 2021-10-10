package main

import (
	"io/ioutil"
	"strconv"
	"strings"
)

func main() {
	rawInput, err := ioutil.ReadFile("MovingAverage.txt")
	check(err)
	input := string(rawInput)
	inputLines := strings.Split(input, "\n")

	var data []int
	var window int

	for i, line := range inputLines {
		if i == 1 {
			// "1 2 3" → [1, 2, 3]
			srcData := strings.Split(line, " ")
			for _, numStr := range srcData {
				n, _ := strconv.Atoi(numStr)
				data = append(data, n)
			}
		}
		if i == 2 {
			window, _ = strconv.Atoi(line)
		}
	}

	var out []float64

	sumWindow := 0
	for j := 0; j < window; j++ {
		sumWindow += data[j]
	}
	out = append(out, float64(sumWindow)/float64(window))

	for i := 0; i < len(data)-window; i++ {
		sumWindow = sumWindow - data[i] + data[i+window]
		out = append(out, float64(sumWindow)/float64(window))
	}

	var outStr []string
	for _, n := range out {
		outStr = append(outStr, strconv.FormatFloat(n, 'f', -1, 64))
	}

	outData := []byte(strings.Join(outStr, " "))
	err = ioutil.WriteFile("output.txt", outData, 0644)
	check(err)
}

func check(e error) {
	if e != nil {
		panic(e)
	}
}
