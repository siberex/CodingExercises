def out(str):
    f = open("output.txt", "w")
    f.write(str)
    f.close()


f = open("input.txt", "r")
rawInput = f.read()
f.close()

rawInput = rawInput.replace("one", "1").replace("zero", "0")

n1, n2 = rawInput.split("\n")

n1 = int(n1, 2)
n2 = int(n2, 2)

if n1 > n2:
    out(">")
elif n1 < n2:
    out("<")
else:
    out("=")
