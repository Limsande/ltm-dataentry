## About this page ##
This tool is used to manage a collection of records for the _Leipzig Time Machine_ project. A  record describes the
linkage of two mentions of the same person in different documents.

This tool offers the following possibilities:
- Create user account, log in to user account.
- view, edit, create records

![An overview of the page](../wireframes/overview.png)


## View and edit data ##
__Note__: This function is not yet available.

By clicking on __All Entries__ (in the main navigation bar) you will get a list of all records.  The records can be
clicked to get to the detailed view.

In the __Detail View__ of an record all its values can be viewed. If the user is logged in, the  record can be marked as
wrong or a change can be suggested. A click on the respective button leads to an input mask to add a note to the record.

![List records](../wireframes/list_nosearch.png)
![Edit a record](../wireframes/edit.png)


## Create a new record ##
__Note__: The actual creation of an record is not yet supported.

The link __New record__ in the main navigation bar leads to an input mask, which can be used to create a new data record.
can be created. If you are not already logged in, you will first be redirected to the login page. A  successful login
will lead you back to the page for creating the record.

![Create a new record](../wireframes/create.png)


## Login and registration ##
__Note__: Registration is not yet supported. A successful login is not saved on the client side, so it is lost after an
action that causes a page change. In a real scenario, a token exchange with the backend would be a possible
implementation for this.

Registered users can log in via the __Login__ link of the main navigation. If a user has no account yet, he can create
one via the __Create account__ link on the login page.

![Login](../wireframes/login_register.png)


## Language setting ##
The tool recognizes the language set in the browser and switches accordingly. German is supported, in all other cases
the page appears in English.
