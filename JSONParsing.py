import json
import ssl
import urllib.request, urllib.parse, urllib.error

# Ignore SSL certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

#Opening the URL, then reading it into a handle
url = 'http://py4e-data.dr-chuck.net/comments_1639541.json'
urlhandle = urllib.request.urlopen(url, context=ctx)
data = urlhandle.read()

#using the loadstring JSON method. This returns a dictionary that is stored in info
info = json.loads(data)
# print('User count:', len(info))
# print(info)


#Looping through the list and summing up the numbers
sum = 0
numstudents = len(info["comments"])
for countindex in range(numstudents):
    sum+=info["comments"][countindex]["count"]

print(sum)
