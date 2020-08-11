import * as vscode from "vscode";
import * as path from "path";

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.commands.registerCommand("terminal-sync.syncActiveTerminal", changeDirectory));
	context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(followEditorChange));
}

export function deactivate() {}

const CLEAR_CODES: {[key: string]: string} = {
    "": "",
    "Ctrl+U": "\x15",
    "Ctrl+A Ctrl+H": "\x01\x08",
    "Ctrl+C": "\x03",
};

function followEditorChange() {
    if (vscode.workspace.getConfiguration("terminalSync").get("followActiveEditor", false)) {
        changeDirectory();
    }
}

function changeDirectory() {
    const uri = vscode.window.activeTextEditor?.document?.uri;
    const terminal = vscode.window.activeTerminal;

    if (uri && terminal) {
        let lineClearKey: string | undefined = vscode.workspace.getConfiguration("terminalSync").get("lineClearKey");
        if (!lineClearKey) { lineClearKey = ""; }
        const clear = CLEAR_CODES[lineClearKey];
        terminal.sendText(`${clear} cd "${path.dirname(uri.fsPath)}"`, true);
    }
}
