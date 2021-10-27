module.exports = (checkUrl) => {
    let checkUrlList = []
    if(checkUrl instanceof Array){
        checkUrlList = checkUrlList.concat(checkUrl)
    }
    else{
        checkUrlList.push(checkUrl)
    }
    return checkUrlList
}