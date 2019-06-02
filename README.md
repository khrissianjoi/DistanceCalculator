## NAME

  Distance Calculator 

## SYNOPSIS 

  node distancecalculator.js --graph=_GRAPH_ --path=_PATH_ --type=_TYPE_ 

## DESCRIPTION

  Distance Calculator accepts a graph where each node is a location and an edge 
  represents the path between two locations. The weight of each edge is the distance
  between the two location. 

# SYNTAX

  ### examples : 
    "node distancecalculator.js --graph="AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7" --path=A-C --type="numberOfTrips=4", 
    "node distancecalculator.js --graph="xy9, zw4, wx3, wy1" --path=B-B --type="totalDistance"

  ## --graph=_STRING_
  _STRING_ should be in format of `AC1, AB3`. 
  Where A and C are locations and the number 1 is the distance from A to C. 
  A and B are locations and the number 3 is the distance from A to B.
  ### examples : 
      "--graph="AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7""

  ## --path=_STRING_
  _STRING_ in format of `A-C`, or `A-B-C` each node/location seperated by '-' (n number of nodes/locations can be entered).
  The _STRING_ should represent the route that the user wants to calculate.
  Depending on the type (information below) the user inputs, either the totalDistance, shortestPath, numberOfTrips, routeWithDistance from:
  - location A to C (first example) will be calculated.
  - location A to B to C (first example) will be calculated.
  
  ### examples: 
      "--path="A-C""

  ## --type=_STRING_
  _STRING_ must contain either <b>totalDistance</b>, <b>shortestPath</b> or <b>numberOfTrips</b>, <b>routesWithDistance</b>.
  <b>routesWithDistance</b> and <b>numberOfTrips</b> _must_ be followed by either <b>'='</b>,<b>'<='</b>, or <b>'<',</b> and a <b>number</b>
  <b>totalDistance</b> : this calculates the total distance of the route/path specified in <b>--path=_STRING_</b>
  <b>numberofTrips</b> : this must be used with either of these inequality symbols '=','<=' or '<' followed by a number. This calculates the number of trips taken to get from the route/path specified in <b>--path=_STRING_</b> in terms of the number specfied after that inequality symbol.
  <b>shortestPath</b> : this calculates the shortest path from the route/path specified in <b>--path=_STRING_</b>.
  <b>routesWithDistance</b> : this must be used with either of these inequality symbols '=','<=' or '<' followed by a number. This calculates the number of routes taken to get from the route/path specified in <b>--path=_STRING_</b> depending on the distance specified.
  ### examples : 
    "--type=numberOfTrips=4", "--type=routesWithDistance<=3", "--type=shortestPath"
