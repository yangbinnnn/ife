var tabs = document.querySelectorAll('.nav li');
var panels = document.querySelectorAll('.content section');

for(i = 0; i < tabs.length; i++) {
  var tab = tabs[i];
  setTabHandler(tab, i);
}

function setTabHandler(tab, tabPos) {
  tab.onclick = function() {
    for(i = 0; i < tabs.length; i++) {
      if(tabs[i].getAttribute('class')) {
        tabs[i].removeAttribute('class');
      }
    }

    tab.setAttribute('class', 'active');

    panel = panels[tabPos]
    if (panel === undefined) {
        return
    }

    for(i = 0; i < panels.length; i++) {
      if(panels[i].getAttribute('class')) {
        panels[i].removeAttribute('class');
      }
    }
    panel.setAttribute('class', 'active');
  }
}
