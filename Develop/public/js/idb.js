const { get } = require("mongoose");

let db;

const request = indexedDB.open('budget_tracker', 1);

//object store
request.onupgradeneeded = function(event){
    const db = event.target.result;
    db.createObjectStore('new_transaction', {autoIncrement: true});
};

//finalize connection
request.onsuccess = function(event){
    db.event.target.result;
    
    if(navigator.onLine){

    }
};

//error
request.onerror = function(event){
    console.log(event.target.errorCode);
}

function saveRecord(record) {
    const transaction = db.transaction(['new_transaction'], 'readwrite');

    const transactionObjectStore = transaction.objectStore('new_transaction')

    transactionObjectStore.add(record);
};

function uploadTransaction (){
    const transaction = db.transaction(['new_transaction'], 'readwrite');
    const transactionObjectStore = transaction.objectStore('new_transaction');
    const getAll = transactionObjectStore.getAll();
//GO OVER WITH TUTOR ==========================================
    getAll.onsuccess = function(){
        if(get.result.length > 0){
            //dont know about this one
            fetch('/api/', {
                method: 'POST',
                body: JSON.stringify(getAll.result),
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            })
            .then(response = response.json())
            .then(serverResponse => {
                if(serverResponse.message){
                    throw new Error(serverResponse);
                }
            })
        }
    }
}

