# AI Layer

Reserved for the future website assistant.

Rules:

- Do not expose model API keys in browser code.
- Keep assistant requests behind server routes.
- Add logging, rate limits, and abuse controls before release.
- Use `types.ts` and `provider.ts` as the future integration boundary.
- Do not enable a provider until production model, prompt, logging, and privacy review are complete.
