package algorithms

func MovingAverage(data []int, window int) []float64 {
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

	return out
}
