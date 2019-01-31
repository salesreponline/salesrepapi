CREATE CONSTRAINT ON (city:City) ASSERT city.name IS UNIQUE;

CREATE (n:City{name:"Mumbai", country:"India"}) RETURN n;

CREATE (n:City{name:"New York", country:"United States of America"}) RETURN n;
CREATE (n:City{name:"Chicago", country:"United States of America"}) RETURN n;
CREATE (n:City{name:"Las Vegas", country:"United States of America"}) RETURN n;
CREATE (n:City{name:"Los Angeles", country:"United States of America"}) RETURN n;

CREATE (n:City{name:"Toronto", country:"Canada"}) RETURN n;

CREATE (n:City{name:"London", country:"United Kingdom"}) RETURN n;

CREATE (n:City{name:"Madrid", country:"Spain"}) RETURN n;

CREATE (n:City{name:"Paris", country:"France"}) RETURN n;

CREATE (n:City{name:"Athens", country:"Greece"}) RETURN n;

CREATE (n:City{name:"Rome", country:"Italy"}) RETURN n;

CREATE (n:City{name:"Istanbul", country:"Turkey"}) RETURN n;

CREATE (n:City{name:"Singapore", country:"Singapore"}) RETURN n;

CREATE (n:City{name:"Sydney", country:"Australia"}) RETURN n;

CREATE (n:City{name:"Melbourne", country:"Australia"}) RETURN n;



------------------------------*****************



CREATE CONSTRAINT ON (flight:Flight) ASSERT flight.code IS UNIQUE;


