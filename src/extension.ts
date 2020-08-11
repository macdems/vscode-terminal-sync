import * as vscode from "vscode";
import * as path from "path";

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.commands.registerCommand("terminal-sync.syncActiveTerminal", changeDirectory));
	context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(followEditorChange));
}

export function deactivate() {}

function followEditorChange() {
    if (vscode.workspace.getConfiguration("terminalSync").get("followActiveEditor", false)) {
        changeDirectory();
    }
}

function changeDirectory() {
    const uri = vscode.window.activeTextEditor?.document?.uri;
    const terminal = vscode.window.activeTerminal;

    if (uri && terminal) {
        const ctrlU = vscode.workspace.getConfiguration("terminalSync").get("sendCtrl+U", true);
        terminal.sendText(`${ctrlU ? "\x15" : ""} cd "${path.dirname(uri.fsPath)}"`, true);
    }
}
