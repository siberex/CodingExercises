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
            res_headers = res.headers['X-cat-value'].split(',')
            return list(map(str.strip, res_headers))
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
            # return item != common_value from the current values pair
            key_map[pair[1]] = next(filter(lambda v: v != common_value, values))

            # Second request, look behind and map the first key
            if i == 1:
                # return item != common_value from the last_values pair
                key_map[keys[0]] = next(
                    filter(lambda v: v != common_value, last_values)
                )

        last_values = values

    for k in keys:
        print(key_map[k])

main()
