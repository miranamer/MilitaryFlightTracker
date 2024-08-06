planeTable = document.getElementById('planesTable')

res = {}

for(i = 0; i < planeTable.children[1].children.length; i++){
    countryOfPlaneString = planeTable.children[1].children[i].children[1].innerHTML

    titleRegex = /title="([^"]*)"/;

    // Execute the regex on the string
    match = titleRegex.exec(countryOfPlaneString);

    // Extract the title value
    countryOfPlane = match ? match[1] : null;

    if(!(countryOfPlane in res)){
        res[countryOfPlane] = [];
    }

    lat = planeTable.children[1].children[i].children[6].innerHTML
    long = planeTable.children[1].children[i].children[7].innerHTML

    res[countryOfPlane].push([lat, long]);
    
    //console.log(countryOfPlane, lat, long, res);
}

console.log(res);