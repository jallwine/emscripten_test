emscripten_test
===============

A sandbox for experimenting with emscripten.


Intro
----------------

To get up and running with emscripten, I built xmllint and put a web interface around it. The idea was to copy
the functionality that is provided [here](http://syssgx.github.com/xml.js/). I'll go through the steps I needed
to take to get it to run. For the most part I'll just be consolidating bits of information I found from various sites,
but I'll also mention a few pitfalls that I ran into. Here are a couple of the pages I'll be referencing:

[https://github.com/kripken/emscripten/wiki/Tutorial](https://github.com/kripken/emscripten/wiki/Tutorial) - Gets you up and running with emscripten
[http://mozakai.blogspot.com/2012/03/howto-port-cc-library-to-javascript.html](http://mozakai.blogspot.com/2012/03/howto-port-cc-library-to-javascript.html) - Goes over how to build libxml2 using emscripten
[https://github.com/kripken/emscripten/wiki/Tutorial#general-tips-and-next-steps](https://github.com/kripken/emscripten/wiki/Tutorial#general-tips-and-next-steps) - At the bottom of the emscripten tutorial, are several great docs for getting more complicated with emscripten.


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
is set up correctly, it should say `emcc: no input files`. I also suggest running the tests mentioned 
[here](https://github.com/kripken/emscripten/wiki/Tutorial#running-emscripten).

Building libxml2
----------------

I followed a [tutorial](http://mozakai.blogspot.com/2012/03/howto-port-cc-library-to-javascript.html) by Alon Zakai.
I'll mostly just be listing the commands I used to build libxml2 as I'm pretty much just following his tutorial. 
If you'd like a more in depth explanation as to what each command does, see Alon's tutorial.

The tutorial uses files which are all bundled up in this repo, so I recommend snagging it: [https://github.com/kripken/xml.js](https://github.com/kripken/xml.js)
I'll be using the test.xml and test.xsd files included in that git repo.

First, get the source for libxml2 and a couple test files. The tutorial above uses version 2.7.8, but I'm going to do it with 2.9.0:

    # download and extract libxml source
    curl http://xmlsoft.org/sources/libxml2-2.9.0.tar.gz -O
    tar xzf libxml2-2.9.0.tar.gz
    cd libxml2-2.9.0

Next, steal a couple xml files to test with
    curl https://raw.github.com/kripken/xml.js/master/test.xsd -O
    curl https://raw.github.com/kripken/xml.js/master/test.xml -O

We'll also need this file when we build it using emscripten, as xmllint depends on libz. 
One of emscripten's tests actually builds libz, so we could run that test
and copy over the library, but we'll just snag it from Alon's repo.
    curl https://raw.github.com/kripken/xml.js/master/libz.a -O

Now, build libxml2 natively so we have something to compare against when we build it to js using emscripten. Notice the flags passed
to configure. When I went through Alon's tutorial, he mentions turning off http and ftp, but nothing about not building the python
bindings or threading support. When I got to the last step of his tutorial, it didn't work and I figured out that turning those options
off fixed the problems.

    ./configure --with-http=no --with-ftp=no --with-python=no --with-threads=no
    make
    ./xmllint --noout --schema test.xsd test.xml

You should see `test.xml validates`. Try editing test.xml so that it fails.

Ok, now to build it using emscripten. It's the same process, except we use a special emscripten commands for configure and make and
add one extra step to convert LLVM bitcode to javascript.

    # Almost the same as above
    emconfigure ./configure --with-http=no --with-ftp=no --with-python=no --with-threads=no
    emmake make

    # convert bitcode to javascript
    emcc -O2 xmllint.o .libs/libxml2.a libz.a -o xmllint.test.js --embed-file test.xml --embed-file test.xsd

    # run our javascript using node
    node xmllint.test.js --noout --schema test.xsd test.xml

You should see `test.xml validates` just like with the native version. 
