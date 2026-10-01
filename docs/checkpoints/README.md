# Checkpoints

Checkpoints preserve resumable task state without putting changing state into `AGENTS.md`.

Create one for:

- multi-hour or cross-session work;
- risky production work or migrations;
- large visual changes;
- unfinished work another Codex session may inherit.

Do not create unnecessary checkpoints for tiny isolated changes. Use `TEMPLATE.md`, record the exact repository/worktree/commit, distinguish source truth from rendered/deployed evidence, and never include secrets. A checkpoint is state, not authority to publish or change production.
