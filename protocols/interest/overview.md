# What is Interest Protocol?


## Overview
Interest Protocol (IP) is the first fractional reserve banking protocol on the Ethereum blockchain that pays interest to all depositors. Interest Protocol issues a stablecoin, named USDi, that is both over-collateralized and highly scalable. USDi holders automatically earn yield without having to stake, which means Interest Protocol provides yield opportunities to gas-conscious users. Compared to lending protocols without fractional reserves, Interest Protocol can generate more loans from a given amount of capital while incurring less liquidity risk.


## Who participates?
The protocol has two primary participants:
* Depositors who hold USDi and earn interest
* Borrowers who borrow USDi from the protocol after posting collateral

## What are the main pieces? 
Every lending protocol has four key components: 
1. Users depositing capital 
2. Users posting collateral & borrowing capital
3. Maintaining the peg with an interest rate system.
4. Preventing a depeg with a liquidation system.

Interest Protocol improves upon each component to create an efficent and decentralized credit market.

* **Depositors** can deposit capital (USDC) and receive a liquidity provider (LP) token (USDi) representing their loan to the protocol. USDi is a stablecoin that is redeemable one-to-one for the reserve asset (USDC). While holding USDi, interest automatically accrues to the holder through a positive rebasing system. This innovation eliminates the depositor's need to stake capital and sacrifice liquidity. 

* **Borrowers** can post collateral assets after opening a vault. Each borrower has their own vault to deposit their collateral in. The collateral is used to cross-margin the user and increase their borrowing power. When a vault holds governance tokens as collateral, the vault owner can delegate the votes to another wallet. This allows the borrower to continue participating in protocol governance while borrowing against the governance tokens.

* Interest Protocol's **interest rate system** ensures that USDi holders can redeem their USDi for USDC and thus maintains USDi's peg. When the protocol has a low reserve of USDC, both the borrow rate and the deposit rate of USDi automatically increase. This induces users to repay their USDi loans or deposit USDC to mint USDi, increasing the reserve ratio.

* The **liquidation system** allows Interest Protocol to extend loans to borrowers while protecting depositors. Liquidations occur whenever a vault's borrowing power drops below its liability. Liquidators are incentivized through a discount on the price of collateral assets to purchase those assets. Governance configures the discount for each asset. Unlike most protocols, Interest Protocol's liquidation system protects the borrower from unnecessary liquidations: liquidators can only liquidate a vault until the vault's liability is equal to its borrowing power. To efficiently process large liquidations, the protocol allows liquidators to liquidate any amount as long as it does not exceed the maximum amount.


## Why did we build Interest Protocol? 
1. *To increase access to financial services.* IP offers fair and transparent access to a lending market to anyone with an internet connection—increasing worldwide access to capital and thus economic opportunity. IP's gas efficiency allows small users to participate in yield farming on Ethereum without sacrificing liquidity.

2. *To increase the efficiency of financial services.* US commercial banks charge an average annual interest rate of 2–13% while paying depositors an average annual interest rate of just 0.06%. The difference goes to cover the middlemen expenses. Even DeFi lending protocols often operate based on manual decisions, which raises costs. IP’s smart contracts are designed so that the protocol can operate in volatile market environments without manual intervention. The corresponding efficiency gains are transferred to the depositor.

3. *To bring much-needed innovations to DeFi.* GFX team members have been active contributors to various prominent DeFi protocols. During that time, we grew a unique perspective on their limitations and the remaining gaps to be filled in DeFi. Most importantly, we realized that DeFi lacks a fractional reserve bank that pays interest to depositors. So we built one ourselves.

## Protocol Audit
GFX Labs commissioned [Dedaub](https://dedaub.com/) to audit Interest Protocol at the protocol's launch. No critical, high, or medium severity issues were found. The audit report can be found [here.](https://github.com/gfx-labs/ip-contracts/blob/master/audit/GFX_IP_Protocol_Audit_Report.pdf). In November of 2022, GFX Labs commissioned a second audit to be performed by [Sigma Prime](https://sigmaprime.io/) which audited Interest Protocol in entirety. No urgent errors we're found, and all issues have been addressed or acknowledged. Sigma Prime's audit report can be found [here](https://github.com/gfx-labs/ip-contracts/blob/master/audit/Sigma_Prime_-_Interest_Protocol_Smart_Contract_Security_Assessment_Report.pdf).


