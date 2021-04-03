
state = ["FL", "TX", "NY", "CA", "CO", "NM", "Il", "VA", "NE"]

// populate the flavors dropdown at runtime when form loads/is shown
// using the flavors array
states.onshow=function(){
    // always clear before populating
    drpdnStates.clear()   
    // put array of flavors in the dropdown (called populating it)
    for (i = 0; i < state.length; i++) 
        drpdnStates.addItem(state[i])
}

drpdnStates.onclick=function(s){
// see what user clicked on in the drpBestMajor dropdown
// Notice I added 's' parameter to the function because the
// event returns the text of the chosen item. 

// this control loaded at design time

  if (typeof(s) == "object"){  // means the control was clicked 
    return                     // but no selection made yet so do nothing
  } else {                     // a selection made
    drpdnStates.value = s     // make dropdown show choice the user made
    txtaCustomer.value = (`The user chose ${s} and .selection is ${drpdnStates.selection}.`)
  }
}

let req = ""
let query = ""
let results = ""
let pw = "applicationDevelopment" 
let netID = "lsd81882"
let databaseSchema = "lsd81882" 



btnStates.onclick=function(){
    query = "SELECT name, state FROM customer"
    // Below change from my netID to yours (twice: user and database)    
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=lsd81882&pass=" + pw + "&database=lsd81882&query=" + query)

    if (req.status == 200) { //transit trip worked.        
           // see JSON results
           txtaCustomer.textContent = (`req.responseText is a JSON string that looks like this: ${req.responseText}`)
        results = JSON.parse(req.responseText)
           // see if results are correct
           txtaCustomer.value = (`The parsed JSON string is converted to a JS object (an array of arrays): ${results} where results[0] is ${results[0]}, the first array in the JS results object.`)
        
        if (results.length == query)    // no results were returned by the query
           lblMessage1.textContent = "There are no accounts in the database."
        else {        


            // Take a closer look:
            console.log(`the first row/item in the big array is a small array: ${results[0]}`)
            console.log(`to get to Paul, need results[0][1]: ${results[0][1]}`)


        // Now output the names of all the dogs into the textArea control:
        let message = ""
        for (i = 0; i < results.state; i++)
            message = message + results[i][1] + "\n"
        txtaCustomer.value = message
     } // end else

  } else   // the transit didn't work - bad wifi? server turned off?
        lblMessage1.textContent = "Error code: " + req.status
}




