# Bootsrappie

I find it easiest to package all Java Script applications as es6 modules.
Bootstrappie helps me do this in a few ways:

There are multiple way to use boostrappie.

## ... within an npm script

```json

{

  "script":{
    "run-script":"bootstrappie <module path> --arg1=val1 --arg2=val2"
  }
}
```

## ... within a compiled applications

Here, bootstrappie runs

```javascript
import bootstrappie from "bootstrappie";
const args = ...;
const application = ...;
const result = boostrappie(application, args);
```
