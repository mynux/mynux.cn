
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

## NOTE THAT IN SOME CASE IF YOU GOT SUCH EXCEPTION:

## 'There was a problem confirming the ssl certificate: [SSL: TLSV1_ALERT_PROTOCOL_VERSION] tlsv1 alert'
## JUST INSTALL PIP VIA FOLLOW:

curl https://bootstrap.pypa.io/get-pip.py | python     # for Python 2.7
curl https://bootstrap.pypa.io/get-pip.py | python3    # for python 3

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

## NOTE THAT IN SOME CASE IF YOU GOT SUCH EXCEPTION:

## 'There was a problem confirming the ssl certificate: [SSL: TLSV1_ALERT_PROTOCOL_VERSION] tlsv1 alert'
## JUST INSTALL PIP VIA FOLLOW:

curl https://bootstrap.pypa.io/get-pip.py | python     # for Python 2.7
curl https://bootstrap.pypa.io/get-pip.py | python3    # for python 3

```

Just run command `jupyter notebook` to start jupyter book.

### Install Tensorboard
Install Tensorboard with pip
```
# for python 3
python3 -m pip install --upgrade pip
python3 -m pip install tensorboard

# for python 2.7
python -m pip install --upgrade pip
python -m pip install tensorboard

## NOTE THAT IN SOME CASE IF YOU GOT SUCH EXCEPTION:

## 'There was a problem confirming the ssl certificate: [SSL: TLSV1_ALERT_PROTOCOL_VERSION] tlsv1 alert'
## JUST INSTALL PIP VIA FOLLOW:

curl https://bootstrap.pypa.io/get-pip.py | python     # for Python 2.7
curl https://bootstrap.pypa.io/get-pip.py | python3    # for python 3

```

Just run command `tensorboard --logdir=path` to start tensorboard.

### Reference
[1.][Official Tensorflow Installation On Mac](https://www.tensorflow.org/install/install_mac).
