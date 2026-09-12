# Aktiv Enerji

Corporate site — https://wualyrix.github.io/aktivenerji/

## Local

```bash
npm install
npm run dev
```

## Deploy (otomatik)

`main`'e her push → GitHub Actions build + Pages publish.

**Tek seferlik ayar (zorunlu):**

1. Repo → **Settings → Pages**
2. **Source:** `GitHub Actions` (branch/root değil)
3. Kaydet

Sonra sadece kodu değiştirip push etmen yeterli. Elle `docs/` / `index.html` kopyalamaya gerek yok.
