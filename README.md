Open Backers &middot; ![GitHub license](https://img.shields.io/github/license/zakokor/openbackers)
=====

Open Backers is a free and light way to launch your open source project.

> **Warning**: Open Backers is still in development. You can try it, but the link could change without notice or stop working.

## Motivation

There are many open source projects that are created without a budget, waiting to be discovered, so I thought that one way to help would be to create a simple tool that helps to exchange banners, open and transparent, to randomly display open source projects.

* Anyone with a website (not necessarily with an open source project) could display a banner.
* Anyone with an open source project can subscribe (and should reciprocally support and publish a banner).

## Example

![Open Backers](http://openbackers.com/banner)

## Contributing

Open Backers is free, open-source software licensed under AGPLv3 and contributions of any kind are welcome!. You can open issues for bugs you've found or features you think are missing. You can also submit pull requests to this repository.

### [Quickstart guide for Publishers]

Insert a banner into your website or Github page, ideally on the Backers section.

**Use markdown**
`![Open Backers](http://openbackers.com/banner)`

**Directly on your website**
`<img src="http://openbackers.com/banner" alt="Open Backers" width="224px" height="90px" />`

### [Quickstart guide for Developers / Open Source Projects]

If you have a great open source project to launch, this is how you do it.

1. Create a transparent PNG image (224x90 pixels) with your project logo/illustration. You can download a blank file [here](./template.png)
2. Convert your image to base64.
3. Get the code and replace it with your image on the xlink:href attribute.

```
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="240" height="110">
<rect x="0" y="0" rx="5" width="224" height="90" fill="#f9f9f9" />
<a xlink:href="https://pegao.co" target="_blank">
	<image x="0" y="0" width="224" height="90" xlink:href="data:image/png;base64,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"/>
</a>
<a xlink:href="http://github.com/zakokor/openbackers" target="_blank">
	<text x="120" y="100" shape-inside="rectangle(50,10,200,80)" font-family="sans-serif" font-size="10px" fill="#999">
		I'm an Open Backers
	</text>
</a>
</svg>
```
4. Insert a banner into your website or Github page, ideally on the Backers section.

**Use markdown**
`![Open Backers](http://openbackers.com/banner)`

**Directly on your website**
`<img src="http://openbackers.com/banner" alt="Open Backers" width="224px" height="90px" />`


### Built With

* [NodeJS](https://github.com/nodejs/node)
* [Express](https://github.com/expressjs/express)
* No database

## Development

### Start the application

node index.js

### License

Open Backers is [GNU Affero License](./LICENSE).
