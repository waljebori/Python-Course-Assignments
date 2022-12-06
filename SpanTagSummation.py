#The file is a table of names and comment counts
#ou are to find all the <span> tags in the file and pull out the numbers from the tag and sum the numbers



from urllib.request import urlopen
from bs4 import BeautifulSoup
import ssl
import re

# Ignore SSL certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

#url = input('Enter - ')
url = 'http://py4e-data.dr-chuck.net/comments_1639538.html'
html = urlopen(url, context=ctx).read()
soup = BeautifulSoup(html, "html.parser")

numberlist = [] #Empty list fror RegEx Method
# Retrieve all of the span tags
tags = soup('span')
for tag in tags:
    # Look at the parts of a tag
   #print('TAG:', tag)
   #print('URL:',tag.get('href', None))
   #print('Contents:',tag.contents[0])
   #print('Attrs:',tag.attrs)
   numberlist.append(int(tag.contents[0]))
print(sum(numberlist))


#Using Regular Expressions (just for practice)
   #number = re.findall('^<.+>([0-9]+)',str(tag))
   #number = re.findall('[0-9]+',str(tag))
   #numberlist.append(int(number[0]))
