var randomnumber=Math.floor(Math.random()*11)

var script  = document.createElement('script');
script.type = 'text/javascript';
script.src  = 'https://raw.github.com/gavinhogan/ttTools2/development/releases/latest/ttTools.js?v='+randomnumber;

var link = document.createElement('link')
link.type='text/css';
link.rel = 'stylesheet';
link.href = 'https://raw.github.com/gavinhogan/ttTools2/development/releases/latest/ttTools.css?v='+randomnumber;


document.head.appendChild(link);
document.body.appendChild(script);
