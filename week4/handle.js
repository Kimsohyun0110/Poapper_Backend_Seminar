else if(method == 'DELETE'){
    const url_idx = Number(url_parsed[1]);
    try {
        database[url_idx] = undefined;
        res.write("delete success!");
        res.end();
    } catch (error) {
        console.log("delete error!")
        console.log(error);
    }
  
  
  else if(method == 'PUT'){
    const url_idx = Number(url_parsed[1]);
    const url_data = url_parsed[2];
    try {
        database[url_idx] = url_data;
        res.write("put success!");
        res.end();
    } catch (error) {
        console.log("put error!")
        console.log(error);
    }
}
