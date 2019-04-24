const electron = require('electron');
var path = require('path');

const { app, BrowserWindow } = require('electron');
const url = "https://andreizet.github.io/modern-web-programming/vue-cli/dist/";

const createWindow = () =>{
  win = new BrowserWindow({
    center: true,
    resizable: true,
    title: 'Recipes Finder',
    webPreferences:{
      nodeIntegration: false,
      show: false
    },
    icon: __dirname + '/assets/png/512x512.png'
  });

  win.loadURL(url);
  win.once('ready-to-show',()=>{
    win.show()
  });

  win.on('closed',()=>{
    win = null;
  });
};

app.on('ready', createWindow);