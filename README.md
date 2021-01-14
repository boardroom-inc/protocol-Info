<br />
<p align="center">
  <a href="http://app.boardroom.info/">
    <img src="https://i.ibb.co/tBt9dLq/transparentblacktextsmall.png" alt="Logo" width="500" height="100">
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
    <a href="https://discord.com/invite/tgrTFg9">Get In Touch</a>
  </p>
</p>

## **Structure**
1. The `index.ts` file contains basic project metadata, as well as branding colors
2. Folders for each project contain the following:
    1. As file named `overview.md` that contains a project's governance overview. This content is displayed in each project's 'Overview' tab, below its statistics:.
    Ex: <img src="https://media.discordapp.net/attachments/799260574759649331/799288420215816222/Overview.png?width=800&height=402" alt="Drawing" style="width: 200px;"/> 
	2. The `logo.png` logo file is displayed in various places accross the app, including protocol switcher:.
	
      Ex: ![logo](https://cdn.discordapp.com/attachments/799260574759649331/799289349137104896/Untitled10.png)
      
    3. The `header.png` logo file is displayed at the top of sidebar when that project is selected in the navigation
    
      Ex: ![Header Logo](https://media.discordapp.net/attachments/799260574759649331/799290084255334458/Untitled_2.png)
      
    4. The `calls` folder collects governance and community call agendas and meeting notes, displayed in each project's 'Calls' tab:.
      Ex: The following folder structure in the calls folder is displayed as
      
<table><tr>
<td> <img src="https://media.discordapp.net/attachments/799260574759649331/799275039400263700/Untitled.png" alt="Drawing" style="width: 250px;"/> </td>
<td> <img src="https://media.discordapp.net/attachments/799260574759649331/799274293636366336/Untitled.png?width=1708&height=1136" alt="Drawing" style="width: 250px;"/> </td>
</tr></table>

---

### How to edit Information or Branding of protocol
#### 1.Edit protocol information
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

#### 2. Edit or add branding changes
 1. Add the unique protocol key in the object `protocolBranding` of index.ts if it does not exist. 
```
unique_protocol_key: {
    "--background-primary-nav": "#001529", // Background color for sidebar, header and header information in protocol pages
    "--color-text-nav": "#e7e8eb", // Color of text in sidebar, header and header information in protocol pages
    "--background-switcher-active": "#000000", // Background color of the active nav element in sidebar 
  },
```
 2. Add or edit the respective color variables and colors to the above object
 3. Raise a PR with the changes

We have a codesandbox instance https://codesandbox.io/s/boardroombranding-q3u9z to visualize branding changes. Change the corresponding color variable in index.js file to have a sense of how the protocol pages will look after the updates

---

### How to add new meeting notes
Raise a new PR by following the steps below.

1. Create a new file in the calls folder of the protocol. Filename will be used for displaying in the list of calls page.
2. Add a summary of the call in the file. Contents of the file will be displayed in the respective note page.
3. Raise a PR with the changes

---


#### How to add a new protocol
Raise a new PR by following the steps below.

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

2. Create a folder with the same name as mentioned above in the root folder of the repo
3. Add logo with the file name `logo.png` in the folder with an aspect ratio of 1:1. This is used for displaying in Protocol switcher and various other places in the app.
4. Add an image `header.png` which is displayed at the top sidebar. Ideal dimensions are 400 × 150 (W× H)
5. Add a folder with the name `calls` which will be used for containing meeting notes files.
