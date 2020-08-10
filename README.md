# Terminal Sync README

This is simple extension that allows to synchronize active terminal with the directory of the active document.

It is very surprising, but it seems there is no extension that does just it. No new terminal, no code run, just simple `cd` to the directory of the active document.

It has been verified to work with `bash` and `zsh` on Linux (probably with other shell too) and with `Powershell` on Windows.

## Usage

Press `Shift+Ctrl+P` and select `Sync Terminal with Active Document`. The extension checks the location of the file in the active editor and sends the `cd` command to the active terminal.

![Demo](images/demo1.gif)

If you want, you can assign a keybinding of your choice to this command with `Preferences: Open Keyboard Shortcuts`.

<!-- ## Features

Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow. -->

## Extension Settings

This extension contributes the following setting:

* `terminalSync.sendCtrl+U`: send `ctrl+U`  keycode to clear the current line

<!-- ## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension. -->

## Release Notes

See the [changelog](CHANGELOG.md)
