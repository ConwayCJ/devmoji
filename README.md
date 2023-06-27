# Project Name: TBA

## Description
The project aims to provide developers who are new to open source contribution a comfortable introduction to the step-by-step process.

## Roadmap

1. &#x2611; Implement the core functionality of the project.
2. &#x2611; Set up a GitHub repository and make it open source.
3. &#x2B55; Create a detailed README file with instructions on how to contribute.
4. &#x2B55; Add a "Credits" section for contributors' socials.
5. &#x2B55; Style the project. Consider working with a UI designer to collaborate on the design. Provide full credits to the designer in the project.
6. &#x2B55; Enhance the user experience by implementing features such as:
   - Tracking the number of prompts users have answered correctly.
   - Displaying confetti in the exit screen only if all prompts are answered correctly.
7. &#x2B55; Conduct thorough testing and debugging to ensure the project's stability.
8. &#x2B55; Publish regular updates and communicate with the community to gather feedback and suggestions for improvement.

## Contributing
We welcome contributions from the community! To contribute to this project, please follow these steps:

1. Fork the repository on GitHub.
2. Make the necessary changes and commit them.
3. Push your changes to your forked repository.
4. Submit a pull request to the main repository, including a detailed description of your changes.

Please ensure that your code follows the project's coding style guidelines and is well-documented. Our team will review your pull request and provide feedback as necessary.

See code style guidelines [here](/style_guidelines.md)

## Data.tsx contributions

### ***prompt*** key:
  - Your prompt must be in array. Each 'word' or 'emoji' of the prompt is a separate item.

### ***Answer*** key:
  - Your answer must be a string. Separate the word by spaces. Use lowercase lettering.

### ***socials*** key:
  - ***OPTIONAL*** 
  - Follow the following format. LIUrl must be a string. GHurl must be a string.

  Example:
```javascript
socials: {
    LIurl: 'https://www.linkedin.com/in/conwaycj/',
    GHurl: 'https://github.com/ConwayCJ',
  }
```

![image](https://github.com/ConwayCJ/opensourceproject/assets/94498167/d3653e99-9b3c-489e-8b05-1b8593042490)

## Code Stack
The project is built using the following technologies and frameworks:

<div class="logo-container">
    <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3N6cWw1ZHg2am55Y2k0aTV5bXFzbmdoaTRibGZzYWRkZ3I2NncyeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/RJzm826vu7WbJvBtxX/giphy.gif" alt="React Logo" width="100" height="100">
    <img src="https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png" alt="TypeScript Logo" width="100" height="100">
    <img src="https://w7.pngwing.com/pngs/761/513/png-transparent-material-ui-logo-thumbnail.png" alt="Material UI Logo" width="100" height="100">
</div>

## Requirements for Requesting a Git Pull
To ensure the smooth process of requesting a Git pull, please make sure to meet the following requirements:

1. Your code adheres to the project's coding standards and style guidelines.
2. Your code has been thoroughly tested and is free from bugs or errors.
3. You have tested your changes locally and they do not introduce any regressions.
4. Your pull request includes a clear and concise description of the changes made.

Our team will review your pull request and provide feedback or merge it into the main repository if it meets the project's criteria.

---

Feel free to copy and paste the above Markdown code into your README.md file. The sections are now written in Markdown language, as requested.
