# angular-9-ngrx-store

From: https://appdividend.com/2018/01/31/angular-ngrx-store-tutorial-example-scratch/

## Setup Environment:

### Git:

Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

git config --global credential.helper store

Then, 

git pull

The storage format is a .git-credentials file, stored in plaintext.

### install/update NodeJS

#### sudo apt purge nodejs npm

#### curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash

##### if no "curl", then sudo apt install curl
if get "locked" error, then normally restarting will resolve it.

##### error Command 'nvm' not found, did you mean:

in that case you can run this command

`source ~/.nvm/nvm.sh`

OR you can put it in the file /.bashrc or ~/.profile to automatically load it

Here, put it in .profile



nvm install node

nvm install 10.16.3

v13.11.0

nvm ls
nvm use v13.11.0

nvm -v
node -v
npm -v

## Setup Angular:

npm install -g @angular/cli


## Create Project and Components:

ng new angular9-ngrx-store-blockchain

ng g c blockchain
















