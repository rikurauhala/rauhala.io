---
name: "Oodikone"
image: "team-collaboration"
description: "Going full stack, or how I became a professional"
modified: "2025-07-03"
---

# Oodikone

Founded in 1640, [University of Helsinki](https://www.helsinki.fi/en) is the oldest, largest, and most prestigious research university in Finland. Just in the past couple of decades, hundreds of thousands of students have attended thousands of courses across hundreds of degree programmes, earning millions of study credits.

To better utilise this treasure trove of valuable data, **Oodikone** was created. Gathering data directly from the [Sisu](https://www.funidata.fi/en/services/sisu) student information system and turning it into various tables, charts and other useful visualisations, Oodikone allows the university to make more informed decisions. Originally intended for use only at the University of Helsinki, Oodikone has since been adopted at two other Finnish universities as well.

Made by [Toska](https://toska.dev), the current iteration of Oodikone has been developed since 2017. I contributed to the project from January 2024 until April 2025. During this time, I got to work on several major improvements to the system. Working on a real project with real users offered me a valuable opportunity to grow into a professional software engineer.

Let's discuss my major contributions and the lessons learned.

## Introducing TypeScript

![Lines of code between June 2024 and April 2025. Image made with Matplotlib based on CodeClimate data. Entries prior to November 2024 may be inaccurate.](/img/projects/oodikone/lines-of-code.png)

Oodikone is written in JavaScript. In recent years, [TypeScript](https://www.typescriptlang.org/) has become a popular addition and a must-have tool for all JavaScript projects. In the summer of 2024 the time had come to begin converting the old code base into TypeScript.

The image above depicts the gradual introduction of TypeScript to Oodikone. The first lines of TypeScript were added in June 2024 and the project became majority TypeScript by February 2025.

To describe the backend architecture in simple terms, `routes` use functions defined in `services`, which access the database via `models`. Introduction of TypeScript began from the database models. A [TypeScript compatible solution](https://www.npmjs.com/package/sequelize-typescript) for [Sequelize](https://sequelize.org/) was added. This required a complete rewrite of the model definitions as the syntax was completely different.

After the models were successfully typed and everything was still working, it was time to start converting the rest of the backend. Two alternative approaches were considered. The first one was to type all services first and then move on to routes. The second option was to follow the features of the application, typing each one from models to services to routes. The latter proved to be difficult in practice as many routes, services, and models are used by multiple different features.

After most of the backend had been sufficiently typed, it was time to get started with the frontend. This proved to be another time-consuming task. There were multiple aspects to consider: component props being passed around, compatibility with third party dependencies, state management with Redux, API connection and so on.

Another challenge was to bridge the gap between the frontend and the backend as now there was an increased need to share code between them, mostly the newly added types and interfaces. Having a monorepo made this task easier, even though the frontend and the backend were being run in separate Docker containers. The solution was to create a new `shared` service for sharing code between frontend and backend.

Interestingly, despite the addition of TypeScript and several new features being implemented during the typing process, the combined LOC of the code base remained practically the same. Rewriting old components provided an excellent opportunity for general refactoring and eliminating copy-pasted code.

## Improving maintainability

![Technical debt ratio between February 2024 and April 2025. Image made with Matplotlib based on CodeClimate data. Entries prior to November 2024 may be inaccurate.](/img/projects/oodikone/technical-debt-ratio.png)

As with any other system under active development for a number of years, tons of technical debt had piled up. To identify and track maintainability issues, [CodeClimate Quality](https://docs.codeclimate.com/docs/getting-started-with-code-climate) was introduced to the project in late 2023. The tool is used to automatically detect issues such as duplicate code, complex functions and other code smells.

During the summer of 2024 feature requests were slowing down and the TypeScript conversion was getting started. An opportunity presented itself to pay off some of the technical debt that had accumulated. As each file was being rewritten in TypeScript, issues related to it were resolved. As seen in the image above, this lead to the technical debt ratio trending downwards over time.

CodeClimate also tracks remediation time in hours. However, that proved to be a rather useless metric in practice as something that would take several hours according to CodeClimate, could usually be resolved within minutes. The number of confirmed issues and the overall technical debt ratio were far more useful in tracking the changes in overall maintainability of the code base.

While working on the maintainability aspect, I got the inspiration for my master's thesis which I am currently writing on the subject. When participating on a long-term project that someone will have to work on after you, it is important to keep it in a maintainable state.

## Visual overhaul

![Front page of Oodikone as of March 2025](/img/projects/oodikone/front-page.png)

In the autumn of 2024, it was time for another major challenge: implementing a fresh new user interface. [Semantic UI](https://semantic-ui.com) had become outdated and other Toska projects had already moved on to other UI frameworks. There were also a number of other UI/UX issues: the application did not scale well on smaller screen, colours had inconsistent meaning and in some cases there would be no feedback given to user on the success or failure of the action performed.

I was in charge of designing and implementing the new UI. [Material UI](https://mui.com/material-ui/) was chosen as it was already being used in other Toska projects. It also has an excellent developer experience, is highly customisable, and has an extensive community.

Starting with the basics, the top navigation bar was rewritten with Material UI. It was made fully responsive with arrow icons that would appear on smaller screens. A [footer](https://en.wikipedia.org/wiki/Website_footer) was added to the page, containing relevant links and other useful information.

Page by page, Oodikone was getting a much-needed facelift. While looking nicer, the effort also had some benefits under the hood as well. All new components were written in TypeScript and copy-pasted legacy code was removed, leading to increased maintainability.

## Further reading

- [Source code of Oodikone](https://github.com/UniversityOfHelsinkiCS/oodikone)
- [Oodikone by Toska](https://toska.dev/projects/oodikone)
- [An article about Toska by the university](https://www.helsinki.fi/en/news/digitalisation/start-your-coding-career-already-during-studies-university-helsinki-trains-sought-after-software-specialists)
