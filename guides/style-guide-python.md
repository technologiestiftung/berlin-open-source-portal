---
explains: The style guide to the way we code Python
---

# How we code Python

A lot of the software we make is written in Python.

In general we try to follow the common community guidelines,
including [PEP-8: Style Guide for Python Code](https://www.python.org/dev/peps/pep-0008/) 
and [PEP-257: Docstring Conventions](https://www.python.org/dev/peps/pep-0257/). But these 
don't cover everything important to us, and in addition to that we have a few exceptions.

## Documenting your code

### class docstrings

Whenever you create a class, add a docstring with at least a one-liner:

```py
class SomeClass(object):
    """The one-line explaination"""
    pass
```

If a longer description would be helpful, skip a line and use more sections
(each is optional).  Don't provide useless information like "the attribute
`name` is the name of the object":

```py
class SomeClass(object):
    """Always start with a stand-alone one-liner

    This class has no side-effects.

    Attributes:
        name: what end-users call this instance
    """
    pass
```

### Function docstrings

Similarly:

```py
def simple_function(abc):
    """This function ignores the arguments and always returns None"""
    pass

def complex_function(abc):
    """Always use a one-liner

    Arguments:
        abc: the letters of the alphabet
    """
    pass
```

Don't include unnecessary blank lines around the docstrings.

## Imports

First of all, do not use wildcard imports.

Imports don't have to be in alphabetical order. It is however more or less of a convention that imports that are the furthest away from the current module in are the highest on top. 

Standard library imports like `os`, `system` etc. go on top. Then come imports from installed packages; `django`, `celery` etc. and finally that belong to the current project.

We prefer one line for one import.

## Naming

- don't start method names with `get_` or `set_`. Use properties if possible.

## Testing

All new behaviors should be accompanied by new tests. If a behavior is changed and no tests break, that indicates an important hole in our coverage. Tests should work without internet access or a local database installed

We usually use Mock and py.test.

## Using `flake8` for style guide enforcement

We use `flake8` in order to enforce a uniform code style. Every commit should pass an automated flake8 check with the plugins `pep8`, `mccabe`, and `pep8-naming` and this configuration:

```ini
# one section of flake.cfg

[flake8]
#ignore=E501,E225,E261,W391,E241,E203,W292,W391

exclude=.git,migrations,docs,scripts
max-complexity=8
max-line-length = 119
statistics=True
jobs=1
```

### Commit hooks

Git hooks are great for fast and light-weight tests. Here's how you can setup
your commit hooks for automated style checks. This assumes your project has a
Makefile with a linter command named `check`:

    # .git/hooks/pre-commit

    #!/bin/sh
    make check

Make sure that your virtualenv containing flake8 is activated when committing.
