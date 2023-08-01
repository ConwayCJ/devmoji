# DevMoji
This project aims to guide developers on opensource contribution for a simpler application. 
If you're looking to contribute, follow the steps below.

# How to Contribute

[Style Guidelines](/style_guidelines.md)

<img src="https://github.com/ConwayCJ/devmoji/assets/94498167/c989097a-acd9-4f46-984b-d2a696e1391d" align="right" width="250" alt="fork this repository"/>



## Fork this repository

Fork this repository by clicking on the fork button on the top of the page.
This will create a copy of this repository on your account.



<img align="right" width="300" src="https://github.com/ConwayCJ/devmoji/assets/94498167/1e12f33a-2177-4584-aaa5-5c78e4cc92b3" alt="clone this repository" />

## Clone the repository

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the copy to clipboard icon.

Open a terminal and run the following git command:

git clone "url you just copied"
where "url you just copied" (without the quotation marks) is the url to this repository (your fork of this project). See the previous steps to obtain the url.

## Add changes to Data.tsx file

   **Contribution requirements:**

   Please make prompts somewhat ambiguous. Obvious prompts may be requested to be changed.
   For example: <br/><br/>
```javascript
{
  prompt: ["I", "love", <CoffeeEmoji />],
  answer: "I love coffee",
}
```


   ***prompt*** key:
  - Must be an array. 3 items max. Use any number of emojis - either use emojis from your device or find one from any of the listed sites:
      [MaterialUI](https://react-icons.github.io/react-icons)\
      [React Icons](https://mui.com/material-ui/material-icons/)

   ***Answer*** key:
  - Your answer must be a string. Separate words with spaces. Use lowercase lettering.

   ***socials*** key:
  - This is OPTIONAL. If you do not want links to your socials on the application, do not add a socials key.
  - Follow the following format. LIurl must be a string. GHurl must be a string.

  Example without socials:
```javascript
prompt: [<Star/>, <RunningTrack/>],
answer: "Star Trek",
```

 Example with socials:
 ```javascript
prompt: [<Star/>, <RunningTrack/>],
answer: "Star Trek",
socials: {
    LIurl: 'https://www.linkedin.com/in/conwaycj/',
    GHurl: 'https://github.com/ConwayCJ',
  }
```

# Committing & pushing changes
<ol>
   <li>For a smooth PR, make sure your changes meet the requirements of our <a href="/style_guidelines.md">style guidelines</a> </li>
   <li>Add the changed Data.tsx file in your terminal</li>
   <li>Commit your changes with the message "prompt answer here"</li>
   <li>Push your changes to GitHub</li>
</ol>

# Submit your changes for review

<img align="right" width="300" src="https://github.com/ConwayCJ/devmoji/assets/94498167/2aa410ce-ff0e-44ab-94cc-6b8be47b734f" alt="clone this repository" />

If you go to your GitHub repository, you'll see a notification saying your branch is ahead by 1 commit. Click on the "contribute" button in your repository to open a menu to submit for a pull request.

![4](https://github.com/ConwayCJ/devmoji/assets/94498167/82844ce8-36e8-4544-a5e5-f0666d30d8bc)\

<hr>

## Before submitting your PR

If your prompt/answer looks like this:

 ```javascript
prompt: [<Star/>, <RunningTrack/>],
answer: "Star Trek",
socials: {
    LIurl: 'https://www.linkedin.com/in/conwaycj/',
    GHurl: 'https://github.com/ConwayCJ',
  }
```
Your message should be: Add prompt "Star Trek"

After you've checked that your message follows the proper format, click the "Create pull request" button.

<img width="600" src="https://github.com/ConwayCJ/devmoji/assets/94498167/97ad2397-7435-4b1a-8190-1183b9952bef" alt="clone this repository" />



## Thats it!

Upon seeing this screen, all that's left is to either wait for me to give your prompt feedback and request changes.\
In the case changes are requested, you need to follow the same workflow to request and updated pull request
If no changes have been requested, it will be merged into the production branch.

## Thank you for contributing!

If the deployment is successful, there will be an option on the screen below to view a "preview" of your contribution before it goes to production!

![6](https://github.com/ConwayCJ/devmoji/assets/94498167/239e14fc-cafe-4a46-9ceb-70c0570baa60)



# Whats next? + Credits

Congrats! You just completed the standard fork -> clone -> edit -> pull request workflow that you'll often encounter as a contributor!

## Roadmap

1. &#x2611; Implement the core functionality of the project.
2. &#x2611; Set up a GitHub repository and make it open source.
3. &#x2611; Create a detailed README file with instructions on how to contribute.
4. &#x2611; Add a "Credits" section for contributors' socials.
5. &#x2611; Style the project.
6. &#x2B55; Enhance the user experience by implementing features such as:
   - Tracking the number of prompts users have answered correctly.
   - Displaying confetti in the exit screen only if all prompts are answered correctly.

## Code Stack
The project is built using the following technologies and frameworks:

<div class="logo-container">
    <img src="https://github.com/ConwayCJ/devmoji/assets/94498167/2431cf81-adb5-4d7e-aa81-093152436547" alt="React Logo" width="80" height="50">
    <img src="https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png" alt="TypeScript Logo" width="50" height="50">
    <img src="https://github.com/ConwayCJ/devmoji/assets/94498167/ff0faa2a-ae21-43c1-aaab-46e1d15ec9b5" width="50" height="50">
    <img src="https://github.com/ConwayCJ/devmoji/assets/94498167/fb60bde2-1934-4c0e-98ac-c703b0abea22" width="50" height="50">
    <img src="https://github.com/ConwayCJ/devmoji/assets/94498167/e3822ed0-d622-44d6-a05f-e2caed910073" width="50" height="50">
    <img src="https://github.com/ConwayCJ/devmoji/assets/94498167/4b5a6fc0-1fbe-463d-aaaa-4ba8dfa234bb" width="50" height="50">
    <img src="https://w7.pngwing.com/pngs/761/513/png-transparent-material-ui-logo-thumbnail.png" alt="Material UI Logo" width="50" height="50">
</div>

