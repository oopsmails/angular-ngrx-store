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

### Http and json-server

json-server is a file-based database that exposes a REST API based on the JSON schema. In the root of our project (/), create a db.json with the following content:

```
{
  "shopping": []
}

```

Then install json-server globally on your machine using npm or yarn:

`npm i json-server -g`

Finally, start your database and API by opening another terminal window and typing:

`json-server db.json`



## Setup Angular:

`npm install -g @angular/cli`


## Create Project and Components:

### ng new angular9-ngrx-store-blockchain

`ng g c blockchain`


### ng new angular9-ngrx-store-basic

`npm install @ngrx/store`

### ng add @ngrx/store-devtools to enable Redux extension in Chrome

`ng add @ngrx/store-devtools`


### ng generate service services/Shopping

### Using @Effect()

Install @ngrx effects by running the following in your terminal:

`npm install @ngrx/effects`

As always, you can use the Angular CLI to set this up automatically:

`ng add @ngrx/effects` <--- already with angular 9



## Problems and Issues:

### no provider for formbuilder angular 9:

```
@NgModule({
  imports: [
      BrowserModule /* or CommonModule */, 
      FormsModule,
      ReactiveFormsModule <--------------------------------------- need this ReactiveFormsModule
  ],
  ...
})
```













