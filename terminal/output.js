const output=`
total 2536
drwxr-xr-x  12 will  staff     384 Jan 15 18:44 .
drwxr-xr-x  15 will  staff     480 Jan 14 20:29 ..
drwxr-xr-x  16 will  staff     512 Jan 15 18:44 .git
-rw-r--r--   1 will  staff     504 Jan 15 18:44 README.md
-rw-r--r--   1 will  staff     287 Jan 14 23:22 background.js
-rw-r--r--   1 will  staff  713173 Jan 15 18:44 example.png
-rw-r--r--   1 will  staff    1475 Jan 15 18:44 links.js
-rw-r--r--   1 will  staff  556428 Jan 14 23:30 safari.png
-rw-r--r--   1 will  staff    1604 Jan 15 18:44 style.css
-rw-r--r--   1 will  staff     833 Jan 15 18:44 tab.html
drwxr-xr-x   6 will  staff     192 Jan 15 18:44 terminal
-rw-r--r--   1 will  staff     921 Jan 15 18:44 time.js
`;
document.getElementById("terminal").innerText = output.trim();
