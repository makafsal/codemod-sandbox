# codemod-sandbox
> A Sandbox to try out `@carbon/upgrade` [package](https://github.com/carbon-design-system/carbon/tree/main/packages/upgrade) Codemods. 

## Getting started

```console
# Clone the repo
git clone git@github.com:makafsal/codemod-sandbox.git

# Change to app directory
cd codemod-sandbox

# Create your branch
git checkout -b <branchName>

# Install dependencies
yarn
```

### Run Migration Transforms
Please refer to the `@carbon/upgrade` usage section [here](https://github.com/carbon-design-system/carbon/tree/main/packages/upgrade#usage).

### Run Transforms Using `jscodeshift`
```console
npx @carbon/upgrade migrate <codemode-name> <path-to-file> --write
```
For example:
```console
npx @carbon/upgrade migrate ibm-products-update-http-errors src/UnsortedPropExample/UnsortedPropExample.jsx --write
```

## [Demo](https://github.com/carbon-design-system/ibm-products/issues/6155#issuecomment-2422282828)
Please have a look at [Demo](https://github.com/carbon-design-system/ibm-products/issues/6155#issuecomment-2422282828).
