#Reading a file then printing its contents

while True:
    try:
        filename = input('Please enter a file name: ')
        fhand = open(filename, 'r')
        break
    except:
        print('Error, file does not exist')
        continue

for line in fhand:
    line = line.rstrip()
    print(line.upper())
