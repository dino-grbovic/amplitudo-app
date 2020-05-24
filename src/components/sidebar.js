import React from 'react';
import '../style/sidebar.css';
import { data } from '../data';
import Tree from './tree';
import Organizer from './organizer';
import DocFolder from './docFolder';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      folderState : data
    }

    this.addFolder = this.addFolder.bind(this);

  }

  addFolder() {
   console.log('clicked')
  }
  
  renderTreeItems() {
    let components = [];
    Object.keys(this.props.data).map((key) => {
      const value = this.props.data[key];
      const subfolder = this.renderSubfolder(value);
      let componentType = '';
      if (value.folderType === 'organizer') {
        componentType = <Organizer children={subfolder} name={value.name} handleClick={this.addFolder} />;
      }
      else {
        componentType = <DocFolder name={value.name} />;
      }
      components.push(componentType);

    })
    return components;
  }

  renderSubfolder(parentItem) {
    if (!parentItem) {
      return;
    }
    const currentFolders = parentItem.parentFolder;
    let componentType = '';
    let components = [];
    if (!!currentFolders && currentFolders.length) {
      currentFolders.map((folder) => {
        if (folder.parentFolder) { componentType = <Organizer children={this.renderSubfolder(folder)} name={folder.name}  />; }
        else {
          componentType = <DocFolder name={folder.name} />;
        }
        components.push(componentType)
      })

    }
    return components;
  }
  render() {
    return (
      <div className="sidebar">
        <Tree>
          {this.renderTreeItems()}
        </Tree>
      </div>
    );


  }
}