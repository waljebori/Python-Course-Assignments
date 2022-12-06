
#n = int(input('Please enter a number: '))
n=63

binarylength = len(str(bin(n).lstrip("0b").rstrip("L")))



for i in range(1,n+1):
    vlength = len(str(bin(i).lstrip("0b").rstrip("L")))
    spaces1 = ' '*(binarylength-len(str(i)))
    spaces2 = ' '*(binarylength+3-len(str(oct(i))))
    spaces3 = ' '*(binarylength+3-len(str(hex(i))))
    spaces4 = ' '*( binarylength+3-len(str(bin(i))))
    #print('Test:',len(vspace1))
    print(spaces1+str(i)+spaces2+str(oct(i).lstrip("0o").rstrip("L"))+spaces3+str(hex(i).lstrip("0x").rstrip("L")) + spaces4 + str(bin(i).lstrip("0b").rstrip("L")))


#The right answer is below. Fuck this problem. Giant waste of time
#Learn when to cut and run, and NOT WASTE YOUR TIME!

#maxSpace = len(bin(N))-2

#for i in xrange(1,N+1):
#    print str(i).rjust(maxSpace), str(int(oct(i))).rjust(maxSpace), str(hex(i)[2:].upper()).rjust(maxSpace), str(bin(i)[2:]).rjust(maxSpace)
