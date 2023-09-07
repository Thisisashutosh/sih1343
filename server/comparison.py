import sys
import pandas as pd

predicted_class = sys.argv[1]

# Load the Excel file into a DataFrame
df = pd.read_excel("./details.xlsx")

# Define the key to match
key_to_match = predicted_class

# Filter and print the matching row(s)
matching_row = df.loc[df["Image Name"] == key_to_match]

if not matching_row.empty:
    for index, row in matching_row.iterrows():
        # Iterate through the elements of the row and print them
        for column_name, value in row.items():
            print(f"{column_name}:\t{value}")
        print()
else:
    print("No matching data found.")