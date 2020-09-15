# Liquid Propulsion Group Website
The website of the Liquid Propulsion Group, served at liquidpropulsiongroup.github.io.

The default branch is `dev`, where all development should happen. 

The `master` branch is where the build goes and from which the site is served. Do not manually modify this.

## Installation
If you want locally view the site or you'd like to make changes, follow these steps. Note that this README assumes you are using a bash terminal. If you're on a Mac or Linux that's just your regular terminal, you're fine. If you're on a Windows, either install the Windows Linux Subsystem ([instructions](https://docs.microsoft.com/en-us/windows/wsl/install-win10)), or use the Command Line, but the commands might be different from what's here, so you figure it out yourself. If you're using the Windows Linux Subsystem, then for all the OS-specific installations, follow the instructions for Ubuntu.

### Install Node.js.
You'll need to Google this, since it varies from OS to OS, and is out of scope for this README. Or, follow the steps [here](https://www.gatsbyjs.com/tutorial/part-zero/#install-nodejs-for-your-appropriate-operating-system) in the install Node.js section.

### Install Yarn
The package manager used is Yarn. Please use yarn and yarn only. Do not use npm or it will destroy things and you will be very frustrated. Follow the instructions [here](https://classic.yarnpkg.com/en/docs/install/) to install.

### Install Gatsby.js
```shell
$ yarn global add gatsby-cli
```

### Install Dependencies
Go into the repository, wherever you cloned it.

```shell
$ cd liquidpropulsiongroup.github.io/ 
```

```shell
$ yarn install
```

## Start Development Server
In root folder:
```shell
$ gatsby develop
```

Go to `localhost:8000` in your browser and you should see the site.

Gatsby hot-reloads, so you don't need to restart the server each time you make a change. Just wait a couple of seconds for things to recompile and the changes should be reflected on the page. If it doesn't, try refreshing. If that doesn't work, *then* you restart the server.

To stop the server, just Ctrl-C. 

## Setup
This is the directory structure of the project.
```
./
├─ src/
    ├─ components/
    ├─ content/
    ├─ images/
        ├─ officers/
    ├─ pages/
    └─ styles/
```

Except in very rare occasions, all you will ever need to touch are the files in `src/`. The files at the root of the repo are config files. Unless you know what you're doing, don't mess with them. After you've done `yarn install` and `gatsby develop` you might see some extra folders. Don't mess with those either. Never mess with the stuff in `node_modules`; they're the files for installed packages. `public/` contains output of the build process so don't touch it manually either.

### Components
Gatsby is based in React, so the [React philosophy and fundamentals](https://reactjs.org/) still apply. The component files all go in this folder. Follow the naming convention. 

Exiting components:
- **ContactLinks**: Component for contact information, with links. Supports `showNames`, where the type of the contact info (eg. email vs Github) is shown, or not.
- **FlexLayout**: Wrappers for if you just want a simple `div` with `display: flex` and various basic configuration options. Might be deprecated in the future, so avoid using it.
- **Layout**: Wrapper for all pages. Contains the header and footer, and some basic layout css for the body. Use it on every page.
- **SEO**: Search engine optimization component. For making site easier to Google search.

### Content
THIS IS WHERE YOU MAKE EDITS TO THE CONTENT OF THE SITE. For the most part. Some special elements have to be edited in code (noted below), but check here first if you want to make content changes.

All content files are written in `.yaml` format. The definition is:
> YAML: YAML Ain't Markup Language. YAML is a human friendly data serialization standard for all programming languages.

It's fairly intuitive, just follow the existing structure. Be sure to use 2 spaces for indenting, *not tabs*. 

Content Files:
- **about.yaml**: Sources the section contents of the About page
- **contact.yaml**: Sources contact information links, for both the footer and the contact us page. The graphic for the contact us page needs to be changed directly in `contact.js`. If you add a new contact information link, you need to also do the following:
  1. Go to https://react-icons.github.io/icons?name=fa, and search for the icon you want to represent the link. Copy the name of the icon (eg. FaGithub). (Make sure it's an icon that has a name beginning with "Fa"). 
  2. In `components/contactLinks.js`, add it to this line:
      ```js
      import { FaEnvelope, FaDiscord } from 'react-icons/fa'
      ```
      so it'd look like:
      ```js
      import { FaEnvelope, FaDiscord, FaGithub } from 'react-icons/fa'
      ```
  3. Then add it to the if-else branches in the component body, like this:
      ```js
      if (data.name === 'Email') {
        icon = <FaEnvelope />;
      } else if (data.name === 'Discord') {
        icon = <FaDiscord />
      } else if (data.name === 'Github') {
        icon = <FaGithub />;
      }
      ```
      where `data.name` refers to the name you put in the yaml file for the link.
- **index.yaml**: Sources the info and image file names for the sections on the home page. If you want to change the slogan, you need to change that in `index.js` in the very first `<h1>` tag. If you want to change the rocket engine graphic (but why would you?!) you have to change the filename directly in `index.js` as well. 
- **join.yaml**: Sources the content for the Recruitment page. If you want to replace the roadmap, just put the image in `images/` and name it `roadmap.svg`; there's no change needed in this file for roadmap changes. If you don't want bullets for this page, then just don't use the `bullets` field. Likewise for the `description` field.
- **members.yaml**: List of members that goes in the About page. 
- **officeres.yaml**: List of officers that goes in the About page. Make sure the corresponding officer image is in the `images/officers/` folder, following the naming convention.
- **pages.yaml**: Links for the top nav bar. If you're adding a new page, check the Making a New Page section.

### Images
Where all the images go. Use svg files for graphics so they look nice. Photos should be png. Make sure all the images you're referencing in code or in content files are here, or things will break :(

### Pages
Source code for the pages itself. As mentioned in the Content section, some things need to be changed in code. Aside from that you won't really need to change things here. See Making a New Page for information about making a new page.

### Styles
All CSS files go here! The convention for this project is to not do inline styling, only CSS files. Except for `global.css`, where default styling and the `.section` class stylings go, everything else uses CSS modules. More explanations [here](https://www.gatsbyjs.com/docs/css-modules/). That goes for the pages and for the components. 

## Making a New Page
So you want to make a new page. This will be a little bit more involved than just editing content, so bear with me.

1. Add the name and path of the new page to `content/pages.yaml`. The name is the name that you want the navbar to show. 
    ```yaml
    - path: "/new-page"
      title: "New Page"
    ```
2. Add a new file to `pages/` folder that has the same as your path: `new-page.js`. Write your page layout here. Make sure it's wrapped in
    ```html
    <Layout>
      <SEO pageTitle='New Page' />
      {* your layout here *}
    </Layout>
    ```
    Avoid hard-coding in the content as much as possible, and rely on sourcing it from `.yaml` files instead, so it's easier to make quick content edits. 
3. Add a new file in `content/`: `new-page.yaml`. If you want more nested iterating, like the About page does, make new `.yaml` files for the nested data and import it in your page JS file.
4. If you have page-specific CSS styling, make a new CSS module file in `styles/`: `new-page.module.css`. Import it in your page JS file:
    ```js
    import Styles from '../styles/new-page.module.css'
    ```
    and apply the class to the element. For example if the class is `.my-new-container`:
    ```html
    <div className={Styles.myNewContainer}></div>
    ```
5. Add relevant images you reference in `images/`.
6. Done! 

## Deploy
Once you're done with all your changes, and you're 100% certain you want the changes to go live, then just do
```shell
$ yarn run deploy
```