function superbowlWin(winRecord){
    let ret = winRecord.find(function(record){
        let ret;
        if(record.result === "W"){
            return true;
        }
        else{
            return false;
        } 
    });

    if(ret !== undefined){
        return ret.year;
    }
    else{
        return undefined;
    }
}