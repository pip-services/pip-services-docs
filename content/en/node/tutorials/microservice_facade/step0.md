---
type: docs
no_list: true
title: "Step 1. Setting up the environment"
linkTitle: "Step 1. Environment setup"


---

Before we can start writing-up some microservices, we’ll need to install a few mandatory prerequisites.

### 1. Compiler and IDE

First and foremost - we’ll need a compiler for your programming language of choice, as well as some sort of code editor. In our examples, we usually use Visual Studio Code, but any fitting IDE will do.

For working with the Node.js programming language, you’ll need to perform its installation and setup the environment. To do this, download and install Node.js from their official site https://nodejs.org/en/download/ . Select the download that corresponds to the operating system you’re using, and follow the installation instructions listed on their site.

Once installed, check that the installation was completed successfully by running the following command from your console:

```bash
node -version
```

If everything was installed successfully, the screen will display the latest version of the Node.js programming language.
We’ll be needing a few additional instruments - use the following commands to install them as well:

```bash
# Install typescript compiler
npm install typescript -g
# Install typescript definitions utility
npm install tsd -g 
# Install typescript api document generator
npm install typedoc -g
# Install mocha test runner
npm install mocha -g
```

Now our project is set up. Continue on to [Step 2 - Creating the Project’s Structure](../step1) to start implementing the facade itself.
