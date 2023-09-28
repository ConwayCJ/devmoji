# About DevMoji
DevMoji was created by Christopher Conway. As a fresh bootcamp graduate, one of the most daunting goals was to contribute to opensource. In an effort to tackle this problem for other developers facing the same experience - he created DevMoji.

It provides a straight-forward way to contribute to opensource in a safe, risk-free environment that provides ample feedback and a way to actually see your contribution on the application. 

Please consider contributing to the project and seeing your own prompt/answer on the application! 

# How to Contribute

<img src="https://github.com/ConwayCJ/devmoji/assets/94498167/c989097a-acd9-4f46-984b-d2a696e1391d" align="right" width="250" alt="fork this repository"/>

## Fork this repository

Fork this repository by clicking on the fork button on the top of the page.
This will create a copy of this repository on your account.

<img align="right" width="300" src="https://github.com/ConwayCJ/devmoji/assets/94498167/1e12f33a-2177-4584-aaa5-5c78e4cc92b3" alt="clone this repository" />

## Clone the repository

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the `code` button and then click the `copy to clipboard` icon.

Open a terminal and run the following git command:

`git clone url-you-just-copied`
where url-you-just-copied is replaced with the url to this repository (your fork of this project). See the previous steps to obtain the url.

## Create a branch

Change to the repository directory on your computer (if you are not already there) of the project you cloned:

```javascript
cd devmoji
```

Now create a branch using the git checkout command:

```javascript
git checkout -b your-branch-name
```

For example:

```javascript
git checkout -b new-prompt-conwaycj
```

## Add changes to Data.tsx file

   **Contribution requirements:**

   - Your contribution MUST match our <a href="/style_guidelines.md">style guidelines</a>. Please ensure there are not drastic formatting changes.

   - Please make prompts somewhat ambiguous. Obvious prompts may be requested to be changed.

   - Limit the amount of prompts you add to 2.

   Obvious example:
```javascript
{
  prompt: ["everyone", "loves", <CoffeeEmoji />],
  answer: "everyone loves coffee",
}
```

  Ambiguous version: 