CREATE (flight:Flight {code:"AA9", carrier:"American Airlines", duration:314, source_airport_code:"JFK", departure:1300, destination_airport_code:"LAX", arrival:114})
WITH flight
MATCH (source:City {name:"New York"}), (destination:City {name:"Los Angeles"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"AA920", carrier:"American Airlines", duration:305, source_airport_code:"LAX", departure:505, destination_airport_code:"JFK", arrival:990})
WITH flight
MATCH (source:City {name:"Los Angeles"}), (destination:City {name:"New York"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"UA1507", carrier:"United", duration:300, source_airport_code:"JFK", departure:720, destination_airport_code:"LAX", arrival:900})
WITH flight
MATCH (source:City {name:"New York"}), (destination:City {name:"Los Angeles"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"UA1262", carrier:"United", duration:383, source_airport_code:"LAX", departure:1300, destination_airport_code:"JFK", arrival: 390})
WITH flight
MATCH (source:City {name:"Los Angeles"}), (destination:City {name:"New York"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"AA8203", carrier:"American Airlines", duration:96, source_airport_code:"YYZ", departure: 1130, destination_airport_code:"EWR", arrival: 1226})
WITH flight
MATCH (source:City {name:"Toronto"}), (destination:City {name:"New York"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"AA8227", carrier:"American Airlines", duration:95, source_airport_code:"EWR", departure: 1245, destination_airport_code:"YYZ", arrival:1340})
WITH flight
MATCH (source:City {name:"New York"}), (destination:City {name:"Toronto"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"AC702", carrier:"Air Canada", duration:96, source_airport_code:"YYZ", departure: 1135, destination_airport_code:"JFK", arrival:1231})
WITH flight
MATCH (source:City {name:"Toronto"}), (destination:City {name:"New York"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"AC701", carrier:"Air Canada", duration:95, source_airport_code:"JFK", departure:635, destination_airport_code:"YYZ", arrial: 745})
WITH flight
MATCH (source:City {name:"New York"}), (destination:City {name:"Toronto"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"DL5950", carrier:"Delta", duration:183, source_airport_code:"ORD", departure: 420, destination_airport_code:"JFK", arrival: 635})
WITH flight
MATCH (source:City {name:"Chicago"}), (destination:City {name:"New York"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"DL4304", carrier:"Delta", duration:93, source_airport_code:"JFK", departure: 1105, destination_airport_code:"ORD", arrival:655})
WITH flight
MATCH (source:City {name:"New York"}), (destination:City {name:"Chicago"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"UA612", carrier:"United", duration:125, source_airport_code:"ORD", departure:780, destination_airport_code:"LGA", arrival:965})
WITH flight
MATCH (source:City {name:"Chicago"}), (destination:City {name:"New York"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"UA124", carrier:"United", duration:150, source_airport_code:"LGA", departure:600, destination_airport_code:"ORD", arrival: 950})
WITH flight
MATCH (source:City {name:"New York"}), (destination:City {name:"Chicago"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"DL2180", carrier:"Delta", duration:270, source_airport_code:"LAS", departure: 645, destination_airport_code:"EWR", arrival:790})
WITH flight
MATCH (source:City {name:"Las Vegas"}), (destination:City {name:"New York"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"DL1423", carrier:"Delta", duration:340, source_airport_code:"EWR", departure:1132, destination_airport_code:"LAS", arrival: 655})
WITH flight
MATCH (source:City {name:"New York"}), (destination:City {name:"Las Vegas"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"UA1576", carrier:"United", duration:280, source_airport_code:"LAS", departure: 595, destination_airport_code:"EWR", arrival:1065})
WITH flight
MATCH (source:City {name:"Las Vegas"}), (destination:City {name:"New York"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"UA1182", carrier:"United", duration:270, source_airport_code:"EWR", departure:470, destination_airport_code:"LAS", arrival:985})
WITH flight
MATCH (source:City {name:"New York"}), (destination:City {name:"Las Vegas"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"AA6144", carrier:"American Airlines", duration:535, source_airport_code:"LHR", departure:1085, destination_airport_code:"JFK", arrival:1255})
WITH flight
MATCH (source:City {name:"London"}), (destination:City {name:"New York"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"AA6153", carrier:"American Airlines", duration:360, source_airport_code:"JFK", departure:1350,  destination_airport_code:"LHR", arrival:630})
WITH flight
MATCH (source:City {name:"New York"}), (destination:City {name:"London"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"VS9", carrier:"Virgin Atlantic", duration:535, source_airport_code:"LHR", departure:965, destination_airport_code:"JFK", arrival:1130})
WITH flight
MATCH (source:City {name:"London"}), (destination:City {name:"New York"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"VS8", carrier:"Virgin Atlantic", duration:360, source_airport_code:"JFK", departure:1140, destination_airport_code:"LHR", arrival:440})
WITH flight
MATCH (source:City {name:"New York"}), (destination:City {name:"London"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"DL1022", carrier:"Delta", duration:540, source_airport_code:"CDG", departure:500, destination_airport_code:"JFK", arrival:625})
WITH flight
MATCH (source:City {name:"Paris"}), (destination:City {name:"New York"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"AA6154", carrier:"Delta", duration:360, source_airport_code:"JFK", departure:1410, destination_airport_code:"CDG", arrival:755})
WITH flight
MATCH (source:City {name:"New York"}), (destination:City {name:"Paris"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"AF10", carrier:"Air France", duration:540, source_airport_code:"CDG", departure:1015, destination_airport_code:"JFK", arrival:1140})
WITH flight
MATCH (source:City {name:"Paris"}), (destination:City {name:"New York"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"AF9", carrier:"Air France", duration:360, source_airport_code:"JFK", departure:1410, destination_airport_code:"CDG", arrival:755})
WITH flight
MATCH (source:City {name:"New York"}), (destination:City {name:"Paris"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"AZ602", carrier:"Alitalia", duration:640, source_airport_code:"FCO", departure:580, destination_airport_code:"JFK", arrival:825})
WITH flight
MATCH (source:City {name:"Rome"}), (destination:City {name:"New York"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"AZ611", carrier:"Alitalia", duration:445, source_airport_code:"JFK", departure:1335, destination_airport_code:"FCO", arrival:760})
WITH flight
MATCH (source:City {name:"New York"}), (destination:City {name:"Rome"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"DL1023", carrier:"Delta", duration:640, source_airport_code:"FCO", departure:580, destination_airport_code:"JFK", arrival:805})
WITH flight
MATCH (source:City {name:"Rome"}), (destination:City {name:"New York"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"DL1040", carrier:"Delta", duration:360, source_airport_code:"JFK", departure:970, destination_airport_code:"FCO", arrival:405})
WITH flight
MATCH (source:City {name:"New York"}), (destination:City {name:"Rome"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"AI191", carrier:"Air India", duration:950, source_airport_code:"BOM", departure:90, destination_airport_code:"EWR", arrival:475})
WITH flight
MATCH (source:City {name:"Mumbai"}), (destination:City {name:"New York"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"AI140", carrier:"Air India", duration:890, source_airport_code:"EWR", departure:985, destination_airport_code:"BOM", arrival:1000})
WITH flight
MATCH (source:City {name:"New York"}), (destination:City {name:"Mumbai"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"UA49", carrier:"United", duration:950, source_airport_code:"BOM", departure:1400, destination_airport_code:"EWR", arrival:340})
WITH flight
MATCH (source:City {name:"Mumbai"}), (destination:City {name:"New York"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"UA48", carrier:"United", duration:880, source_airport_code:"EWR", departure:1225, destination_airport_code:"BOM", arrival: 1250})
WITH flight
MATCH (source:City {name:"New York"}), (destination:City {name:"Mumbai"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"AA1554", carrier:"American Airlines", duration:75, source_airport_code:"LAS", departure:1280,destination_airport_code:"LAX", arrival:1350})
WITH flight
MATCH (source:City{name:"Las Vegas"}), (destination:City{name:"Los Angeles"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);

CREATE (flight:Flight {code:"AA2303", carrier:"American Airlines", duration:80, source_airport_code:"LAX", departure:1355, destination_airport_code:"LAS", arrival:1430})
WITH flight
MATCH (source:City {name:"Los Angeles"}), (destination:City {name:"Las Vegas"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"DL1761", carrier:"Delta", duration:75, source_airport_code:"LAS", departure:1020, destination_airport_code:"LAX", arrival:1095})
WITH flight
MATCH (source:City {name:"Las Vegas"}), (destination:City {name:"Los Angeles"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);

CREATE (flight:Flight {code:"DL1762", carrier:"Delta", duration:60, source_airport_code:"LAX", departure:435, destination_airport_code:"LAS", arrival:495})
WITH flight
MATCH (source:City {name:"Los Angeles"}), (destination:City {name:"Las Vegas"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"AA7417", carrier:"American Airlines", duration:910, source_airport_code:"MEL", departure:1020,  destination_airport_code:"LAX", arrival:850})
WITH flight
MATCH (source:City {name:"Melbourne"}), (destination:City {name:"Los Angeles"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);

CREATE (flight:Flight {code:"AA7356", carrier:"American Airlines", duration:945, source_airport_code:"LAX", departure:1370, destination_airport_code:"MEL", arrival:515})
WITH flight
MATCH (source:City {name:"Los Angeles"}), (destination:City {name:"Melbourne"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"QF94", carrier:"Quantas", duration:910, source_airport_code:"MEL", departure:1020, destination_airport_code:"LAX", arrival:850})
WITH flight
MATCH (source:City {name:"Melbourne"}), (destination:City {name:"Los Angeles"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);

CREATE (flight:Flight {code:"QF95", carrier:"Quantas", duration:945, source_airport_code:"LAX", departure:1370, destination_airport_code:"MEL", arrival:515})
WITH flight
MATCH (source:City {name:"Los Angeles"}), (destination:City {name:"Melbourne"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"U25482", carrier:"Easy Jet", duration:140, source_airport_code:"MAD", departure:1300, destination_airport_code:"LGW", arrival:1380})
WITH flight
MATCH (source:City {name:"Madrid"}), (destination:City {name:"London"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);

CREATE (flight:Flight {code:"U25483", carrier:"Easy Jet", duration:145, source_airport_code:"LGW", departure:1150, destination_airport_code:"MAD", arrival:1355})
WITH flight
MATCH (source:City {name:"London"}), (destination:City {name:"Madrid"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"FR5997", carrier:"Ryanair", duration:150, source_airport_code:"MAD", departure:1075, destination_airport_code:"LGW", arrival:1165})
WITH flight
MATCH (source:City {name:"Madrid"}), (destination:City {name:"London"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);

CREATE (flight:Flight {code:"FR5996", carrier:"Ryanair", duration:155, source_airport_code:"LGW", departure:930, destination_airport_code:"MAD", arrival:1905})
WITH flight
MATCH (source:City {name:"London"}), (destination:City {name:"Madrid"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"AF1180", carrier:"Air France", duration:75, source_airport_code:"CDG", departure:1145, destination_airport_code:"LHR", arrival:1165})
WITH flight
MATCH (source:City {name:"Paris"}), (destination:City {name:"London"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);

CREATE (flight:Flight {code:"AF2309", carrier:"Air France", duration:70, source_airport_code:"LHR", departure:1070, destination_airport_code:"CDG", arrival:1200})
WITH flight
MATCH (source:City {name:"London"}), (destination:City {name:"Paris"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"U22442", carrier:"Easy Jet", duration:75, source_airport_code:"CDG", departure:1305, destination_airport_code:"LHR", arrival:1315})
WITH flight
MATCH (source:City {name:"Paris"}), (destination:City {name:"London"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);

CREATE (flight:Flight {code:"U22441", carrier:"Easy Jet", duration:70, source_airport_code:"LHR", departure:1130, destination_airport_code:"CDG", arrival:1265})
WITH flight
MATCH (source:City {name:"London"}), (destination:City {name:"Paris"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"TK1963", carrier:"Turkish Airlines", duration:185, source_airport_code:"SAW", departure:570, destination_airport_code:"LHR", arrival:695})
WITH flight
MATCH (source:City {name:"Istanbul"}), (destination:City {name:"London"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);

CREATE (flight:Flight {code:"TK1964", carrier:"Turkish Airlines", duration:290, source_airport_code:"LHR", departure:710, destination_airport_code:"SAW", arrival:1060})
WITH flight
MATCH (source:City {name:"London"}), (destination:City {name:"Istanbul"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"PC519", carrier:"Pegasus", duration:180, source_airport_code:"SAW", departure:1235, destination_airport_code:"LGW", arrival:1375})
WITH flight
MATCH (source:City {name:"Istanbul"}), (destination:City {name:"London"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);

CREATE (flight:Flight {code:"PC520", carrier:"Pegasus", duration:280, source_airport_code:"LGW", departure:1415, destination_airport_code:"SAW", arrival:315})
WITH flight
MATCH (source:City {name:"London"}), (destination:City {name:"Istanbul"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"U25088", carrier:"Easy Jet", duration:230, source_airport_code:"ATH", departure:1260, destination_airport_code:"LHR", arrival:1370})
WITH flight
MATCH (source:City {name:"Athens"}), (destination:City {name:"London"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);

CREATE (flight:Flight {code:"U25087", carrier:"Easy Jet", duration:220, source_airport_code:"LHR", departure:880, destination_airport_code:"ATH", arrival:1220})
WITH flight
MATCH (source:City {name:"London"}), (destination:City {name:"Athens"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"A3600", carrier:"Aegean", duration:240, source_airport_code:"ATH", departure:555, destination_airport_code:"LHR", arrival:715})
WITH flight
MATCH (source:City {name:"Athens"}), (destination:City {name:"London"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);

CREATE (flight:Flight {code:"A3603", carrier:"Aegean", duration:215, source_airport_code:"LHR", departure:995, destination_airport_code:"ATH", arrival:1330})
WITH flight
MATCH (source:City {name:"London"}), (destination:City {name:"Athens"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"9W118", carrier:"Jet", duration:570, source_airport_code:"BOM", departure:775, destination_airport_code:"LHR", arrival:1075})
WITH flight
MATCH (source:City {name:"Mumbai"}), (destination:City {name:"London"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);

CREATE (flight:Flight {code:"9W119", carrier:"Jet", duration:550, source_airport_code:"LHR", departure:1280, destination_airport_code:"BOM", arrival:660})
WITH flight
MATCH (source:City {name:"London"}), (destination:City {name:"Mumbai"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"BA198", carrier:"British Airways", duration:575, source_airport_code:"BOM", departure:785, destination_airport_code:"LHR", arrival:1090})
WITH flight
MATCH (source:City {name:"Mumbai"}), (destination:City {name:"London"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);

CREATE (flight:Flight {code:"BA176", carrier:"British Airways", duration:535, source_airport_code:"LHR", departure:625, destination_airport_code:"BOM", arrival:1430})
WITH flight
MATCH (source:City {name:"London"}), (destination:City {name:"Mumbai"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"AI342", carrier:"Air India", duration:315, source_airport_code:"BOM", departure:1, destination_airport_code:"SIN", arrival:465})
WITH flight
MATCH (source:City {name:"Mumbai"}), (destination:City {name:"Singapore"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);

CREATE (flight:Flight {code:"AI343", carrier:"Air India", duration:315, source_airport_code:"SIN", departure:1155, destination_airport_code:"BOM", arrival:1320})
WITH flight
MATCH (source:City {name:"Singapore"}), (destination:City {name:"Mumbai"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"9W12", carrier:"Jet", duration:340, source_airport_code:"BOM", departure:80, destination_airport_code:"SIN", arrival:570})
WITH flight
MATCH (source:City {name:"Mumbai"}), (destination:City {name:"Singapore"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);

CREATE (flight:Flight {code:"9W11", carrier:"Jet", duration:350, source_airport_code:"SIN", departure:625, destination_airport_code:"BOM", arrival:795})
WITH flight
MATCH (source:City {name:"Singapore"}), (destination:City {name:"Mumbai"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"AF1533", carrier:"Air France", duration:205, source_airport_code:"CDG", departure:585, destination_airport_code:"ATH", arrival:840})
WITH flight
MATCH (source:City {name:"Paris"}), (destination:City {name:"Athens"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);

CREATE (flight:Flight {code:"AF1534", carrier:"Air France", duration:200, source_airport_code:"ATH", departure:895, destination_airport_code:"CDG", arrival:1040})
WITH flight
MATCH (source:City {name:"Athens"}), (destination:City {name:"Paris"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"A3614", carrier:"Aegean", duration:205, source_airport_code:"CDG", departure: 1235, destination_airport_code:"ATH", arrival:115})
WITH flight
MATCH (source:City {name:"Paris"}), (destination:City {name:"Athens"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);

CREATE (flight:Flight {code:"A3615", carrier:"Aegean", duration:200, source_airport_code:"ATH", departure:1040, destination_airport_code:"CDG", arrival:1195})
WITH flight
MATCH (source:City {name:"Athens"}), (destination:City {name:"Paris"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"AF1404", carrier:"Air France", duration:125, source_airport_code:"CDG", departure:965, destination_airport_code:"FCO",arrival:1081})
WITH flight
MATCH (source:City {name:"Paris"}), (destination:City {name:"Rome"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);

CREATE (flight:Flight {code:"AF1003", carrier:"Air France", duration:130, source_airport_code:"FCO", departure:405, destination_airport_code:"CDG", arrival:535})
WITH flight
MATCH (source:City {name:"Rome"}), (destination:City {name:"Paris"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"U4240", carrier:"Easy Jet", duration:120, source_airport_code:"CDG", departure:1070, destination_airport_code:"FCO", arrival:1190})
WITH flight
MATCH (source:City {name:"Paris"}), (destination:City {name:"Rome"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);

CREATE (flight:Flight {code:"U4252", carrier:"Easy Jet", duration:120, source_airport_code:"FCO", departure:1225, destination_airport_code:"CDG", arrival:1345})
WITH flight
MATCH (source:City {name:"Rome"}), (destination:City {name:"Paris"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"TK1842", carrier:"Turkish Airlines", duration:80, source_airport_code:"IST", departure:420, destination_airport_code:"ATH", arrival:500})
WITH flight
MATCH (source:City {name:"Istanbul"}), (destination:City {name:"Athens"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);

CREATE (flight:Flight {code:"TK1841", carrier:"Turkish Airlines", duration:80, source_airport_code:"ATH", departure:1400,destination_airport_code:"IST", arrival:45})
WITH flight
MATCH (source:City {name:"Athens"}), (destination:City {name:"Istanbul"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"A3992", carrier:"Aegean", duration:80, source_airport_code:"IST", departure:830, destination_airport_code:"ATH", arrival:915})
WITH flight
MATCH (source:City {name:"Istanbul"}), (destination:City {name:"Athens"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);

CREATE (flight:Flight {code:"A3995", carrier:"Aegean", duration:80, source_airport_code:"ATH", departure:1280, destination_airport_code:"IST", arrival:1360})
WITH flight
MATCH (source:City {name:"Athens"}), (destination:City {name:"Istanbul"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"AZ720", carrier:"Alitalia", duration:120, source_airport_code:"FCO", departure:520, destination_airport_code:"ATH", arrival:700})
WITH flight
MATCH (source:City {name:"Rome"}), (destination:City {name:"Athens"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);

CREATE (flight:Flight {code:"AZ721", carrier:"Alitalia", duration:125, source_airport_code:"ATH", departure:1125, destination_airport_code:"FCO", arrival:1190})
WITH flight
MATCH (source:City {name:"Athens"}), (destination:City {name:"Rome"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"FR1199", carrier:"Ryanair", duration:115, source_airport_code:"CIA", departure:375, destination_airport_code:"ATH", arrival:550})
WITH flight
MATCH (source:City {name:"Rome"}), (destination:City {name:"Athens"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);

CREATE (flight:Flight {code:"FR1198", carrier:"Ryanair", duration:115, source_airport_code:"ATH", departure:590, destination_airport_code:"CIA", arrival:645})
WITH flight
MATCH (source:City {name:"Athens"}), (destination:City {name:"Rome"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"JQ08", carrier:"Jetstar", duration:530, source_airport_code:"MEL", departure:660, destination_airport_code:"SIN", arrival:1010})
WITH flight
MATCH (source:City {name:"Melbourne"}), (destination:City {name:"Singapore"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);

CREATE (flight:Flight {code:"JQ07", carrier:"Jetstar", duration:405, source_airport_code:"SIN", departure:1260, destination_airport_code:"MEL", arrival:405})
WITH flight
MATCH (source:City {name:"Singapore"}), (destination:City {name:"Melbourne"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"QF05", carrier:"Quantas", duration:560, source_airport_code:"SYD", departure:965, destination_airport_code:"SIN", arrival:1350})
WITH flight
MATCH (source:City {name:"Sydney"}), (destination:City {name:"Singapore"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);

CREATE (flight:Flight {code:"QF82", carrier:"Quantas", duration:415, source_airport_code:"SIN", departure:1320, destination_airport_code:"SYD", arrival:375})
WITH flight
MATCH (source:City {name:"Singapore"}), (destination:City {name:"Sydney"})
CREATE (source)-[:HAS_FLIGHT {}]->(flight)-[:FLYING_TO]->(destination);

CREATE (flight:Flight {code:"SQ252", carrier:"Singapore Air", duration:560, source_airport_code:"SYD", departure:685, destination_airport_code:"SIN", arrival:1185})
WITH flight
MATCH (source:City {name:"Sydney"}), (destination:City {name:"Singapore"})
CREATE (source)-[:HAS_FLIGHT {}]->(flight)-[:FLYING_TO]->(destination);

CREATE (flight:Flight {code:"SQ211", carrier:"Singapore Air", duration:400, source_airport_code:"SIN", departure:575, destination_airport_code:"SYD", arrival:1155})
WITH flight
MATCH (source:City {name:"Singapore"}), (destination:City {name:"Sydney"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);


CREATE (flight:Flight {code:"QF349", carrier:"Quantas", duration:95, source_airport_code:"SYD", departure:840, destination_airport_code:"MEL", arrival:935})
WITH flight
MATCH (source:City {name:"Sydney"}), (destination:City {name:"Melbourne"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);

CREATE (flight:Flight {code:"QF5419", carrier:"Quantas", duration:100, source_airport_code:"MEL", departure:555, destination_airport_code:"SYD", arrival:640})
WITH flight
MATCH (source:City {name:"Melbourne"}), (destination:City {name:"Sydney"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);

CREATE (flight:Flight {code:"JQ529", carrier:"Jetstar", duration:85, source_airport_code:"SYD", departure:1235, destination_airport_code:"MEL", arrival:1330})
WITH flight
MATCH (source:City {name:"Sydney"}), (destination:City {name:"Melbourne"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);

CREATE (flight:Flight {code:"JQ528", carrier:"Jetstar", duration:95, source_airport_code:"MEL", departure:1235, destination_airport_code:"SYD", arrival:1320})
WITH flight
MATCH (source:City {name:"Melbourne"}), (destination:City {name:"Sydney"})
CREATE (source)-[:HAS_FLIGHT]->(flight)-[:FLYING_TO]->(destination);
