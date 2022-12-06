#initial string
str = 'X-DSPAM-Confidence: 0.8475 '

numericstringposition = str.find(':')
#slicing out the part we want from the colon to the end
numericstring = str[numericstringposition+1:]
#stripping white space
numericstring = numericstring.strip()

number = float(numericstring)
number = number+1
print(number)
