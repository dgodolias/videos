# videos

Prompts & artifacts από short-form videos. Static GitHub Pages site.

**Live:** https://dgodolias.github.io/videos/

## Structure

```
videos/
  index.html            ← landing (video list)
  style.css             ← shared dark theme
  cv-tailor/
    index.html          ← ATS-aware CV tailoring prompt
```

## Add a new video page

1. `mkdir <slug>` (e.g. `deepseek-75cut`)
2. Copy `cv-tailor/index.html` as template into `<slug>/index.html`, replace prompt text.
3. Add list item in `index.html`.
4. `git add . && git commit -m "add: <slug>" && git push`
5. Page is live at `dgodolias.github.io/videos/<slug>/` in ~30s.
