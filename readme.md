# github-add-collab-cli [![Build Status](https://travis-ci.org/kevva/github-add-collab-cli.svg?branch=master)](https://travis-ci.org/kevva/github-add-collab-cli)

> Add collaborators to Github repos


## Install

```
$ npm install --global github-add-collab-cli
```


## Usage

```
$ github-add-collab --help

  Usage
	$ github-add-collab <user> [repos]

  Example
	$ github-add-collab johndoe github-add-collab yeoman/yo --token 523ef69119
	$ github-add-collab johndoe --add-to-all --token 523ef69119

  Options
	-a, --add-to-all      Add to all repositories
	-s, --add-to-sources  Add to source repositories
	-t, --token           Github token to authenticate with
	-v, --verbose         Show detailed output
```

## Related

* [github-add-collab](https://github.com/kevva/github-add-collab) - API for this module


## License

MIT © [Kevin Martensson](http://github.com/kevva)
