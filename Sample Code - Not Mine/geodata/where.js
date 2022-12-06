myData = [
[50.06688579999999,19.9136192, 'aleja Adama Mickiewicza 30, 30-059 Kraków, Poland'],
[52.2394019,21.0150792, 'Krakowskie Przedmieście 5, 00-068 Warszawa, Poland'],
[30.0185741,31.5013996, 'Plot 15 Admin building (South tower) 90 Axis, Beside FUE, in frond of AUC قسم أول القاهرة الجديدة، محافظة القاهرة‬ 4728120،، New Cairo 1, Cairo Governorate 4728120, Egypt'],
[33.4242399,-111.9280527, 'Tempe, AZ 85281, USA'],
[38.0399391,23.8030901, 'Monumental Plaza, Building C, 1st Floor, Leof. Kifisias 44, Marousi 151 25, Greece'],
[28.3588163,75.58802039999999, 'Vidya Vihar, Pilani, Rajasthan 333031, India'],
[6.8920758,3.7181452, '121103, Ilishan-Remo, Nigeria'],
[25.2677203,82.99125819999999, 'Ajagara, Varanasi, Uttar Pradesh 221005, India'],
[12.9504048,77.5020617, 'Mysore Rd, Jnana Bharathi, Bengaluru, Karnataka 560056, India'],
[31.5500848,-97.11354, '1311 S 5th St, Waco, TX 76706, USA'],
[39.9619537,116.3662615, '19 Xin Wai Da Jie, Beitaipingzhuang, Hai Dian Qu, Bei Jing Shi, China, 100875'],
[53.8930049,27.545623, 'prasp. Niezaliežnasci 4, Minsk, Belarus'],
[44.8184518,20.4575913, 'Studentski trg 1, Beograd, Serbia'],
[42.5030333,-89.0309048, '700 College St, Beloit, WI 53511, USA'],
[53.8930049,27.545623, 'prasp. Niezaliežnasci 4, Minsk, Belarus'],
[31.261426,34.7995546, 'David Ben Gurion Blvd 1, Beer Sheva, Israel'],
[10.6779085,78.74454879999999, 'Palkalaiperur, Tiruchirappalli, Tamil Nadu 620024, India'],
[42.3504997,-71.1053991, 'Boston, MA 02215, USA'],
[35.3050053,-120.6624942, 'San Luis Obispo, CA 93407, USA'],
[34.1813584,-117.3231875, '5500 University Pkwy, San Bernardino, CA 92407, USA'],
[51.5210416,-0.1746649, '25 Paddington Grn, London W2 1NB, UK'],
[40.8075355,-73.9625727, 'New York, NY 10027, USA'],
[52.0740377,-0.6282057, 'College Rd, Cranfield, Wharley End, Bedford MK43 0AL, UK'],
[50.1030364,14.3912841, '166 36 Prague 6, Czechia'],
[43.7044406,-72.2886934, 'Hanover, NH 03755, USA'],
[37.3192806,-122.0447919, '21250 Stevens Creek Blvd, Cupertino, CA 95014, USA'],
[51.3769424,7.4946354, 'Universitätsstraße 11, 58097 Hagen, Germany'],
[48.4331922,35.0427966, 'Haharina Ave, 72, Dnipro, Dnipropetrovska oblast, Ukraine, 49000'],
[38.430691,27.13692, 'No: 144 35210, Alsancak, Cumhuriyet Blv, 35220 Konak/İzmir, Turkey'],
[39.9566127,-75.18994409999999, '3141 Chestnut St, Philadelphia, PA 19104, USA'],
[30.2849185,-97.7340567, 'Austin, TX 78712, USA'],
[36.0014258,-78.9382286, 'Durham, NC 27708, USA'],
[45.7864448,4.7641329, '23 Av. Guy de Collongue, 69130 Écully, France'],
[48.709445,2.1661629, 'CentraleSupélec, 3 Rue Joliot Curie, 91190 Gif-sur-Yvette, France'],
[36.1028244,-79.5023649, '100 Campus Dr, Elon, NC 27244, USA'],
[54.9134537,9.7780195, 'Alsion 4, 6400 Sønderborg, Denmark'],
[-2.1478802,-79.9645694, 'Vía Perimetral 5, Guayaquil, Ecuador'],
[51.24683899999999,6.7916647, 'Münsterstraße 156, 40476 Düsseldorf, Germany'],
[47.7233835,13.0871253, 'Urstein S 1, 5412 Salzburg, Austria'],
[-23.5557714,-46.6395571, 'São Paulo, State of São Paulo, Brazil'],
[45.2461012,19.8516968, 'Trg Dositeja Obradovića 6, Novi Sad 106314, Serbia'],
[40.7529167,-73.4266988, '2350 NY-110, Farmingdale, NY 11735, USA'],
[-19.870682,-43.9677359, 'Av. Pres. Antônio Carlos, 6627 - Pampulha, Belo Horizonte - MG, 31270-901, Brazil'],
[26.3749876,-80.10106329999999, '777 Glades Rd, Boca Raton, FL 33431, USA'],
[42.7789743,-72.05553929999999, '40 University Dr, Rindge, NH 03461, USA'],
[26.1540389,91.66296679999999, 'Gopinath Bordoloi Nagar, Jalukbari, Guwahati, Assam 781014, India'],
[38.8314578,-77.31174709999999, '4400 University Dr, Fairfax, VA 22030, USA'],
[38.8977953,-77.0129087, '600 New Jersey Ave NW, Washington, DC 20001, USA'],
[33.753068,-84.38528190000001, 'Atlanta, GA 30302, USA'],
[42.9097484,-85.7630885, 'Grandville, MI, USA'],
[50.87485419999999,4.7077677, 'Andreas Vesaliusstraat 13, 3000 Leuven, Belgium'],
[21.0070253,105.843136, '1 Đại Cồ Việt, Bách Khoa, Hai Bà Trưng, Hà Nội, Vietnam'],
[31.7945578,35.2414009, 'Jerusalem'],
[42.3242969,-83.2376024, '5101 Evergreen Rd, Dearborn, MI 48128, USA'],
[17.4448649,78.34981379999999, 'Professor CR Rao Rd, Gachibowli, Hyderabad, Telangana 500032, India'],
[26.5123388,80.2329, 'Kalyanpur, Kanpur, Uttar Pradesh 208016, India'],
[58.595272,25.013607, 'Estonia'],
[39.1784384,-86.5133166, '107 S Indiana Ave, Bloomington, IN 47405, USA'],
[45.4377574,12.3223297, 'Santa Croce, 191, 30135 Venezia VE, Italy'],
[41.8348731,-87.6270059, '10 W 35th St, Chicago, IL 60616, USA'],
[41.5042613,-88.17752689999999, 'Jr College, Joliet, IL 60431, USA'],
[12.9915639,80.2336857, 'Indian Institute Of Technology, Chennai, Tamil Nadu, India'],
[22.3149274,87.31053109999999, 'Kharagpur, West Bengal 721302, India'],
[23.8142953,86.44118069999999, 'Police Line Road, Main Campus IIT (ISM, near Rani Bandh, IIT (ISM, Hirapur, Sardar Patel Nagar, Dhanbad, Jharkhand 826004, India'],
[39.1784384,-86.5133166, '107 S Indiana Ave, Bloomington, IN 47405, USA'],
[39.1784384,-86.5133166, '107 S Indiana Ave, Bloomington, IN 47405, USA'],
[18.4880037,-69.96249499999999, 'Av. de los Próceres 49, Santo Domingo 10602, Dominican Republic'],
[17.4448649,78.34981379999999, 'Professor CR Rao Rd, Gachibowli, Hyderabad, Telangana 500032, India'],
[52.2766643,104.2777445, 'Ulitsa Karla Marksa, 1, Irkutsk, Irkutskaya oblast, Russia, 664003'],
[22.4988822,88.3714123, '188, Raja Subodh Chandra Mallick Rd, Jadavpur, Kolkata, West Bengal 700032, India'],
[17.4932682,78.3913929, 'F9VR+8H2, Ashok Nagar, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500085, India'],
[28.5398035,77.1664047, 'New Mehrauli Road, JNU Ring Rd, New Delhi, Delhi 110067, India'],
[32.4950392,35.9912257, '3030, الرمثا، Jordan'],
[39.1974437,-96.5847249, 'Manhattan, KS 66506, USA'],
[42.290035,-85.598145, '1200 Academy St, Kalamazoo, MI 49006, USA'],
[54.898991,23.912825, 'K. Donelaičio g. 73, Kaunas 44249, Lithuania'],
[54.898991,23.912825, 'K. Donelaičio g. 73, Kaunas 44249, Lithuania'],
[55.790447,49.1214348, 'ulitsa Kremlevskaya, 18, Kazan, Respublika Tatarstan, Russia, 420008'],
[41.1497945,-81.34331590000001, '800 E Summit St, Kent, OH 44240, USA'],
[49.9953019,36.2412463, 'Marshala Bazhanova St, 17, Kharkiv, Kharkivska oblast, Ukraine, 61002'],
[13.6512522,100.4964428, '126 Thanon Pracha Uthit, Khwaeng Bang Mot, Khet Thung Khru, Krung Thep Maha Nakhon 10140, Thailand'],
[53.2871307,69.40444939999999, 'Kokshetau 020000, Kazakhstan'],
[50.4488974,30.456977, 'Peremohy Ave, 37, Kyiv, Ukraine, 03056'],
[50.4488974,30.456977, 'Peremohy Ave, 37, Kyiv, Ukraine, 03056'],
[50.4501,30.5234, 'Kyiv, Ukraine, 02000'],
[46.4672485,-80.9757296, '935 Ramsey Lake Rd, Sudbury, ON P3E 2C6, Canada'],
[51.7537146,19.4517176, 'Stefana Żeromskiego 116, 90-924 Łódź, Poland'],
[49.839683,24.029717, 'Lviv, Lviv Oblast, Ukraine, 79000'],
[42.701848,-84.4821719, 'Michigan, USA'],
[13.0660293,80.28317190000001, 'Navalar Nagar, Chepauk, Triplicane, Chennai, Tamil Nadu 600005, India'],
[53.42119599999999,58.98193999999999, 'Lenin Ave, 38, Magnitogorsk, Chelyabinskaya oblast, Russia, 455000'],
[34.3129573,48.8285422, 'Hamadan Province, Malayer, جاده سلامت، 8R7H+5CM, Iran'],
[39.4164811,-81.4498947, '215 5th St, Marietta, OH 45750, USA'],
[44.8199188,20.4587075, 'Studentski trg 16, Beograd 105104, Serbia'],
[42.701848,-84.4821719, 'Michigan, USA'],
[39.88983820000001,32.780086, 'Üniversiteler, Dumlupınar Blv. 1/6 D:133, 06800 Çankaya/Ankara, Turkey']
];
