# videos

Συνοδευτικό υλικό για τα short-form βίντεό μου. Static GitHub Pages site.

**Live:** https://dgodolias.github.io/videos/

Κάθε βίντεο γίνεται sub-page με ό,τι συμπληρωματικό χρειάζεται: prompt, link list,
downloadable file, notes, chart, anything. Δεν είναι περιορισμένο σε prompts.

## Structure

```
videos/
  index.html            landing (video list)
  style.css             shared Stitch light theme
  <slug>/
    index.html          per-video page (prompt / links / files / whatever)
```

## Add a new video page

1. `mkdir <slug>` (e.g. `deepseek-75cut`)
2. Δημιούργησε `<slug>/index.html`. Μπορείς να ξεκινήσεις από το `cv-tailor/index.html`
   ως template αν θες prompt page, ή να γράψεις δικό σου layout για διαφορετικού τύπου
   περιεχόμενο (lists, downloads, embeds).
3. Πρόσθεσε list item στο `index.html` του root.
4. `git add . && git commit -m "add: <slug>" && git push`
5. Live στο `dgodolias.github.io/videos/<slug>/` σε ~30s.
