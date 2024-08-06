from geopy.geocoders import Nominatim
from planeLocations import locMap

# Create a geolocator object
geolocator = Nominatim(user_agent="myApp")

for planeCountry in locMap:
    for coords in locMap[planeCountry]:
        # Define the coordinates
        latitude = float(coords[0])
        longitude = float(coords[1])

        # Get the location
        location = geolocator.reverse((latitude, longitude), exactly_one=True)

        # Extract the country
        if location:
            address = location.raw.get('address', {})
            country = address.get('country', 'Unknown')
            print(f"{planeCountry} -> {country}")
        else:
            print("Location not found.")

    