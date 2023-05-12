from __future__ import print_function
from PIL import Image
from PIL import ImageFont
from PIL import ImageDraw
import numpy as np

string = "RAZE"

def char_to_pixels(text, path='arialbd.ttf', fontsize=14):
    font = ImageFont.truetype(path, fontsize) 
    w, h = font.getsize(text)  
    h *= 2
    image = Image.new('L', (w, h), 1)  
    draw = ImageDraw.Draw(image)
    draw.text((0, 0), text, font=font) 
    arr = np.asarray(image)
    arr = np.where(arr, 0, 1)
    arr = arr[(arr != 0).any(axis=1)]
    return arr

def display(arr):
    result = np.where(arr, '#', ' ')
    print('\n'.join([''.join(row) for row in result]))

binaryLetters = []
for c in string:
    arr = char_to_pixels(
        c,
        fontsize=7)
    binaryLetters.append(arr)
    print(arr.shape)
    display(arr)
    print()



# Combine the letters horizontally with a separator column of zeros
outputBinary = []
for row_num, row in enumerate(binaryLetters[0]):
    new_row = []
    for letter in binaryLetters:
        new_row += list(letter[row_num])
    outputBinary.append(new_row[:-1])

# Format the output with commas and brackets
# for row in outputBinary:
#     print('[{}]'.format(', '.join(str(pixel) for pixel in row)))

print(outputBinary[::-1])


