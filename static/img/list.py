import os

def get_file_names(folder_path):
    file_names = []
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            file_names.append(file)
    return file_names

folder_path= "C:/Users/dayan/Desktop/golang/zhaniya/midterms/midterm1/src/static/img"
file_list = get_file_names(folder_path)

# Save the list of file names to a text file
output_file = "file_names.txt"  # Name of the output text file

with open(output_file, "w") as f:
    for file_name in file_list:
        f.write(file_name + "\n")

print(f"File names saved to {output_file}.")
