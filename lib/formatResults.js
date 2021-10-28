module.exports = (checkUrlList, results, sendSuccessMessage) => {
    const isSuccess = results.every(result => result.status == "up")
    let formattedResults = undefined
    if(sendSuccessMessage || !isSuccess){
        formattedResults = results.map((result, index) => {
            if(result != undefined && result instanceof Object){
                return { [checkUrlList[index].name]: `url: ${result.status} | code: ${result.code}` }   
            }     
            else{
                return { [checkUrlList[index].name]: "unknown" }   
            }
        })
    }
    return {msg: JSON.stringify(formattedResults, null, 2), success: isSuccess}
}