```javascript
{
  prompt: [<GroupEmoji/>, <HeartEmoji/>, <CoffeeEmoji/>],
  answer: "everyone loves coffee",
}
```


  ### prompt key:
  - Must be an array. 3 items max. Use any number of emojis - either use emojis from your device or find one from any of the listed sites:
      [MaterialUI](https://react-icons.github.io/react-icons)\
      [React Icons](https://mui.com/material-ui/material-icons/)

  - ***Choosing a new emoji***\
   In Data.tsx - make sure you import your emoji like the example below. The FROM location must match the library you're using.\
    For example, React Icons [Font Awesome](https://react-icons.github.io/react-icons/icons?name=fa) has a different FROM location than [Hero Icons](https://react-icons.github.io/react-icons/icons?name=hi)

```javascript
    //Font Awesome example:
    import { IconName } from "react-icons/fa";
```

  - If I want to use an icon from "Hero Icons", but that import doesn't exist in Data.tsx - I must import it from that new location. The Import syntax will be in the "Hero Icons" section at the [React Icons website](https://react-icons.github.io/react-icons).

  ```javascript 
    //Font Awesome Icons:
    import { IconName } from "react-icons/fa";
    //Hero Icons:
    import { IconName } from "react-icons/hi";
  ```

  ### answer key:
  - Must be a string. Use lowercase lettering. See the "star trek" example below.
    
  - For example - your emojis are implying "star trek"

  - The "answer" key would be `'star trek'`



  ### socials key:
  - This is OPTIONAL. If you do not want links to your socials on the application, do not add a socials key.
  - The socials key is an object with two key:value pairs. GHurl and LIurl. Provide a link to your GitHub and LinkedIn as a string. 

  Completed example with socials:

```javascript
{
  prompt: [<Star/>, <RunningTrack/>],
  answer: "star trek",
  socials: {
    GHurl: 'https://github.com/ConwayCJ',
    LIurl 'https://www.linkedin.com/in/conwaycj',
  }
}
```

# Check your work

In the devmoji directory in your terminal, run `npm run dev`.

Play through the game or skip to the last prompt. If your contribution was successful it will appear on the last page before the confetti screen.

Put your answer in the input to check it was successful.

# Committing & pushing changes

<ol>
   <li>Before continuing these steps, make sure your changes meet the requirements of our <a href="/style_guidelines.md">style guidelines</a></li>
   <li>Add the changed Data.tsx file in your terminal</li>
   <li>Commit your changes with the message "add prompt your prompt here"</li>
   <li>Push your changes to the branch you created earlier when doing the `git checkout` command</li>
   <li>See below for an example</li>
</ol>

- Example add/commit/push workflow:

  If you're in the devmoji directory in your terminal:
  ```javascript
    git add src/assets/Data.tsx
    git commit -m "Add prompt star trek"
    git push -u origin your-branch-name
  ```

# Submit your changes for review

- If you go to your GitHub repository, you'll see a `Compare & pull request` button. Click on that button.

![9](https://github.com/ConwayCJ/devmoji/assets/94498167/55840d64-e494-42ea-b0b5-6d53f556ad98)


- You should now see a new screen to create a pull request.
<hr/>

<ol>
  <li>Check that your message matches the description of your commit message: `add prompt your-prompt-here`</li>
  <li>Click the "create pull request" button.</li>
</ol>

<img width="800" src="https://github.com/ConwayCJ/devmoji/assets/94498167/25eb1d98-7f6e-46d9-b38b-7fe46d62a62d" alt="clone this repository" />

## Thats it!

Upon seeing this screen, either your contribution will be accepted and merged into the main branch, or your contribution will receive feedback and changes will be requested.
<ol>
  <li> In the case changes are requested, follow the same workflow to request and update your pull request.</li>
  <li> If no changes have been requested, it will be merged into the production branch.</li>
</ol>

## Thank you for contributing!

If the deployment is successful, there will be an option on the screen below to view a "preview" of your contribution before it goes to production!

![6](https://github.com/ConwayCJ/devmoji/assets/94498167/239e14fc-cafe-4a46-9ceb-70c0570baa60)


# Whats next? + Credits

- Congrats! You just completed the standard fork -> clone -> edit -> pull request workflow that you'll often encounter as a contributor!

- Please star this repository and share with someone you know who might enjoy contributing!

## Roadmap

1. &#x2611; Implement the core functionality of the project.
2. &#x2611; Set up a GitHub repository and make it open source.
3. &#x2611; Create a detailed README file with instructions on how to contribute.
4. &#x2611; Add a "Credits" section for contributors' socials.
5. &#x2611; Style the project.
6. &#x2B55; Improve styling:
   -  Change gradients on each page to something more distinct
   -  Transition colors instead of a direct swap
   -  Make getting a correct prompt more clear (replace X\O and bg color change)
  
7. &#x2B55; Enhance user experience by implementing features such as:
   - Tracking the number of prompts users have answered correctly & displaying unique win page. 
   - Track progress using login/DB or local storage
   

## Code Stack
The project is built using the following technologies and frameworks:


| React        | TypeScript   | Vite         | HTML5        | CSS3         | TailwindCSS  |
|--------------|--------------|--------------|--------------|--------------|--------------|
| ![React Logo](https://github.com/ConwayCJ/devmoji/assets/94498167/2431cf81-adb5-4d7e-aa81-093152436547) | ![TypeScript Logo](https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png) | ![Vite Logo](https://github.com/ConwayCJ/devmoji/assets/94498167/ff0faa2a-ae21-43c1-aaab-46e1d15ec9b5) | ![HTML5 Logo](https://github.com/ConwayCJ/devmoji/assets/94498167/fb60bde2-1934-4c0e-98ac-c703b0abea22) | ![CSS3 Logo](https://github.com/ConwayCJ/devmoji/assets/94498167/e3822ed0-d622-44d6-a05f-e2caed910073) | ![TailwindCSS Logo](https://github.com/ConwayCJ/devmoji/assets/94498167/4b5a6fc0-1fbe-463d-aaaa-4ba8dfa234bb) |
