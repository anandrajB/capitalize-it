const vscode = require('vscode');


/**
 * @param {vscode.ExtensionContext} context
 */


 function activate(context) {
	let disposable = vscode.commands.registerCommand('extension.capitalize',
    function () {
		
		let editor = vscode.window.activeTextEditor;
		let text = editor.document.getText(editor.selection);

		text = text.toUpperCase() + this.slice(1);

		editor.edit((edit) =>editor.selections.forEach((selection) => {
				edit.replace(selection, text);
				})
			);
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;


function deactivate() {}

module.exports = {
	activate,
	deactivate
}