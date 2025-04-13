const vscode = require('vscode');

function workingspace() {
    if (vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0) {
        const workingFolder = vscode.workspace.workspaceFolders[0].uri.fsPath;
        vscode.window.showInformationMessage(`Using workspace path: ${workingFolder}`);
        return workingFolder;
    } else {
        vscode.window.showErrorMessage('No workspace folder is open');
        return null;
    }
}

module.exports = {
    workingspace: workingspace,
};
