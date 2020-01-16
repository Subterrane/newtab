# Terminal Output

[Run a script every 5 minutes](https://www.splinter.com.au/using-launchd-to-run-a-script-every-5-mins-on/)

## Install

Make the output file writeable for launchctl

```
chmod -R 666 output.js
```

Make the script executable for launchctl

```
chmod a+x command.sh
```

Copy plist to the LaunchDaemons folder

```
cp com.subterrane.newtab.terminal.plist /Library/LaunchDaemons
```

Load the job

```
launchctl load -w /Library/LaunchDaemons/com.subterrane.newtab.terminal.plist
```

## Disable

Unload the job

```
launchctl unload -w /Library/LaunchDaemons/com.subterrane.newtab.terminal.plist
```

Delete the plist

```
rm /Library/LaunchDaemons/com.subterrane.newtab.terminal.plist
```

## Debug

The plist specifies two files, err and out. Check there for script problems.

```
	<key>StandardErrorPath</key>
	<string>/tmp/com.subterrane.newtab.terminal.err</string>
	<key>StandardOutPath</key>
	<string>/tmp/com.subterrane.newtab.terminal.out</string>
```
