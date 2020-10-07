chrome.runtime.onInstalled.addListener(() => {
    console.log('onInstalled...');
    // create alarm after extension is installed / upgraded
    chrome.events.addListener()
    //.alarms.create('refresh', { periodInMinutes: 1 });
  });
  
  // chrome.alarms.onAlarm.addListener((alarm) => {
  //   console.log(alarm.name); // refresh
  //   helloWorld();
  // });
  
  // function helloWorld() {
  //   alert("Hello, world!");
  // }