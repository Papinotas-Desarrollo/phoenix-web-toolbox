# Contributing to phoenix-web-toolbox

If you are reading this thank you in advance for making this project better!. Here you will find some guidelines to get you started.

Master branch contains current stable build, any new code should be submitted pointing to the `develop` branch. That contains the ongoing development of the alpha build.

In some cases hotfixes can be accepted that points directly into the `master` branch.

## Coding style

We use eslint with prettier for linting. You can use eslint plugin with your favorite code editor or you can run `yarn lint`.

## Component styling

We based our project on the material-ui css in js api, you can read the documentation [here](https://material-ui.com/styles/basics/). Preffer using the hook api over the others.

## Storybook

We use storybook as a playground for the components, to start the server simply run `yarn start`.

You can read the documentation [here](https://storybook.js.org/docs/basics/introduction/)

## Commits

We use [convential commits](https://www.conventionalcommits.org)

Also remember to squash your commits into meaningful ones before submitting a pull request.

## Submitting a pull request

Pull requests are always welcomed but keep them atomic, don't try to cover many things in a single one. This will make the revision much easier. If you find an error or want to make a change please open an issue first to discuss it with the maintainers.

When developing new features or modyfing existing ones remember to add the corresponding tests. If you are adding a new component remember to add it to the storybook stories.

Start the pull request name with [Component Name/Fix/Refactor/*Other*] (Other may refer to anything you find appropriate) and include a brief summary explaining the content along with a list with the changelog.
