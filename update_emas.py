import requests
from bs4 import BeautifulSoup
import json
from datetime import datetime

def get_gold_price():
    url = "https://harga-emas.org/" 
    headers = {'User-Agent': 'Mozilla/5.0'}
    
    try:
        response = requests.get(url, headers=headers)
        soup = BeautifulSoup(response.text, 'html.parser')
        table = soup.find("table", {"class": "table-logam-mulia"})
        rows = table.find_all("tr")
        
        for row in rows:
            cols = row.find_all("td")
            if len(cols) > 0 and "Antam" in cols[0].text:
                harga_jual = int(cols[1].text.replace("Rp", "").replace(".", "").strip())
                harga_beli = int(cols[2].text.replace("Rp", "").replace(".", "").strip())
                
                data = {
                    "last_updated": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
                    "item": "Antam 24K",
                    "berat": "1 Gram",
                    "harga_jual": harga_jual,
                    "harga_buyback": harga_beli,
                    "spread": harga_jual - harga_beli
                }
                return data
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    data = get_gold_price()
    with open('harga_emas.json', 'w') as f:
        json.dump(data, f, indent=4)
