from collections import defaultdict
from dataclasses import dataclass, field


def output(output_str):
    f_out = open("output.txt", "w")
    f_out.write(output_str)
    f_out.close()


@dataclass
class Checkers:
    """Checkers game board"""
    CountWhites: int = 0
    CountBlacks: int = 0
    WhiteCoords: list = field(default_factory=list)
    BlackCoords: list = field(default_factory=list)
    Field: list = field(default_factory=list)
    W: int = 8
    H: int = 8
    WhiteMoves: bool = False

    def __post_init__(self):
        self.Field = [defaultdict(list) for _ in range(self.W)]
        self.WhiteCoords = [defaultdict(list) for _ in range(self.CountWhites)]
        self.BlackCoords = [defaultdict(list) for _ in range(self.CountBlacks)]

    def test_bounds(self, x, y) -> bool:
        return 0 <= x < self.H and 0 <= y < self.W

    def is_able_to_capture(self) -> bool:
        movable_pieces = self.WhiteCoords if self.WhiteMoves else self.BlackCoords
        enemy_color: int = -1 if self.WhiteMoves else 1

        for coords in movable_pieces:
            x, y = coords

            for step in [-1, 1]:

                # Test if there is an enemy piece diagonally nearby
                if (self.test_bounds(x + step, y + step) and
                    self.Field[x + step][y + step] == enemy_color):

                    # Test if we could jump _over_ enemy piece in the same direction
                    step = step * 2
                    if (self.test_bounds(x + step, y + step) and
                        self.Field[x + step][y + step] == 0):
                        return True

                if (self.test_bounds(x - step, y + step) and
                    self.Field[x - step][y + step] == enemy_color):

                    step = step * 2
                    if (self.test_bounds(x - step, y + step) and
                        self.Field[x - step][y + step] == 0):
                        return True
        return False

    def print_board(self):
        for i in range(0, self.H):
            for j in range(0, self.W):
                if self.Field[i][j] == 1:
                    print("W", end='')
                elif self.Field[i][j] == -1:
                    print("b", end='')
                else:
                    if (j % 2 == 0 and i % 2 == 0) or (
                            i % 2 != 0 and j % 2 != 0):
                        print(".", end='')
                    else:
                        print("_", end='')
            print("")
        return


def main(input: list):

    w, h = map(int, input[0].split(" "))
    count_whites = int(input[1])
    count_blacks = int(input[2 + count_whites])
    white_moves = "white" == input[3 + count_whites + count_blacks]

    checkers = Checkers(W=w, H=h, CountWhites=count_whites, CountBlacks=count_blacks, WhiteMoves=white_moves)

    for i in range(0, checkers.H):
        checkers.Field[i] = [0] * checkers.W

    for i in range(0, checkers.CountWhites):
        x, y = map(int, input[2 + i].split(" "))
        # base1 -> base0
        x = x - 1
        y = y - 1
        checkers.WhiteCoords[i] = [x, y]
        checkers.Field[x][y] = 1

    for i in range(0, checkers.CountBlacks):
        x, y = map(int, input[3 + checkers.CountWhites + i].split(" "))
        # base1 -> base0
        x = x - 1
        y = y - 1
        checkers.BlackCoords[i] = [x, y]
        checkers.Field[x][y] = -1

    # checkers.print_board()
    if checkers.is_able_to_capture():
        output("Yes")
    else:
        output("No")


f = open("input.txt", "r")
rawInput = f.read().split("\n")
f.close()

main(rawInput)