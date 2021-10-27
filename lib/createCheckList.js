module.exports = (checkUrl) => {
    let checkUrlList = []
    if(checkUrl instanceof Array){
        checkUrlList = checkUrlList.concat(checkUrl).map(url => ({url: url, name: url}))
    }
    else if(checkUrl instanceof Object){
        for(const name in checkUrl){
            checkUrlList.push({name, url:checkUrl[name]})
        }
    }
    else{
        checkUrlList.push({url: checkUrl, name: checkUrl})
    }
    return checkUrlList
}