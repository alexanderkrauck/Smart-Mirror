cd HTML;
python -m SimpleHTTPServer 8000 &
sleep 1;
google-chrome --kiosk http://localhost:8000/index.html
