### UNIT 1 ###

# 1 - INTRO #
1. Why learn Angular JS over other frameworks like Ember, Backbone, Knockout, etc?
Angular JS has the largest userbase, the most documentation on sites like stackoverflow & youtube, and is sponsored by google.

2. People have some very strong opinions about Angular. What are 3 common complaints people have about Angular?
* It is enormous and complex, the learning curve is steeper than other frameworks
* There are constraints involving features like scopes & routing which can create idiosyncratic bugs and limitations
* Documentation is poor and updates/new releases can cause older codebases to require total overhaul

3. Is Angular an MVC framework?
Kind of; it's model view whatever (can be controller but can also be model view presenter, model view viewModel, etc.)

4. Turn to the Angular docs. Find ng-app. What is it and what does it do? What does ng stand for?
It auto-bootstraps an AngularJS application. "ng" indicates a core module in Angular and is a stand-in for the word "angular."

# 2 - DATA BINDING #
1. What does ng-model do?
It binds the value of the user input to a property in the scope.

2. What is "dirty checking"?
The $scope is scanned to see whether the boolean CSS property ng-dirty is true - that checks whether a user has modified a form. There is also the 'pristine' attribute indicating that no moficiations have been made.

3. Find a way to set the initial value of "name" as "BoJack" (without writing a controller).
`ng-init='name="BoJack"'`

4. What are those {{ }} expressions? Are they Handlebars?
No, the AngularJS curly braces are for expression evaluation. The delimiters can be changed to custom, e.g. <% something <%

5. Explain what two-way data binding is.
An initial page template creates the view. Changes to the model are then immediately reflected in the view, and changes in the view are immediately propogated to the model. The controller is separated from the view.

6. BONUS: Research the $digest loop
* When a change is made on the page, it calls $apply(), which calls $digest(). $digest() tracks all UI bindings and, via dirty checking, compares the old and new values to check for changes.
* $digest() also runs through the $asyncQueue of the $evalAsync list. These are fns to evaluate after the fn that triggered the $digest().
* $scope.$apply() can be used to force a $digest() loop outside of AngularJS (e.g. when using jQuery).
* $apply() should only be called in a service, not in a controller.

# 3 - NO QUESTIONS #

# 4 - EXPRESSIONS AND FILTERS #

1. What are Angular expressions? How do they compare to tags from templating engines you've used before?
Expressions are written between curly braces {{ like so }}. They evaluate the result of javascript expressions and display the result in the view. They're visually similar to tags such as those used in handlebars, but they have a different function and mechanism.

2. What happens when you write invalid code in an expression? What type of error do you get?
There is no explicit error, however the view displays the expression as plaintext {{ like this }}.

3. What are Angular filters? Describe what a filter does and then name four built-in filters, including one that we haven't used yet.
Filters are used to format the output of expressions. The format is {{ like-this | filter-name-optional-params }}. You can use one of the built-in filters or create a custom filter. Built-in filters include currency, date, number:X, and json.

4. What's the syntax for filters?
See above. Optional params = the params required with some filters, i.e. | number:2, or | date: 'dd-MM-yyyy'.

5. Can you use more than one filter?
Yes. Double pipe. {{ like-this | filter1 | filter2 }}

6. We'll soon see how to create custom filters. What is a use case for a custom filter?
When you have multiple expressions that you want to transform in the same manner.
