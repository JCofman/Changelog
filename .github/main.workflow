workflow "Release Vscode Plugin " {
  resolves = ["Vscode release plugin"]
  on = "push"
}

action "Vscode release plugin" {
  uses = "JCofman/vscodeaction@v0.13-alpha"
  runs = "npm run vsco"
  secrets = ["PUBLISH_TOKEN"]
}
