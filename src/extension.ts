import * as vscode from 'vscode';
import * as path from 'path';


export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('terminal-sync.syncActiveTerminal', () => {
		const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        const document = editor.document;
        if (!document) {
            return;
        }

        const uri = document.uri;
        if (!uri) {
            return;
        }

		const terminal = vscode.window.activeTerminal;
		if (!terminal) {
			return;
		}

		const ctrlU = vscode.workspace.getConfiguration("terminalSync").get("sendCtrl+U", true);

		terminal.sendText(`${ctrlU? '\x15' : ''} cd "${path.dirname(uri.fsPath)}"`, true);

		// if (ctrlU) {
		// 	terminal.sendText("\x19", false);
		// }
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
