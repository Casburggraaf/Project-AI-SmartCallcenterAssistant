if (process.env.NODE_ENV !== 'production') {
    require('file-loader!./index.html')
}

require('./extern.exec.js')
import css from './index.scss';

if (window.location.protocol == "file:") {
  alert("You seem to be running this example directly from a file. Note that these examples only work when served from a server or localhost due to canvas cross-domain restrictions.");
} else if (window.location.hostname !== "localhost" && window.location.protocol !== "https:"){
  window.location.protocol = "https";
}
