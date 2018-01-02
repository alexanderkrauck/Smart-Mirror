cd HTML;
python -m SimpleHTTPServer 8000 &
sleep 1;

if [ "$#" = "0" ]
then
chromium-browser --noerrdialogs --kiosk http://localhost:8000/index.html;
elif [ "$1" = "-u" ]
then
google-chrome --noerrdialogs --kiosk http://localhost:8000/index.html;
elif [ "$1" = "-t" ]
then
google-chrome http://localhost:8000/index.html;
elif [ "$1" = "-tn" ]
then
chromium-browser http://localhost:8000/index.html;
fi
