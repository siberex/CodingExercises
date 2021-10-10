package algorithms

import (
	"io/ioutil"
	"strconv"
	"strings"
)

func main() {
	rawInput, err := ioutil.ReadFile("input.txt")
	check(err)
	input := string(rawInput)
	inputLines := strings.Split(input, "\n")

	var data []int
	dataMap := make(map[int]int)
	var target int

	for i, line := range inputLines {
		if i == 1 {
			// "1 2 3" → [1, 2, 3]
			srcData := strings.Split(line, " ")
			for index, numStr := range srcData {
				n, _ := strconv.Atoi(numStr)
				data = append(data, n)
				dataMap[n] = index
			}
		}
		if i == 2 {
			target, _ = strconv.Atoi(line)
		}
	}

	out := TwoSum(data, dataMap, target)

	outStr := "None"
	if out != nil {
		outStr = strconv.Itoa(out[0]) + " " + strconv.Itoa(out[1])
	}

	outData := []byte(outStr)
	err = ioutil.WriteFile("output.txt", outData, 0644)
	check(err)
}

func check(e error) {
	if e != nil {
		panic(e)
	}
}
