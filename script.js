const searchParam = new URLSearchParams(window.location.search)
const t1 = searchParam.get('score1')
const t2 = searchParam.get('score2')
const t1Name = searchParam.get('name1')
const t2Name = searchParam.get('name2')
const title = searchParam.get('title') || "Scoreboard App"
document.title = title
document.getElementById('logo1').src = searchParam.get('logo1') || 'https://seeklogo.net/wp-content/uploads/2012/12/manchester-united-logo-vector-400x400.png'
document.getElementById('logo2').src = searchParam.get('logo2') || 'https://seeklogo.net/wp-content/uploads/2011/08/liverpool-logo-vector.png'
var bg = searchParam.get('bg') || 'black'
var fontColor = searchParam.get('c') || 'white'
var sc = searchParam.get('sc') || 'white'
function setColor(color,prop) {
    if (/[\da-f]{7,}/i.test(color)) {
        color = color.slice(0,6)
    }
    if (/[\da-f]{6}|[\da-f]{3}/i.test(color)) {
        document.documentElement.style.setProperty(`--${prop}-color`, `#${color}`);
    }
    else {
        document.documentElement.style.setProperty(`--${prop}-color`, `${color}`);
    }
}
setColor(bg,'bg')
setColor(fontColor,'font')
setColor(sc,'sc')

const shadow = searchParam.get('shadow') || 'blue'
document.documentElement.style.setProperty('--shadow-color', shadow);
var t1score = t1 || 0
var t2score = t2 || 0
document.getElementById('Team1Score').textContent = t1score;
document.getElementById('Team2Score').textContent = t2score;
document.getElementById('t1Name').textContent = t1Name || 'Team 1'
document.getElementById('t2Name').textContent = t2Name || 'Team 2'
var currentURL = `${location}`
document.getElementById('logo1').addEventListener('click', () => {
    if (t1 !== null) {
        open(currentURL.replace(`score1=${t1score}`,`score1=${parseInt(t1score)+1}`), "_self")
    }
    else {
        currentURL += `?&score1=1`
        open(currentURL, "_self")
    }
})
document.getElementById('logo2').addEventListener('click', () => {
    if (t2 !== null) {
        open(currentURL.replace(`score2=${t2score}`,`score2=${parseInt(t2score)+1}`), "_self")
    }
    else {
        currentURL += `?&score2=1`
        open(currentURL, "_self")
    }
})
document.getElementById('t1Name').addEventListener('blur', () => {
    currentURL = currentURL.replace(/[&\?]?name1=[^&\?]+&/g,'')
    currentURL += `&name1=${document.getElementById('t1Name').textContent}&`
    open(currentURL, "_self")
})
document.getElementById('t2Name').addEventListener('blur', () => {
    // alert(document.getElementById('t2Name').textContent);
    currentURL = currentURL.replace(/[&\?]?name2=[^&\?]+&/g,'')
    // alert(currentURL)
    currentURL += `&name2=${document.getElementById('t2Name').textContent}&`
    open(currentURL, "_self")
})
document.getElementById('Team1Score').addEventListener('blur', () => {
    if (t1 !== null) {
        open(currentURL.replace(`score1=${t1score}`,`score1=${document.getElementById('Team1Score').textContent}`), "_self")
    }
    else {
        currentURL += `&score1=${document.getElementById('Team1Score').textContent}`
        open(currentURL, "_self")
    }
})
document.getElementById('Team2Score').addEventListener('blur', () => {
    if (t2 !== null) {
        open(currentURL.replace(`score2=${t2score}`,`score2=${document.getElementById('Team2Score').textContent}`), "_self")
    }
    else {
        currentURL += `&score2=${document.getElementById('Team2Score').textContent}`
        open(currentURL, "_self")
    }
})