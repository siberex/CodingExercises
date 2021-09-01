# https://leetcode.com/problems/count-and-say/
# This is basically a look-and-say sequence:
# https://oeis.org/A005150
# https://en.wikipedia.org/wiki/Look-and-say_sequence
import re

def lookandsay(limit, sequence = "1"):
    if limit > 1:
        return lookandsay(
            limit - 1,
            "".join(
                [
                    str( len(match.group()) ) + match.group()[0]
                        for matchNum, match
                        in enumerate(
                            re.finditer(r"(\w)\1*", str(sequence))
                        )
                ]
            )
        )
    else:
        return sequence
# lookandsay(3) --> 21
# Nicola Vanoni, Nov 29 2016

class Solution:
    def countAndSay(self, n: int) -> str:
        return lookandsay(n)
