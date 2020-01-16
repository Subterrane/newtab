const output=`
total 48
drwxr-xr-x   7 willmunslow  staff   224 Jan 16 10:57 .
drwxr-xr-x  14 willmunslow  staff   448 Jan 16 15:27 ..
-rw-r--r--@  1 willmunslow  staff  6148 Jan 15 16:54 .DS_Store
-rw-r--r--   1 willmunslow  staff   979 Jan 15 17:29 README.md
-rw-r--r--   1 willmunslow  staff   598 Jan 15 17:24 com.subterrane.newtab.terminal.plist
-rwxr-xr-x   1 willmunslow  staff   238 Jan 16 15:45 command.sh
-rw-r--r--   1 willmunslow  staff    15 Jan 16 15:45 output.js
`;document.getElementById("terminal").innerText = output.trim();
