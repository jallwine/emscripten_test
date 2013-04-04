emscripten_test
===============

A sandbox for experimenting with emscripten.


Intro
----------------

To get up and running with emscripten, I built xmllint and put a web interface around it. The idea was to copy
the functionality that is provided [here](http://syssgx.github.com/xml.js/). I'll go through the steps I needed
to take to get it to run.


Installing emscripten
---------------------

I started by following emscripten's [tutorial](https://github.com/kripken/emscripten/wiki/Tutorial). Which lead me 
[here](https://gist.github.com/nathanhammond/1974955) as I'm working on OS X 10.8.3. To save you some time I'll go
over what I did below. If you already have emscripten up and running, you can skip this section.

As the [gist](https://gist.github.com/nathanhammond/1974955) above says to do, run these commands to install Homebrew
and the emscripten dependencies:

    # Install Homebrew
    ruby -e "$(curl -fsSkL raw.github.com/mxcl/homebrew/go)"

    # Some deps
    brew install node spidermonkey closure-compiler yuicompressor
    brew install llvm --with-clang

In addition to the ones listed, I also needed to install cmake:

    brew install cmake
    
Homebrew installed LLVM 3.2, which is the version that emscripten needs. I have the latest Xcode command line tools 
installed, which includes LLVM version 4.2. Since emscripten needs LLVM 3.2, I changed my path so it would find the 
version Homebrew install first. This was necessary so I could manually run clang from the command-line to make sure 
it was working. In my .bashrc file I added: 

    export PATH=/usr/local/Cellar/llvm/3.2/bin:$PATH

The first time emscripten runs, it initializes a .emscripten file with various paths. It looks at the LLVM environment
variable to determine where you install LLVM. So I also added this to my .bashrc file:

    export LLVM="/usr/local/Cellar/llvm/3.2/bin"

One last thing I needed to do was to set up a python2 executable. Emscripten requires python2.7, which I already had 
installed, but it specifically was looking for python2. I created a symlink in /usr/bin:

    sudo ln -s /usr/bin/python /usr/bin/python2

Now go to your emscripten git repo, first cloning it if you haven't already. Then run emcc for the first time:

    git clone git://github.com/kripken/emscripten.git
    cd emscripten
    ./emcc

After you run emcc for the first time it will create ~/.emscripten where a bunch of paths are set. If everything
is set up correctly, it should say `emcc: no input files`.
