## Onboarding App

This app is used to automate the onboarding process of new employees into an organization. This is the user facing part of the app built with react.

- It has three tiers of users which are the Admin, Hrs and the Employees.
- It also utilizes the Slack API, to automate the process of adding new employees to Slack Channels.
- This app also uses Google Calendar API to invite new employees to onboarding meetings.


# Organization

The structure of organization that I used is based on file type where most of the files are located inside folders.

## Onboarding App

This app is used to automate the onboarding process of new employees into an organization.

- It also utilizes the Slack API, to automate onboarding of new employees into Slack and adding them to specifc channels.
- This app also uses Google Calendar API to invite new employees to onboarding meetings.
- Vultr API is also used to set up CI/CD.

# Organization

The structure of organization that we are using is based on file type where most of the files are located inside folders.

Below is the organizational structure of the app.

```
src/
  ├── assets/
        ├── images/
  ├── components/
  ├── pages/
        ├── adminpage/
        ├── employeepage/
        ├── homepage/
        ├── hrpage/
  ├── appStore
=======
  ├── redux
        ├── actions/
        ├── reducers/
        ├── store/
  ├── utilities

```

# assets

This contains global static assets such as images, svgs, css stylings, vendors etc all grouped into corresponding folders.

# components

This contains global shared/reusable components, such as layout (wrappers, navigation), form components, buttons.
Within the components folder, there are groupings by type - forms, tables, buttons, layout, etc.

# pages

This contains the various views that we have in the app. Here's where the main part of the app will live: in the pages directory. Each page subfolder contains the main view for that page and the components that were only used on that page.
Anything within a page is an item that will likely only be used within that specific page. It might include specific forms, modals, buttons, any component that won't be global.

# appStore

The global data store is contained in the appStore directory with subfolders such as actions, reducers and store.

# utilities

This folder houses all the global utility functions such as validation and routing that are used across multiple sections of the app.

This will contain global static assets such as images, svgs, app logo, etc. There can also be groupings based on images, audios and videos, if any of such files are used.

# components

This will contain global shared/reusable components, such as layout (wrappers, navigation), form components, buttons.
Within the components folder, there will be groupings by type - forms, tables, buttons, layout, etc.

# pages

This will contain the various views that we have in the app. Here's where the main part of the app will live: in the pages directory. Each page subfolder will contain the main view for that page and the components that are only used on that page.
Anything within a page is an item that will likely only be used within that specific page. It might include specific forms, modals, buttons, any component that won't be global.

# redux

The global data store will be contained in the store directory

# utilities

This folder will house all the global utility functions, like validation, that could easily be used across multiple sections of the app.

# OnBoarding-Frontend

This is an application to help employers and HR to handle the onboarding process of the new employees.

## Installation
Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

## License
For open source projects, say how it is licensed.

## Project status
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.