# wenrongzou.github.io

Personal homepage. Plain HTML and CSS — no Jekyll, no build step, no dependencies.

```
index.html          about, awards, education
research.html       interests, formalisation projects, publications
teaching.html       courses (empty for now)
talks.html          seminar talks and notes
places.html         photos, one block per place
conferences.html    conferences attended — NOT in the nav, see below
style.css           all the styling
theme.js            the light/dark button
assets/img/         profile photo
assets/img/places/  photos for the Places page
assets/cv.pdf       CV
```

`conferences.html` still exists and still works if you type its address, but its
nav link is commented out in every page, so nothing on the site points to it.
Uncomment the `<!-- <a href="conferences.html">…</a> -->` line everywhere to
bring it back, or delete the file to be rid of it.

## Editing

Open the page you want and type. The empty sections contain commented-out
examples showing the markup for papers and timeline entries — uncomment and fill
in.

To preview, just open the file in a browser (double-click it). Refresh to see
changes. Nothing to compile.

**The nav bar is copied into every page.** If you add, rename or reorder a link,
do it in every `.html` file. The only difference between them is which link
carries `class="active"` — that is the page you are currently on.

To add a page: copy an existing one, replace the `<main>` content, and add a link
to the nav in all the other pages.

## Places page

Photos live in `assets/img/places/`, one `<figure>` per place in `places.html`.

That page carries `class="wide"` on its `<body>`, which widens the container to
`min(94vw, 84rem)` — it follows the window instead of sticking to the reading
width used by the text pages. The grid then fits as many columns as the window
allows: four on a large monitor, one on a phone. Add the same class to any other
page that needs the room.

Every photo is a **1200×800 JPEG** (3:2), which is what keeps the rows aligned.
Phone photos are not that — they are 4032×3024 HEIC files that Chrome and
Firefox cannot display at all. To add one, convert it first:

```bash
sips -s format jpeg -s formatOptions 80 IMG_1234.HEIC --out new.jpg
sips --resampleWidth 1200 new.jpg      # portrait photos: --resampleHeight 800
sips -c 800 1200 new.jpg               # centre-crop to exactly 3:2
```

If the photo was taken in portrait orientation, `sips -r 90` it first and clear
its EXIF orientation tag, or browsers will rotate it a second time.

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
