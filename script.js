const searchParam = new URLSearchParams(window.location.search)
const t1 = searchParam.get('t1')
const t2 = searchParam.get('t2')
const t1Name = searchParam.get('t1name')
const t2Name = searchParam.get('t2name')
var t1score = t1 !== null ? t1.replace('?','') : 0
var t2score = t2 !== null ? t2.replace('?','') : 0
document.getElementById('Team1Score').textContent = t1score;
document.getElementById('Team2Score').textContent = t2score;
document.getElementById('t1Name').textContent = t1Name !== null ? t1Name : 'Team 1'
document.getElementById('t2Name').textContent = t2Name !== null ? t2Name : 'Team 2'
var currentURL = `${location}`
document.getElementById('Team1Score').addEventListener('click', () => {
    if (t1 !== null) {
        open(currentURL.replace(`t1=${t1score}`,`t1=${parseInt(t1score)+1}`), "_self")
    }
    else {
        currentURL += `?&t1=1`
        open(currentURL, "_self")
    }
})
document.getElementById('Team2Score').addEventListener('click', () => {
    if (t2 !== null) {
        open(currentURL.replace(`t2=${t2score}`,`t2=${parseInt(t2score)+1}`), "_self")
    }
    else {
        currentURL += `?&t2=1`
        open(currentURL, "_self")
    }
   
})
