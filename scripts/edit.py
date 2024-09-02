import os
import json
from typing import Any

# Base path for the schema directory
BASE_PATH = "schemas/"

def recursive_dict_traversal(nested_dict: dict[str, Any], current_path=''):
    for key, value in nested_dict.items():
        full_path = f"{current_path}.{key}" if current_path else key
        # if key == "type": raise Exception("penis")
        print(f"{full_path}: {value}")
        
        if isinstance(value, dict):
            if "type" in value.keys(): value["readonly"] = True
            recursive_dict_traversal(value, full_path)

def process_json_files(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".json"):
                file_path = os.path.join(root, file)
                print(f"Processing file: {file_path}")
                
                try:
                    with open(file_path, 'r+') as f:
                        # Load the JSON content
                        content = json.load(f)
                        print(f"\nProcessing file: {file_path}")
                        recursive_dict_traversal(content)
                        
                        # You can add more processing here if needed
                        print(f"Schema name: {content.get('title', 'Untitled')}")

                except json.JSONDecodeError:
                    print(f"Error parsing JSON in file: {file_path}")

if __name__ == "__main__":
    process_json_files(BASE_PATH)