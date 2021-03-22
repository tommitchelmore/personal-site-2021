# Welcome!
This repository contains the source code behind my new website - which is now live at [tommitchelmore.com](https://tommitchelmore.com).

![](https://i.imgur.com/Vpt4q6N.png)

## Technology stack 💻
At it's core, the new site runs on React through NextJS - this, combined with TailwindCSS forms the main website.  With a focus on SEO, content availability and performance, this feels like the best route to take.

## CMS 📌
I'm now using [GraphCMS](https://graphcms.com/) and am finding it to be one of the best solutions available today.  It allows me to add "Collections" such as "Previous works" and provides a simple GraphQL interface at the API level.

At build, the site collects all the relevant data and produces a static bundle of pre-generated HTML, CSS & JS which makes for extremely fast loading times and strong SEO, with the benefits of using a framework such as React.

## Deployment
Without a doubt, [Vercel](https://vercel.com/) is the best place to host static sites today - it makes it incredibly easy to publish a [JAMStack](https://jamstack.org/) application.  Every time I push to this repository, Vercel automatically regenerates all of the content and instantly pushes it to an extremely fast edge CDN - this also happens every time I update content on GraphCMS via a simple webhook.
