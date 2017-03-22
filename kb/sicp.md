
https://sarabander.github.io/sicp/

languages for modeling
approches for abstraction


# 1 Building Abstractions with Procedures

Introduction to Lisp, primitive values, expressions, functions, conditionals.

Recursion

Asymptotic complexity

### 1.1 The Elements of Programming

A powerful programming language is more than just a means for instructing a computer to perform tasks. The language also serves as a framework within which we organize our ideas about processes.

Every powerful language has three mechanisms for accomplishing this:

primitive expressions
: which represent the simplest entities the language is concerned with,

means of combination
: by which compound elements are built from simpler ones, and

means of abstraction
: by which compound elements can be named and manipulated as units.

1.1.1 Expressions
1.1.2 Naming and the Environment
1.1.3 Evaluating Combinations
1.1.4 Compound Procedures

## 1.1.5 The Substitution Model for Procedure Application

models of how interpreters work

The substitution model
: is only the first of these models—a way to get started thinking formally about the evaluation process. In general, when modeling phenomena in science and engineering, we begin with simplified, incomplete models. As we examine things in greater detail, these simple models become inadequate and must be replaced by more refined models.

Applicative order versus normal order

normal-order evaluation
: the interpreter first evaluates the operator and operands and then applies the resulting procedure to the resulting arguments - “fully expand and then reduce”

applicative-order evaluation
: alternative evaluation model would not evaluate the operands until their values were needed. Instead it would first substitute operand expressions for parameters until it obtained an expression involving only primitive operators, and would then perform the evaluation. - "lazy"


1.1.6 Conditional Expressions and Predicates
1.1.7 Example: Square Roots by Newton’s Method
## 1.1.8 Procedures as Black-Box Abstractions

Observe that the problem of computing square roots breaks up naturally into a number of subproblems: how to tell whether a guess is good enough, how to improve a guess, and so on. Each of these tasks is accomplished by a separate procedure. The entire sqrt program can be viewed as a cluster of procedures

decomposition strategy
: The importance of this decomposition strategy is not simply that one is dividing the program into parts. After all, we could take any large program and divide it into parts—the first ten lines, the next ten lines, the next ten lines, and so on. Rather, it is crucial that each procedure accomplishes an identifiable task that can be used as a module in defining other procedures.

For example, when we define the good-enough? procedure in terms of square, we are able to regard the square procedure as a “black box.” We are not at that moment concerned with how the procedure computes its result, only with the fact that it computes the square. The details of how the square is computed can be suppressed, to be considered at a later time.

square is not quite a procedure but rather an abstraction of a procedure, a so-called procedural abstraction.

block structure
: scope nesting, We will use block structure extensively to help us break up large programs into tractable pieces.

Embedded definitions must come first in a procedure body. The management is not responsible for the consequences of running programs that intertwine definition and use.

## 1.2 Procedures and the Processes They Generate

The ability to visualize the consequences of the actions under consideration is crucial to becoming an expert programmer, just as it is in any synthetic, creative activity.

## 1.2.1 Linear Recursion and Iteration

recursive process

iterative process
:  In general, an iterative process is one whose state can be summarized by a fixed number of state variables, together with a fixed rule that describes how the state variables should be updated as the process moves from state to state and an (optional) end test that specifies conditions under which the process should terminate.

In contrasting iteration and recursion, we must be careful not to confuse the notion of a recursive process with the notion of a recursive procedure.

## 1.2.2 Tree Recursion

tree recursion

1.2.3 Orders of Growth
1.2.4 Exponentiation
1.2.5 Greatest Common Divisors
1.2.6 Example: Testing for Primality
## 1.3 Formulating Abstractions with Higher-Order Procedures

One of the things we should demand from a powerful programming language is the ability to build abstractions by assigning names to common patterns and then to work in terms of the abstractions directly.


higher-order procedures
: are procedures that manipulate procedures. Often the same programming pattern will be used with a number of different procedures. To express such patterns as concepts, we will need to construct procedures that can accept procedures as arguments or return procedures as values.

Interesting integral example

(define (integral f a b dx)
  (define (add-dx x) (+ x dx))
  (* (sum f (+ a (/ dx 2.0)) add-dx b)
     dx))

1.3.1 Procedures as Arguments
### 1.3.2 Constructing Procedures Using Lambda

 A *let* expression is simply syntactic sugar for the underlying *lambda* application.

### 1.3.3 Procedures as General Methods

With higher-order procedures, such as the integral procedure of 1.3.1, we began to see a more powerful kind of abstraction: procedures used to express general methods of computation, independent of the particular functions involved.

1.3.4 Procedures as Returned Values

The above examples demonstrate how the ability to pass procedures as arguments significantly enhances the expressive power of our programming language. We can achieve even more expressive power by creating procedures whose returned values are themselves procedures.

We began section 1.3 with the observation that compound procedures are a crucial abstraction mechanism, because they permit us to express general methods of computing as explicit elements in our programming language. Now we’ve seen how higher-order procedures permit us to manipulate these general methods to create further abstractions.

As programmers, we should be alert to opportunities to identify the underlying abstractions in our programs and to build upon them and generalize them to create more powerful abstractions. This is not to say that one should always write programs in the most abstract way possible; expert programmers know how to choose the level of abstraction appropriate to their task. But it is important to be able to think in terms of these abstractions, so that we can be ready to apply them in new contexts. The significance of higher-order procedures is that they enable us to represent these abstractions explicitly as elements in our programming language, so that they can be handled just like other computational elements.

