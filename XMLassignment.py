#The program will prompt for a URL, read the XML data from that URL using urllib and then parse and extract
#the comment counts from the XML data, compute the sum of the numbers in the file.

import urllib.request, urllib.parse, urllib.error
import xml.etree.ElementTree as ET
import ssl

#url = input('Please enter a URL: ')
url = 'http://py4e-data.dr-chuck.net/comments_1639540.xml'


# Ignore SSL certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

print('Retrieving', url)
urlhandle = urllib.request.urlopen(url, context=ctx)

data = urlhandle.read()
print('Retrieved', len(data), 'characters')
#print(data.decode())
tree = ET.fromstring(data)

counts = tree.findall('.//count') #an XPath selector string to look through the entire tree of XML for any tag named 'count'
sumtotal = 0
for count in counts:
    sumtotal += int(count.text)

print(sumtotal)
