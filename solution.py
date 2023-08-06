# this is the solution in python 
import math

def two_crystal_balls(breaks):
    jmpAmount = math.floor(math.sqrt(len(breaks)))
    i = jmpAmount
    jmpAmount = 1
    breaks = len(breaks)   # Replace this with your actual list of boolean values

    while i < len(breaks):
        if breaks[i]:
            break
        i -= jmpAmount

        j = 0

    while j < jmpAmount and i < len(breaks):
        if breaks[i]:
            return i
        j += 1
        i += 1
    return -1
