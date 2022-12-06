#The exercise at the end of course 2 that you were being prepped for throughout the first two courses

wordcounts = dict()

while True:
    try:
        #filename = input('Please enter a file name: ')
        filename = 'mbox-short.txt'
        fhand = open(filename, 'r')
        break
    except:
        print('Error, file does not exist')
        continue

for line in fhand:
    words = line.split()
    for word in words:
        wordcounts[word] = wordcounts.get(word, 0) + 1  #Remember this line, you'll likely have to reference it often

#bigword = None
#bigcount = None
#wordlist = []
#loopiteration = 0
i = 0

#Shortcut solving the problem using one line!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

sortedbyvalue = sorted( ([v,k] for k,v in wordcounts.items()), reverse=True) #Creates a list of tuples in value, key order
for v,k in sortedbyvalue[:22]:                                               #Then sorts it from high to low
    print(loopiteration, k,v)
    i = i + 1


#######################################Creating a list of tuples in value, key order##############
#for word,count in wordcounts.items():
#    wordlist.append( (count, word) )
#wordlist = sorted(wordlist, reverse=True) #######Sorting the list

#How the professor solved it
#for value, key in wordlist[:16]:
#    print(key, value)

#How I solved the problem (before seeing how professor solved it)
#for i in range(11):
#    print(wordlist[i])
