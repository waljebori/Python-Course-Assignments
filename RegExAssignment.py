import re

def getfilehandle():
    while True:
        #filename = input('Please enter the name of the file: ')
        filename = 'regexsum.txt'
        try:
            filehandle = open(filename, 'r')
            break
        except:
            print('Error, file does not exist. Please enter a file name')
            continue
    return filehandle         #Function to get the file name from the user, verify it opens, then pass the handle to user
filehandle = getfilehandle()

#Commented out lines are another method of getting the answers, but without storing the data in a list
#like the method that is not commented out


bignumberlist = []
#total = 0
#numnumbers = 0

for line in filehandle:
    templist = []
    numbers = re.findall('[0-9]+', line) #find an integer 0-9 repeating itself one or more times
    #print(numbers)
    if len(numbers) > 0:
        #try:
        templist = [int(number) for number in numbers]
            #numnumbers += len(templist)
            #print (templist)
            #total += sum(templist)
        count = 0
        while len(templist) > count:
            bignumberlist.append(templist[count])
            count += 1
#        except:
#            continue

#total = sum(bignumberlist)
#print('Total is:', total, 'with', numnumbers, 'Numbers in the list')

print(sum(bignumberlist), len(bignumberlist))


#Tested and verified one line method to print the sum of all the numbers
#print( sum( [ int(number) for number in re.findall('[0-9]+',open('regexsum.txt').read()) ] ) )