first-class functions
: In general, programming languages impose restrictions on the ways in which computational elements can be manipulated. Elements with the fewest restrictions are said to have first-class status. Some of the “rights and privileges” of first-class elements are:
They may be named by variables.
They may be passed as arguments to procedures.
They may be returned as the results of procedures.
They may be included in data structures.

Lisp, unlike other common programming languages, awards procedures full first-class status. This poses challenges for efficient implementation, but the resulting gain in expressive power is enormous.66


2 Building Abstractions with Data
2.1 Introduction to Data Abstraction
2.1.1 Example: Arithmetic Operations for Rational Numbers
2.1.2 Abstraction Barriers
2.1.3 What Is Meant by Data?
2.1.4 Extended Exercise: Interval Arithmetic
2.2 Hierarchical Data and the Closure Property
2.2.1 Representing Sequences
2.2.2 Hierarchical Structures
2.2.3 Sequences as Conventional Interfaces
2.2.4 Example: A Picture Language
2.3 Symbolic Data
2.3.1 Quotation
2.3.2 Example: Symbolic Differentiation
2.3.3 Example: Representing Sets
2.3.4 Example: Huffman Encoding Trees
2.4 Multiple Representations for Abstract Data
2.4.1 Representations for Complex Numbers
2.4.2 Tagged data
2.4.3 Data-Directed Programming and Additivity
2.5 Systems with Generic Operations
2.5.1 Generic Arithmetic Operations
2.5.2 Combining Data of Different Types
2.5.3 Example: Symbolic Algebra
3 Modularity, Objects, and State
3.1 Assignment and Local State
3.1.1 Local State Variables
3.1.2 The Benefits of Introducing Assignment
3.1.3 The Costs of Introducing Assignment
3.2 The Environment Model of Evaluation
3.2.1 The Rules for Evaluation
3.2.2 Applying Simple Procedures
3.2.3 Frames as the Repository of Local State
3.2.4 Internal Definitions
3.3 Modeling with Mutable Data
3.3.1 Mutable List Structure
3.3.2 Representing Queues
3.3.3 Representing Tables
3.3.4 A Simulator for Digital Circuits
3.3.5 Propagation of Constraints
3.4 Concurrency: Time Is of the Essence
3.4.1 The Nature of Time in Concurrent Systems
3.4.2 Mechanisms for Controlling Concurrency
3.5 Streams
3.5.1 Streams Are Delayed Lists
3.5.2 Infinite Streams
3.5.3 Exploiting the Stream Paradigm
3.5.4 Streams and Delayed Evaluation
3.5.5 Modularity of Functional Programs and Modularity of Objects
4 Metalinguistic Abstraction
4.1 The Metacircular Evaluator
4.1.1 The Core of the Evaluator
4.1.2 Representing Expressions
4.1.3 Evaluator Data Structures
4.1.4 Running the Evaluator as a Program
4.1.5 Data as Programs
4.1.6 Internal Definitions
4.1.7 Separating Syntactic Analysis from Execution
4.2 Variations on a Scheme — Lazy Evaluation
4.2.1 Normal Order and Applicative Order
4.2.2 An Interpreter with Lazy Evaluation
4.2.3 Streams as Lazy Lists
4.3 Variations on a Scheme — Nondeterministic Computing
4.3.1 Amb and Search
4.3.2 Examples of Nondeterministic Programs
4.3.3 Implementing the Amb Evaluator
4.4 Logic Programming
4.4.1 Deductive Information Retrieval
4.4.2 How the Query System Works
4.4.3 Is Logic Programming Mathematical Logic?
4.4.4 Implementing the Query System
4.4.4.1 The Driver Loop and Instantiation
4.4.4.2 The Evaluator
4.4.4.3 Finding Assertions by Pattern Matching
4.4.4.4 Rules and Unification
4.4.4.5 Maintaining the Data Base
4.4.4.6 Stream Operations
4.4.4.7 Query Syntax Procedures
4.4.4.8 Frames and Bindings
5 Computing with Register Machines
5.1 Designing Register Machines
5.1.1 A Language for Describing Register Machines
5.1.2 Abstraction in Machine Design
5.1.3 Subroutines
5.1.4 Using a Stack to Implement Recursion
5.1.5 Instruction Summary
5.2 A Register-Machine Simulator
5.2.1 The Machine Model
5.2.2 The Assembler
5.2.3 Generating Execution Procedures for Instructions
5.2.4 Monitoring Machine Performance
5.3 Storage Allocation and Garbage Collection
5.3.1 Memory as Vectors
5.3.2 Maintaining the Illusion of Infinite Memory
5.4 The Explicit-Control Evaluator
5.4.1 The Core of the Explicit-Control Evaluator
5.4.2 Sequence Evaluation and Tail Recursion
5.4.3 Conditionals, Assignments, and Definitions
5.4.4 Running the Evaluator
5.5 Compilation
5.5.1 Structure of the Compiler
5.5.2 Compiling Expressions
5.5.3 Compiling Combinations
5.5.4 Combining Instruction Sequences
5.5.5 An Example of Compiled Code
5.5.6 Lexical Addressing
5.5.7 Interfacing Compiled Code to the Evaluator
