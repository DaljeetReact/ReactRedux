Base Project with redux Store  with simple counter app

with redux and react-redux 

to implement store there is Folder on Root
directory


I have Feature directory in Fearture directory i files like this
<br/>
Feature<br/>
├── ActionsObjects. ->this will contain all the action functions with action type from /actionType Folder<br/>
│   └── TestObj.ts<br/>
├── InitStates ->this will contain all inlital state for store<br/>
│   └── index.ts<br/>
├── RootReducer.js this will contain all reducer as combine reducer and export it<br/>
├── Stores.           -> this will contain the store configurtion<br/>
│   └── Counterstore.ts<br/>
├── actionTypes. -> All the Actions are store in this file<br/> only<br/>
│   └── Test.ts<br/>
└── reducers     -> this will contain all the single reducer with all logic to update the state<br/> 
    └── TestReducer.ts<br/>
