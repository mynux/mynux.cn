
### Install tensorflow
install virtualenv

```
sudo easy_install pip
sudo pip install --upgrade virtualenv
```

creating virtualenv and related setup tools.

```
# for python 2.7
virtualenv --system-site-packages ~/tensorflow
# for python 3.n
virtualenv --system-site-packages -p python3 ~/tensorflow
```

activating the virtualenv according to user shell

```
# for bash, sh, ksh, or zsh
source ~/tensorflow/bin/activate

# csh or tcsh
source ~/tensorflow/bin/activate.csh

# for fish
source ~/tensorflow/bin/activate.fish
```

check pip version, upgrade if <= 8.1

```
easy_install -U pip
```

install tensorflow and necessary environment.

```
pip install --upgrade tensorflow      # for Python 2.7
pip3 install --upgrade tensorflow     # for Python 3.n
```

OK, that's all.

deactivate tensorflow:

```
deactivate
```

remove tensorflow:

```
rm ~/tensorflow
```

### Install Jupyter
Install Jupyter with pip

```
# for python3
python3 -m pip install --upgrade pip
python3 -m pip install jupyter

# for python2.7
python -m pip install --upgrade pip
python -m pip install jupyter
```

Just run command `jupyter notebook` to start jupyter book.

### Reference
[1.][Official Tensorflow Installation On Mac](https://www.tensorflow.org/install/install_mac).
