NAME
  Distance Calculator 

SYNOPSIS 
  node distancecalculator.js --graph=GRAPH --path=PATH --type=TYPE 

DESCRIPTION
  Distance Calculator accepts a graph where each node is a location and an edge 
  represents the path between two locations. The weight of each edge is the distance
  between the two location. 

SYNTAX

  examples : 
    "node distancecalculator.js --graph="AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7" --path=A-C --type="numberOfTrips=4", 
    "node distancecalculator.js --graph="xy9, zw4, wx3, wy1" --path=B-B --type="totalDistance"

  --graph=STRING
    STRING should be in format of `AC1, AB3` 
    example: --graph="AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7"

  --path=STRING
    STRING in format of `A-C`, each node seperated by '-'
    example: --path="A-C"

  --type=STRING
    STRING should contain either totalDistance, shortestPath or numberOfTrips, routesWithDistance. routesWithDistance and numberOfTrips must be followed by either '=','<=', or '<' and a number
    example: "--type=numberOfTrips=4", "--type=routesWithDistance<=3", "--type=shortestPath"