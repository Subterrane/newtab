#!/bin/bash
cwd="$(cd "$(dirname "$0")"; pwd)"
echo "const output=\`" > $cwd/output.js
/usr/local/bin/docker service ls --format "table {{.Name}}\t{{.Replicas}}" >> $cwd/output.js
echo "\`;" >> $cwd/output.js
echo "document.getElementById(\"terminal\").innerText = output.trim();" >> $cwd/output.js
