# Ribbon Finance
![](https://i.imgur.com/i6F2Ozl.png)

## Overview

Ribbon Finance is a new protocol that helps users access crypto structured products for DeFi. It combines options, futures, and fixed income to improve a portfolio's risk-return profile.

Ribbon Finance (RBN) is an Ethereum token that governs Ribbon Finance.

### Core Products
#### Theta Vault
Theta Vault, which is a yield-focused strategy on ETH and WBTC. The vault earns yield on its deposits by running a weekly automated options selling strategy. The vault reinvests the yield earned back into the strategy, effectively compounding the yields for depositors over time.
The Theta Vaults run two options strategies to generate yields:
* Covered call - Vault writes  out of the money covered calls.
* Put selling - Vault writes  out of the money puts.
#### Theta Vault Yearn
Currently, funds held in Theta Vaults do not generate any yield, aside from writing options. Every Friday, the vault converts 100% of its USDC balance into yvUSDC by depositing USDC into the Yearn USDC yVault. This helps depositors gain exposure to the yield generated from Yearn on top of the options strategy.

#### General FAQ
### What are structured products?
Structured products are packaged financial instruments that use a combination of derivatives to achieve some specific risk-return objective, such as betting on volatility, enhancing yields or principal protection.
### What kind of structured products does Ribbon have?
We currently offer structured products on ETH, AVAX, USDC, and SOL which generates high yield through automated covered-call or put-selling option strategies. For more information on the strategies used, please consult the product cards for a breakdown.
### What is the risk of the covered-call vault?
The primary risk for running a covered-call strategy is that depositors could potentially give up upside in exchange for guaranteed yield. By selling a call option users are essentially promising to sell the asset at the strike price even if the price rises. This may result in a negative yield on the underlying asset. Please note that although a negative yield is uncommon, depositors will still be up in USD terms as the underlying asset would have appreciated significantly in a short period of time.
### What is the risk of the put-selling vault?
The primary risk for running a put-selling strategy is that the vault may incur a weekly loss in the case where the put options sold by the vault expire in-the-money (meaning the price of the underlying asset is below the strike price of the put options minted by the vault).
### What is the options infrastructure used by the vaults?
Ribbon options are built on the Opyn V2 protocol.
### Is Ribbon multichain?
We're currently on Ethereum mainnet, Avalanche, and Solana.
### Does Ribbon have a token?
Yes, Ribbon has a governance token, RBN. Please read the RBN announcement [blog post](https://ribbonfinance.medium.com/decentralizing-ribbon-governance-395950da7a6) for more details. The RBN token is [0x6123B0049F904d730dB3C36a31167D9d4121fA6B](https://etherscan.io/address/0x6123b0049f904d730db3c36a31167d9d4121fa6b). 
### Are the vaults audited?
We're audited by [OpenZeppelin](https://blog.openzeppelin.com/ribbon-finance-audit/), [ChainSafe](https://github.com/ribbon-finance/audit/blob/master/reports/RibbonThetaVault%20V2%20Smart%20Contract%20Review%20And%20Verification.pdf) and [Peckshield](https://github.com/ribbon-finance/audit/blob/master/reports/PeckShield-Audit-Report-Ribbon-v1.0.pdf). Despite that, users are advised to exercise caution and only risk funds they can afford to lose.
### Do you have a bounty program?
Yes, we offer a bounty for up to $250,000. Learn more here.

## Governance

All vault gauge voting is done using Redacted Cartel's gauge voting interface : https://hiddenhand.finance/ribbon

All governance proposal voting is done using the Ribbon Finance governance dashboard on Snapshot : https://snapshot.org/#/rbn.eth

## Join us

Reach out to us on [Discord](https://www.ribbon.finance/)

## Additional links

* [Website](https://www.ribbon.finance/) 
* [Discord](https://www.ribbon.finance/)
* [GitHub](http://github.com/ribbon-finance)
* [Twitter](http://twitter.com/ribbonfinance)
* [Blog](https://research.ribbon.finance/)
* [Docs](https://docs.ribbon.finance/)
* [Governance portal](https://vote.ribbon.finance/)
* [FAQ](https://vote.ribbon.finance/)
