module.exports = (checkUrlList, results, sendSuccessMessage) => {
    const isSuccess = results.every(result => result.status == "fulfilled")
    let formattedResults = undefined
    if(sendSuccessMessage || !isSuccess){
        formattedResults = results.map((result, index) => {
            if(result.status == "rejected"){
                return { [checkUrlList[index]]: `failure` }
            }
            else{
                return { [checkUrlList[index]]: `success` }
            }
        })
    }
    return {msg: JSON.stringify(formattedResults, null, 4), success: isSuccess}
}