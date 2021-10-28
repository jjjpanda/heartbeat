module.exports = (checkUrlList, results, sendSuccessMessage) => {
    const isSuccess = results.every(result => result.status == "fulfilled" && result.value && result.value.status == "up")
    let formattedResults = undefined
    if(sendSuccessMessage || !isSuccess){
        formattedResults = results.map((result, index) => {
            if(result.value != undefined && result.value instanceof Object){
                return { [checkUrlList[index].name]: result.value.status }   
            }     
            else{
                return { [checkUrlList[index].name]: "unknown" }   
            }
        })
    }
    return {msg: JSON.stringify(formattedResults, null, 2), success: isSuccess}
}