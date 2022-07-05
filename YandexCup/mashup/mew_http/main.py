import requests
import sys


def req(keys: list) -> list:
    url = 'http://127.0.0.1:7777/'
    headers = {'X-Cat-Variable': ','.join(keys)}

    try:
        res = requests.request(method='MEW',
                               url=url,
                               headers=headers,
                               stream=True,
                               timeout=0.1)
        if res.status_code == 200:
            return res.headers['X-cat-value'].split(',')
        else:
            return []
    except requests.exceptions.ReadTimeout:
        pass
    return []

def main():
    # Read max 4 lines from STDIN
    keys = [line.replace('\n', '') for _,line in zip(range(4),sys.stdin)]
    # print(keys)

    key_map = dict.fromkeys(keys , '')

    last_values = []

    for i in range(0, 3):
        pair = keys[i:i+2]

        values = req(pair)

        # Too many requests or unknown keys
        if not len(values):
            exit(1)

        # Values are equal, map both keys
        if values[0] == values[1]:
            key_map[pair[0]] = values[0]
            key_map[pair[1]] = values[0]

        elif len(last_values):
            # List intersection
            common_value = set(values).intersection(last_values).pop()
            key_map[pair[0]] = common_value

        last_values = values

    print(key_map)



main()
