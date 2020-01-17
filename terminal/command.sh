#!/bin/bash
export PATH=$PATH:/usr/local/bin
cwd="$(cd "$(dirname "$0")"; pwd)"
echo "const output=\`" > $cwd/output.js
#docker service ls --format "table {{.Name}}\t{{.Replicas}}" >> $cwd/output.js
ls -al >> $cwd/output.js
echo "\`;document.getElementById(\"terminal\").innerText = output.trim();" >> $cwd/output.js
