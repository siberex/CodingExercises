

```bash
# Start reference server with Python: 
python3 server/server.py -i input.txt -a answer.txt

# or with Java:
java -cp "$PWD/server" Server -i input.txt -a answer.txt

# Pass all header keys at once:
# Note response headers are sorted by value alphabetically
curl -K <(sed -r 's/^(.*)$/-H "X-Cat-Variable: \1"/' input.txt) -X MEW -I http://127.0.0.1:7777/
```