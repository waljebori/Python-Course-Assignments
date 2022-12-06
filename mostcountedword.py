#The exercise at the end of course 2 that you were being prepped for throughout the first two courses

wordcounts = dict()

#Getting and verifying file name
while True:
    try:
        filename = input('Please enter a file name: ')
        fhand = open(filename, 'r')
        break
    except:
        print('Error, file does not exist')
        continue

for line in fhand:
    words = line.split()
    for word in words:
        wordcounts[word] = wordcounts.get(word, 0) + 1  #Remember this line, you'll likely have to reference it often

bigword = None
bigcount = None

for word,count in wordcounts.items():
    if bigcount == None or bigcount<count:
        bigcount = count
        bigword = word

print(bigword, bigcount)
#print(wordcounts.items())
