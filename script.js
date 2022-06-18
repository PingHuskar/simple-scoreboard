const t1 = new URLSearchParams(window.location.search).get('t1')
const t2 = new URLSearchParams(window.location.search).get('t2')
var t1score,t2score;
if (t1 !== null) {
    t1score = t1
}
else {
    t1score = 0
}
document.getElementById('Team1Score').textContent = t1score
if (t2 !== null) {
    t2score = t2
}
else {
    t2score = 0
}
document.getElementById('Team2Score').textContent = t2score
var currentURL = `${location}`
document.getElementById('Team1Score').addEventListener('click', () => {
    open(currentURL.replace(`t1=${t1score}`,`t1=${parseInt(t1score)+1}`), "_self")
})
document.getElementById('Team2Score').addEventListener('click', () => {
    open(currentURL.replace(`t2=${t2score}`,`t2=${parseInt(t2score)+1}`), "_self")
})
