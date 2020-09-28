// array of all possible questions with their reponses and answers
var questions = [
    {
        question: "Which of the following is true about variable naming conventions in JavaScript?",
        responses: ["You should not use any of the JavaScript reserved keyword as variable name.", "JavaScript variable names should not start with a numeral (0-9).", "Both of the above.", "None of the above."],
        answer: "Both of the above."
    },
    {
        question: "Which built-in method combines the text of two strings and returns a new string?",
        responses: ["append()", "concat()", "attach()", "None of the above."],
        answer: "None of the above."
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        responses: ["<js>", "<javascript>", "<scripting>", "<script>"],
        answer: "<script>"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        responses: ["The <body> section", "The <head> section", "Both the <head> section and the <body> section are correct."],
        answer: "Both the <head> section and the <body> section are correct."
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        responses: ['<script href="yyy.js">', '<script name="yyy.js">', '<script src="yyy.js">', 'href= src.yyy.js'],
        answer: '<script src="yyy.js">'
    },
    {
        question: "An external script file must contain the <script> tag",
        responses: ["True", "False"],
        answer: "False"
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        responses: ['alert("Hello World!")', 'alertBox("Hello Word=ld!")', 'msg("Hello World!")', 'msgBox("Hello World!")'],
        answer: 'alert("Hello World!")'
    },
    {
        question: "How do you create a function in JavaScript?",
        responses: ["function:myFunction()", "function = myFunction()", "function myFunction()", "Funk-shun is myFunk-shun()"],
        answer: "function myFunction()"
    },
    {
        question: 'How do you call a function named "myFunction"?',
        responses: ["call myFunction()", "myFunction()", "call function myFunction()"],
        answer: "myFunction()"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        responses: ["if i = 5 then", "if (i == 5)", "if i == 5 then", "if i = 5"],
        answer: "if (i == 5)"
    },
    {
        question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        responses: ['if ("i<>5")', 'if i<>5', 'if (i !=5)', 'if i=! 5 then'],
        answer: "if (i !=5)"
    },
    {
        question: "How can you add a comment in a JavaScript?",
        responses: ["<!--This is a comment-->", "'This is a comment'", "//This is a comment", "COMMENT: This_is_a_comment"],
        answer: "//This is a comment"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        responses: ["onmouseclick", "onclick", "onmouseover", "onchange"],
        answer: "onclick"
    },
    {
        question: "How do you declare a JavaScript variable?",
        responses: ["v carName;", "variable carName;", "var carName;"],
        answer: "var carName;"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        responses: ["=", "X", "-", "*"],
        answer: "="
    },
    {
        question: "Is JavaScript case-sensitive?",
        responses: ["Yes", "No"],
        answer: "Yes"
    }
];