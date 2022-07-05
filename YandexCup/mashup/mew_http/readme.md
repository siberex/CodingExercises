

```bash
# Start reference server with Python: 
python3 server/server.py -i input.txt -a answer.txt

# or with Java:
java -cp "$PWD/server" Server -i input.txt -a answer.txt
java -cp "$PWD/server" Server -i input2.txt -a answer2.txt

# Pass all header keys at once:
# Note response headers are sorted by value alphabetically
curl -K <(sed -r 's/^(.*)$/-H "X-Cat-Variable: \1"/' input.txt) -X MEW -I http://127.0.0.1:7777/
# Or:
curl -X MEW -H "X-Cat-Variable: Human,Window" -I http://127.0.0.1:7777/
curl -X MEW -H "X-Cat-Variable: Morning,Afternoon" -I http://127.0.0.1:7777/



# Solution:
python3 -m venv .env
. .env/bin/activate
pip install -r requirements.txt
python main.py
```