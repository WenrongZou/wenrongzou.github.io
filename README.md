# wenrongzou.github.io

Personal homepage. Plain HTML and CSS — no Jekyll, no build step, no dependencies.

```
index.html          all the content
style.css           all the styling
assets/img/         profile photo
assets/cv.pdf       CV (not committed yet)
```

## Editing

Open `index.html` and type. Each section is marked with a comment, and the empty
sections contain commented-out examples showing the markup for papers, notes and
timeline entries — uncomment and fill in.

To preview, just open `index.html` in a browser (double-click it). Refresh to see
changes. Nothing to compile.

To add a section, copy an existing `<section>` block, give it an `id`, and add a
matching `<a href="#your-id">` to the nav at the top of the file.

## Profile photo

Replace `assets/img/profile.svg` with your own photo — put it at
`assets/img/profile.jpg` and update the `src` on the `<img class="photo">` tag in
`index.html`. A portrait crop around 600×750 px looks right; anything much larger
just slows the page down.

## Theme

The page follows the visitor's system light/dark setting; the button in the nav
overrides it and the choice is remembered in `localStorage`. Colors live in the
`:root` blocks at the top of `style.css`.

## Deploying

Push to `main`. In the repository's **Settings → Pages**, the source must be
**Deploy from a branch → `main` → `/ (root)`**. The site is then live at
<https://wenrongzou.github.io>.
