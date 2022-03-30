# Code4rena

C4 audit contests find more bugs faster than any other method.

## Governance

The players in the arena:

* Wardens protect the DeFi ecosystem from threats by auditing code.
* Sponsors create prize pools to attract wardens to audit their project.
* Judges allocate awards to wardens based on performance.
* C4 audit contests are different from both bug bounties and traditional audits.

### Incentive model and awards

To incentivize wardens, C4 uses a unique scoring system with two primary goals: reward contestants for finding unique bugs and also to make the contest resistant to Sybil attack. A secondary goal of the scoring system is to encourage contestants to form teams and collaborate.

Contestants are given shares for bugs discovered based on severity, and those shares give the owner a pro rata piece of the pot:

Low Risk Shares: 1 * (0.9 ^ (findingCount - 1)) / findingCount
Med Risk Shares: 3 * (0.9 ^ (findingCount - 1)) / findingCount
High Risk Shares: 10 * (0.9 ^ (findingCount - 1)) / findingCount

Each share is redeemable for: pot / number of shares

Important mechanism update: For contests starting on or after February 3, 2022, low and non-critical findings should be submitted as a SINGLE QA report; contests will allocate a fixed 10% of prize pools toward QA reports. (Similarly, gas findings should be submitted as a single gas report.) For more on QA and gas reports.

Judges are incentivized to review findings and determine allocation of the prize pool by receiving a share of the prize pool themselves.

## Join Us

Please reach out to us via our [Discord](https://discord.gg/code4rena) or [Twitter](https://twitter.com/code4rena).

## Additional links

* [Code4rena](https://code4rena.com/)
* [Discord](https://discord.gg/code4rena)
* [Twitter](https://twitter.com/code4rena)
* [Github](https://github.com/code-423n4/)
* [Documentation](https://docs.code4rena.com/)