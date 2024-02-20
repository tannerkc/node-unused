# reveal unused

Identify unused variables in your javascript code.

This is a modernization of https://github.com/Kami/node-unused

## cli

`reveal-unused` works with single files, directories or listed files

```shell
$ reveal-unused /path/to/file.js
```
```shell
$ reveal-unused /path/to/file.js /path/to/file2.js /path/to/file3.js
```
```shell
$ reveal-unused /dir
```

### --ignore-params

Comma separated list of function parameters to ignore during unused checks. You often want to know when you forgot to handle `err` or other parameters, but sometimes you have placeholders (`req`, `res`, etc) which you might want to ignore

```shell
$ reveal-unused /path/to/file.js --ignore-params req,res,_
```

## api

### unused(src)

> src is a string of file contents

```javascript
unused(fs.readFileSync(filePath, 'utf8'))
```

Returns an array of objects specifying the name, location, and if the variable is a function parameter

```
{
    name: 'foo',
    loc: {
        line: 1,
        column: 1,
    },
    param: true || false
}
```

## install

```shell
yarn global add reveal-unused
```
```shell
npm i -g reveal-unused
```

## License

Library is distributed under the [Apache license](http://www.apache.org/licenses/LICENSE-2.0.html).
