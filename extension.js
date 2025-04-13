const vscode = require('vscode');
const run = require('./lib/runAsAPI');
const runcli = require('./lib/runInCLI')

 /**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('Congratulations, your extension "zsh" is now active!');

	const disposable = vscode.commands.registerCommand('zsh.helloWorld', function () {

		vscode.window.showInformationMessage('Hello World from zsh!');
	});

	context.subscriptions.push(disposable);

	const test = vscode.commands.registerCommand('zsh.run', function () {

		run.run();
	});

	context.subscriptions.push(test);

	const test2 = vscode.commands.registerCommand('zsh.runcli', function () {

		runcli.runInCLI();
	});

	context.subscriptions.push(test2);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
