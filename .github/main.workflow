workflow "Release Vscode Plugin " {
  resolves = ["Vscode release plugin"]
  on = "push"
}

action "Vscode release plugin" {
  uses = "JCofman/vscodeaction@v0.14-alpha"
  args = "publish"
  secrets = ["PUBLISH_TOKEN"]
}
