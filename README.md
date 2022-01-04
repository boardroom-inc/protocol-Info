<p align="center">
  <a href="https://discord.gg/CEZ8WfuK8s">
    <img src="https://img.shields.io/badge/Discord-Join-7289da?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" />
  </a>

  <a href="https://twitter.com/boardroom_info">
    <img src="https://img.shields.io/badge/Twitter-Follow-1da1f2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter" />
  </a>
</p>

<br />
<p align="center">
  <a href="http://app.boardroom.info/">
    <img src="https://i.ibb.co/PFcchnQ/boardroom.png" alt="Boardroom" width="450" />
  </a>

  <h3 align="center">Boardroom Project Information Repo</h3>

  <p align="center">
    This public repo contains project information which will be served to display on the Boardroom Governance Portal
    <br />
    <a href="http://app.boardroom.info/"><strong>Browse the Portal »</strong></a>
    <br />
    <br />
    <a href="http://boardroom.info/">Landing</a>
    ·
    <a href="https://discord.com/invite/tgrTFg9">Discord</a>
    ·
    <a href="https://www.boardroom.info/contact">Get In Touch</a>
  </p>
</p>

## About

All project additions and edits for information uploaded, stored, and maintained on the [Boardroom Portal](https://app.boardroom.info) occur on this public Project Information repository. [These docs](https://docs.boardroom.info/boardroom-portal-1/adding-your-project/protocol-information) will walk you through how to add the necessary information to this repository in a few simple steps, to get your project added to the Boardroom Portal frontend and to update its details on an ongoing basis.

## Development

Clone the repo:

```sh
$ git clone git@github.com:boardroom-inc/protocol-Info.git
```

Install dependencies:

```sh
$ yarn
```

Compile the protocol info artifact to `dist`:

```sh
$ yarn build
```

Link the package:

```sh
$ yarn link
```

From [hub-ui](https://github.com/boardroom-inc/hub-ui) (or any other repo), use the linked package:

```sh
$ yarn link @boardroom/protocol-info
```

Quick Add New Protocol:
```sh
$ ./scripts/add_new_protocol $protocolName
```

Run validation:

```sh
$ yarn validate
```

Cut a new release:

```sh
$ git checkout main
$ git pull
$ npx standard-version
$ yarn publish
$ git push origin main --follow-tags
```

## Contact

Please reach out in Discord with any questions! 
* Boardroom Support Channel - [#❓support](https://discord.gg/CEZ8WfuK8s)
