package algorithms

func FormatFloatArray(input []float64) []string {
	var out []string
	for _, n := range input {
		out = append(out, strconv.FormatFloat(n, 'f', -1, 64))
	}
	return out
}
