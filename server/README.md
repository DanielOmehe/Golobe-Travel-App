# NOTICE 
This is the back-end for the golobe project. We are going to be making it with Python and Django.
The server model we are using is REST because... well, it is the most logical choice. In a sense.


# Setting up :happy:
To set up your working environment, you should type the following shell commands.

```sh
python -m venv .venv
. ./.venv/bin/activate
pip install djangorestframework
```

After all that, you should have your dependencies set up properly. Please use the
same name for your corresponding Python virtual environment. In the event that you
cannot, for whatever reason, add your virtual environement to the gitignore file.


# Testing :laptop:
Now, I don't really think I need to tell anybody here how to test a REST API but
if I do, you could use Postman if you like GUIS and if you're using a Mac or Linux,
like me, just use httpie.
