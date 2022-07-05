import requests


def main():
    url = 'http://127.0.0.1:7777/'

    headers = {'X-Cat-Variable': 'Human,Window'}

    try:
        res = requests.request(method='MEW',
                               url=url,
                               headers=headers,
                               stream=True,
                               timeout=0.1)

        if res.status_code == 200:
            print(res.headers['X-cat-value'])
        else:
            print(res.status_code)

    except requests.exceptions.ReadTimeout:
        pass


    print("OK")


main()
