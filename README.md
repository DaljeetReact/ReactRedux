Connect local git to remote step by step please Do not skip any step and check the attach link for the source

$ ssh-keygen -t ed25519 -C "your_email@example.com"
press enter 3 times
1st > Enter a file in which to save the key (/Users/you/.ssh/id_ed25519): [Press enter]
2nd > Enter passphrase (empty for no passphrase): [Type a passphrase]
3rd> Enter same passphrase again: [Type passphrase again]
=================== done with key genrate process==================
your key is stored the (1st step) path when your enter first time

°°°°°°°°°°°°°°°°°°°°°°Adding your SSH key to the ssh-agent °°°°°°°°°°°°
Step 1)))))))))))
check the key id by run this
==) > eval "$(ssh-agent -s)" it will return you a key exmple:  
Agent pid 59566

Step 2))))))))))))
First, check to see if your ~/.ssh/config file exists in the default location.

====>  open ~/.ssh/config 
if yes it will open the textEditor for your
Else throw this error (The file /Users/you/.ssh/config does not exist.))
######## if its error then create new ./config like this

>  touch ~/.ssh/config

Now again run this command 

====>  open ~/.ssh/config 
############################################################
Step 3))))))))))))
you must have open texteditor when you run this command 

====>  open ~/.ssh/config 

Now add this code 
____________________________
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_ed25519
  
____________________________

keep in mind the (IdentityFile ~/.ssh/id_ed25519 )
the id must be (exp : id_ed25519)  same as when you run this command

eval "$(ssh-agent -s)" THISID

Now save and close the terminal
Last step)============  ssh-add -K ~/.ssh/id_ed25519  //your id 

Done on local now lets add this key to ( GITHUB )

Runt this command 
> pbcopy < ~/.ssh/id_ed25519.pub
this will copy the key in your clipboard 

try to paste any where to check Ctrl + V

========================Open Git account =========================
click Settings >  SSH and GPG keys >  New SSH key or Add SSH key. 

Now add any title and press Ctrl+ V  
the key is in you clipboard 

now save  the key and 

>.   git remote add origin https://github.com/user/repo.git 
PAth copy the ssh repo path and add after 
git remote add (path to your repo)

ALL done now try to run git pull on you local

you will get the the repo content on lcoal

Or git push if you want to push to remote repo

°°°°°°°°°°°        THanks happy Coding     °°°°°°°°°°°°°°°°°


