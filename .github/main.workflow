workflow "Release Vscode Plugin " {
  resolves = ["Vscode release plugin"]
  on = "push"
}

action "Vscode release plugin" {
  uses = "JCofman/vscodeaction@v0.12-alpha"
  secrets = ["PUBLISH_TOKEN"]
}
