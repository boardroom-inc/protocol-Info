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

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#structure">Repo Structure</a></li>
    <li>
      Global Protocol Changes
      <ul>
        <li><a href="#protocol-information">Protocol Information</a></li>
        <li><a href="#protocol-branding">Protocol Branding</a></li>
      </ul>
    </li>
    <li>
      Adding Content
      <ul>
        <li><a href="#new-content-folders">New Content Folders</a></li>
        <li><a href="#new-content-folders">New Files</a></li>
        <li><a href="#new-calendar-events">Calendar Events</a></li>
        <li><a href="#new-weekly-updates">Weekly Updates</a></li>
        <li><a href="#new-project">New Project</a></li>
      </ul>
    </li>
  </ol>
</details>

## **Structure**
1. The `index.ts` file contains basic project metadata, as well as branding colors
2. Folders for each project contain the following:
    1. `overview.md` contains a project's governance overview. _This content is displayed in each project's 'Overview' tab, below its statistics._
    2. `logo.png` is a logo file displayed in various places accross the app, including protocol switcher.
    3. `header.png` is a logo file is displayed at the top of sidebar when that project is selected in the navigation.
    4. `calls` is a folder collects governance and community call agendas and meeting notes, displayed in each project's 'Calls' tab.
      
## **Global Protocol Changes**

### Protocol Information
Basic information of the protocol is saved in protocols object of index.ts file

```
  protocol_key: {
    name: "Protocol Name",
    path: "Path used in boardroom url",
    description: "Description of protocol",
    suffix: "Token",
    folder: "Folder name to host resources",
  },
```  

Edit the corresponding value in the object and raise a new PR for changes.

### Protocol Branding
 1. Add the unique protocol key in the object `protocolBranding` of index.ts if it does not exist. 
```
unique_protocol_key: {
    "--background-primary-nav": "#001529", // Background color for sidebar, header and header information in protocol pages
    "--color-text-nav": "#e7e8eb", // Color of text in sidebar, header and header information in protocol pages
    "--background-switcher-active": "#000000", // Background color of the active nav element in sidebar 
  },
```
 2. Add or edit the respective color variables and colors to the above object.
 3. Raise a PR with the changes.
 4. These changes should be reflected on the Boardroom portal a few days after the changes have been merged.

We have a codesandbox instance https://codesandbox.io/s/boardroombranding-q3u9z to visualize branding changes. Change the corresponding color variable in index.js file to have a sense of how the protocol pages will look after the updates

## **Adding Content**
Content files will be sorted by date. Add the date (dd-mm-yy) to the file name you are creating. This date will be hidden on the Boardroom portal but will sort the files by most recent.

### New Content Folders
New content folders will dynamically display a new item under the 'Resources' tab. Raise a new PR by following the steps below:

1. Create a new folder inside protocol folder. _The Folder name will be the sub nav item displayed under resources in sidebar._
2. Add content inside the folder by adding new files.
3. Raise a PR with the changes.

### New Files
1. Create a new file in the Dynamic folder of the protocol. _The Filename will be the title displayed in the 'Folder' tab list._
2. Add Content in the markdown file. The contents of the file will be displayed in the respective page.
3. Raise a PR with the changes.

### New Calendar Events

1. Add one or more new events to the `events.json` file of the protocol using the following format:

- **title**: The title of the event - this will be shown in the month and day view.
- **url**: A URL to link to when an event is clicked.
- **date**: The UTC date of the event in ISO 8601 format

```json
[
  {
    "title": "This is an example event.",
    "url": "https://example.com",
    "date": "2021-01-08T00:00:00.000Z"
  },
  {
    "title": "This is another example event.",
    "url": "https://example.com",
    "date": "2021-01-10T00:00:00.000Z"
  }
]
```

2. Raise a PR with the changes.

### New Weekly Updates
1. Create a new file in an new 'Updates' folder. _The Filename will be the title displayed in the 'Folder' tab list._ Remember to add the date to the filename (Update Title + dd-mm-yy)
2. Add Content in the markdown file. The contents of the file will be displayed in the respective page.
3. Weekly updates should be categorized by "Live Votes", "Recent Votes", and "Discussions".
4. For each Proposal or Discussion, add a Markdown Table with the Title, Category, and Link:
![](https://i.ibb.co/cQg49mh/categories.png)
*Choose from the following categories: Parameter Change, Staffing, Treasury, Marketing, Strategy, Product, Development, Meta, Other
5. Add a short (100 words max) description under the table.
6. Repeat the steps for every proposal or discussion relevant to that week.
7. Raise a PR with the changes.

### New Project
Please keep in mind that the Boardroom team will need to add your project before it displays on the portal. Raise a new PR by following the steps below:

1. Add a new object to index.ts in the format of

```
  protocol_key: {
    name: "Protocol Name",
    path: "Path used in boardroom url",
    description: "Description of protocol",
    suffix: "Token",
    folder: "Folder name to host resources",
  },
```

2. Create a folder with the same name mentioned above in the root folder of the repo.
3. Add logo with the file name `logo.png` in the folder with an aspect ratio of 1:1. This will display in the project switcher and various other places in the app.
4. Add an image `header.png` which will display at the top sidebar. Ideal dimensions are 400 × 150 (W× H)
5. Add a folder with the name `calls` which will contain meeting note files.
6. Raise a PR with the changes.

## Contact

Please reach out in Discord with any questions! 
* Boardroom Support Channel - [#❓support](https://discord.gg/CEZ8WfuK8s)
