
# Multi-Agent Systems

These are notes taken in [Multiagent Systems class (AE4M36MAS)](https://cw.fel.cvut.cz/wiki/courses/ae4m36mas/start) taught at [CTU FEE](https://www.fel.cvut.cz/en).

Multiagent system @mas2013-l01-introduction-v07.pdf#6
: is a collection of multiple autonomous agents, each acting towards its objectives while all interacting in a shared environment, being able to communicate and possibly coordinate their actions.

Agent @mas2013-l01-introduction-v07.pdf#15
: |
    [Russell & Norvig] An agent is anything that can perceive its environment (through its sensors) and act upon that environment (through its effectors).<br>[Wooldridge & Jennings] An agent is a computer system that is situated in some environment, and that is capable of autonomous action in this environment in order to meet its design objectives/delegated goals.

### Autonomous Agent Properties

autonomous @mas2013-l01-introduction-v07.pdf#18
: the agent is self goal-directed and acts without requiring user initiation and guidance; it can choose its own goal and the way to achieve it; its behavior is determined by its experience; we have no direct control over it

reactive @mas2013-l01-introduction-v07.pdf#18
: the agent maintains an ongoing interaction with its environment, and responds to changes that occur in it

proactive @mas2013-l01-introduction-v07.pdf#18
: the agent generates and attempts to achieve goals; it is not driven solely by events but takes the initiative

sociable @mas2013-l01-introduction-v07.pdf#19
: the agent interacts with other agents (and possibly humans) via cooperation, coordination, and negotiation; it is aware and able to reason about other agents and how they can help it achieve its own goals

coordination @mas2013-l01-introduction-v07.pdf#19
: is managing the interdependencies between actions of multiple agents (not necessarily cooperative)

cooperation @mas2013-l01-introduction-v07.pdf#19
: is working together as a team to achieve a shared goal

negotiation @mas2013-l01-introduction-v07.pdf#19
: is the ability to reach agreements on matters of common interest

- An agent has unpredictable behaviour as observed from the
outside, unless its simple reflexive agent.
- An agent is situated in the environment.
- Agent communication model is asynchronous.
- Objects do it for free; agents do it because they want to.

### Types of Agent Systems

- single-agent
- multi-agent
    - cooperative - single shared utility
    - competetive - multiple different utilities

### Agent Behavior

Agent function @mas2013-l01-introduction-v07.pdf#25
: Agent’s behavior is described by the agent function that maps percept sequences to actions.

Agent program @mas2013-l01-introduction-v07.pdf#25
: runs on a physical architecture to produce agent function.

Rational agent @mas2013-l01-introduction-v07.pdf#28
: chooses whichever action maximizes the expected value of the performance measure given the percept sequence to date and whatever bulit-in knowledge the agent has.

To design a rational agent, we must specify the task environment (PEAS).

Task environment @mas2013-l01-introduction-v07.pdf#29
: Performance measure, Environment,  Actuators, Sensors
alias: PEAS

### Properties of Environments

Fully observable vs. partially observable @mas2013-l01-introduction-v07.pdf#32
: can agents obtain complete and correct information about the state of the world?

Deterministic vs. stochastic @mas2013-l01-introduction-v07.pdf#32
: Do actions have guaranteed and uniquely defined effects?

Episodic vs. sequential @mas2013-l01-introduction-v07.pdf#32
: Can agents decisions be made for different, independent episodes?

Static vs. dynamic @mas2013-l01-introduction-v07.pdf#32
: Does the environment change by processes beyond agent control?

Discrete vs. continuous @mas2013-l01-introduction-v07.pdf#32
: Is the number of actions and percepts fixed and finite?

Single-agent vs. multi-agent @mas2013-l01-introduction-v07.pdf#32
: Does the behavior of one agent depends on the behavior of other agents?

### Hierarchy of Agents

There is a link between the complexity of the task and the
minimum agent architecture required to implement a rational
agent.

Basic types of agents in the order of increasing capability:

1. simple reflex agents
2. model-based agents with state
3. goal-based agents
4. utility-based agents
5. (learning agents)

Simple Reflex Agents @mas2013-l01-introduction-v07.pdf#39
:  chooses the next action on the basis of the current percept only.

Reflex agents are simple but of limited intelligence – they only work if

1. the environment is fully observable and
2. the decision can be made based solely on the current percept

If the above not the case => suboptimal action choices, infinite loops.

Model-based Reflex Agent @mas2013-l01-introduction-v07.pdf#43
: Keeps track of the world by extracting relevant information from percepts and storing it in its memory.

- whats and hows tightly coupled (impossible to tell the agent what to do)
- the agent does not anticipate the effects of its actions (only finds out the result after having executed the action)

Goal-based Agents @mas2013-l01-introduction-v07.pdf#47
: Goal-based agents are more flexible, they use search and planning.

Goals alone are not sufficient for decision making:

1. there may be multiple ways of achieving them;
2. agents may have several conflicting goals that cannot be achieved simultaneously.

Utility-based Agents @mas2013-l01-introduction-v07.pdf#51
: use the utility function to choose the most desirable action/course of actions to take.

Uses optimizing planning - searches for the plan that leads to the maximum utility.
There are still issues:
- irreducible preference orderings
- non-deterministic environment (Markov decision processes)

Utility
: is a function that maps a state onto a real number; it captures “quality” of a state. If an agent prefers one world state to another state then the former state has higher utility for the agent.

Utility can be used for:

1. choosing the best plan
2. resolving conflicts among goals
3. estimating the successfulness of an agent if the outcomes of actions are uncertain.

### Summary

Intelligent agent
: is autonomous, proactive, reactive and sociable.

Agents can be cooperative or competitive (or combination thereof).

There are different agent architectures with different capabilities and complexity.



## Auctions


Auction @p3
: mechanism for allocating resource among self-interested agents<br>[Shoham & Leyton-Brown 2009] An auction is a protocol that allows agents (=bidders) to indicate their interests in one or more resources and that uses these indications of interest to determine both an allocation of resources and a set of payments by the agents.

### Auctions Rules

Auction mechanism is specified by auction rules.

Bidding rules @p12
: How offers are made: by whom, when, what their content is

Clearing rules @p12
: Who gets which goods (allocation) and what money changes hands (payment).

Information rules @p12
: What information about the state of the negotiation is revealed to whom and when.

### Valuation Models

Common value @p13
: the good has the same value to all agents example: a 100 dollar note

Private value @p13
: an agent A’s valuation of the good is independent from other agent’s valuation of the good example: a painting, John Lennon’s last dollar bill

Correlated value @p13
: valuations of the good are related, i.e. the more other agents are prepared to pay, the more agent A prepared to pay. example: purchase of items for later resale

Agent’s payoff from participating in an auction @p13
: if winner: payoff = item’s valuation – price paid for the item; if not winner: payoff = zero

### Auction types

Single Good Auctions @p14
: auction of one item

Multi-Unit Auctions @p15
: multiple units of the same item are available for auction

Multi-Item Auctions @p16
: bidding for multiple items grouped together

Reverse Auctions @p17
: The buyer issues a request for bids to his providers.

Multi-Attribute Auctions @p18
: Negotiation over further attributes beyond price, e.g. color, weight, or delivery time

### Single-Item Auctions - Basic Auction Mechanisms

English
Japanese
Dutch
First-Price
Second-Price

English Auction @p22
: Auctioneer starts the bidding at some reservation price. Bidders then shout out ascending prices (minimum increments). Once bidders stop shouting, the high bidder gets the good at that price.

Japanese Auction @p23
: Same as an English auction except that the auctioneer calls out the prices<br>All bidders start out standing. When the price reaches a level that a bidder is not willing to pay, that bidder sits down. Once a bidder sits down, they can't get back up the last person standing gets the good.

Dutch Auction @p24
: The auctioneer starts ahigh value; it descends clock at some. At some point, a bidder shouts “mine!" and gets the good at the price shown on the clock. Good when items need to be sold quickly (similar to Japanese auction) No information is given away during auction.

First-price sealed bid auction 
: Bidders write down bids on pieces of paper. Suctioneer awards the good to the bidder with the highest bid. That bidder pays the amount of his bid.

Second-price sealed bid auction
: Same as First-price sealed bid auction except winner pays the amount bid by the second-highest bidder alias: Vickerey auction

### Analysing Auctions

(Desired) Properties

Strategy: existence of dominant strategy

Truthfulness: bidders are incentivized to bid their true valuations

Efficiency (Pareto-optimality): the aggregated utility, measured as the sum of valuations, is maximized

Optimality: maximization of seller’s revenue

Manipulation vulnerability: Lying auctioner, Shills, Bidder collusion

Other consideration: communication complexity, private information revelation, ...

### Dutch and First-price Sealed Bid

Strategically equivalent: an agent bids without knowing about the other agents’ bids -  a bidder must decide on the amount he's willing to pay, conditional on having placed the highest bid

Differences
- First-price auctions can be held asynchronously
- Dutch auctions are fast, and require minimal communication
