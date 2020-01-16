#!/bin/bash
cwd="$(cd "$(dirname "$0")"; pwd)"
echo "const output=\`" > $cwd/output.js
ls -al >> $cwd/output.js
echo "\`;" >> $cwd/output.js
echo "document.getElementById(\"terminal\").innerText = output.trim();" >> $cwd/output.js
