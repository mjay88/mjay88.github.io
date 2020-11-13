/**
 *Operators : 
 *  There are several different types of operators in JS, assignment operator,
 * arithemtic operators, comparison operators, and logical operators, and a few more to boot.
 * 
 * The assignment operator is simply an equals sign "=", you may recognize this from our 
 * variables page. The assignment operator allows you to do just that, assign a value to
 * something, usually variables.
 * 
 * var number = 8;
 * let letters = 'abc';
 * 
 * Here is a list of JS assingment operators:
 * = assignment             x = 1;
 * += addition              x += 1; x = 3
 * -= subtraction           x -= 1; x = 2
 * *= multiplication        x *= 2; x = 4
 * /= division              x /= 2; x = 2;
 * %= Modulus               x %= 1; x = 0;
 * 
 * 
 * Arithmetic operators are pretty straight forward as well. They do exaclty what you expect,
 * + addition operator       1 + 1 = 2
 * - subtration              5 - 3 = 2
 * * multiplication          5 * 5 = 25
 * / division                8 / 4 = 2
 * ++ incement               a++ = a + 1
 * -- decrement              a-- = a - 1
 * 
 * the modulus operator is also an arithmetic operator, it returns the remainder of a division
 * calculation
 * 
 * % modulus               10 % 4 = 2; the modulus operator is handy when trying to find 
 *                                     whether or not something is even or odd.
 * 
 * Comparison Operators : are used to compares values, similar to arithmatic. Comparison 
 * operations will always result in a boolean, that is true or false
 * 
 * == equality operator     1 == 1; true      //the equality operator does type coercion
 *                          '1' == 1; true
 *                          1 == 2; false
 * === strict equality      "1" === "1"; true // The strict equality operator will compare
 *                          1 === 1; true        value and type
 *                          1 === "1"; false
 * !==  inequality          1 != 1; false // !== translates to 'not equal'. 
 *                          1 ! = 2; true
 * > greater than           2 > 1; true
 * < less than              5 < 7; true
 * >= greater or equal      2 >= 1; true
 * <= less or equal         2 <= 1; false
 * 
 * 
 * 
 * Logical Operators : Logical operators are used to determine logic between the values of 
 * expressions or variables.
 * 
 * && logical and          5 < 1 && 3 > 2;  false
 * || logical or           1 === 1 || 2 === 2; true
 * ! logical NOT           !true;   false
 *                         !(1 === 2) true
 * 
 * Typeof Operator : the typeof operator is used to check the trype of a value. It will often
 * evaluate tro either primitve type, object, or function. The value produce by the typeof 
 * operator is always string format: 
 * 
 * typeof 124;              'number'
 * typeof 'text';           'string'
 * typeof NaN;              'number'
 * typeof true;             'boolean'
 * typeof [];               'object'
 * typeof {};               'object'
 * typeof null;             'object'
 * The typeof operator will also return 'function' when used to evaluate a named function or
 * anonymous function
 * 
 * Ternary Operator : The ternary operator has the sytax of : 
 * 
 *      statement ? statement : statement;
 * 
 * Statements can be expressions or a single value...
 * 
 *                      (if)    (else)
 * let result = statement ? value : value;
 * 
 * the ternary statement is a syntatically shorter if /else statement, check our line 82...if
 * the first statement is true, return the first value, else, return the second value
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */