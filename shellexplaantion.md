# Bash test
An if statement typically looks like
```
if commands1
then
   commands2
else
   commands3
fi
```

## The then clause is executed if the exit code of commands1 is zero. If the exit code is nonzero, then the else clause is executed.  commands1 can simple or complex. It can, for example, be a sequence of one or more pipelines separated by one of the operators ;, &, &&, or ||. The if conditions shown below are just special cases of commands1:
```
if [ condition ]
```
1. This is the traditional shell test command. It is available on all POSIX shells. The test command sets an exit code and the if statement acts accordingly. Typical tests are whether a file exists or one number is equal to another.
```
if [[ condition ]]
```
2. This is a new upgraded variation on test from ksh that bash and zsh also support. This test command also sets an exit code and the if statement acts accordingly. Among its extended features, it can test whether a string matches a regular expression.
```
if ((condition))
```
3. Another ksh extension that bash and zsh also support. This performs arithmetic. As the result of the arithmetic, an exit code is set and the if statement acts accordingly. It returns an exit code of zero (true) if the result of the arithmetic calculation is nonzero. Like [[...]], this form is not POSIX and therefore not portable.
```
if (command)
```
4. This runs command in a subshell. When command completes, it sets an exit code and the if statement acts accordingly. A typical reason for using a subshell like this is to limit side-effects of command if command required variable assignments or other changes to the shell's environment. Such changes do not remain after the subshell completes.
```
if command
```
5. command is executed and the if statement acts according to its exit code.



(…) parentheses indicate a subshell. What's inside them isn't an expression like in many other languages. It's a list of commands (just like outside parentheses). These commands are executed in a separate subprocess, so any redirection, assignment, etc. performed inside the parentheses has no effect outside the parentheses.
With a leading dollar sign, $(…) is a command substitution: there is a command inside the parentheses, and the output from the command is used as part of the command line (after extra expansions unless the substitution is between double quotes, but that's another story).
{ … } braces are like parentheses in that they group commands, but they only influence parsing, not grouping. The program x=2; { x=4; }; echo $x prints 4, whereas x=2; (x=4); echo $x prints 2. (Also braces being keywords need to be delimited and found in command position (hence the space after { and the ; before }) whereas parentheses don't. That's just a syntax quirk.)
With a leading dollar sign, ${VAR} is a parameter expansion, expanding to the value of a variable, with possible extra transformations. The ksh93 shell also supports ${ cmd;} as form of command substitution that doesn't spawn a subshell.
((…)) double parentheses surround an arithmetic instruction, that is, a computation on integers, with a syntax resembling other programming languages. This syntax is mostly used for assignments and in conditionals. This only exists in ksh/bash/zsh, not in plain sh.
The same syntax is used in arithmetic expressions $((…)), which expand to the integer value of the expression.
[ … ] single brackets surround conditional expressions. Conditional expressions are mostly built on operators such as -n "$variable" to test if a variable is empty and -e "$file" to test if a file exists. Note that you need a space around each operator (e.g. [ "$x" = "$y" ], not [ "$x"="$y" ]), and a space or a character like ; both inside and outside the brackets (e.g. [ -n "$foo" ], not [-n "$foo"]).
[[ … ]] double brackets are an alternate form of conditional expressions in ksh/bash/zsh with a few additional features, for example you can write [[ -L $file && -f $file ]] to test if a file is a symbolic link to a regular file whereas single brackets require [ -L "$file" ] && [ -f "$file" ]. See Why does parameter expansion with spaces without quotes works inside double brackets [[ but not single brackets [? for more on this topic.
In the shell, every command is a conditional command: every command has a return status which is either 0 indicating success or an integer between 1 and 255 (and potentially more in some shells) indicating failure. The [ … ] command (or [[ … ]] syntax form) is a particular command which can also be spelled test … and succeeds when a file exists, or when a string is non-empty, or when a number is smaller than another, etc. The ((…)) syntax form succeeds when a number is nonzero. Here are a few examples of conditionals in a shell script:

Test if myfile contains the string hello:

if grep -q hello myfile; then …
If mydir is a directory, change to it and do stuff:

if cd mydir; then
  echo "Creating mydir/myfile"
  echo 'some content' >myfile
else
  echo >&2 "Fatal error. This script requires mydir to exist."
fi
Test if there is a file called myfile in the current directory:

if [ -e myfile ]; then …
The same, but also including dangling symbolic links:

if [ -e myfile ] || [ -L myfile ]; then …
Test if the value of x (which is assumed to be numeric) is at least 2, portably:

if [ "$x" -ge 2 ]; then …
Test if the value of x (which is assumed to be numeric) is at least 2, in bash/ksh/zsh:

if ((x >= 2)); then …

