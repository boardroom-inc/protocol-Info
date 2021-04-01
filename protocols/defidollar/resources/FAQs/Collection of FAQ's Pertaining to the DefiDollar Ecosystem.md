❓ FAQ's
=======

Collection of frequently asked questions pertaining to the DefiDollar ecosystem

[Does DefiDollar charge any fees at the protocol layer?](https://docs.dusd.finance/faqs#does-defidollar-charge-any-fees-at-the-protocol-layer)

==================================================================================================================================================

DefiDollar users incur a fee at the following steps during various user journeys:

1.  Minting DUSD Minting with yCRV or yUSD doesn't incur a fee and doesn't cause slippage. We use the curve pricing function to give an exact amount of DUSD. While minting with stablecoins (Dai/Tether/USDC/TUSD), since these are deposited to curve, a 0.04% fee is charged. This is reflected in the amount of DUSD that the user receives. The DefiDollar protocol doesn't charge a separate fee.

2.  Redeem DUSD The DefiDollar protocol charges a 0.1% fee regardless of what you redeem in. This fee is directed towards the ibDUSD LPs.

    In addition to that:

    -   Redeeming in yUSD doesn't charge a fee.

    -   Redeeming in yCRV or stablecoins MAY charge an extra 0.5% fee. This is charged by the vault. That depends if there is enough yCRV in this [contract](https://etherscan.io/address/0xa89bd606d5dadda60242e8dedeebc95c41ad8986) to cover your withdraw. The protocol currently tries to maintain a 10% buffer in yCRV to keep small withdrawals cheap but the buffer may have run out.

    -   Redeeming in yCRV or yUSD doesn't incur slippage.

    -   Curve will charge an additional 0.04% fee if redeeming in a single stablecoin.

    *The expected output amount shown on the UI while redeeming has fee deductions factored in.*

3.  Redeem ibDUSD - The savings vault  There is a 0.5% redemption fee that is used to guard against malicious actors trying to frontrun the rewards by deploying capital to the ibDUSD just before rewards are claimed periodically. It is similar to the exit load currently being implemented in yVaults.

What are the rewards that accrue in the DefiDollar protocol?[](https://docs.dusd.finance/faqs#what-are-the-rewards-that-accrue-in-the-defidollar-protocol)

==============================================================================================================================================================

Different peaks earn different rewards, we have tried to detail them below: We launched DefiDollar with the [Curve susdV2 pool](https://www.curve.fi/susdv2/). Since then we have added support for the Curve y Pool via the yVault integration. Peak #1 | [Curve susdV2 pool](https://www.curve.fi/susdv2/) (Deprecated) - Curve trading fees - Earns CRV and SNX liquidity mining rewards Peak #2 | [Curve Ypool](https://www.curve.fi/iearn/) (Active) We have added support for the Curve Y pool integration in tandem with the yearn [yCRV vault](https://etherscan.io/address/0x5dbcf33d8c2e976c6b560249878e6f1491bca25c#code). This enables the LP funds to draw income from Curve and the *harvested* rewards depending on the vault [strategy](https://feel-the-yearn.app/). Peak #3 | [DAI/sUSD Balancer Smart Pool ](https://forum.dusd.finance/t/decentralized-stablecoin-index-dai-susd-peak/18)(Proposed) We are exploring adding a dedicated decentralized stablecoin peak to ensure that the protocol can offer exposure to decentralized stablecoins to help keep the index diversified. Do check out the proposal below:[ https://forum.dusd.finance/t/decentralized-stablecoin-index-dai-susd-peak/18](https://forum.dusd.finance/t/decentralized-stablecoin-index-dai-susd-peak/18) We are actively exploring adding more peaks to the protocol.

[Is there a Governance token?](https://docs.dusd.finance/faqs#is-there-a-governance-token)

==============================================================================================

DFD will be the governance token for DefiDollar. It will be used to govern the following protocol decisions :

-   Whitelist & remove peaks.

-   Assign peak ceilings similar to the ones in Maker Vaults to balance the index.

-   Fine-tune parameters like redemption fee within a peak.

-   Decide on the distribution of the protocol income

For more details please refer to the blog post below: <https://medium.com/defidollar/the-next-chapter-of-defidollar-b227935f10e7>​

[How is DUSD kept stable ~1 Dollar?](https://docs.dusd.finance/faqs#how-is-dusd-kept-stable-1-dollar)

=========================================================================================================

Let's consider two scenarios, one where the protocol is sufficiently collateralized but the value of DUSD fluctuates in the secondary markets and the other when the protocol becomes under-collateralized due to peg fluctuations of underlying stablecoins.

1.  DUSD >$1 Arbitrageurs mint more DUSD to sell in the secondary markets thereby increasing the DUSD supply and returning DUSD to $1.

2.  DUSD <$1 Arbitrageurs buy DUSD from secondary markets to redeem DUSD from the protocol in order to get a discounted price for the underlying stablecoins. This reduces the overall DUSD supply and returns the DUSD value to $1.

DUSD is sufficiently collateralized but the value of DUSD being traded on the secondary market fluctuates: