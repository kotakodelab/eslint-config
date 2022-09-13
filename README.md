# @kotakodelab/eslint-config

## Install

1) ```npm install --save-dev @kotakodelab/eslint-config```

2) Create .eslintrc file in your project root with following content:

```
{
    "extends": "@kotakodelab"
}
```

3) Then add eslint script in the project package.json scripts:

```
scripts": {
	"lint": "eslint ./example-app"
},
```

## Usage

Run ```npm run lint``` to check your code using eslint.

## License

[MIT](LICENSE)