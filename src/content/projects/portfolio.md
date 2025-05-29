---
name: "Portfolio"
image: "programming"
description: "How I kept outgrowing my portfolio"
---

# Portfolio

It is usually not the brightest idea to include your portfolio in your portfolio. _"Don't you have any real projects to showcase?"_ Fair enough, but hear me out.

This particular project offers a great window into my rapid growth as a professional. My portfolio has evolved with me as I've polished my skills and picked up new tools and technologies along the way.

As soon as I had some projects to showcase, I purchased my own domain and published the first version of my portfolio on the Internet. Three years later, I have completely rewritten the whole website three times! Let's discuss how this happened.

## Humble beginnings

![Version 1: A simple web page written with HTML and CSS](/img/projects/portfolio/version-1.png)

The very first version was a simple static web page written with pure HTML and CSS. No fancy frameworks, UI libraries or any of that stuff. It got the work done.

After drafting the initial layout and writing some content, I configured the newly acquired domain name and published the static documents on GitHub Pages. My first very own page was live!

Since the first version, the layout has not changed much. Like many other professional portfolios, this one included my name, a presentable photo, some personal details and links to professional social media. Dark mode was there from the beginning, as it should be!

Looking back, I noticeably described myself as a student first, not yet a professional software developer. I was still figuring out some of the essentials but progress was being made. And to be honest, at that point most of the projects showcased were uni work anyway.

## Connecting to GitHub

![Version 2: A React application automatically fetching project details via the GitHub API](/img/projects/portfolio/version-2.png)

It didn't take long for me to become unhappy with the initial version. I had spent the summer of 2022 learning [React](https://react.dev) and was becoming more convinced of wanting to work with web technologies as a full stack developer. The time had come for the first major rewrite of my website.

Visually, the second version isn't that different from the first. [Material UI](https://mui.com/material-ui) was used to build the user interface and the colour palette was similar to the previous version.

There's a new gimmick though! Under the hood, the data is fetched directly from my GitHub profile via the official [REST API](https://docs.github.com/en/rest?apiVersion=2022-11-28). This time I would only have to choose which projects to include, write a short description and add some relevant [topics](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics) to each repository. The React application would then take care of the rest. Each project card now included a colourful bar showing which programming languages were used! I even used the [official colours](https://github.com/github-linguist/linguist/blob/main/lib/linguist/languages.yml) from the Linguist project.

I ended up making a generic variant for anyone to fork and make their own version. The source code of version 2 is published as [{you}.github.com](https://github.com/rikurauhala/you.github.io).

## A fresh new look

![Version 3: A beautifully crafted user interface with Joy UI](/img/projects/portfolio/version-3.png)

Version 2 came with its own set of issues. First of all, it was a simple React application with no backend. The data fetched from GitHub was stored in [`sessionStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage), but would have to be loaded again for every visitor, thus spamming the GitHub API. Not a great design.

There was another problem: I had started to collaborate more with others and most of my work was no longer under my personal GitHub account. This rendered the whole automated GitHub thing useless. It was time for another rewrite and another chance to showcase what I'd learned.

At this point, my interests had shifted even more towards the frontend and web design. I was getting bored with MUI but wanted to work with the familiar API. I decided to go with [Joy UI](https://mui.com/joy-ui/getting-started) from the same authors. For the project cards, I took some screenshots and combined them with [mockups](https://mockuper.net/mockups/desktop) and beautiful gradient backgrounds. To this day, I am quite happy with how the design turned out.

## Here we are

![Version 4: You are looking at it](/img/projects/portfolio/version-4.png)

While version 3 was mostly fine, I never quite got to finish it as implementing the individual project pages would have taken me more time than I would quite like to admit. It also had the same issue as its predecessor: it was a single page React application. Extending it to include backend functionality or even routing would have been an annoying task.

There was another major flaw I had come to realise: no one has the time or the interest to read about a dozen different projects. If they ever end up on your website in the first place, they _may_ click on a project, perhaps two if they are curious. This is why it is crucial to only feature a few projects at most. They should also be the very best of your work and display a variety of talents.

Instead of the **fourteen** projects that the previous version included, I narrowed the selection down to just **four**. I also made the decision to commit to crafting the perfect website this time and implementing those missing features, including project detail pages, such as the one you are reading right now!

With the new requirements in mind, I decided to go with [Next.js](https://nextjs.org) and [Vercel](https://vercel.com). They offered an out-of-the-box solution for my requirements on routing, scalability and initial static delivery. For the user interface, I was curious to try something completely new to me. I ended up picking [Radix UI](https://www.radix-ui.com) for its simplicity and ease of customisation.

This project has been my playground for testing new technologies and tools. For the current version, I also picked up [Playwright](https://playwright.dev) for end-to-end testing, [Qlty](https://qlty.sh) for tracking maintainability issues as well as [Lighthouse](https://developer.chrome.com/docs/lighthouse) for accessibility and performance metrics. All of this is coming nicely together with [GitHub Actions](https://docs.github.com/en/actions) by automating checks and deployments.

Another aspect that is now better being taken into account is keeping dependencies up to date. A lot of effort in maintaining an open source project comes from keeping up with current versions of the project's dependencies. Vulnerable and outdated components are also a common [security issue](https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components). For updating dependencies, [Renovate bot](https://docs.renovatebot.com) is used.

So what's next? As you may have noticed, there is a placeholder "Blog" button in the navigation bar! I am hoping to start writing about my passion for software engineering soon on my very own platform.

## Summary

A brief overview of how the major versions differ from one another.

| Version | Framework | Deployment   | User interface | Testing    | CI/CD          |
| :-----: | :-------- | :----------- | :------------- | :--------- | :------------- |
|    1    |           | GitHub Pages |                |            |                |
|    2    | React.js  | GitHub Pages | Material UI    |            |                |
|    3    | React.js  | GitHub Pages | Joy UI         |            |                |
|    4    | Next.js   | Vercel       | Radix UI       | Playwright | GitHub Actions |
