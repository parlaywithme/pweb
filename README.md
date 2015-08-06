Branch `gh-pages` is production

## Getting started (Building/ Running)

- Install rubygems
- Install server: `gem install jekyll`
- Install Node/npm
- Install Bower: `npm install -g bower`
- Install Gulp `npm install -g gulp`
- Be sure to be in the project directory
- Install dependencies: `npm install`, `bower install`
- Run `gulp`
- [http://localhost:3000](http://localhost:3000) will open automatically

## Components
Site components are broken out into individual folders with thier `.html`, `.scss`, & `.js` files. located in the *_includes* folder, e.g.,

```
| _inclides/
|--| component/
|--|--| component.html
|--|--| component.js
|--|--| component.scss
```

- Do not edit *global.js* instead find the appropriate partial in *_includes/*
- Partial JS are combined together in the build process with guilp
- gulp task -> gulp scripts

## Example Lists

*__To consider: Edit the number and descriptions of examples. It is recommended to keep the descriptions short; 4 lines.__*

The example list data is pulled from the YAML file in _data. It follows the following schemea:

```
- title: Fantasy Football
  emoji: football
  description: this is from the data
```

The emoji is the name(case sensitive) of the .png file located in images/emoji

For examples with multiple emoji headers, use the multi-emoji.

```
- title: multiple
  multi-emoji:
    - emoji1
    - emoji2
    - emoji3
  description: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
```
