# wenrongzou.github.io

Personal homepage. Plain HTML and CSS — no Jekyll, no build step, no dependencies.

```
index.html          about / landing page
research.html       interests, formalisation projects, publications
education.html      degrees and awards
talks.html          seminar talks
conferences.html    conferences and schools attended
style.css           all the styling
theme.js            the light/dark button
assets/img/         profile photo
assets/cv.pdf       CV
```

## Editing

Open the page you want and type. The empty sections contain commented-out
examples showing the markup for papers and timeline entries — uncomment and fill
in.

To preview, just open the file in a browser (double-click it). Refresh to see
changes. Nothing to compile.

**The nav bar is copied into all five pages.** If you add, rename or reorder a
link, do it in every `.html` file. The only difference between them is which link
carries `class="active"` — that is the page you are currently on.

To add a page: copy an existing one, replace the `<main>` content, and add a link
to the nav in all the other pages.

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
