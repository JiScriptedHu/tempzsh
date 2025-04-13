const vscode = require('vscode');
const { workingspace } = require('./workingFolder');

async function runInCLI() {

    const parameterValue = workingspace();

    const versionInput = await vscode.window.showInputBox({
        placeHolder: 'Enter electron version',
        prompt: 'Please enter version version as string'
    });

    if (!versionInput) {
        vscode.window.showWarningMessage('No version provided');
        return;
    }

    // Execute command
    const allowExec = 'Set-ExecutionPolicy Unrestricted -Scope Process';
    const installFiddle = 'npm i @electron/fiddle-core -g'
    const command = `fiddle-core run ${versionInput} ${parameterValue}`;
        
    // Get or create terminal
    let terminal = vscode.window.activeTerminal;
    if (!terminal) {
        terminal = vscode.window.createTerminal('Command Executor');
    }

    // Show the terminal and execute the command
    terminal.show();
    terminal.sendText(allowExec);
    terminal.sendText(installFiddle);
    terminal.sendText(command);
    
    vscode.window.showInformationMessage(`Executing: ${command}`);
    
}

module.exports = {
    runInCLI: runInCLI,
}