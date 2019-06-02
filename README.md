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
  _STRING_ should be in format of `AC1, AB3` 
  ### examples : 
      "--graph="AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7""

  ## --path=_STRING_
  _STRING_ in format of `A-C`, each node seperated by '-'
  ### examples: 
      "--path="A-C""

  ## --type=_STRING_
  _STRING_ must contain either <b>totalDistance</b>, <b>shortestPath</b> or <b>numberOfTrips</b>, <b>routesWithDistance</b>.
  <b>routesWithDistance</b> and <b>numberOfTrips</b> _must_ be followed by either <b>'='</b>,<b>'<='</b>, or <b>'<',</b> and a <b>number</b>
  ### examples : 
    "--type=numberOfTrips=4", "--type=routesWithDistance<=3", "--type=shortestPath"
