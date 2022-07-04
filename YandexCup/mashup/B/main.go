package main

import (
	"fmt"
	"os"
	"strings"
)

type Checkers struct {
	W           int
	H           int
	CountWhites int
	CountBlacks int
	WhiteCoords [][]int
	BlackCoords [][]int
	Field       [][]int
	WhiteMoves  bool
}

func (checkers Checkers) TestInBounds(x int, y int) bool {
	return x < checkers.H &&
		y < checkers.W &&
		x >= 0 &&
		y >= 0
}

func (checkers Checkers) CheckAbilityToKill(whiteMoves bool) bool {
	var movablePieces [][]int
	var myColor int
	if whiteMoves {
		movablePieces = checkers.WhiteCoords
		myColor = 1
	} else {
		movablePieces = checkers.BlackCoords
		myColor = -1
	}
	enemyColor := myColor * -1

	for _, coordsXY := range movablePieces {
		//fmt.Printf("%d %d\n", coordsXY[0], coordsXY[1])
		x := coordsXY[0]
		y := coordsXY[1]
		//myColor = checkers.Field[x][y]
		//fmt.Println(myColor)

		for _, step := range []int{-1, 1} {
			//fmt.Printf("testing step %d: %d %d\n", step, x+step, y+step)

			if checkers.TestInBounds(x+step, y+step) &&
				checkers.Field[x+step][y+step] == enemyColor {
				step = step * 2
				if checkers.TestInBounds(x+step, y+step) &&
					checkers.Field[x+step][y+step] == 0 {
					//fmt.Printf("YES.diag1: %d %d\n", x+1, y+1)
					return true
				}
			}

			if checkers.TestInBounds(x-step, y+step) &&
				checkers.Field[x-step][y+step] == enemyColor {
				step = step * 2
				if checkers.TestInBounds(x-step, y+step) &&
					checkers.Field[x-step][y+step] == 0 {
					//fmt.Printf("YES.diag2: %d %d\n", x+1, y+1)
					return true
				}
			}
		}
	}

	return false
}

func (checkers Checkers) PrintBoard() {
	for i := 0; i < checkers.H; i++ {
		for j := 0; j < checkers.W; j++ {

			if checkers.Field[i][j] == 1 {
				fmt.Print("W")
			} else if checkers.Field[i][j] == -1 {
				fmt.Print("b")
			} else {
				if (j%2 == 0 && i%2 == 0) || (i%2 != 0 && j%2 != 0) {
					fmt.Print(".")
				} else {
					fmt.Print("_")
				}
			}

		}
		fmt.Println("")
	}
}

func main() {
	data, err := os.ReadFile("input.txt")
	if err != nil {
		panic(err)
	}

	input := strings.Split(string(data), "\n")
	//for _, line := range input {
	//	fmt.Println(line)
	//}

	var checkers Checkers
	_, _ = fmt.Sscanf(input[0], "%d %d", &checkers.W, &checkers.H)

	checkers.Field = make([][]int, checkers.H)
	for i := 0; i < checkers.H; i++ {
		checkers.Field[i] = make([]int, checkers.W)
	}

	_, _ = fmt.Sscanf(input[1], "%d", &checkers.CountWhites)
	checkers.WhiteCoords = make([][]int, checkers.CountWhites)
	for i := 0; i < checkers.CountWhites; i++ {
		var x, y int
		_, _ = fmt.Sscanf(input[2+i], "%d %d", &x, &y)
		x = x - 1 // base1 -> base0
		y = y - 1
		//fmt.Printf("%d %d\n", x, y)
		checkers.WhiteCoords[i] = []int{x, y}
		checkers.Field[x][y] = 1
	}

	_, _ = fmt.Sscanf(input[2+checkers.CountWhites], "%d", &checkers.CountBlacks)
	checkers.BlackCoords = make([][]int, checkers.CountBlacks)
	for i := 0; i < checkers.CountBlacks; i++ {
		var x, y int
		_, _ = fmt.Sscanf(input[3+checkers.CountWhites+i], "%d %d", &x, &y)
		x = x - 1 // base1 -> base0
		y = y - 1
		//fmt.Printf("%d %d\n", x, y)
		checkers.BlackCoords[i] = []int{x, y}
		checkers.Field[x][y] = -1
	}

	//fmt.Println(checkers.CountWhites)
	//fmt.Println(checkers.CountBlacks)
	if "white" == input[3+checkers.CountWhites+checkers.CountBlacks] {
		checkers.WhiteMoves = true
	}

	//checkers.PrintBoard()

	result := checkers.CheckAbilityToKill(checkers.WhiteMoves)
	if result {
		output("Yes")
	} else {
		output("No")
	}
}

func output(s string) {
	data := []byte(s)
	err := os.WriteFile("output.txt", data, 0644)
	if err != nil {
		panic(err)
	}
}
