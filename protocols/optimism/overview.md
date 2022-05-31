# Optimism

## Overview
Optimistic Rollup is a layer 2 scaling solution that scales both transaction throughput and computation on Ethereum. The backbone of our implementation is the Optimistic Virtual Machine (OVM), which is fully compatible with the EVM.

Optimistic Rollup is the first layer 2 scaling solution that enables:

- **Usability:** low latency transactions for the speed of a Web 2.0 experience, and smart contracts at a fraction of the cost.
- **Familiar workflows:** developers preserve the Ethereum developer experience — the same smart contracts, APIs, and dev tooling. Migrate existing contracts without breaking them.
- **Money Lego$:** seamless interoperability between dApps and smart contracts.

To experience it for yourself, play UniPig, a gamified proof of concept for Optimistic Rollup built in collaboration with Uniswap. The demo had many components custom-built for Uniswap’s contracts in L2. We are currently developing the generalized ability to run any Ethereum contract in the OVM without custom code! Stay tuned for a separate post describing how it works.

In most ways Optimism is EVM equivalent (opens new window). However, the are a few differences, which sometimes require decentralized applications to access Optimism-specific services.

For example, decentralized applications might need to estimate gas costs. The standard Ethereum tooling assumes that gas cost is proportional to the gas used by the transaction, which is correct on L1, but not on Optimism. Our gas costs are predominately the cost of writing the transaction to L1, which depends on the transaction size, not the amount of processing required. This difference requires us to have separate methods to provide gas estimates.

## Join us

Reach out to us on [Discord](https://discord.optimism.io/) or [Twitter](https://twitter.com/optimismPBC)

## Additional links

* [Website](https://www.optimism.io)
* [Governance](https://app.optimism.io/governance)
* [Bridge](https://app.optimism.io/bridge)
* [Ecosystem](https://www.optimism.io/apps/all)
* [Documentaion](https://community.optimism.io/)
* [Bug Bounty](https://immunefi.com/bounty/optimism/)
* [Blog](https://optimismpbc.medium.com/)
* [Mirror](https://optimism.mirror.xyz/)
* [Twitch](https://www.twitch.tv/optimismpbc)
* [Twitter](https://twitter.com/optimismPBC)
* [Discord](https://discord.optimism.io/)
* [Github](https://github.com/ethereum-optimism/optimism)