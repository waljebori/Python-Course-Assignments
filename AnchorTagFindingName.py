#he program will use urllib to read the HTML from the data files below, extract the href= vaues from the anchor tags,
#scan for a tag that is in a particular position relative to the first name in the list, follow that link and repeat

#Find the link at position 18 (the first name is 1). Follow that link.
#Repeat this process 7 times. The answer is the last name that you retrieve.

def OpenURLandFindNewOne(url):
    html = urllib.request.urlopen(url, context=ctx).read()
    soup = BeautifulSoup(html, 'html.parser')
    count = 0
    # Retrieve all of the anchor tags
    tags = soup('a')
    for tag in tags:
        count += 1
        if count == 18:
            newURL = str(tag.get('href', None))
            #print(tag.get('href', None))
            print(tag.contents[0])  #Prints the contents/what you actually see on the webpage when you view it
            break
    return newURL

import urllib.request, urllib.parse, urllib.error
from bs4 import BeautifulSoup
import ssl

# Ignore SSL certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

newURL = OpenURLandFindNewOne('http://py4e-data.dr-chuck.net/known_by_Karmen.html')

count = 0
while count<6:
    newURL = OpenURLandFindNewOne(newURL)
    count += 1
