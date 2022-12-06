maximum = None
minimum = None

while True :
#Receiving and validating user input
    userinput = input('Please enter a number: ')
    if userinput == 'done' or userinput == 'Done' :
        break
    try:
        userinput = float(userinput)
    except:
        print('Invalid input, please enter a number')
        continue

#find maximum
    if maximum is None:
        maximum = userinput
    elif maximum < userinput:
        maximum = userinput

#find minimum
    if minimum is None:
        minimum = userinput
    elif minimum > userinput:
        minimum = userinput

print(maximum, minimum)


    #total = total + userinput
    #count = count+1

#print(total, count, total/count)
