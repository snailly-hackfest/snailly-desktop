import os
import time

# dangerous website
dangerous_websites_file_path = os.path.join(
    os.path.dirname(__file__), "list_website.txt")
dangerous_websites_file = open(dangerous_websites_file_path, "r", encoding="utf8")
dangerous_websites = dangerous_websites_file.read()
dangerous_websites = dangerous_websites.split("\n")
dangerous_websites = [x.replace('http://', '').replace(
    'https://', '').replace('www.', '').replace('/', '') for x in dangerous_websites]
dangerous_websites_file.close()

# trust positif
trust_positif_file_path = os.path.join(
    os.path.dirname(__file__), "trust_positif.txt")
print(trust_positif_file_path)

trust_positif_file = open(trust_positif_file_path, "r", encoding="utf8")
trust_positif = trust_positif_file.read()
trust_positif = trust_positif.split("\n")
trust_positif = [x.replace('http://', '').replace(
    'https://', '').replace('www.', '').replace('/', '') for x in trust_positif]
trust_positif_file.close()

# join and remove duplicate
combined_list_websites = list(set(dangerous_websites + trust_positif))

httpRequest = "pornhub.com"

httpRequest = httpRequest.replace('http://', '').replace(
    'https://', '').replace('www.', '').split('/')[0]

start_time = time.time()
if httpRequest in combined_list_websites:
    print("berbahaya")
else:
    print("tidak berbahaya")

print("--- %s seconds ---" % (time.time() - start_time))