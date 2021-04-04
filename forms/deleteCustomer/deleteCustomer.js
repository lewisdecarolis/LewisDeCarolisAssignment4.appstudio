

deleteCustomer.onshow=function(){
    query = "SELECT name FROM customer"
    // Below change from my netID to yours (twice: user and database)    
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=lsd81882&pass=" + pw + "&database=lsd81882&query=" + query)

    if (req.status == 200) { //transit trip worked.        
           // see JSON results
           for (i = 0; i < results.length; i++)
           console.log(`req.responseText is a JSON string that looks like this: ${req.responseText}`)
        results = JSON.parse(req.responseText)
           // see if results are correct
           lblCust.value = (`The parsed JSON string is converted to a JS object (an array of arrays): ${results} where results[0] is ${results[0]}, the first array in the JS results object.`)
        
        if (results.length == 0)    // no results were returned by the query
           lblMessage2.textContent = "There are no accounts in the database."
        else {        


            // Take a closer look:
            console.log(`the first row/item in the big array is a small array: ${results[0]}`)
            console.log(`to get to Paul, need results[0][1]: ${results[0][1]}`)


        // Now output the names of all the dogs into the textArea control:
       let message = ""
        for (i = 0; i < results.length; i++)
            console.log(message = message + results[i][4] + "\n")
     } // end else

  } else   // the transit didn't work - bad wifi? server turned off?
        lblMessage2.textContent = "Error code: " + req.status
}




btnDelete.onclick=function(){
     let custDel = inptCust.value
    let found = false
    for (i = 0; i < results.length; i++) {
        if (custDel == results[i][1]){
            found = true
            break 
        }
    }
    if (found == false) 
       lblMessage2.textContent = "That customer name is not in the database."
    else if (found == true) {
      query = "DELETE FROM customer WHERE name = '" + custDel + "'"      
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "lsd81882&pass=" + pw + "&database=lsd81882&query=" + query)
      if (req.status == 200) //transit worked.
            if (req.responseText == 500)    
                lblMessage2.textContent = `You have successfully deleted the pet named ${custDel}`
            else
                lblMessage2.textContent = `There was a problem deleting ${custDel} from the database.`
      else
        lblMessage2.textContent = `Error: ${req.status}`
    } 

}

btnRefresh.onclick=function(){
   document.location.reload()
   }

