workflow "Release Vscode Plugin " {
  resolves = ["Vscode release plugin"]
  on = "release"
}

action "Vscode release plugin" {
  uses = "JCofman/vscodeaction@v0.2-alpha"
  secrets = ["PUBLISH_TOKEN"]
}
