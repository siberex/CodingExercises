package main

import (
	"fmt"
)

// go build -o main-stripped -ldflags="-s -w" main.go
// 1377984 bytes - go1.17.3 darwin/amd64
func main() {
	fmt.Println("OK")
}

func check(e error) {
	if e != nil {
		panic(e)
	}
}
